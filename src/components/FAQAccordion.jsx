import { useState } from "react";

const faqs = [
  {
    question: "Is this for beginners or repeat test-takers?",
    answer:
      "Short answer, both. We start from first principles, then layer Band 8+ tactics. If you're stuck at 6 to 6.5, this is built to break that ceiling.",
  },
  {
    question: "Will this help if my exam is in 1–2 weeks?",
    answer:
      "Yes, the system is designed for fast improvement with focused drills.",
  },
  {
    question: "Academic or General Training?",
    answer:
      "The strategies apply to both formats with slight variations explained.",
  },
  {
    question: "What exactly do you cover in 3 days?",
    answer:
      "Writing strategies, writing frameworks, and timed practice drills.",
  },
  {
    question: "Do I need to write super fast?",
    answer:
      "No - we focus on smart Writing, not speed alone.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "You’ll get full recordings to watch anytime.",
  },
  {
    question: "How soon will I see improvement?",
    answer:
      "Most students notice clarity within the first 1–2 days.",
  },
  {
    question: "Is there personal doubt-clearing?",
    answer:
      "Yes, dedicated time is allocated for Q&A.",
  },
  {
    question: "What if it’s not for me?",
    answer:
      "We have a fair refund policy if expectations aren’t met.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
      {/* Heading */}
      <h2 className="text-[25px] md:text-4xl font-bold text-center mb-6 sm:mb-8 leading-snug">
        Need To Know More? Here Are The Questions We Get Asked The Most…
      </h2>

      {/* FAQ Items */}
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg overflow-hidden shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-3 sm:px-4 py-3 sm:py-4 text-left font-medium text-sm sm:text-base hover:bg-gray-50"
            >
              {faq.question}
              <span className="ml-2 text-lg sm:text-xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                className="px-3 sm:px-4 py-2 sm:py-3 text-gray-700 text-sm sm:text-base whitespace-pre-line"
                style={{ fontFamily: "Onest Regular" }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
