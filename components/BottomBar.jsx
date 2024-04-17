import React from "react";

const BottomBar = () => {
  return (
    <div className="bg-dark1 text-white p-4 fixed bottom-0 w-full z-50 flex justify-center items-center">
      <a
        href="https://api.whatsapp.com/send/?phone=905495999793&text&type=phone_number&app_absent=0"
        className="rounded-2xl bg-orange1 text-white px-[30px] py-[10px] text-[2rem] font-bold scale1"
      >
        BOOK NOW
      </a>
    </div>
  );
};

export default BottomBar;
