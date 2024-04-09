import React from "react";

const CardStyle1 = ({ imageSrc, title, text }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto m-16">
      <div className="relative -top-20 z-10">
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt="Card Image"
        />
      </div>
      <div className="p-8 relative z-[1]">
        <h2 className="text-3xl font-bold text-orange1 text-center">{title}</h2>
        <p className="mt-2 text-base text-dark1 text-center">{text}</p>
      </div>
    </div>
  );
};

export default CardStyle1;
