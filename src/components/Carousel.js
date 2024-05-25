import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import Image1 from "../utils/CardImg1.png";
import Image2 from "../utils/CardImg2.png";
import Image3 from "../utils/CardImg3.png";
import LeftArrow from "../icons/left-arrow.png";
import RightArrow from "../icons/right-arrow.png";
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
      "I had a fantastic experience working with Dwello. Their expertise and personalized service exceeded my expectations. I found my dream home quickly and smoothly. Highly recommended!",
    location: "New York",
    rating: "2.5",
  },
];

const Carousel = () => {
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
    <div className="flex justify-around items-center h-[500px] ">
      <button className="font-bold pr-10 " onClick={handlePreviousClick}>
        <img
          className="w-[50px]  border-2 rounded-full p-3 bg-quaternary "
          src={LeftArrow}
          alt="Previous"
        />
      </button>
      <div className="flex justify-center  gap-10">
        {data.map((item, i) => (
          <CarouselCard
            key={i}
            index={i}
            activeImageIndex={activeImageIndex}
            image={item.image}
            title={item.title}
            description={item.description}
            location={item.location}
            rating={item.rating}
          />
        ))}
      </div>
      <button className="font-bold pl-10   " onClick={handleNextClick}>
        <img
          src={RightArrow}
          alt="Next"
          className="w-[50px]  border-2 rounded-full p-3 bg-quaternary "
        />
      </button>
    </div>
  );
};

export default Carousel;
