import React from "react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "../icons/SvgIcons";
import { RevealY } from "../animation/Reveal";
import OnHover from "../animation/OnHover";
import { UpArrowIcon } from "../icons/SvgIcons";
const Footer = ({ handler }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 p-20 pb-0 gap-10 text-secondary ">
        <div className="col-span-1 md:col-span-4 lg:col-span-1 flex flex-col items-center text-center lg:text-start lg:items-start">
          <RevealY>
            <OnHover>
              <h1
                onClick={() => handler("home")}
                className="cursor-pointer text-xl text-start lg:text-2xl font-extrabold mb-4 lg:mb-8 "
              >
                Dwello
              </h1>
            </OnHover>
          </RevealY>
          <RevealY>
            <p className="text-sm lg:text-base font-semibold text-quaternary mb-6 lg:mb-12">
              Bringing you closer to your dream home, one click at a time.
            </p>
          </RevealY>
        </div>
        <RevealY>
          <div className="flex flex-col  items-center ">
            <div className="flex flex-col text-center md:text-start  justify-between gap-4">
              <h1 className="font-bold text-lg">About</h1>
              <p
                onClick={() => handler("about")}
                className="cursor-pointer font-semibold"
              >
                Our Story
              </p>
              <a href="/" className="font-semibold">
                Careers
              </a>
              <a href="/" className="font-semibold">
                Our Team
              </a>
              <a href="/" className="font-semibold">
                Resources
              </a>
            </div>
          </div>
        </RevealY>
        <RevealY>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col text-center md:text-start  justify-between gap-4">
              <h1 className="font-bold text-lg">Support</h1>
              <a href="/" className="font-semibold">
                FAQ
              </a>
              <a href="/" className="font-semibold">
                Contact Us
              </a>
              <a href="/" className="font-semibold">
                Help Center
              </a>
              <a href="/" className="font-semibold">
                Terms of Service{" "}
              </a>
            </div>
          </div>
        </RevealY>
        <RevealY>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col text-center md:text-start  justify-between gap-4">
              <h1 className="font-bold text-lg">Find Us</h1>
              <a href="/" className="font-semibold">
                Events
              </a>
              <a href="/" className="font-semibold">
                Locations
              </a>
              <a href="/" className="font-semibold">
                Newsletter
              </a>
            </div>
          </div>
        </RevealY>
        <RevealY>
          <div className="flex flex-col items-center ">
            <div className="flex flex-col text-center md:text-start justify-between gap-4">
              <h1 className="font-bold text-lg">Our Social</h1>
              <OnHover>
                <a href="/" className="flex items-center gap-1 font-semibold">
                  <InstagramIcon /> Instagram
                </a>
              </OnHover>
              <OnHover>
                <a href="/" className="flex items-center gap-1 font-semibold">
                  <FacebookIcon /> Facebook
                </a>
              </OnHover>
              <OnHover>
                <a href="/" className="flex items-center gap-1 font-semibold">
                  <TwitterIcon /> Twitter
                </a>
              </OnHover>
            </div>
          </div>
        </RevealY>
      </div>
      <div className="flex  justify-end p-8 lg:pr-14  w-full   ">
        <OnHover>
          <div
            className="border-2 border-secondary rounded-full cursor-pointer p-1 hover:text-white  hover:bg-quaternary"
            onClick={() => handler("home")}
          >
            <UpArrowIcon />
          </div>
        </OnHover>
      </div>
    </div>
  );
};

export default Footer;
