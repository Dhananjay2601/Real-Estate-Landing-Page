import React from "react";
import Search from "../icons/search.png";
import User from "../icons/user.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 flex justify-between items-center  w-full p-6 xl:px-14 lg:px-12 md:px-8 text-secondary bg-primary ">
      <h1 className="xl:px-8 lg:px-6 md:px-2 font-extrabold text-2xl">
        Dwello
      </h1>
      <div className="flex xl:gap-20 lg:gap-10 md:gap-8 font-bold ">
        <div className="">
          <a href="/">Home</a>
        </div>
        <div className="">
          <a href="/">Service</a>
        </div>
        <div className="">
          <a href="/">Agents</a>
        </div>
        <div className="">
          <a href="/">Contact</a>
        </div>
      </div>
      <div className="flex items-center xl:gap-5 lg:gap-3 md:gap-2">
        <div className="px-1">
          <img src={Search} width={20} alt=""></img>
        </div>
        <div className="px-1">
          <img src={User} width={20} alt=""></img>
        </div>
        <div>
          <button className="btn  md:btn-xs lg:btn-sm xl:btn-md  bg-secondary text-[#fff] ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
