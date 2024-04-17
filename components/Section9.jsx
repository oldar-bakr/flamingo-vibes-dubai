import React from "react";

const Section9 = () => {
  return (
    <div className="flex justify-center">
      <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-12 m-4 sm:m-8">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="flex justify-center lg:w-1/2 mb-4 lg:mb-0">
            <img
              src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75"
              alt="Your Image"
              className="w-full h-auto lg:w-1/2 lg:h-auto align-middle max-w-[200px] sm:max-w-none"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-8 flex items-center flex-col">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 w-full text-center lg:text-left">
              Why<span className="text-orange1"> Flamingo Vibe</span>?
            </h1>
            <p className="text-base sm:text-lg mb-4 text-center lg:text-left">
              If you are looking for global and high-quality services, then you
              need Flamingo Vibe. Not only is it because of the globality, but
              also because of the number of satisfied tourists who have
              experienced the true joy of tourism with us. With Flamingo Vibe,
              you dont need to plan the details of your vacation. All you have
              to do is to call our team and we will do the rest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section9;
