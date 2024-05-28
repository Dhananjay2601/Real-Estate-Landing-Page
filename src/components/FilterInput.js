import React, { useEffect, useState } from "react";

const FilterInput = ({ placeholder, Icon, type }) => {
  const locations = [
    "Margao",
    "Panjim",
    "Mapusa",
    "Vagator",
    "Siolim",
    "Candolim",
  ];
  const houseType = [
    "Bungalow",
    "Penthouse",
    "1 BHK Apartment",
    "2 BHK Apartment",
    "3 SBHK Apartment",
  ];
  const priceRange = [
    "$500,000 - $750,000",
    "$750,000 - $1,00,000",
    "$1,00,000 - $2,00,000",
    "$2,00,000 - $5,00,000",
  ];

  const [values, setValues] = useState([]);

  useEffect(() => {
    if (type === "location") {
      setValues(locations);
    }
    if (type === "houseType") {
      setValues(houseType);
    }
    if (type === "number") {
      setValues(priceRange);
    }
  }, []);
  console.log(values.values);
  return (
    <div className="form-control w-[15rem] sm:w-[20rem] md:w-[9rem] lg:w-[12rem] xl:w-[15rem] flex flex-row justify-around items-center gap-2 bg-primary rounded-md">
      <select
        // defaultValue={""}
        className="select select-ghost w-full font-bold md:text-[10px] lg:text-sm  p-2 bg-primary rounded-md text-placeholder  focus:outline-none focus:border-none "
      >
        <option disabled hidden selected>
          {placeholder}
        </option>

        {values.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
      <div className="flex pr-2 md:pr-1 lg:pr-2">
        <Icon />
      </div>
    </div>
  );
};

export default FilterInput;
