import React from "react";
import blueBadge from "../assets/blue-badge.png";
import verifiedIcon from "../assets/verified-icon.png";
import loadingGif from "../assets/loading.gif";
import PaymentButton from "./PaymentButton";

const RiskFreeGuarantee = () => {
  return (
    <section className="px-6 pt-8 sm:pt-14 pb-12 md:pb-20 bg-white text-gray-900">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 sm:mb-10 leading-snug max-sm:text-xl">
        14 Days - Risk-Free{" "}
        <span className="bg-[#D2F801] px-2">Guarantee*</span>
      </h2>

      {/* P.S. Line + Badge in Flex */}
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-between mb-6 text-center md:text-left">
        <p className="font-bold text-base md:text-3xl max-sm:text-xs">
          P.S. Try The IELTS Writing Workshop Completely Risk-Free
        </p>
        <img
          src={blueBadge}
          alt="Client Review Badge"
          className="max-w-[10rem] md:max-w-[14rem] mx-auto md:mx-0 mt-4 md:mt-0"
        />
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto text-left">
        <p className="text-gray-800 leading-relaxed mb-4 max-sm:text-sm">
          I’m so confident this 3-day system will help you hit Band 8+ in
          Writing that I’m backing it with a simple promise:{" "}
          <strong>
            attend the sessions or watch the replays, do the drill sheets,
            practise with mock tests under time
          </strong>
          , and if after getting your IELTS result you don’t achieve Band 8+,
          just reach out within 14 days and I’ll refund your ₹199.
        </p>

        <p className="text-gray-800 leading-relaxed mb-4 max-sm:text-sm">
          No tricks, no hard feelings, just share the proof and we’ll make it
          right.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="text-center mt-8 md:mt-12">
        <h3 className="text-2xl md:text-3xl font-bold max-sm:text-lg">
          Today Only: ₹199
        </h3>
<p className="mt-2 text-red-600 font-semibold text-lg md:text-xl max-sm:text-sm">
  🔥 ORIGINAL: <span className="line-through">₹1,999</span> · LIMITED SEATS
</p>
        <p className="flex items-center justify-center gap-2 text-gray-950 text-base mt-3 max-sm:text-xs">
          <img src={verifiedIcon} alt="verified" className="w-4 md:w-5" />
          Live & Interactive | Secure & Safe Checkout
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-4 md:mt-8 flex flex-col items-center">
  <PaymentButton label="JOIN THE 3-DAY Band 8+ SPRINT NOW" />

  <p className="mt-4 text-sm font-semibold text-gray-800 max-sm:text-xs text-center">
   Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
  </p>
</div>


      {/* Progress bar */}
      <div className="relative mt-2 md:mt-4 flex flex-col items-center">
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-72 md:w-96"
        />
      </div>
    </section>
  );
};

export default RiskFreeGuarantee;
