import React from "react";
import background from "../assets/background.png";
import person from "../assets/person.png";
import badge from "../assets/badge.png"; 
import loadingGif from "../assets/loading.gif";

const Band9ScorerSection = () => {
  const data = [
  ["True/False/Not Given", "Guess answers, overthink, miss traps", "Decode statements logically, spot traps instantly"],
  ["Matching Headings", "Read every word, choose headings randomly", "Identify main idea in seconds, eliminate wrong options"],
  ["Matching Information", "Hunt randomly, panic, reread endlessly", "Map information smartly, connect scattered details"],
  ["Time Management", "Waste time on tricky questions", "Allocate time strategically, answer all confidently"],
  ["Accuracy", "Lose marks on subtle traps", "Almost no mistakes, answer confidently"],
  ["Mindset", "Stress, panic, self-doubt", "Calm, focused, think like an examiner"],
];


  return (
    <section
      className="relative text-white pt-16 pb-16 md:pb-16 px-2 md:px-12 lg:px-20"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}
    >
      {/* Heading */}
      <h2 className="text-[22px] md:text-4xl font-bold text-center mb-10">
        Band 9 Scorer vs You : The Truth
      </h2>

      {/* Desktop Table */}
      <div className="overflow-x-auto justify-center hidden md:flex">
        <table className="border border-white/40 text-sm md:text-base min-w-[700px]">
          <thead>
            <tr>
              <th className="border border-white/40 px-4 py-5">Task</th>
              <th className="border border-white/40 px-4 py-5">What Band 9 Scorers Do</th>
              <th className="border border-white/40 text-[#D2F801] px-4 py-5">
                What Band 9 Scorers Do
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map(([task, you, band9], idx) => (
              <tr key={idx}>
                <td className="border border-white/40 px-4 py-5">{task}</td>
                <td className="border border-white/40 px-4 py-5">{you}</td>
                <td className="border border-white/40 px-4 py-5 text-[#D2F801]">
                  {band9}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
  {/* Mobile Cards */}
<div className="block md:hidden space-y-6">
  {data.map(([task, you, band9], idx) => (
    <div
      key={idx}
      className="border border-white/40 rounded-lg p-4 bg-white/10 backdrop-blur"
    >
      {/* Task */}
      <h3 className="text-lg font-bold text-[#D2F801] mb-4">{task}</h3>

      {/* "You" Section */}
      <div className="mb-3">
        <p className="text-xs uppercase text-gray-300 font-semibold">
          What You Usually Do
        </p>
        <p className="text-sm">{you}</p>
      </div>

      {/* "Band 9" Section */}
      <div>
        <p className="text-xs uppercase text-[#D2F801] font-semibold">
          What Band 9 Scorers Do
        </p>
        <p className="text-sm">{band9}</p>
      </div>
    </div>
  ))}
</div>


      {/* Subtext */}
      <p className="text-center text-sm md:text-2xl mt-8 max-w-4xl mx-auto">
        “Stop doing what everyone else does.{" "}
        <span className="text-[#D2F801] font-semibold">
          Start doing what Band 9 scorers do
        </span>{" "}
        <br className="block" />
        and watch your Writing score skyrocket in just 3 days!”
      </p>

      {/* Offer Section */}
      <div className="text-center mt-10">
        <h3 className="text-xl md:text-4xl font-bold">Today Only: ₹199</h3>
<p className="mt-2 text-red-600 font-semibold text-lg md:text-xl max-sm:text-sm">
  🔥 ORIGINAL: <span className="line-through">₹1,999</span> · LIMITED SEATS
</p>
        <p className="text-gray-300 text-sm mt-4">
          ✅ Live & Interactive | Secure & Safe Checkout
        </p>
      </div>

      {/* CTA Button */}
    <div className="text-center mt-6">
  <a
    href="https://www.instamojo.com/@gbuguidi85/lb606e7b7c5ff4015958944d0470d2c2f/"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block"
  >
    <button className="group relative overflow-hidden text-black bg-[#D2F801] px-8 py-6 rounded-2xl font-extrabold text-3xl max-sm:text-sm max-sm:px-4 max-sm:py-3">
      START YOUR Band 8+ Writing SPRINT TODAY
      <span
        aria-hidden="true"
        className="absolute inset-[-100%] -left-[30%] bg-gradient-to-r from-transparent via-white/100 to-transparent [clip-path:polygon(10%_0%,40%_0%,30%_100%,0%_100%)] transform -translate-x-[390%] rotate-[8deg] blur-sm group-hover:animate-slash-sweep"
      />
    </button>
  </a>

  <p className="mt-4 text-sm font-semibold text-white max-sm:text-xs">
    Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
  </p>
</div>


      {/* Progress bar + Images */}
      <div className="relative mt-0 md:mt-6 flex flex-col items-center">
        {/* Progress bar */}
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-[30rem] max-sm:w-72 md:w-96"
        />

        {/* Badge image */}
        <img
          src={badge}
          alt="Badge"
          className="absolute -bottom-36 md:-bottom-40 w-32 md:w-40"
        />

 {/* Person image (only visible on md and above) */}
<img
  src={person}
  alt="Person"
  className="hidden md:block absolute md:-bottom-16 md:-right-20 w-[22rem]"
/>

      </div>
    </section>
  );
};

export default Band9ScorerSection;
