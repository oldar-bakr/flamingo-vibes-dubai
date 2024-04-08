import React from "react";

const CardWithImage = ({ imageSrc, title, text }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto m-16">
      <div className="relative -top-20 z-10">
        <img
          className="w-full h-48 object-cover"
          src={imageSrc}
          alt="Card Image"
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-50 text-white px-4 py-2">
          {title}
        </div>
      </div>
      <div className="p-4 relative z-[1]">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-gray-600">{text}</p>
      </div>
    </div>
  );
};

export default CardWithImage;
