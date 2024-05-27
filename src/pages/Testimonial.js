import React, { useState } from "react";
import Carousel from "../components/Carousel";
import Image1 from "../utils/CardImg1.png";
import Image2 from "../utils/CardImg2.png";
import Image3 from "../utils/CardImg3.png";
import { LeftIcon, RightIcon } from "../icons/SvgIcons";

const data = [
  {
    image: Image1,
    title: "Sarah Nguyen",
    description:
      "Dwello truly cares about their clients. They listened to my needs and preferences and helped me find the perfect home in the Bay Area. Their professionalism and attention to detail are unmatched.",
    location: "San Francisco",
    rating: "2.5",
  },
  {
    image: Image2,
    title: "Michael Rodriguez",
    description:
      "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    location: "San Diego",
    rating: "2.5",
  },
  {
    image: Image3,
    title: "Emily Johnson",
    description:
      "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    location: "Los Angeles",
    rating: "2.5",
  },
  {
    image: Image1,
    title: "John Doe",
    description:
      "I had a fantastic experience working with Dwello. S  Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    location: "New York",
    rating: "2.5",
  },
];

const Testimonial = () => {
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
    <div className="flex flex-col justify-center items-center p-6 lg:p-14">
      <h1 className="text-2xl text-center lg:text-3xl py-5 font-extrabold ">
        What People Say About Dwello
      </h1>
      <div className="flex flex-col items-center py-5">
        <Carousel data={data} activeImageIndex={activeImageIndex} />
        <div className="flex font-bold py-8 gap-4 ">
          <button
            className=" bg-secondary p-2 rounded-full text-white"
            onClick={handlePreviousClick}
          >
            <LeftIcon />
          </button>
          <button
            className=" bg-secondary p-2 rounded-full text-white  "
            onClick={handleNextClick}
          >
            <RightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
