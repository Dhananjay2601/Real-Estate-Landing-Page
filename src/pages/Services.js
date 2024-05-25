import React from "react";
import LocationIcon from "../icons/location.png";
import UserIcon from "../icons/edit-info.png";
import NotepadIcon from "../icons/note-pad.png";
import HandshakeIcon from "../icons/deal.png";
import ServicesCard from "../components/ServicesCard";
const Services = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 lg:px-16 xl:px-28 w-full  bg-white text-secondary">
      {/* Test  */}
      <div className="flex flex-col justify-center items-center w-1/2 text-center">
        <h1 className="text-2xl lg:text-3xl font-extrabold mb-4 lg:mb-8">
          Why Choose Us
        </h1>

        <p className="text-sm lg:text-base font-semibold text-quaternary mb-6 lg:mb-12">
          Elevating Your Home Buying Experience with Expertise, Integrity, and
          Unmatched Personalized Service
        </p>
      </div>
      {/* Cards  */}
      <div className=" w-full p-8 gap-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <ServicesCard
          icon={LocationIcon}
          title="Expert Guidance"
          description="Benefit from our team's seasoned expertise for a smooth buying experience"
        />
        <ServicesCard
          icon={UserIcon}
          title="Personalized Service"
          description="Our services adapt to your unique needs, making your journey stress-free"
        />
        <ServicesCard
          icon={NotepadIcon}
          title="Transparent Process"
          description="Stay informed with our clear and honest approach to buying your home"
        />
        <div className="lg:col-start-2 xl:col-start-4 ">
          <ServicesCard
            className=" "
            icon={HandshakeIcon}
            title="Exceptional Support"
            description="Providing peace of mind with our responsive and attentive customer service"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;