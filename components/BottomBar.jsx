import React from "react";

const BottomBar = () => {
  return (
    <div className="bg-dark1 text-white p-4 fixed bottom-0 w-full z-50 flex justify-center items-center">
      <button className="rounded-2xl bg-orange1 text-white px-4 md:px-8 py-2 md:py-4 text-lg md:text-2xl font-bold scale1">
        BOOK NOW
      </button>
    </div>
  );
};

export default BottomBar;
