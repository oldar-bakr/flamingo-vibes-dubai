import React from "react";

const CardStyle2 = ({ imageSrc, title, text }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="h-full md:flex">
        <div className="h-full md:flex-shrink-0">
          <img
            className="h-full w-full object-cover md:w-48 rounded-xl"
            src={imageSrc}
            alt="Coupon"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-4xl text-orange1 font-semibold">
            {title}
          </div>
          <p className="mt-2 text-dark1">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStyle2;
