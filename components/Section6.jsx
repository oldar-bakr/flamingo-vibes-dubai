import React from "react";

const Section6 = () => {
  return (
    <div className="bg-dark1 py-8 justify-center items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center py-16">
        <div className="justify-center items-center">
          <div className="mb-4 justify-center items-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-relaxed">
              What tasty treats await you in Dubai?
            </h2>
            <p className="text-lg mb-2 text-white py-4 leading-normal">
              Dubai is a mix of cultures and food choices. You can enjoy
              traditional Emirati dishes or try international cuisine, theres a
              delicious bite for everyone!
            </p>
            <a
              href="https://api.whatsapp.com/send/?phone=905495999793&text&type=phone_number&app_absent=0"
              className="rounded-2xl bg-orange1 text-white px-[30px] py-[10px] text-[2rem] font-bold"
            >
              BOOK NOW
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F1.jpg&w=1080&q=75"
            alt="Image 1"
            className="w-full rounded-lg"
          />
          <img
            src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F2.jpg&w=1080&q=75"
            alt="Image 2"
            className="w-full rounded-lg"
          />
          <img
            src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F3.jpg&w=1080&q=75"
            alt="Image 3"
            className="w-full rounded-lg"
          />
          <img
            src="https://package-2.flamingovibe.com/_next/image?url=%2Fimages%2Ffood%2F4.jpg&w=1080&q=75"
            alt="Image 4"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Section6;
