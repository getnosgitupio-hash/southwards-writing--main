import React from "react";
import { FaStar } from "react-icons/fa";
import QuoteIcon from "../assets/quotes.png"; // adjust path

const Testimonials = () => {
  return (
    <section className="bg-[#1862E3] px-4 sm:px-6 py-8 sm:py-16">
      {/* Heading */}
      <h2 className="text-[25px] md:text-4xl font-extrabold text-center text-white mb-10 sm:mb-12 leading-snug max-w-3xl mx-auto">
         Saying{" "}
        <span className="bg-[#D2F801] font-extrabold text-black px-1">
          About Our Fast,
        </span>{" "}
        Simple Way To Crack IELTS Writing
      </h2>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {/* Testimonial 1 */}
        <div className="bg-[#FFF3D1] rounded-xl p-5 sm:p-6 relative shadow">
          {/* Quote circle */}
          <div className="absolute -top-5 left-5 sm:-top-6 sm:left-6 bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md">
            <img src={QuoteIcon} alt="Quote" className="w-6 h-5 sm:w-8 sm:h-6" />
          </div>
          {/* Text */}
          <p className="text-gray-900 mt-6 mb-4 text-sm sm:text-base leading-relaxed">
            “I was stuck at Band 6 for sooo long... honestly thought IELTS
            Writing is not for me. Day 1 itself cleared my T/F/NG mess… next
            attempt I hit 8.5. Still can’t believe.”
          </p>
          {/* Stars */}
          <div className="flex text-yellow-500 mb-3 text-sm sm:text-base">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          {/* Name */}
          <p className="font-bold text-gray-900 text-sm sm:text-base">
            Anita R., Hyderabad
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-[#FFF3D1] rounded-xl p-5 sm:p-6 relative shadow">
          <div className="absolute -top-5 left-5 sm:-top-6 sm:left-6 bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md">
            <img src={QuoteIcon} alt="Quote" className="w-6 h-5 sm:w-8 sm:h-6" />
          </div>
          <p className="text-gray-900 mt-6 mb-4 text-sm sm:text-base leading-relaxed">
            “Never once finished Writing on time and always left 4 to 5
            questions blank. After the workshop, phew! I had 6 mins extra.
            Headings finally made sense.”
          </p>
          <div className="flex text-yellow-500 mb-3 text-sm sm:text-base">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <p className="font-bold text-gray-900 text-sm sm:text-base">
            Priya S., New Delhi
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-[#FFF3D1] rounded-xl p-5 sm:p-6 relative shadow">
          <div className="absolute -top-5 left-5 sm:-top-6 sm:left-6 bg-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shadow-md">
            <img src={QuoteIcon} alt="Quote" className="w-6 h-5 sm:w-8 sm:h-6" />
          </div>
          <p className="text-gray-900 mt-6 mb-4 text-sm sm:text-base leading-relaxed">
            “NOT GIVEN vs FALSE was always my nightmare. After this it became so
            clear... I jumped from 6.5 to 8.5.”
          </p>
          <div className="flex text-yellow-500 mb-3 text-sm sm:text-base">
            {Array(5)
              .fill()
              .map((_, i) => (
                <FaStar key={i} />
              ))}
          </div>
          <p className="font-bold text-gray-900 text-sm sm:text-base">
            Mohammed U., Bengaluru
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
