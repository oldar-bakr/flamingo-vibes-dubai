import React from "react";
import CardStyle1 from "./CardStyle1";

const Section3 = () => {
  return (
    <div
      className="hidden md:block bg-bottom bg-no-repeat relative before:absolute z-10"
      style={{
        backgroundImage: "url('/dubai.svg')",
        backgroundSize: 800,
        padding: 34,
      }}
    >
      <div className=" container relative z-30 mx-auto flex flex-wrap justify-center">
        <div className="text-orange1 text-7xl font-bold text-center mb-4 w-full">
          Must Visit in Dubai
        </div>
        <p className="text-dark1 text-2xl font-bold text-center mb-4 w-full">
          These landmarks should never be skipped
        </p>
        <div className="w-1/2">
          <CardStyle1
            imageSrc={
              "https://package-2.flamingovibe.com/images/locations/1.png"
            }
            title={"Burj Khalifa"}
            text={
              "The world's tallest building, standing tall at 829.8 meters. Enjoy panoramic city views and become part of the bustling tourist scene"
            }
          />
          <CardStyle1
            imageSrc={
              "https://package-2.flamingovibe.com/images/locations/3.png"
            }
            title={"Dubai Aquarium"}
            text={
              "Dubai Mall's indoor aquarium, one of the world's largest. Encounter over 140 species of marine life in this aquatic world."
            }
          />
          <CardStyle1
            imageSrc={
              "https://package-2.flamingovibe.com/images/locations/3.png"
            }
            title={"Dubai Fountain"}
            text={
              "It’s the world's largest choreographed fountain system at the base of the Burj Khalifa. The fountain show, set to music and lights, is a captivating must-see attraction."
            }
          />
        </div>
        <div className="w-1/2">
          <CardStyle1
            imageSrc={
              "https://package-2.flamingovibe.com/images/locations/4.png"
            }
            title={"Palm Jumeirah"}
            text={
              "Dubai's Palm Jumeirah, a palm tree-shaped archipelago. Home to luxurious resorts like Atlantis The Palm and renowned dining spots like Nobu, a must-visit landmark."
            }
          />
          <CardStyle1
            imageSrc={
              "https://package-2.flamingovibe.com/images/locations/5.png"
            }
            title={"Dubai Mall"}
            text={
              "Experience retail therapy at one of the world's largest shopping malls, housing over 1,200 stores. Explore additional thrills like indoor ski slopes and an aquarium, all under one roof."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Section3;
