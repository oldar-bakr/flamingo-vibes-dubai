// YourPage.js
import "./globals.css";
import React from "react";
import { Poppins } from "@next/font/google";
import Home from "./page";

const pop = Poppins({
  weight: ["100"],
  variable: "--font-pop",
  subsets: ["latin"],
});

const YourPage = () => { 
  return (
    <div className={`${pop.variable}`}>
      <div className="font-pop">
        <Home/>
      </div>
    </div>
  );
};

export default YourPage;
