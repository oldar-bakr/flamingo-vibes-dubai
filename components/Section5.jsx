import React from "react";
import SwiperC from "./SwiperC";
import { images } from "../lib/images";

const Section5 = () => {
  return (
    <div className="container mx-auto px-6 md:px-16 text-center">
      <div className="flex flex-col">
        <div className="md:flex md:gap-x-3">
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <SwiperC title={"SHOPPING"} images={images.slice(0, 3)} />
          </div>
          <div className="w-full md:w-1/2">
            <SwiperC title={"SWIMMING"} images={images.slice(3, 6)} />
          </div>
        </div>

        <SwiperC title={"MOSQUES"} images={images.slice(6, 9)} />
      </div>
    </div>
  );
};

export default Section5;
