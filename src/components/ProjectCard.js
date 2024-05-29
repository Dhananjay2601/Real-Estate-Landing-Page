import React from "react";
import { LocationIcon } from "../icons/SvgIcons";
import OnHover from "../animation/OnHover";

const ProjectCard = ({ image, location, rooms, size, price }) => {
  return (
    <OnHover>
      <div className="w-full h-full bg-ternary rounded-xl flex flex-col gap-4 shadow-lg hover:shadow-2xl text-secondary ">
        <div className="bg-black flex justify-center rounded-t-xl">
          <img
            className="rounded-t-xl"
            src={image}
            width={300}
            alt="Property"
          />
        </div>
        <div className="flex justify-start px-3 gap-3">
          <LocationIcon />
          <h2 className="xl:text-base font-bold">{location.text}</h2>
        </div>
        <div className="flex justify-between ml-4 w-[80%]">
          <div className="flex gap-3">
            <img src={rooms.icon} alt="Rooms" className="w-[15px]" />
            <p className="font-medium">{rooms.text}</p>
          </div>
          <div className="flex pl-4 gap-3">
            <img src={size.icon} alt="Size" className="w-[15px]" />
            <p className="font-medium">{size.text}</p>
          </div>
        </div>
        <div className="flex justify-between items-center pb-4 px-4">
          <OnHover>
            <button className="btn btn-sm hover:bg-quaternary   bg-secondary text-white">
              Sign up
            </button>
          </OnHover>
          <p className="text-sm font-bold">{price}</p>
        </div>
      </div>
    </OnHover>
  );
};

export default ProjectCard;
