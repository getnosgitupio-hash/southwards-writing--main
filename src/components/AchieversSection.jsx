import arrowDown from "../assets/arrow-down-sec.png";
import loadingGif from "../assets/loading.gif";
import studentsImage from "../assets/students.png";
import PaymentButton from "./PaymentButton";

const AchieversSection = () => {
  return (
    <div className="px-4 md:px-6 py-8 md:py-12 text-center mb-6">
      {/* Heading */}
      <h2 className="text-2xl md:text-5xl font-extrabold leading-[40px] max-w-xl mx-auto max-sm:text-[25px]">
        Our Growing Community Of{" "}
        <span className="bg-[#D2F801] px-1">IELTS Achievers</span>
        
      </h2>
        <span className="block text-black text-center font-normal mt-6 text-sm md:text-lg max-sm:text-xs">
    Thousands of learners across India and abroad have used this system to improve their <br className="hidden md:block" /> Writing performance.!
  </span>

      {/* Students Image */}
      <div className="relative mt-8 md:mt-16 max-w-5xl mx-auto">
        <img
          src={studentsImage}
          alt="IELTS Achievers"
          className="w-full rounded-lg"
        />
      </div>

      {/* Blue Banner */}
      <div className="mt-0 bg-blue-600 text-white py-4 px-0 md:px-6 rounded-lg max-w-3xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold max-sm:text-base">
          Typical Jump: +1.5 to +2.5 Bands
        </h3>
        <p className="text-base md:text-sm font-medium mt-1 max-sm:text-xs">
          Fast improvements with decoding, mapping & time-boxing.
        </p>
      </div>

      {/* Pricing Section */}
      <div className="mt-0 md:mt-8">
        <h3 className="text-2xl md:text-3xl font-bold inline-flex items-center justify-center max-sm:text-lg">
          <span>Today Only: ₹199</span>
          <img
            src={arrowDown}
            alt="arrow down"
            className="w-6 md:w-24 relative -top-6 md:-top-12 max-sm:w-10 max-sm:-top-3"
          />
        </h3>

  <p className="mt-2 text-red-600 font-semibold text-lg md:text-xl max-sm:text-sm">
  🔥 ORIGINAL: <span className="line-through">₹1,999</span> · LIMITED SEATS
</p>
        <p className="mt-2 text-gray-800 flex items-center justify-center gap-2 text-sm max-sm:text-xs">
          <span className="text-green-600">✔</span> Live & Interactive | Secure
          & Safe Checkout
        </p>
      </div>

      {/* CTA Button */}
   <div className="mt-6 text-center">
  <PaymentButton label="START YOUR Band 8+ WRITING SPRINT TODAY" className="max-sm:text-xs max-sm:px-6 max-sm:py-3" />

  <p className="mt-4  text-sm font-semibold text-gray-800 max-sm:text-xs">
    Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
  </p>
</div>


      {/* Progress bar / loading gif */}
      <div className="relative mt-0 md:mt-2 flex flex-col items-center">
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-60 md:w-96 max-sm:w-72"
        />
      </div>
    </div>
  );
};

export default AchieversSection;
