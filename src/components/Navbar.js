import React from "react";
import { BurgerIcon, UserIcon, SearchIcon } from "../icons/SvgIcons";

import OnHover from "../animations/OnHover";
import { Link } from "react-router-dom";

const Navbar = ({ handler }) => {
  return (
    <div className=" ">
      {/* <RevealX> */}
      <div className="hidden  fixed top-0 z-50 md:flex justify-between items-center  w-full p-6 xl:px-14 lg:px-12 md:px-8 text-secondary bg-primary">
        <OnHover>
          <h1
            onClick={() => handler("home")}
            className="cursor-pointer xl:px-8 lg:px-6 md:px-2 font-extrabold text-2xl"
          >
            Dwello
          </h1>
        </OnHover>
        <div className="flex xl:gap-14 lg:gap-10 md:gap-6 font-bold ">
          <div className="">
            <OnHover>
              <p className="cursor-pointer" onClick={() => handler("home")}>
                Home
              </p>
            </OnHover>
          </div>
          <div className="">
            <OnHover>
              <p className="cursor-pointer" onClick={() => handler("services")}>
                Service
              </p>
            </OnHover>
          </div>
          <div className="">
            <OnHover>
              <p className="cursor-pointer" onClick={() => handler("services")}>
                Agents
              </p>
            </OnHover>
          </div>
          <div className="">
            <OnHover>
              <p className="cursor-pointer" onClick={() => handler("contact")}>
                Contact
              </p>
            </OnHover>
          </div>
        </div>
        <div className="flex items-center xl:gap-5 lg:gap-3 md:gap-2">
          <OnHover>
            <div className="px-1 cursor-pointer">
              <SearchIcon />
            </div>
          </OnHover>
          <OnHover>
            <div className="px-1 cursor-pointer">
              <UserIcon />
            </div>
          </OnHover>
          <div>
            <OnHover>
              <Link to="/signIn">
                <button className="btn md:w-[7rem]  hover:bg-quaternary    bg-secondary text-[#fff] ">
                  Sign up
                </button>
              </Link>
            </OnHover>
          </div>
        </div>
      </div>
      {/* </RevealX> */}

      {/* DRAWER  */}

      <div className="drawer drawer-end fixed top-0 z-50 sm:block md:hidden bg-primary p-4">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex justify-end">
          {/* <!-- Page content here --> */}
          <label
            htmlFor="my-drawer"
            className=" drawer-button text-quaternary "
          >
            <BurgerIcon />{" "}
          </label>
        </div>
        <div className=" drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-16 min-h-full text-quaternary font-semibold space-y-2 bg-primary ">
            <li>
              <OnHover>
                <p
                  className="cursor-pointer"
                  onClick={() => handler("aboutBurger")}
                >
                  About Us
                </p>
              </OnHover>
            </li>
            <li>
              <OnHover>
                <p
                  className="cursor-pointer"
                  onClick={() => handler("services")}
                >
                  Service
                </p>
              </OnHover>
            </li>
            <li>
              <OnHover>
                <p
                  className="cursor-pointer"
                  onClick={() => handler("services")}
                >
                  Agents
                </p>
              </OnHover>
            </li>
            <li>
              <OnHover>
                <p
                  className="cursor-pointer"
                  onClick={() => handler("contact")}
                >
                  Contact Us
                </p>
              </OnHover>
            </li>
            <div className="absolute bottom-3 left-3 text-xs">
              <span className="font-medium">
                Developed By{" "}
                <OnHover>
                  <a href="/" className="underline">
                    Vansh Technologies
                  </a>
                </OnHover>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
