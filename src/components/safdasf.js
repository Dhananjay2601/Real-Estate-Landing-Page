import React, { useState } from "react";

const data = [
  "https://i.redd.it/rfftqdg5flv71.jpg",
  "https://i.pinimg.com/736x/23/5e/09/235e09099e71c062df1aea0d2babd2a6.jpg",
  "https://c4.wallpaperflare.com/wallpaper/86/419/788/random-green-hd-wallpaper-thumb.jpg",
  "https://free4kwallpapers.com/uploads/originals/2022/07/31/random-wallpaper.jpg",
  "https://wallhalla.com/thumbs/27",
];
const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  const handlePreviousClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
  };

  return (
    <div className="flex justify-center ">
      <button className=" font-bold p-4 m-10 " onClick={handlePreviousClick}>
        Previous
      </button>
      {data.length &&
        data.map((url, i) => {
          return (
            <img
              key={url}
              src={url}
              alt="images"
              className={
                "w-96 h-[500px] object-contain " +
                (activeImageIndex === i ? "block" : " hidden")
              }
            />
          );
        })}

      <button className=" font-bold p-4 m-10 " onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
