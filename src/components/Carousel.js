import React from "react";
import CarouselCard from "./CarouselCard";

const Carousel = ({ data, activeImageIndex }) => {
  return (
    <div className="flex justify-around items-center max-h-full ">
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
    </div>
  );
};

export default Carousel;
