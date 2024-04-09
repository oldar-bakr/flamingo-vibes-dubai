import React from "react";
import IconWithTitle from "./IconWithTitle";

const Section8 = () => {
  return (
    <div className="pt-[10rem] mt-[4rem] pb-[5rem] relative z-[0] bg-dark1 text-white p-16 flex items-center justify-center">
      <div className="w-1/2 px-8">
        <h2 className="text-white font-black text-[2.5rem] md:text-[3rem]">
          The Cherry On Top!
        </h2>
        <IconWithTitle
          imageUrl={"https://package-2.flamingovibe.com/svgs/services/1.svg"}
          title={"Accommodation"}
          text={
            "4 or 5 nights in the best hotels of Dubai, Breakfast included!"
          }
        />
        <IconWithTitle
          imageUrl={"https://package-2.flamingovibe.com/svgs/services/2.svg"}
          title={"Transportation"}
          text={"Luxurious Private car transfer to and from the airport."}
        />
        <IconWithTitle
          imageUrl={"https://package-2.flamingovibe.com/svgs/services/3.svg"}
          title={"Tours"}
          text={"Modern Dubai city tour or Classic Dubai city tour."}
        />
        <IconWithTitle
          imageUrl={"https://package-2.flamingovibe.com/svgs/services/4.svg"}
          title={"Support"}
          text={"Full-support care throughout your entire trip"}
        />
      </div>
      <img
        src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Flocations%2F1.png&w=1920&q=75"
        alt="Your Image"
        className="w-1/2 rounded-2xl h-[600px]"
        width="700"
        height="700"
        loading="lazy"
      />
    </div>
  );
};

export default Section8;
