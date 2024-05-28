import React from "react";
import BedIcon from "../icons/pngIcons/bed.png";
import TapeIcon from "../icons/pngIcons/measuring-tape.png";
import Bungalow1 from "../utils/bungalow1.png";
import Bungalow2 from "../utils/bungalow2.png";
import Bungalow3 from "../utils/bungalow3.png";
import ProjectCard from "../components/ProjectCard";
import { RevealY } from "../animations/Reveal";

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white py-12">
      {/* Text */}
      <RevealY>
        <h1 className="text-2xl text-secondary lg:text-3xl font-extrabold mb-8 lg:mb-8">
          Our Popular Residences
        </h1>
      </RevealY>
      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 hover:cursor-pointer">
        <RevealY>
          <ProjectCard
            image={Bungalow1}
            location={{
              text: "San Francisco, California",
            }}
            rooms={{ icon: BedIcon, text: "4 Rooms" }}
            size={{ icon: TapeIcon, text: "3,500 sq ft" }}
            price="$2,500,000"
          />
        </RevealY>
        <RevealY>
          <ProjectCard
            image={Bungalow2}
            location={{
              text: "Beverly Hills, California",
            }}
            rooms={{ icon: BedIcon, text: "3 Rooms" }}
            size={{ icon: TapeIcon, text: "1,500 sq ft" }}
            price="$850,000"
          />
        </RevealY>
        <RevealY>
          <ProjectCard
            image={Bungalow3}
            location={{ text: "Palo Alto, California" }}
            rooms={{ icon: BedIcon, text: "6 Rooms" }}
            size={{ icon: TapeIcon, text: "4,000 sq ft" }}
            price="$3,700,000"
          />
        </RevealY>
      </div>
    </div>
  );
};

export default Projects;
