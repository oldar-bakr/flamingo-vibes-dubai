// YourPage.js
import "./globals.css";
import React from "react";
import { Poppins } from "@next/font/google";
import Home from "./page";

const pop = Poppins({
  weight: ["100","200","300","400","500","600","700","800","900"],
  variable: "--font-pop",
  subsets: ["latin"],
});

const YourPage = ({ children }: { children: any }) => {
  return (
    <div className={`${pop.variable}`}>
      <div className="font-pop">{children}</div>
    </div>
  );
};

export default YourPage;
