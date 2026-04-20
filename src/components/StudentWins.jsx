import { useState } from "react";
import arrowDown from "../assets/arrow-down.png";
import loadingGif from "../assets/loading.gif";
import playIcon from "../assets/play.png";
import verifiedIcon from "../assets/verified-icon.png";
import PaymentButton from "./PaymentButton";

// Import your thumbnail images
import thumb1 from "../assets/video-1.png";
import thumb2 from "../assets/video-2.png";
import thumb3 from "../assets/video-3.png";
import thumb4 from "../assets/video-4.png";
import thumb5 from "../assets/video-5.png";
import thumb6 from "../assets/video-6.png";

// replace with your actual YouTube video IDs
const videos = [
  { thumb: thumb1, url: "https://www.youtube.com/embed/KKyb74RzORg?si=9Jg32yl7LS9Ap5vy&autoplay=1" },
  { thumb: thumb2, url: "https://www.youtube.com/embed/0HCKK_wEFl8?si=qFZ2nbFfK71BstVW&autoplay=1" },
  { thumb: thumb3, url: "https://www.youtube.com/embed/FCpCw9Xsjr4?si=dZDUMCXZ9zen3SNN&autoplay=1" },
  { thumb: thumb4, url: "https://www.youtube.com/embed/-hOTS_okDY4?si=jlksrt5cceoPpOK8&autoplay=1" },
  { thumb: thumb5, url: "https://www.youtube.com/embed/kVWtuiZaboY?si=_INbcHnar5vl6hoM&autoplay=1" },
  { thumb: thumb6, url: "https://www.youtube.com/embed/-ATZzqhKooQ?si=mskpQVTE-jBFV8ro&autoplay=1" },
];


const StudentWins = () => {
  const [openVideo, setOpenVideo] = useState(null);

  return (
    <div className="px-6 py-4 md:py-12 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-extrabold leading-snug max-w-4xl mx-auto max-sm:text-[25px]">
        See Real Students Wins That Turned Stress Into{" "}
        <span className="bg-[#D2F801] px-1">Band 8+ Scores</span>
      </h2>
      <p className="mt-3 text-lg md:text-xl font-semibold text-gray-800 max-sm:text-sm">
        Ranked India’s #1 IELTS Writing Sprint For A Very Good Reason.
      </p>

      {/* Video Thumbnails */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {videos.map((video, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer group"
            onClick={() => setOpenVideo(video.url)}
          >
            <img
              src={video.thumb}
              alt={`video-${idx}`}
              className="rounded-lg shadow-md w-full"
            />
            {/* Play Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={playIcon}
                alt="play"
                className="w-16 h-16 opacity-90 group-hover:scale-110 transition transform animate-pulse max-sm:w-10 max-sm:h-10"
              />
            </div>

            {/* Show arrow only on the 6th thumbnail */}
            {idx === 5 && (
              <img
                src={arrowDown}
                alt="arrow down"
                className="absolute -bottom-[4rem] left-1/2 -translate-x-1/2 w-24 md:w-28 z-20 max-sm:w-12 max-sm:-bottom-8"
              />
            )}
          </div>
        ))}
      </div>

      {/* Modal for YouTube */}
      {openVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-2">
          <div className="bg-black rounded-lg overflow-hidden w-full max-w-4xl relative">
            {/* Close Button */}
            <button
              onClick={() => setOpenVideo(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-50"
            >
              ×
            </button>
            {/* YouTube Embed */}
            <iframe
              className="w-full aspect-video"
              src={`${openVideo}?autoplay=1`}
              title="YouTube video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Seat Info */}
      <h3 className="mt-8 md:mt-16 text-2xl md:text-3xl font-bold max-sm:text-lg">
        Pick Your Seat ₹199 Today
      </h3>
      <p className="mt-2 text-[#FE0000] font-semibold text-lg md:text-xl max-sm:text-sm">
        LIVE & INTERACTIVE · REPLAYS INCLUDED · LIMITED SEATS · LED BY CA GANESH BUGUIDI
      </p>


          <p className="flex items-center justify-center gap-2 text-gray-950 text-base mt-2">
                <img src={verifiedIcon} alt="verified" className="w-5" />
Secure & Safe Checkout              </p>

      {/* CTA Button */}
      <div className="mt-6 text-center">
  <PaymentButton label="JOIN THE 3-DAY Writing WORKSHOP" className="max-sm:text-sm max-sm:px-6 max-sm:py-5" />

  <p className="mt-4 text-sm font-semibold text-gray-800 max-sm:text-xs">
    Live on Zoom | May 11th – 13th, 2026 | 8 PM - 10 PM IST
  </p>
</div>


      {/* Progress bar / loading gif */}
      <div className="relative mt-2 md:mt-2 flex flex-col items-center">
        <img
          src={loadingGif}
          alt="Loading progress"
          className="w-60 md:w-96 max-sm:w-72"
        />
      </div>
    </div>
  );
};

export default StudentWins;
