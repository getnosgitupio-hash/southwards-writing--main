import crypto from 'crypto';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature)
    return res.status(400).json({ success: false, error: 'Missing payment fields' });

  // Verify HMAC signature
  const expectedSignature = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest('hex');

  if (expectedSignature !== razorpay_signature)
    return res.status(400).json({ success: false, error: 'Signature mismatch' });

  // Fetch customer details from Razorpay
  const paymentRes = await fetch(
    `https://api.razorpay.com/v1/payments/${razorpay_payment_id}`,
    {
      headers: {
        Authorization:
          'Basic ' +
          Buffer.from(
            `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
          ).toString('base64'),
      },
    }
  );
  const paymentData = await paymentRes.json();

  const customerEmail = paymentData.email || '';
  const customerName = paymentData.notes?.name || paymentData.contact || 'Student';

  // Send confirmation email
  if (customerEmail) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_USER}>`,
      to: customerEmail,
      subject: 'Registration Confirmed – 3-Day IELTS Writing Workshop (11–13 May 2026)',
      html: `
        <p>Dear ${customerName},</p>

        <p>Thank you for registering for my 3-Day IELTS Writing Workshop, scheduled from 11th to 13th May 2026.</p>

        <p>I'm pleased to confirm your spot!</p>

        <p><strong>Workshop Details:</strong><br>
        Dates: 11–13 May 2026<br>
        Duration: 3 days<br>
        Mode: Live on Zoom<br>
        Timings: 8–10 PM</p>

        <p>During the workshop, you'll receive focused guidance on Task 1 and Task 2 writing, strategies to improve coherence and grammar, and personalized feedback to help you boost your band score.</p>

        <p>To stay updated and access important announcements, materials, and support, please join the WhatsApp community using the link below:</p>

        <p>👉 <a href="${process.env.WHATSAPP_GROUP_LINK}">${process.env.WHATSAPP_GROUP_LINK}</a></p>

        <p>If you have any questions before the workshop begins, feel free to reply to this email.</p>

        <p>I look forward to helping you achieve your IELTS goals!</p>

        <p>Warm regards,<br>
        <strong>CA Ganesh</strong><br>
        Founder, Southwards IELTS<br>
        9619460734</p>
      `,
    });
  }

  return res.status(200).json({
    success: true,
    payment_id: razorpay_payment_id,
    order_id: razorpay_order_id,
    whatsapp_link: process.env.WHATSAPP_GROUP_LINK,
    workshop_link: process.env.WORKSHOP_ACCESS_LINK,
    login_url: process.env.COURSE_LOGIN_URL,
    username: process.env.COURSE_USERNAME,
    password: process.env.COURSE_PASSWORD,
  });
}
