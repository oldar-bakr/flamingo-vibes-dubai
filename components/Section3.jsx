// Section3.jsx
import React from 'react';

const Section3 = () => {
  return (
    <div
      className="py-8"
      style={{
        backgroundImage: `url('https://package-2.flamingovibe.com/svgs/dubai.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-4">Must Visit in Dubai</h2>
        <p className="text-lg text-center text-white mb-8">These landmarks should never be skipped</p>
        {/* Add your landmarks or content here */}
      </div>
    </div>
  );
};

export default Section3;
