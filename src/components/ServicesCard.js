import React from "react";

const ServicesCard = ({ icon, title, description }) => {
  return (
    <div className="w-full py-6 px-8 bg-ternary rounded-xl flex flex-col gap-4 shadow-lg">
      <div className="bg-iconBg w-2/5 flex justify-center p-5 rounded-lg">
        <img className="" src={icon} width={50} alt=""></img>
      </div>

      <h2 className="xl:text-base font-bold">{title}</h2>
      <p className="text-sm font-semibold">{description}</p>
    </div>
  );
};

export default ServicesCard;
