import React from "react";
import IconWithTitle from "./IconWithTitle";

const Section8 = () => {
  return (
    <div className="py-12 md:py-24 bg-dark1 text-white px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-white font-black text-2xl md:text-3xl mb-8">
            The Cherry On Top!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <IconWithTitle
              imageUrl={
                "https://package-2.flamingovibe.com/svgs/services/1.svg"
              }
              title={"Accommodation"}
              text={
                "4 or 5 nights in the best hotels of Dubai, Breakfast included!"
              }
            />
            <IconWithTitle
              imageUrl={
                "https://package-2.flamingovibe.com/svgs/services/2.svg"
              }
              title={"Transportation"}
              text={"Luxurious Private car transfer to and from the airport."}
            />
            <IconWithTitle
              imageUrl={
                "https://package-2.flamingovibe.com/svgs/services/3.svg"
              }
              title={"Tours"}
              text={"Modern Dubai city tour or Classic Dubai city tour."}
            />
            <IconWithTitle
              imageUrl={
                "https://package-2.flamingovibe.com/svgs/services/4.svg"
              }
              title={"Support"}
              text={"Full-support care throughout your entire trip"}
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <img
            src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Flocations%2F1.png&w=1920&q=75"
            alt="Your Image"
            className="w-full rounded-2xl h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Section8;
