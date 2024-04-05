import React from 'react';

const Section1 = () => {
  return (
    <div className="bg-cover bg-no-repeat flex justify-center items-center h-screen relative before:absolute before:w-full before:h-full before:bg-black/40 before:top-0 before:left-0 z-10" style={{ backgroundImage: "url('https://package-2.flamingovibe.com/images/banner/bg.png')" }}>
      <div className="container mx-auto relative z-30 flex flex-col justify-center items-center text-center">
        <h2 className="text-white text-3xl md:text-6xl uppercase font-black leading-24 md:leading-96">EXCITING EXPERIENCE AWAY FROM THE ORDINARY IN DUBAI!</h2>
        <p className="text-white my-5 text-lg md:text-2xl font-normal m-0 p-0">The best hassle-free choice for your next vacation!</p>
        <div className="rounded-2xl overflow-hidden m-0 p-0">
          <video className="rounded-2xl m-0 p-0" controls>
            <source src="https://package-2.flamingovibe.com/1.mov" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section1;
