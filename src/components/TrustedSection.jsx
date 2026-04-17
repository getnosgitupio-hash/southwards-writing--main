import timesLogo from "../assets/times.png";
import hinduLogo from "../assets/hindu.png";
import hindustanLogo from "../assets/hindustan.png";
import expressLogo from "../assets/express.png";
import ieltsLogo from "../assets/ielts.png";
import edtechLogo from "../assets/edtech.png";

const logos = [
  timesLogo,
  hindustanLogo,
  hinduLogo,
  ieltsLogo,
  expressLogo,
  edtechLogo,
];

const TrustedSection = () => {
  return (
    <section className="pt-4 md:pt-12 pb-8 md:pb-24 text-center bg-white">
      {/* Heading */}
      <h2 className="text-3xl md:text-[75px] font-extrabold leading-snug md:leading-[65px] text-left max-w-2xl mx-auto flex items-start">
        <span className="text-[85px] text-[#1862E3] leading-none mr-2">“</span>
        <span>
          Stop doing what <br className="hidden md:block" />
          everyone else does.
        </span>
      </h2>

      {/* Subheading */}
      <p className="mt-6 text-sm md:text-xl font-bold text-gray-900 max-w-lg mx-auto px-4">
        Start doing what{" "}
        <span className="text-[#1862E3] font-extrabold">Band 8+</span> Scorers do
        and watch your Writing score skyrocket in just 3 days!{" "}
        <span className="relative inline-block align-baseline top-[1.75rem] text-[#1862E3] text-[60px] md:text-[70px] leading-[0px]">
          ”
        </span>
      </p>

      {/* Logo slider */}
      <div className="mt-6 md:mt-12 overflow-hidden relative w-full">
        {/* Sliding logos for both mobile & desktop */}
        <div className="flex gap-10 md:gap-16 animate-slide">
          {logos.concat(logos).map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Trusted logo"
              className="h-8 md:h-10 object-contain grayscale flex-shrink-0"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
