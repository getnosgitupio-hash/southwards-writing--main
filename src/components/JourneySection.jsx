import tickIcon from "../assets/tick.png";
import privacyIcon from "../assets/verified-icon.png";
import loadingGif from "../assets/loading.gif";
import PaymentButton from "./PaymentButton";

const JourneySection = () => {
  return (
    <section className="px-4 md:px-6 py-8 md:py-8 max-w-4xl mx-auto text-left">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center leading-snug md:leading-[45px] max-sm:text-[25px]">
        <span className="bg-[#D2F801] px-1 py-0">My Personal Journey</span>
        <br />
        From Struggling to
        <br />
        Band 8+ in IELTS Writing
      </h2>

      {/* Story text */}
      <div className="mt-4 md:mt-8 space-y-4 text-gray-900 text-lg leading-relaxed max-sm:text-sm">
        <p>
          I know exactly how frustrating IELTS Writing can feel.
        </p>
        <p>
          When I first prepared for IELTS, I believed Writing was just about
          knowing good English.
        </p>
        <p>
          I used to write long essays hoping the examiner would be impressed.
          Sometimes I memorised templates and tried to fit them into every
          question.
        </p>
        <p>
          Opinion Essays?
        </p>
        <p>My ideas were there... but structure was missing.</p>
        <p>Task 1 reports?</p>
        <p>
          I described everything I saw, without knowing what actually mattered.
        </p>
        <p>Time management?</p>
        <p>
          I often rushed the second task or left conclusions weak.
        </p>
        <p>
          My Writing scores never reflected my real ability. I felt stuck,
          confused, and disappointed.
        </p>
        <p>
          Then I decided to change my approach. I studied examiner reports.
          Analysed hundreds of real Writing passages and question types. Observed how high scorers
          structured their answers.
        </p>
      </div>

      {/* Highlighted benefits with green ticks */}
      <div className="mt-8 space-y-3">
        <div className="flex items-start gap-2">
          <img src={privacyIcon} alt="info" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            Why most students lose marks in Task Response
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={privacyIcon} alt="info" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            How Band 8+ writers organise ideas logically
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={privacyIcon} alt="info" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            How they write clear overviews in Task 1
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={privacyIcon} alt="info" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            How they complete both tasks without panic
          </span>
        </div>

        <h6>
          After months of testing and refining, I built a simple 3-Day Writing
          System.
        </h6>
        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            Essays became structured and easy to evaluate
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            Idea development became natural
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            Task 1 reports became faster and clearer
          </span>
        </div>

        <div className="flex items-start gap-2">
          <img src={tickIcon} alt="tick" className="w-5 h-5 max-sm:w-4 max-sm:h-4" />
          <span className="bg-[#EED9BD] px-1 font-bold max-sm:text-xs">
            I finally completed Writing within time
          </span>
        </div>
      </div>

      {/* Result text */}
      <p className="mt-6 text-lg text-gray-900 text-center font-bold max-sm:text-sm">
        My Writing score improved significantly.
        <br />
        Since then, I’ve helped Thousands of aspirants move from Band 5–6 to
        Band 8+.
      </p>

      {/* CTA Button */}
      <div className="mt-10 text-center">
  <PaymentButton label="JOIN THE 3-DAY IELTS Writing WORKSHOP ₹199" className="md:px-8 max-sm:text-xs max-sm:px-6 max-sm:py-4" />

  <p className="mt-6 text-gray-600 font-semibold max-sm:text-xs">
    Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
  </p>

  {/* Privacy row */}
  

  {/* Progress bar */}
  <div className="mt-2 md:mt-0 flex justify-center">
    <img src={loadingGif} alt="progress bar" className="w-96 max-sm:w-72" />
  </div>
</div>

    </section>
  );
};

export default JourneySection;
