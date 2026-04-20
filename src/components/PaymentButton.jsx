import { useState } from 'react';
import { RAZORPAY_KEY_ID, API_BASE_URL, WORKSHOP } from '../config';
import {
  trackInitiateCheckout,
  trackAddPaymentInfo,
  trackPurchase,
} from '../utils/fbEvents';
import SuccessModal from './SuccessModal';

// Dynamically loads the Razorpay checkout.js script
function loadRazorpayScript() {
  return new Promise((resolve) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

/**
 * Drop-in replacement for the Instamojo CTA buttons.
 * Accepts the same visual label and className as the old buttons.
 */
export default function PaymentButton({
  label = 'JOIN THE 3-DAY Band 8+ SPRINT NOW',
  className = '',
}) {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [purchaseData, setPurchaseData] = useState(null);

  const handlePayment = async () => {
    // ── FB Event 1: user clicked the pay button ────────────────────
    trackInitiateCheckout();
    setLoading(true);

    try {
      // Ensure Razorpay SDK is available
      const sdkLoaded = await loadRazorpayScript();
      if (!sdkLoaded) {
        alert('Payment gateway failed to load. Please check your internet connection and try again.');
        setLoading(false);
        return;
      }

      // ── Step 1: Create order on backend ───────────────────────────
      const orderRes = await fetch(`${API_BASE_URL}/create-order.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: WORKSHOP.amountPaise }),
      });

      if (!orderRes.ok) throw new Error('Order creation request failed');

      const order = await orderRes.json();
      if (!order.id) throw new Error(order.error || 'Invalid order response from server');

      // ── FB Event 2: Razorpay modal is about to open ───────────────
      trackAddPaymentInfo();

      // ── Step 2: Open Razorpay checkout ────────────────────────────
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Southwards IELTS',
        description: WORKSHOP.description,
        order_id: order.id,

        handler: async (response) => {
          // response = { razorpay_payment_id, razorpay_order_id, razorpay_signature }
          // ── FB Event 3: Fire Purchase IMMEDIATELY ──────────────────
          // Razorpay only calls this handler on genuine successful payment.
          // Fire here before any async work so it is NEVER missed, even if
          // the verify network call below fails or the user closes the tab.
          trackPurchase(order.id);

          try {
            // ── Step 3: Verify payment + send email on backend ────────
            const verifyRes = await fetch(`${API_BASE_URL}/verify-payment.php`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            });

            const result = await verifyRes.json();

            if (result.success) {
              setPurchaseData(result);
              setShowSuccess(true);
            } else {
              alert(
                `Payment received but verification failed.\n\nPlease save your Payment ID:\n${response.razorpay_payment_id}\n\nContact support and we'll sort it out.`
              );
            }
          } catch {
            alert(
              `Payment received! Please save your Payment ID:\n${response.razorpay_payment_id}\n\nContact support to get your access.`
            );
          }
          setLoading(false);
        },

        prefill: {
          // Pre-fill is optional; Razorpay form collects name/email/phone
        },

        theme: { color: '#D2F801' },

        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on('payment.failed', () => {
        setLoading(false);
        alert('Payment failed. Please try again or use a different payment method.');
      });

      rzp.open();
    } catch (err) {
      console.error('Payment error:', err);
      alert('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handlePayment}
        disabled={loading}
        className={`group relative overflow-hidden bg-[#D2F801] px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-sm max-sm:px-4 max-sm:py-3 disabled:opacity-70 disabled:cursor-not-allowed uppercase ${className}`}
      >
        {loading ? 'Processing...' : label}
        {!loading && (
          <span
            aria-hidden="true"
            className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
          />
        )}
      </button>

      {showSuccess && (
        <SuccessModal data={purchaseData} onClose={() => setShowSuccess(false)} />
      )}
    </>
  );
}
