// Section6.jsx
import React from 'react';

const Section6 = () => {
  return (
    <div className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-3xl font-bold mb-2 text-white">What tasty treats await you in Dubai?</h2>
            <p className="text-lg mb-2 text-white">Dubai is a mix of cultures and food choices. You can enjoy traditional Emirati dishes or try international cuisine, there's a delicious bite for everyone!</p>
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">BOOK NOW</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F1.jpg&w=1080&q=75" alt="Image 1" className="w-full rounded-lg" />
          <img src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F2.jpg&w=1080&q=75" alt="Image 2" className="w-full rounded-lg" />
          <img src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F3.jpg&w=1080&q=75" alt="Image 3" className="w-full rounded-lg" />
          <img src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F4.jpg&w=1080&q=75" alt="Image 4" className="w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Section6;
