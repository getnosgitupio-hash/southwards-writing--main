import React from "react";
import logo from "../assets/logo.png"; // 👈 replace with your logo path

const PromoBanner = () => {
  return (
    <div className="w-full">
      {/* Top blue strip */}
      <div className="bg-blue-600 text-white text-center py-3 text-[8px] md:text-base font-medium px-0 sm:px-2">
        🔥 Limited Offer: Today Only ₹199 | Live on Zoom | Mar 23rd - 25th, 2026 | 8 PM to 10 PM IST🔥
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#fdfcf8] px-4 md:px-6 pt-4 md:pt-5 pb-4 md:pb-5 gap-4 md:gap-0">
        {/* Logo (left) */}
        <div className="flex items-center gap-2 md:pl-10">
          <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Centered pill banner */}
        <div className="w-full md:flex-1 flex justify-center">
          <div className="flex items-center justify-center gap-2 bg-black text-white rounded-full px-4 md:px-6 py-2 text-center max-w-full">
            {/* Red pulsing dot */}
            <span className="relative flex h-4 w-4 md:h-6 md:w-6 shrink-0">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 md:h-6 md:w-6 bg-red-600"></span>
            </span>

            {/* Text */}
            <p className="text-[10px] sm:text-sm md:text-base font-medium leading-snug">
              Last chance to join the proven 3-Day IELTS Writing System – Band 8+ guaranteed. ₹199 | Only 23 seats left!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
