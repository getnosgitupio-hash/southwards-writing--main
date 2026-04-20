// Centralised Facebook Pixel event helpers
// FB Pixel ID is set via VITE_FB_PIXEL_ID env variable, initialised in index.html

const fbq = (...args) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq(...args);
  }
};

// Fired on page load — already called in index.html, but can be called again
export const trackPageView = () => fbq('track', 'PageView');

// Fired once when page loads — shows user viewed the offer
export const trackViewContent = () =>
  fbq('track', 'ViewContent', {
    content_name: '3-Day IELTS Writing Workshop',
    content_category: 'Education',
    value: 199,
    currency: 'INR',
    content_ids: ['writing-workshop-199'],
    content_type: 'product',
  });

// Fired when the user clicks the payment button
export const trackInitiateCheckout = () =>
  fbq('track', 'InitiateCheckout', {
    value: 199,
    currency: 'INR',
    num_items: 1,
    content_ids: ['writing-workshop-199'],
    content_type: 'product',
  });

// Fired when Razorpay modal opens (user is filling in card/UPI details)
export const trackAddPaymentInfo = () =>
  fbq('track', 'AddPaymentInfo', {
    value: 199,
    currency: 'INR',
    content_ids: ['writing-workshop-199'],
    content_type: 'product',
  });

// Fired after payment is verified server-side — the conversion event
export const trackPurchase = (orderId) =>
  fbq('track', 'Purchase', {
    value: 199,
    currency: 'INR',
    content_name: '3-Day IELTS Writing Workshop',
    content_ids: [orderId || 'writing-workshop-199'],
    content_type: 'product',
    num_items: 1,
  });
