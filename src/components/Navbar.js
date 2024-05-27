import React from "react";
import { BurgerIcon, UserIcon, SearchIcon } from "../icons/SvgIcons";
import { RevealX } from "../Animations/Reveal";

const Navbar = () => {
  return (
    <div className=" ">
      {/* <RevealX> */}
      <div className="hidden  fixed top-0 z-50 md:flex justify-between items-center  w-full p-6 xl:px-14 lg:px-12 md:px-8 text-secondary bg-primary">
        <h1 className="xl:px-8 lg:px-6 md:px-2 font-extrabold text-2xl">
          Dwello
        </h1>
        <div className="flex xl:gap-14 lg:gap-10 md:gap-6 font-bold ">
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
            <SearchIcon />
          </div>
          <div className="px-1">
            <UserIcon />
          </div>
          <div>
            <button className="btn md:w-[7rem]    bg-secondary text-[#fff] ">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* </RevealX> */}

      {/* DRAWER  */}

      <div className="drawer drawer-end fixed top-0 z-50 sm:block md:hidden bg-primary p-4">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          {/* <!-- Page content here --> */}
          <label for="my-drawer" className=" drawer-button text-quaternary ">
            <BurgerIcon />{" "}
          </label>
        </div>
        <div className=" drawer-side">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-16 min-h-full text-quaternary font-semibold space-y-2 bg-primary ">
            <li>
              <a>About Us</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Agents</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <div className="absolute bottom-3 left-3 text-xs">
              <span className="font-medium">
                Developed By{" "}
                <a href="/" className="underline">
                  Vansh Technologies
                </a>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
