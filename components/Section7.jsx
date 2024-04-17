import React from "react";
import CardStyle2 from "./CardStyle2";

const Section7 = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4 sm:px-8 py-8 text-center">
        <div className="mb-8">
          <div className="mb-4 py-8 sm:py-16">
            <hr className="border-b-2 border-orange1 inline-block w-1/4 mb-2 sm: w-1/6" />
            <span className="text-4xl sm:text-m text-dark1 font-bold mx-4">
              Things To Do
            </span>
            <hr className="border-b-2 border-orange1 inline-block w-1/4 mb-2 sm: w-1/6" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mb-8 justify-center">
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/1.png"
            }
            title={"Visit Burj Khalifa"}
            text={
              "Marvel at the architecture of the iconic Burj Khalifa. Soar above the city with breathtaking panoramic views from the observation deck."
            }
          />
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/2.png"
            }
            title={"Desert Experiences"}
            text={
              "Adrenaline-fueled desert adventure with camel rides, ATV excursions, and the exhilaration of dune bashing"
            }
          />
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/3.png"
            }
            title={"Yacht Trips"}
            text={
              "Elevate your Dubai experience with a yacht tour, offering breathtaking views of the city. Enjoy a fancy breakfast or BBQ as you sail through Dubai Marina's scenic beauty."
            }
          />
          <CardStyle2
            imageSrc={
              "https://package-2.flamingovibe.com/images/activities/4.png"
            }
            title={"Theme Park Adventures"}
            text={
              "Immerse yourself in the pulse-pounding excitement of Dubai's world-class theme parks. Spend a day indulging in heart-pounding rides and captivating attractions."
            }
          />
        </div>
        <div className="h-auto md:h-[60vh] w-full bg-cover bg-center bg-no-repeat relative z-[1]">
          <div className="container h-full w-full">
            <h3 className="font-black text-3xl md:text-5xl text-dark1 text-center mt-10 md:mt-[100px]">
              Flamingistics
            </h3>
            <h5 className="font-semibold text-sm text-orange1 md:text-xl mt-5 text-primary text-center">
              Tempting information that will make Dubai your next destination
            </h5>
            <div className="flex justify-center items-center h-full w-full">
              <div className="flex justify-center items-center w-full flex-wrap">
                <div className="w-full md:w-1/3 ">
                  <div className="bg-transparent text-primary flex flex-col justify-center items-center rounded-2xl p-4">
                    <span>
                      <img
                        src="https://package-2.flamingovibe.com/svgs/numbers/1.svg"
                        alt=""
                      />
                    </span>
                    <h3 className="text-primary text-orange1 text-3xl md:text-5xl text-primary font-black text-[3rem] md:text-[5rem] mt-[10px]">
                      27°C
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-8">
                  <div className="bg-transparent text-primary flex flex-col justify-center items-center rounded-2xl p-4">
                    <span>
                      <img
                        src="https://package-2.flamingovibe.com/svgs/numbers/2.svg"
                        alt=""
                      />
                    </span>
                    <h3 className="text-primary text-orange1 text-3xl md:text-5xl text-primary font-black text-[3rem] md:text-[5rem] mt-[10px]">
                      33°C
                    </h3>
                  </div>
                </div>
                <div className="w-full md:w-1/3 p-8">
                  <div className="bg-transparent text-primary flex flex-col justify-center items-center rounded-2xl p-4">
                    <span>
                      <img
                        src="https://package-2.flamingovibe.com/svgs/numbers/3.svg"
                        alt=""
                      />
                    </span>
                    <h3 className="text-primary text-orange1 text-3xl md:text-5xl text-primary font-black text-[3rem] md:text-[5rem] mt-[10px]">
                      14M
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
