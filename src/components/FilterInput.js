import React from "react";

const FilterInput = ({ placeholder, Icon, type = "text" }) => {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-primary rounded-md">
      <input
        type={type}
        className="grow w-full font-bold md:text-[10px] lg:text-sm  p-2 bg-primary rounded-md text-white placeholder-placeholder focus:outline-none"
        placeholder={placeholder}
      />
      <Icon />
      {/* <svg></svg> */}
    </label>
  );
};

export default FilterInput;
