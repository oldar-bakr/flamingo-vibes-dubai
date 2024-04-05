import React from 'react';

const Section2 = () => {
  return (
    <div className="bg-black pt-40 md:pt-100 pb-40">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-white w-full text-4xl md:text-8xl font-black text-center">DON'T MISS OUT!</h3>
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col justify-center items-center w-full md:w-auto">
              <div><h2 className="text-orange-500 text-5xl md:text-7xl font-black inline-block">00</h2></div>
              <h2 className="text-white text-2xl font-normal inline-block">Days</h2>
            </div>
            <h2 className="text-primary hidden md:inline-block text-5xl md:text-7xl font-black mx-5">:</h2>
            <div className="flex flex-col justify-center items-center w-full md:w-auto">
              <div><h2 className="text-orange-500 text-5xl md:text-7xl font-black inline-block">00</h2></div>
              <h2 className="text-white text-2xl font-normal inline-block">Hours</h2>
            </div>
            <h2 className="text-primary hidden md:inline-block text-5xl md:text-7xl font-black mx-5">:</h2>
            <div className="flex flex-col justify-center items-center w-full md:w-auto">
              <div><h2 className="text-orange-500 text-5xl md:text-7xl font-black inline-block">00</h2></div>
              <h2 className="text-white text-2xl font-normal inline-block">Minute</h2>
            </div>
            <h2 className="text-primary hidden md:inline-block text-5xl md:text-7xl font-black mx-5">:</h2>
            <div className="flex flex-col justify-center items-center w-full md:w-auto">
              <div><h2 className="text-orange-500 text-5xl md:text-7xl font-black inline-block">00</h2></div>
              <h2 className="text-white text-2xl font-normal inline-block">Second</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
