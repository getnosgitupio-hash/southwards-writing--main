<?php
/**
 * verify-payment.php
 * 1. Verifies the Razorpay HMAC signature (proves payment is genuine).
 * 2. Fetches customer email from Razorpay API.
 * 3. Sends a branded HTML confirmation email with all credentials.
 * 4. Returns credentials JSON to the frontend for the success modal.
 */

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// ── Parse input ───────────────────────────────────────────────────
$input     = json_decode(file_get_contents('php://input'), true);
$paymentId = trim($input['razorpay_payment_id'] ?? '');
$orderId   = trim($input['razorpay_order_id']   ?? '');
$signature = trim($input['razorpay_signature']  ?? '');

if (!$paymentId || !$orderId || !$signature) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Missing payment fields']);
    exit;
}

// ── Step 1: Verify HMAC-SHA256 signature ─────────────────────────
// Razorpay signs: orderId + "|" + paymentId  with the Key Secret
$expectedSignature = hash_hmac('sha256', $orderId . '|' . $paymentId, RAZORPAY_KEY_SECRET);

if (!hash_equals($expectedSignature, $signature)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'error' => 'Signature mismatch — payment not verified']);
    exit;
}

// ── Step 2: Fetch customer details from Razorpay ─────────────────
$ch = curl_init("https://api.razorpay.com/v1/payments/{$paymentId}");
curl_setopt_array($ch, [
    CURLOPT_USERPWD        => RAZORPAY_KEY_ID . ':' . RAZORPAY_KEY_SECRET,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_TIMEOUT        => 15,
]);
$paymentData = json_decode(curl_exec($ch), true);
curl_close($ch);

$customerEmail = $paymentData['email']   ?? '';
$customerName  = $paymentData['contact'] ?? 'Student';  // contact = phone; name is in notes
if (!empty($paymentData['notes']['name'])) {
    $customerName = $paymentData['notes']['name'];
}

// ── Step 3: Send confirmation email ──────────────────────────────
if ($customerEmail) {
    $subject  = '🎉 Your Southwards IELTS Workshop Access – Payment Confirmed!';
    $htmlBody = buildEmailHtml($customerName, $paymentId);
    sendConfirmationEmail($customerEmail, $customerName, $subject, $htmlBody);
}

// ── Step 4: Return credentials to frontend ───────────────────────
echo json_encode([
    'success'       => true,
    'payment_id'    => $paymentId,
    'order_id'      => $orderId,
    'whatsapp_link' => WHATSAPP_GROUP_LINK,
    'workshop_link' => WORKSHOP_ACCESS_LINK,
    'login_url'     => COURSE_LOGIN_URL,
    'username'      => COURSE_USERNAME,
    'password'      => COURSE_PASSWORD,
]);

// ═════════════════════════════════════════════════════════════════
// HELPER FUNCTIONS
// ═════════════════════════════════════════════════════════════════

function sendConfirmationEmail(string $to, string $name, string $subject, string $html): void {
    // Try SMTP first; fall back to PHP mail()
    if (!sendViaSMTP($to, $name, $subject, $html)) {
        $headers  = 'From: ' . SMTP_FROM_NAME . ' <' . SMTP_USER . ">\r\n";
        $headers .= "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        mail($to, $subject, $html, $headers);
    }
}

function buildEmailHtml(string $name, string $paymentId): string {
    $whatsapp = WHATSAPP_GROUP_LINK;
    $workshop = WORKSHOP_ACCESS_LINK;
    $loginUrl = COURSE_LOGIN_URL;
    $username = COURSE_USERNAME;
    $password = COURSE_PASSWORD;

    // Use heredoc; variables interpolate normally
    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family:Arial,Helvetica,sans-serif;color:#111827;padding:32px">
  <p>Hi <strong>{$name}</strong>,</p>
  <p>Your payment has been received successfully.</p>
  <p>Payment ID: <strong>{$paymentId}</strong></p>
  <p>We will get back to you shortly with further details.</p>
  <p>– The Southwards IELTS Team</p>
</body>
</html>
HTML;
}

/**
 * Sends email via SMTP using STARTTLS (port 587).
 * No external libraries required — uses PHP's built-in stream functions.
 */
function sendViaSMTP(string $toEmail, string $toName, string $subject, string $htmlBody): bool {
    $host     = SMTP_HOST;
    $port     = SMTP_PORT;
    $user     = SMTP_USER;
    $pass     = SMTP_PASS;
    $fromName = SMTP_FROM_NAME;

    $errno = $errstr = '';

    if ($port === 465) {
        // SSL/TLS connection (port 465)
        $fp = @fsockopen("ssl://{$host}", $port, $errno, $errstr, 10);
    } else {
        // Plain TCP + STARTTLS (port 587)
        $fp = @fsockopen("tcp://{$host}", $port, $errno, $errstr, 10);
    }

    if (!$fp) return false;

    stream_set_timeout($fp, 15);

    $read = static function () use ($fp): string {
        $buf = '';
        while ($line = fgets($fp, 1024)) {
            $buf .= $line;
            if (isset($line[3]) && $line[3] === ' ') break;
        }
        return $buf;
    };

    $write = static function (string $cmd) use ($fp): void {
        fputs($fp, $cmd . "\r\n");
    };

    $read(); // server greeting

    $ehlo = 'southwardsielts.com';

    $write("EHLO {$ehlo}");
    $read();

    // Upgrade to TLS only for plain TCP connections (port 587)
    if ($port !== 465) {
        $write('STARTTLS');
        $startResp = $read();
        if (strpos($startResp, '220') === false) {
            fclose($fp);
            return false;
        }
        if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($fp);
            return false;
        }
        // Re-introduce after TLS handshake
        $write("EHLO {$ehlo}");
        $read();
    }

    // Authenticate
    $write('AUTH LOGIN');
    $read(); // 334 username prompt
    $write(base64_encode($user));
    $read(); // 334 password prompt
    $write(base64_encode($pass));
    $authResp = $read();

    if (strpos($authResp, '235') === false) {
        fclose($fp);
        return false; // Auth failed
    }

    $write("MAIL FROM:<{$user}>");
    $read();
    $write("RCPT TO:<{$toEmail}>");
    $read();
    $write('DATA');
    $read(); // 354

    // Build RFC-compliant message headers + base64-encoded HTML body
    $encodedFrom    = '=?UTF-8?B?' . base64_encode($fromName) . '?=';
    $encodedTo      = '=?UTF-8?B?' . base64_encode($toName)   . '?=';
    $encodedSubject = '=?UTF-8?B?' . base64_encode($subject)  . '?=';

    $message  = "From: {$encodedFrom} <{$user}>\r\n";
    $message .= "To: {$encodedTo} <{$toEmail}>\r\n";
    $message .= "Subject: {$encodedSubject}\r\n";
    $message .= "MIME-Version: 1.0\r\n";
    $message .= "Content-Type: text/html; charset=UTF-8\r\n";
    $message .= "Content-Transfer-Encoding: base64\r\n";
    $message .= "\r\n";
    $message .= chunk_split(base64_encode($htmlBody));

    $write($message . "\r\n.");
    $dataResp = $read();

    $write('QUIT');
    fclose($fp);

    return strpos($dataResp, '250') !== false;
}
