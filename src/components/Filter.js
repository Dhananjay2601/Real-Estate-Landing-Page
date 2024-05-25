import React from "react";
import Coin from "../icons/coin.png";
import Home from "../icons/Home.png";
import Location from "../icons/place.png";
import FilterInput from "./FilterInput"; // Import the new component

const Filter = () => {
  return (
    <div className="absolute flex justify-center -mt-14 w-full">
      <div className="flex flex-col md:flex-row items-center justify-around w-full max-w-4xl h-auto md:h-[120px] p-5 rounded-2xl bg-ternary text-secondary shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
          {/* Input 1 */}
          <FilterInput placeholder="Location" icon={Location} />
          {/* Input 2 */}
          <FilterInput placeholder="Type" icon={Home} />
          {/* Input 3 */}
          <FilterInput placeholder="Price Range" icon={Coin} type="number" />
        </div>
        <div className="mt-4 md:mt-0 md:ml-4">
          <button className="btn w-full md:w-auto px-6 py-2 bg-secondary text-white rounded-md">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
