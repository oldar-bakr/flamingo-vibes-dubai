// Section1.js
import React from 'react';

const Section1 = () => {
  return (
    <div className="bg-cover bg-center text-white py-8" style={{backgroundImage: "url('https://package-2.flamingovibe.com/images/banner/bg.png')"}}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">EXCITING EXPERIENCE AWAY FROM THE ORDINARY IN DUBAI!</h2>
        <p className="text-lg text-center mb-4">The best hassle-free choice for your next vacation!</p>
        <div className="flex flex-col md:flex-row justify-center items-center mb-4">
          <video controls className="w-full md:w-1/2 md:mr-2" height="315">
            <source src="https://package-2.flamingovibe.com/1.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section1;
