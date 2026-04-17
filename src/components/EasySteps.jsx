import React from "react";

import Review1 from "../assets/review1.webp";
import Review2 from "../assets/review2.webp";
import Review3 from "../assets/review3.webp";
import Review4 from "../assets/review4.webp";
import Review5 from "../assets/review5.webp";
import Review6 from "../assets/review6.webp";
import Review7 from "../assets/review7.webp";
import Review8 from "../assets/review8.webp";

const reviews = [
  Review1,
  Review2,
  Review3,
  Review4,
  Review5,
  Review6,
  Review7,
  Review8,
];

export default function ReviewScreenshotsSection() {
  return (
    <section className="bg-[#1862E3] py-8 sm:py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <h2 className="text-center text-[25px] sm:text-4xl font-extrabold text-white pb-8 sm:pb-12">
          See What India’s Saying <span className="bg-[#D2F801] text-black">About Our Simple</span><br className="hidden sm:block" /> & Practical Writing System
        </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

  {reviews.map((img, i) => (
    <div
      key={i}
      className="w-full aspect-[4/5] bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center p-2"
    >
      <img
        src={img}
        alt={`review-${i}`}
        className="w-full h-full object-contain"
      />
    </div>
  ))}

</div>

      </div>
    </section>
  );
}
