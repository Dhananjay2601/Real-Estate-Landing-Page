import React from "react";

const FilterInput = ({ placeholder, icon, type = "text" }) => {
  return (
    <label className="input input-bordered flex items-center gap-2 bg-primary rounded-md">
      <input
        type={type}
        className="grow w-full font-bold p-2 bg-primary rounded-md text-white placeholder-placeholder focus:outline-none"
        placeholder={placeholder}
      />
      <img src={icon} className="w-[20px]" alt={placeholder} />
    </label>
  );
};

export default FilterInput;
