export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', process.env.ALLOWED_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const receipt = `rcpt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

  const response = await fetch('https://api.razorpay.com/v1/orders', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}`
        ).toString('base64'),
    },
    body: JSON.stringify({
      amount: 19900,
      currency: 'INR',
      receipt,
      payment_capture: 1,
    }),
  });

  const data = await response.json();

  if (!response.ok)
    return res.status(502).json({ error: 'Razorpay order creation failed', details: data });

  return res.status(200).json(data);
}
