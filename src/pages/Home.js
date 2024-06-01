import React from "react";
import BgImage from "../utils/hero image 1.png";
import { RevealY } from "../animation/Reveal";
import OnHover from "../animation/OnHover";

const Home = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between text-secondary py-24 px-4 md:px-10 md:py-28 lg:py-24 lg:px-24 xl:py-24 xl:px-36">
      <div className="flex flex-col w-full lg:w-1/2 pb-20  md:p-0">
        {/* H1 Text */}
        <RevealY>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight pb-4">
            Find Your <br /> Dream Home
          </h1>
        </RevealY>
        {/* P Text */}
        <RevealY>
          {" "}
          <p className="text-sm md:text-base font-semibold text-quaternary leading-relaxed pb-8 lg:pb-14">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
        </RevealY>

        {/* Sign up Button */}
        <RevealY>
          <OnHover>
            <button className=" hidden hover:bg-quaternary   lg:block btn btn-wide bg-secondary text-white">
              Sign up
            </button>
          </OnHover>
        </RevealY>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 xl:w-[80%] flex justify-center lg:justify-end pb-20 md:p-0">
        <RevealY>
          <img
            src={BgImage}
            className="w-full max-w-md lg:max-w-lg xl:max-w-2xl"
            alt="Dream Home"
          />
        </RevealY>
      </div>
      {/* Sign up Button */}
      <RevealY>
        <OnHover>
          <button className="mt-6 hover:bg-quaternary   lg:hidden btn btn-wide bg-secondary text-white">
            Sign up
          </button>
        </OnHover>
      </RevealY>
    </div>
  );
};

export default Home;
