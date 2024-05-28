import React from "react";

const CarouselCard = ({
  image,
  title,
  description,
  location,
  activeImageIndex,
  index,
  rating,
}) => {
  return (
    <div
      className={
        "card object-contain bg-ternary shadow-xl " +
        (activeImageIndex === index ? "block" : "hidden")
      }
    >
      <figure>
        <img src={image} alt="" className="w-full  object-cover" />
      </figure>
      <div className="card-body p-5">
        <div className="flex justify-between items-center mb-4">
          <div className="avatar">
            <div className="w-12 h-12 rounded-full ring ring-quaternary">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Avatar"
              />
            </div>
          </div>
          <div className="flex flex-col ml-4 font-semibold  text-secondary">
            <h2 className="text-lg ">{title}</h2>
            <h3 className="text-sm ">{location}</h3>
          </div>
          <div>
            <p className="text-base px-2 p-1 bg-white text-secondary rounded-md   font-bold">
              ⭐ {rating}
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm">
          <p className="text-gray-700 break-words">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
