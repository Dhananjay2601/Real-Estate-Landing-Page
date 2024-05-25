import React from "react";
import Carousel from "../components/Carousel";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center items-center p-6 lg:p-24">
      <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-12">
        What People Say About Dwello
      </h1>
      <Carousel />
    </div>
  );
};

export default Testimonial;
