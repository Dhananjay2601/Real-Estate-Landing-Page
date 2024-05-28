import React from "react";

import FilterInput from "./FilterInput"; // Import the new component
import { LocationIcon, HouseIcon, MoneyIcon } from "../icons/SvgIcons";
import { RevealY } from "../animations/Reveal";
import OnHover from "../animations/OnHover";

const Filter = () => {
  return (
    <div className="absolute flex justify-center mt-12 md:-mt-14 w-full">
      <RevealY>
        <div className="flex flex-col md:flex-row items-center justify-around md:max-w-[50rem] lg:max-w-[60rem] h-auto md:h-[120px] p-5 rounded-2xl bg-ternary text-secondary shadow-lg">
          <div className="flex  flex-col md:flex-row gap-4 w-full md:w-auto">
            {/* Input 1 */}
            <FilterInput
              placeholder="Location"
              Icon={LocationIcon}
              type={"location"}
            />
            {/* Input 2 */}
            <FilterInput
              placeholder="Type"
              Icon={HouseIcon}
              type={"houseType"}
            />
            {/* Input 3 */}
            <FilterInput
              placeholder="Price Range"
              Icon={MoneyIcon}
              type="number"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-4">
            <OnHover>
              <button className="btn w-[8rem] hover:bg-quaternary   bg-secondary text-white rounded-md">
                Sign up
              </button>
            </OnHover>
          </div>
        </div>
      </RevealY>
    </div>
  );
};

export default Filter;
