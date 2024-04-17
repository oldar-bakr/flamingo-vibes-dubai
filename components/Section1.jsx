import React from "react";

const Section1 = () => {
  return (
    <div
      className="bg-cover bg-no-repeat flex justify-center items-center relative before:bg-black/40 py-40"
      style={{
        backgroundImage:
          "url('https://package-2.flamingovibe.com/images/banner/bg.png')",
      }}
    >
      <div className="container mx-auto relative z-30 flex flex-col justify-center items-center text-center">
        <h1 className="text-white text-5xl md:text-7xl uppercase font-black leading-24 md:leading-96 max-w-full leading-relaxed">
          EXCITING EXPERIENCE AWAY FROM THE ORDINARY IN DUBAI!
        </h1>
        <p className="text-white my-5 text-lg md:text-2xl font-normal">
          The best hassle-free choice for your next vacation!
        </p>
        <video className="rounded-2xl -mb-80 my-5" controls>
          <source
            src="https://package-2.flamingovibe.com/1.mov"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
};

export default Section1;
