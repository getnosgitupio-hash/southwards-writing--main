// ================================================================
// FILL IN YOUR DETAILS BELOW BEFORE DEPLOYING
// ================================================================

// Razorpay Key ID (public - safe to expose in frontend)
// Get this from: https://dashboard.razorpay.com/app/keys
export const RAZORPAY_KEY_ID = 'rzp_live_SeaNWTnc7uuvsP';

// API base URL — must match where api/ folder is deployed on your server
// On GoDaddy cPanel with site at /writing-southwards/, this is correct:
export const API_BASE_URL = '/api';

export const WORKSHOP = {
  name: '3-Day IELTS Writing Workshop',
  description: 'Band 8+ Writing Sprint | Southwards IELTS',
  amount: 199,      // display amount in ₹
  amountPaise: 19900, // amount in paise (₹199 × 100)
  currency: 'INR',
};
