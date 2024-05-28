import React from "react";
import { MailIcon, CheckIcon } from "../icons/SvgIcons";
import { RevealY } from "../animations/Reveal";
import OnHover from "../animations/OnHover";

const Contact = () => {
  return (
    <div className="bg-white py-16 px-10 lg:p-24 w-full flex flex-col justify-center">
      {/* Text  */}
      <div className="flex flex-col justify-center items-center">
        <RevealY>
          <h1 className="flex text-2xl text-secondary lg:text-3xl font-extrabold mb-6 lg:mb-8 text-center">
            Do You Have Any Questions? <br /> Get Help From Us
          </h1>
        </RevealY>
        <div className="flex flex-col items-center md:flex-row text-center gap-2  md:gap-14 mb-6 lg:mb-12 text-sm  lg:text-base font-semibold text-quaternary">
          <RevealY>
            <div className="flex items-center gap-1">
              <CheckIcon />
              <p className="">Chat live with our support team</p>
            </div>
          </RevealY>

          <RevealY>
            <div className="flex items-center gap-1">
              <CheckIcon />
              <p className="">Browse our FAQ</p>
            </div>
          </RevealY>
        </div>
      </div>
      {/* Email Input  */}
      <RevealY>
        <div className=" flex flex-col sm:flex-row justify-center w-full gap-10 ">
          <label className="input input-bordered  flex items-center gap-2 w-full max-w-sm bg-ternary">
            <MailIcon />
            <input
              type="text"
              className="grow w-1/2  placeholder-quaternary"
              placeholder="Email"
            />
          </label>
          {/* Sign up Button */}
          <OnHover>
            <button className="btn w-full md:w-[8rem]  hover:bg-quaternary   bg-secondary text-white">
              Sign up
            </button>
          </OnHover>
        </div>
      </RevealY>
    </div>
  );
};

export default Contact;
