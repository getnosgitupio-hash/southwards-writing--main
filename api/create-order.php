<?php
/**
 * create-order.php
 * Creates a Razorpay order and returns the order JSON.
 * Called by the React frontend before opening the Razorpay modal.
 */

require_once __DIR__ . '/config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Unique receipt ID for this order
$receipt = 'rcpt_' . time() . '_' . substr(md5(uniqid('', true)), 0, 6);

$orderPayload = json_encode([
    'amount'          => 19900,   // ₹199 in paise
    'currency'        => 'INR',
    'receipt'         => $receipt,
    'payment_capture' => 1,       // auto-capture on payment
]);

$ch = curl_init('https://api.razorpay.com/v1/orders');
curl_setopt_array($ch, [
    CURLOPT_USERPWD        => RAZORPAY_KEY_ID . ':' . RAZORPAY_KEY_SECRET,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $orderPayload,
    CURLOPT_HTTPHEADER     => ['Content-Type: application/json'],
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_TIMEOUT        => 30,
]);

$response  = curl_exec($ch);
$httpCode  = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError) {
    http_response_code(500);
    echo json_encode(['error' => 'cURL error: ' . $curlError]);
    exit;
}

if ($httpCode !== 200) {
    http_response_code(502);
    $details = json_decode($response, true);
    echo json_encode([
        'error'   => 'Razorpay order creation failed',
        'details' => $details,
    ]);
    exit;
}

// Forward the Razorpay order JSON directly to the frontend
echo $response;
