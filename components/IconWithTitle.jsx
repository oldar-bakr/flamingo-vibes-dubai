import React from "react";

const IconWithTitle = ({ imageUrl, title, text }) => {
  return (
    <div className="flex items-center p-4">
      <div className="mr-4">
        <img src={imageUrl} alt="image" className="w-12 h-12" />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg">● {text}</p>
      </div>
    </div>
  );
};

export default IconWithTitle;
