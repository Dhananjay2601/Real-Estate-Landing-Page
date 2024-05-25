import React from "react";

const Contact = () => {
  return (
    <div className="bg-white p-24 w-full flex flex-col justify-center">
      {/* Text  */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-8 text-center">
          Do You Have Any Questions? <br /> Get Help From Us
        </h1>
        <div className="flex justify-center gap-14">
          <p className="text-sm lg:text-base font-semibold text-quaternary mb-6 lg:mb-12">
            Chat live with our support team
          </p>
          <p className="text-sm lg:text-base font-semibold text-quaternary mb-6 lg:mb-12">
            Browse our FAQ
          </p>
        </div>
      </div>
      {/* Email Input  */}
      <div className=" flex flex-col sm:flex-row justify-center w-full gap-10 ">
        <label className="input input-bordered  flex items-center gap-2 w-full max-w-sm bg-ternary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70 text-quaternary"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="text"
            className="grow w-1/2  placeholder-quaternary"
            placeholder="Email"
          />
        </label>
        {/* Sign up Button */}
        <button className="btn md:w-36   bg-secondary text-white">
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Contact;
