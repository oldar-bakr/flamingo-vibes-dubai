// BottomBar.js

import React from 'react';

const BottomBar = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white p-4 fixed bottom-0 w-full z-10 flex justify-center items-center">
      <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105">
        BOOK NOW
      </button>
    </div>
  );
};

export default BottomBar;
