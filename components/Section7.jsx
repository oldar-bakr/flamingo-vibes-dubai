import React from "react";
import CardStyle2 from "./CardStyle2";

const Section7 = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-8 py-8 text-center">
        <div className="mb-8">
          <div className="mb-4 py-8 sm:py-16">
            <hr className="border-b-2 border-orange1 inline-block w-1/6 mb-2" />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-dark1 font-bold mx-4">
              {" "}
              {/* Adjusted text size */}
              Things To Do
            </span>
            <hr className="border-b-2 border-orange1 inline-block w-1/6 mb-2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-8 justify-center">
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/1.png"
            }
            title={"Visit Burj Khalifa"}
            text={
              "Marvel at the architecture of the iconic Burj Khalifa. Soar above the city with breathtaking panoramic views from the observation deck."
            }
          />
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/2.png"
            }
            title={"Desert Experiences"}
            text={
              "Adrenaline-fueled desert adventure with camel rides, ATV excursions, and the exhilaration of dune bashing"
            }
          />
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/3.png"
            }
            title={"Yacht Trips"}
            text={
              "Elevate your Dubai experience with a yacht tour, offering breathtaking views of the city. Enjoy a fancy breakfast or BBQ as you sail through Dubai Marina's scenic beauty."
            }
          />
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/4.png"
            }
            title={"Theme Park Adventures"}
            text={
              "Immerse yourself in the pulse-pounding excitement of Dubai's world-class theme parks. Spend a day indulging in heart-pounding rides and captivating attractions."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Section7;
