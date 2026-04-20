import arrowLeft from "../assets/arrow-left.png";
import verifiedIcon from "../assets/verified-icon.png";
import bgImage from "../assets/bg.png";
import loadingGif from "../assets/loading.gif";
import "../App.css";
import Heroimage from "../assets/hero-new.png";
import PaymentButton from "./PaymentButton";

const WorkshopLanding = () => {
  return (
    <div
      className="px-0 md:px-6 pt-0 md:pt-3 pb-8 text-center relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
<div className="max-w-6xl mx-auto p-2 md:p-6 rounded-lg">
  <h2 className="text-4xl md:text-[48px] font-extrabold leading-10 md:leading-snug max-sm:text-[23px]">

    {/* Desktop */}
    <span className="hidden sm:inline">
      Are You Looking to{" "}
      <span className="bg-[#D2F801] px-1 font-extrabold">
        Score Band 8+ in Writing
      </span>{" "}
      & Finally Get Your{" "}
      <span className="bg-[#D2F801] px-1 font-extrabold">  Visa in 2026?</span>{" "}
     
    </span>

    {/* Mobile */}
    <span className="sm:hidden block">
      Are You Looking to Score <br />

      <span className="bg-[#D2F801] px-1 font-extrabold">
        Band 8+ in Writing
      </span>{" "}
      & Finally Get <br />

      Your{" "}
      <span className="bg-[#D2F801] px-1 font-extrabold">
 Visa in 2026?      </span>{" "}
    </span>

  </h2>

  <p className="text-gray-700 max-w-4xl mx-auto text-2xl mt-4 max-sm:text-[16px]">
In just <b>3 days,</b> I’ll show you the <strong>exact system Band 8+ scorers use to write high-scoring essays — clear, structured, and examiner-approved.</strong> </p>
</div>

      {/* Video Section */}
      <div className="relative mt-10 max-w-3xl mx-auto max-sm:px-2">
        {/* Left Arrow + Tag (HIDE on mobile) */}
        <img
          src={arrowLeft}
          alt="arrow left"
          className="absolute -left-12 top-10 w-28 z-10 hidden md:block"
        />
        {/* <span className="absolute bottom-20 -left-28 bg-[#D2F801] font-medium text-lg text-left px-3 py-2 rounded z-10 hidden md:block">
          LED BY <br />{" "}
          <h3 className="font-extrabold text-3xl">CA GANESH BUGUIDI</h3>
        </span> */}
        <span className="absolute bottom-80 -left-48 text-xl font-medium hidden md:block">
          Beginner-friendly
        </span>

        {/* Video Embed */}
       <div className="rounded-lg overflow-hidden shadow-lg">
        <img alt="Workshop Banner" className="w-full h-auto" src={Heroimage} />
        </div>

        {/* Right Arrow + Tags (HIDE on mobile) */}
        {/* <img
          src={arrowRight}
          alt="arrow right"
          className="absolute right-[7.4rem] -bottom-[17%] w-24 hidden md:block"
        /> */}
        <span className="absolute top-24 -right-10 bg-[#D2F801] font-normal text-xl px-3 py-2 rounded hidden md:block">
          TRAINED <strong className="font-extrabold">THOUSANDS</strong> <br />{" "}
          ACROSS INDIA
        </span>
        {/* <span className="absolute -bottom-20 -right-4 text-xl font-medium hidden md:block">
          Beginner-friendly
        </span> */}
      </div>

      {/* Pricing Section */}
      <div className="mt-4 md:mt-12 bg-white/80 p-6 lg:p-2 rounded-lg max-w-lg mx-auto max-sm:p-3">
        <h3 className="text-4xl font-bold max-sm:text-lg">
          Today Only: <span className="text-black text-4xl max-sm:text-lg">₹199</span>
        </h3>
<p className="mt-2 text-red-600 font-semibold text-lg md:text-xl max-sm:text-sm">
  🔥 ORIGINAL: <span className="line-through">₹1,999</span> · LIMITED SEATS
</p>
        <div className="max-w-7xl mx-auto flex items-center justify-center px-4 sm:px-6 py-2 lg:py-5">
        <div className="hidden sm:flex items-center gap-6 text-md text-black/80">
          <span>⭐ 4.9/5 Rating</span>
          <span>👥 10k+ Students</span>
        </div>
      </div>
      </div>

      {/* CTA Button */}
      <PaymentButton label="JOIN THE 3-DAY Writing WORKSHOP" />

<p className="mt-4 text-center text-sm font-semibold text-gray-700">
  Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
</p>


      {/* Progress Bar */}
      <div className="relative mt-0 flex flex-col items-center">
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-60 md:w-96 max-sm:w-72"
        />
      </div>
    </div>
  );
};

export default WorkshopLanding;
