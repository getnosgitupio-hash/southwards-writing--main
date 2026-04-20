import React from 'react';

export default function SuccessModal({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 overflow-y-auto">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl relative my-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-3">🎉</div>
          <h2 className="text-2xl font-extrabold text-gray-900">Payment Successful!</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Welcome to the 3-Day IELTS Writing Workshop
          </p>
        </div>

        {/* Email notice */}
        <div className="bg-[#D2F801] rounded-xl p-4 mb-4">
          <p className="font-bold text-sm">📧 Check your email!</p>
          <p className="text-sm mt-1">
            All credentials have been sent to your registered email address.
            Check your spam/promotions folder if you don't see it.
          </p>
        </div>

        {/* WhatsApp Group */}
        <div className="border border-gray-200 rounded-xl p-4 mb-3">
          <p className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">
            Step 1 — Join WhatsApp Group
          </p>
          <a
            href={data?.whatsapp_link || 'https://chat.whatsapp.com/H59q5iLfzgSKG1FJ4WtqMR'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-green-600 transition-colors"
          >
            Join WhatsApp Group →
          </a>
        </div>

        {/* Workshop Access */}
        <div className="border border-gray-200 rounded-xl p-4 mb-3">
          <p className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">
            Step 2 — Workshop Access (Live Zoom)
          </p>
          <a
            href={data?.workshop_link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-blue-700 transition-colors"
          >
            Access Workshop →
          </a>
          <p className="mt-2 text-xs text-gray-500">
            Live on Zoom | May 11th – 13th, 2026 | 8 PM – 10 PM IST
          </p>
        </div>

        {/* Login Credentials */}
        <div className="border border-gray-200 rounded-xl p-4 mb-6">
          <p className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2">
            Step 3 — Course Login Credentials
          </p>
          <div className="bg-gray-50 rounded-lg p-3 text-sm font-mono space-y-1.5">
            <p>
              <span className="text-gray-500">URL: </span>
              <a
                href={data?.login_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {data?.login_url}
              </a>
            </p>
            <p>
              <span className="text-gray-500">Username: </span>
              <span className="font-bold text-gray-900">{data?.username}</span>
            </p>
            <p>
              <span className="text-gray-500">Password: </span>
              <span className="font-bold text-gray-900">{data?.password}</span>
            </p>
          </div>
        </div>

        {/* Payment reference */}
        <p className="text-center text-xs text-gray-400 mb-4">
          Payment ID: {data?.payment_id}
        </p>

        <button
          onClick={onClose}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors text-sm"
        >
          Got it, close this
        </button>
      </div>
    </div>
  );
}
