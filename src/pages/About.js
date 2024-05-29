import React from "react";
import House from "../utils/luxury_and_rich_home_exterior_side_view.png";
import { RevealY } from "../animation/Reveal";
import Counter from "../animation/Counter";

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around pt-96 pb-10 px-4  md:pt-36 lg:px-16 lg:pb-16 xl:px-40 w-full  bg-white text-secondary">
      {/* Image */}
      <div className="w-full md:w-80 lg:w-[400px] xl:w-[450px] mb-12 lg:mb-0">
        <RevealY>
          <img src={House} className="w-full rounded-2xl" alt="Luxury Home" />
        </RevealY>
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between w-full lg:w-1/2 px-6 lg:pl-10">
        <RevealY>
          <h1 className="flex justify-center text-center lg:text-start lg:justify-start text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-8">
            We Help You To Find
            <br /> Your Dream Home
          </h1>
        </RevealY>

        <RevealY>
          <p className="text-sm text-center lg:text-start lg:text-base font-semibold text-quaternary mb-6 lg:mb-12">
            From cozy cottages to luxurious estates, our dedicated team guides
            you through every step of the journey, ensuring your dream home
            becomes a reality.
          </p>
        </RevealY>

        <div className="flex md:px-20 lg:p-0 text-center lg:text-start justify-between text-quaternary">
          <div className="">
            <RevealY>
              <h1 className="flex justify-center md:justify-start text-2xl lg:text-3xl font-bold">
                <Counter from={0} to={8} />
                K+
              </h1>
            </RevealY>

            <RevealY>
              <p className="text-sm lg:text-base font-semibold">
                Houses Available
              </p>
            </RevealY>
          </div>
          <div className="">
            <RevealY>
              <h1 className="flex justify-center md:justify-start text-2xl lg:text-3xl font-bold">
                {" "}
                <Counter from={0} to={6} />
                K+
              </h1>
            </RevealY>

            <RevealY>
              <p className="text-sm lg:text-base font-semibold">Houses Sold</p>
            </RevealY>
          </div>
          <div className="">
            <RevealY>
              <h1 className="flex justify-center md:justify-start text-2xl lg:text-3xl font-bold">
                <Counter from={0} to={2} />
                K+
              </h1>
            </RevealY>

            <RevealY>
              <p className="text-sm lg:text-base font-semibold">
                Trusted Agents
              </p>
            </RevealY>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
