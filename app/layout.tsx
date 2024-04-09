import "./globals.css";
import React from "react";
import { Poppins } from "@next/font/google";

const pop = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-pop",
  subsets: ["latin"],
});

const YourPage = ({ children }: { children: any }) => {
  return (
    <html>
      <head></head>
      <body>
        <div className={`${pop.variable}`}>
          <div className="font-pop">{children}</div>
        </div>
      </body>
    </html>
  );
};

export default YourPage;
