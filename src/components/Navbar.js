import React from "react";
import { UserIcon, SearchIcon } from "../icons/SvgIcons";

const Navbar = () => {
  return (
    <div className=" ">
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

      {/* DRAWER  */}

      <div className="drawer fixed top-0 z-50 sm:block md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label for="my-drawer" className="btn btn-primary drawer-button">
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            for="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
