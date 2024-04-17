import React from "react";

const TimerColumn = ({ text, number, booleanValue = true }) => {
  return (
    <div className="w-full md:w-1/4">
      {" "}
      {/* Adjusted width for small screens */}
      <div className="flex flex-row w-full md:w-auto">
        <div className="flex flex-col justify-center items-center w-full md:w-auto">
          <h2 className="text-orange1 text-5xl md:text-7xl font-black inline-block">
            {number}
          </h2>
          <h2 className="text-white text-2xl font-normal inline-block">
            {text}
          </h2>
        </div>
        {booleanValue ? (
          <h2 className="text-orange1 text-primary hidden md:inline-block text-5xl md:text-7xl font-orange1 mx-5">
            :
          </h2>
        ) : null}
      </div>
    </div>
  );
};

export default TimerColumn;
