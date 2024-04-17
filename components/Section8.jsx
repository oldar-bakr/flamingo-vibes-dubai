import React from "react";
import IconWithTitle from "./IconWithTitle";

const Section8 = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] bg-dark1">
      <div className="container mx-auto">
        <div className=" text-white p-6 md:p-16 flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 md:px-8">
            <h2 className="text-white font-black text-[1.5rem] md:text-[2.5rem] mb-6 md:mb-8">
              The Cherry On Top!
            </h2>
            <div className="grid gap-4 md:gap-8">
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
          <img
            src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Flocations%2F1.png&w=1920&q=75"
            alt="Your Image"
            className="w-full md:w-1/2 rounded-2xl h-auto md:h-[600px]"
            width="700"
            height="700"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Section8;
