import Image from "next/image";
import React from "react";

function WhatIDo() {
  return (
    <div className="p-10 max-md:p-1">
      <div className="flex-col flex items-center">
        <div>
          <div className="relative inline-block">
            <span className="relative z-10 text-neutral-950 text-[32px] max-md:text-[4vw] font-normal font-['Handlee']">
              What i do?
            </span>
            <span className="absolute bg-pink-200 top-[40%] transform -translate-y-1/2 left-0 w-full h-[75%] z-0"></span>
          </div>
        </div>
        <div>
          <Image src="/assets/arrow down.svg" alt="arrow down" width={37} height={25} />
        </div>
      </div>
      {/* cards */}
      <div className="px-20 max-md:px-6 max-md:pt-10 pt-10">
        <div className="flex flex-wrap justify-center gap-10">
          {/* first figma card */}
          <div className="relative w-[330px] h-[400px] max-md:h-[370px] max-md:w-[75vw] bg-amber-200 rounded-lg shadow-md border-4 border-amber-300 transition-transform duration-300 rotate-[-4deg] hover:rotate-[0deg] hover:shadow-lg">
            <div className="px-5 pt-36">
              <Image src="/assets/figma icon.svg" alt="figma icon" width={79} height={84} />
              <p className="text-black text-2xl max-md:text-xl font-medium font-['Inter'] mt-5">
                Convert any Figma, PSD and PDF to HTML, React and Next JS.
              </p>
            </div>
            <div className="bg-cyan-200 shadow absolute left-[285px] top-[65px] max-md:left-[65vw]">
              <p className="text-center text-neutral-950 text-[32px] max-md:text-[25px] font-normal font-['Handlee']">
                Figma
              </p>
            </div>
          </div>
          {/* second card */}
          <div className="relative w-[330px] h-[400px] max-md:h-[370px] max-md:w-[75vw] bg-cyan-200 rounded-lg shadow-md border-4 border-blue-300 transition-transform duration-300 rotate-[4deg] hover:rotate-[0deg] hover:shadow-lg">
            <div className="px-5 pt-36 ">
              <Image src="/assets/landing-page-icons.png" alt="figma icon" width={79} height={84} />
              <p className="text-black text-2xl max-md:text-[18px] max-md:leading-7 font-medium font-['Inter'] mt-5">
                Provide services to develop fully functional landing pages. Fast, reliable, and optimized.
              </p>
            </div>
            <div className="bg-pink-200 shadow absolute left-[127px] max-md:left-[100px] top-[-16.44px]">
              <p className="text-center text-neutral-950 text-[32px] max-md:text-[25px] font-normal font-['Handlee']">
                Landing pages
              </p>
            </div>
          </div>
          {/* third card */}
          <div className="relative w-[330px] h-[400px] max-md:h-[370px] max-md:w-[75vw] bg-pink-200 rounded-lg shadow-md border-4 border-pink-400 transition-transform duration-300 rotate-[-4deg] hover:rotate-[0deg] hover:shadow-lg">
            <div className="px-5 pt-36">
              <Image src="/assets/website-icons.png" alt="figma icon" width={79} height={84} />
              <p className="text-black text-2xl max-md:text-[18px] max-md:leading-7 text-pretty font-medium font-['Inter'] mt-5">
                Create responsive, high-performance sites that showcase your brand and business.
              </p>
            </div>
            <div className="bg-amber-200 shadow absolute left-[258px] max-md:left-[55vw] top-[65px]">
              <p className="text-center text-neutral-950 text-[32px] max-md:text-[25px] font-normal font-['Handlee']">
                Websites
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
