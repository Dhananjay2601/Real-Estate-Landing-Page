import React from "react";
import House from "../utils/luxury_and_rich_home_exterior_side_view.png";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around pt-72 pb-20 px-4  md:pt-36 lg:px-16 xl:px-40 w-full  bg-white text-secondary">
      {/* Image */}
      <div className="w-full md:w-80 lg:w-[400px] xl:w-[450px] mb-8 lg:mb-0">
        <img src={House} className="w-full rounded-2xl" alt="Luxury Home" />
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 px-6 lg:pl-10">
        <h1 className="flex justify-center text-center lg:text-start lg:justify-start text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-8">
          We Help You To Find
          <br /> Your Dream Home
        </h1>

        <p className="text-sm text-center lg:text-base font-semibold text-quaternary mb-6 lg:mb-12">
          From cozy cottages to luxurious estates, our dedicated team guides you
          through every step of the journey, ensuring your dream home becomes a
          reality.
        </p>

        <div className="flex justify-between text-quaternary">
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-bold">8K+</h1>
            <p className="text-sm lg:text-base font-semibold">
              Houses Available
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-bold">6K+</h1>
            <p className="text-sm lg:text-base font-semibold">Houses Sold</p>
          </div>
          <div className="text-center">
            <h1 className="text-2xl lg:text-3xl font-bold">2K+</h1>
            <p className="text-sm lg:text-base font-semibold">Trusted Agents</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
