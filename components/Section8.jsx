// Section8.js

import React from 'react';

const Section8 = () => {
  return (
    <div className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row mb-8">
          <div className="lg:w-1/2 lg:pr-8">
            <h2 className="text-2xl font-bold">Section 8 Header</h2>
          </div>
          <div className="lg:w-1/2 lg:pl-8">
            <img src="your-image-url.jpg" alt="Image" className="w-full h-auto lg:w-1/2 lg:h-auto" />
          </div>
        </div>
        
        {/* Logos and descriptions */}
        <div className="flex flex-col lg:flex-row">
          {/* Logos */}
          <div className="lg:w-1/4 mb-4 lg:mb-0">
            <img src="logo1-url.jpg" alt="Logo 1" className="w-full h-auto" />
          </div>
          <div className="lg:w-1/4 mb-4 lg:mb-0">
            <img src="logo2-url.jpg" alt="Logo 2" className="w-full h-auto" />
          </div>
          <div className="lg:w-1/4 mb-4 lg:mb-0">
            <img src="logo3-url.jpg" alt="Logo 3" className="w-full h-auto" />
          </div>
          <div className="lg:w-1/4 mb-4 lg:mb-0">
            <img src="logo4-url.jpg" alt="Logo 4" className="w-full h-auto" />
          </div>
          
          {/* Descriptions */}
          <div className="lg:w-3/4 lg:pl-8">
            <div className="mb-4">
              <h3 className="text-xl font-bold">Logo 1 Title</h3>
              <p>Description for Logo 1 goes here.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Logo 2 Title</h3>
              <p>Description for Logo 2 goes here.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold">Logo 3 Title</h3>
              <p>Description for Logo 3 goes here.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Logo 4 Title</h3>
              <p>Description for Logo 4 goes here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section8;
