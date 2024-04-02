// YourPage.js
import "./globals.css";
import React from "react";
import BottomBar from "../components/BottomBar";

const YourPage = () => {
  return (
    <div className="bg-black">
      {/* Your page content */}
      <h1>This is your page content.</h1>
      <BottomBar />
    </div>
  );
};

export default YourPage;
