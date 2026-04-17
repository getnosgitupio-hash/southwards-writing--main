import React from "react";
import tickIcon from "../assets/tick.png"; // ✅ your tick image
import verifiedIcon from "../assets/verified-icon.png"; // ✅ your verification icon
import loadingGif from "../assets/loading.gif"; // ✅ your loading/progress gif

const WorkshopSchedule = () => {
  return (
    <section className="px-2 md:px-6 py-0 sm:py-12 bg-white text-gray-900">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 max-sm:text-[25px]">
        <span className="bg-[#D2F801] px-2">3-Day Workshop</span> Schedule
      </h2>

      {/* Day Cards */}
 <div className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto">
  {/* Day 1 */}
  <div className="bg-white shadow-md text-left">
    <div className="bg-[#D2F801] rounded-t-xl shadow-md px-4 py-4 border">
      <h3 className="text-sm font-bold">DAY 1</h3>
      <h4 className="text-lg font-extrabold mt-1 max-sm:text-base">
        Opinion Essay Foundation Engine
      </h4>
    </div>
    <div className="p-5">
      <ul className="space-y-2 mt-2 text-base">
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Master Task 2 opinion essays by understanding official marking criteria
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Learn what examiners expect for Band 8+ writing
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Understand ideal essay structure and argument building
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Develop strong arguments with clarity and logic
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Avoid common mistakes that keep scores below Band 8+
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Build a confident writing approach from Day 1
        </li>
      </ul>
    </div>
  </div>

  {/* Day 2 */}
  <div className="bg-white shadow-md text-left">
    <div className="bg-[#D2F801] rounded-t-xl shadow-md px-4 py-4 border">
      <h3 className="text-sm font-bold">DAY 2</h3>
      <h4 className="text-lg font-extrabold mt-1 max-sm:text-base">
        Advanced Essay Writing & Score Boosting
      </h4>
    </div>
    <div className="p-5">
      <ul className="space-y-2 mt-2 text-sm lg:text-base">
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Yesterday was clarity... today is control
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Take Task 2 writing to the next level with advanced structure
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Master idea generation under time pressure
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Write sharp and precise essays with confidence
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Maintain consistency without losing marks
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          No overthinking. No confusion. Just execution
        </li>
      </ul>
    </div>
  </div>

  {/* Day 3 */}
  <div className="bg-white shadow-md text-left ">
    <div className="bg-[#D2F801] rounded-t-xl shadow-md px-4 py-4 border">
      <h3 className="text-sm font-bold">DAY 3</h3>
      <h4 className="text-lg font-extrabold mt-1 max-sm:text-base">
        Discussion Essay Decoded
      </h4>
    </div>
    <div className="p-5">
      <ul className="space-y-2 mt-2 text-sm lg:text-base">
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Learn a simple, reliable structure for any Task 1 question
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Quickly identify key features, trends, and important details
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Use clear, varied language to describe information effectively
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
         Avoid common mistakes and understand what examiners expect
        </li>
        {/* <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Avoid common mistakes that reduce scoring potential
        </li>
        <li className="flex gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5" />
          Write with clarity, balance, and examiner-friendly logic
        </li> */}
      </ul>
    </div>
  </div>
</div>


      {/* Text section */}
      <div className="max-w-4xl mx-auto mt-8 md:mt-12 text-left">
        <h3 className="font-extrabold text-lg md:text-xl max-sm:text-base">
          Score Big Now Or <br /> Build Writing Power For Life
        </h3>
        <p className="mt-6 text-gray-800 leading-relaxed text-base md:text-lg max-sm:text-sm">
          When I first cracked <strong>Band 9</strong>, I realised Writing wasn’t about speed it was about systems...
        </p>
        <p className="mt-4 text-gray-800 leading-relaxed text-base md:text-lg max-sm:text-sm">
          Here’s the best part: this workshop gives you both options...
        </p>
      </div>

      {/* Pricing */}
      <div className="mt-8 md:mt-12 text-center">
        <h3 className="text-2xl md:text-3xl font-bold max-sm:text-lg">Today Only: ₹199</h3>
<p className="mt-2 text-red-600 font-semibold text-lg md:text-xl max-sm:text-sm">
  🔥 ORIGINAL: <span className="line-through">₹1,999</span> · LIMITED SEATS
</p>
        <p className="flex items-center justify-center gap-2 text-gray-950 text-base mt-2 max-sm:text-xs">
          <img src={verifiedIcon} alt="verified" className="w-5 max-sm:w-4" />
          Live & Interactive | Secure & Safe Checkout
        </p>
      </div>

      {/* CTA Button */}
      <div className="mt-8 flex flex-col items-center">
  <a
    href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="group relative overflow-hidden bg-[#D2F801] px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-sm max-sm:px-6 max-sm:py-3">
      JOIN THE 3-DAY Band 8+ SPRINT NOW
      <span
        aria-hidden="true"
        className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
      />
    </button>
  </a>

  <p className="mt-4 text-sm font-semibold text-gray-800 max-sm:text-xs text-center">
    Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
  </p>
</div>


      {/* Progress bar */}
      <div className="relative mt-0 md:mt-2 flex flex-col items-center">
        <img src={loadingGif} alt="Loading progress" className="w-60 md:w-96 max-sm:w-72" />
      </div>
    </section>
  );
};

export default WorkshopSchedule;
