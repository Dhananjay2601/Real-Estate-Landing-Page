import React from "react";
import BgImage from "../utils/hero image 1.png";
import Reveal from "../Animations/Reveal";

const Home = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between text-secondary py-16 px-4 md:px-10 lg:py-24 lg:px-24 xl:py-24 xl:px-36">
      <div className="flex flex-col w-full lg:w-1/2">
        {/* H1 Text */}
        <Reveal>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight pb-4">
            Find Your <br /> Dream Home
          </h1>
        </Reveal>
        {/* P Text */}
        <Reveal>
          {" "}
          <p className="text-sm md:text-base font-semibold text-quaternary leading-relaxed pb-8 lg:pb-14">
            Explore our curated selection of exquisite properties meticulously
            tailored to your unique dream home vision.
          </p>
        </Reveal>

        {/* Sign up Button */}
        <Reveal>
          <button className=" hidden lg:block btn btn-wide bg-secondary text-white">
            Sign up
          </button>
        </Reveal>
      </div>

      {/* Image */}
      <div className="w-full lg:w-1/2 xl:w-[80%] flex justify-center lg:justify-end">
        <Reveal>
          <img
            src={BgImage}
            className="w-full max-w-md lg:max-w-lg xl:max-w-2xl"
            alt="Dream Home"
          />
        </Reveal>
      </div>
      {/* Sign up Button */}
      <Reveal>
        <button className="mt-6  lg:hidden btn btn-wide bg-secondary text-white">
          Sign up
        </button>
      </Reveal>
    </div>
  );
};

export default Home;
