import React, { useEffect, useRef, useState } from "react";
import Carousel from "../components/Carousel";
import Image1 from "../utils/CardImg1.png";
import Image2 from "../utils/CardImg2.png";
import Image3 from "../utils/CardImg3.png";
import { LeftIcon, RightIcon } from "../icons/SvgIcons";
import { RevealY } from "../animations/Reveal";
import OnHover from "../animations/OnHover";

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
    rating: "4.5",
  },
  {
    image: Image3,
    title: "Emily Johnson",
    description:
      "Dwello made my dream of owning a home a reality! Their team provided exceptional support and guided me through every step of the process. I couldn't be happier with my new home!",
    location: "Los Angeles",
    rating: "3.0",
  },
];

const Testimonial = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  const handlePreviousClick = () => {
    setActiveImageIndex(
      !activeImageIndex ? data.length - 1 : activeImageIndex - 1
    );
  };

  useEffect(() => {
    const handleAutoSlide = () => {
      timeoutRef.current = setTimeout(() => {
        setActiveImageIndex((prevIndex) => (prevIndex + 1) % data.length);
      }, 3000);
    };

    handleAutoSlide();

    return () => clearTimeout(timeoutRef.current);
  }, [activeImageIndex]);

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2500);
  };

  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-14">
      <RevealY>
        <h1 className="text-2xl text-center text-secondary lg:text-3xl py-5 font-extrabold ">
          What People Say About Dwello
        </h1>
      </RevealY>
      <RevealY>
        <div
          className="flex flex-col items-center py-5"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <OnHover>
            <Carousel data={data} activeImageIndex={activeImageIndex} />
          </OnHover>
          <div className="flex font-bold py-8 gap-4 ">
            <OnHover>
              <button
                className=" bg-secondary  p-2 rounded-full text-white"
                onClick={handlePreviousClick}
              >
                <LeftIcon />
              </button>
            </OnHover>
            <OnHover>
              <button
                className=" bg-secondary    p-2 rounded-full text-white  "
                onClick={handleNextClick}
              >
                <RightIcon />
              </button>
            </OnHover>
          </div>
        </div>
      </RevealY>
    </div>
  );
};

export default Testimonial;
