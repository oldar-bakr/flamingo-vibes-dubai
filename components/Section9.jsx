// Section9.js

import React from 'react';

const Section9 = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Flogo.png&w=1920&q=75" alt="Your Image" className="w-full h-auto lg:w-1/2 lg:h-auto align-middle" />
        </div>
        <div className="lg:w-1/2 lg:pl-8">
          <h1 className="text-5xl font-bold mb-2">
          Why
            <span className="text-orange-500"> Flamingo Vibe</span>?
          </h1>
          <p className="text-lg mb-4">If you are looking for global and high-quality services, then you need Flamingo Vibe. Not only is it because of the globality, but also because of the number of satisfied tourists who have experienced the true joy of tourism with us.
            With Flamingo Vibe, you don’t need to plan the details of your vacation. All you have to do is to call our team and we will do the rest.</p>
          {/* Additional content can go here */}
        </div>
      </div>
    </div>
  );
};

export default Section9;