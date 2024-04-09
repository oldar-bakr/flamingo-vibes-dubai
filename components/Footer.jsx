import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPiedPiper,
  faSnapchat,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark1 text-white py-20 w-full mb-16">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4 text-5xl text-center ">Habibi, Travel To Dubai!</p>
        <div className="flex flex-col justify-center items-center mb-4">
          <Link
            href="https://api.whatsapp.com/send?phone=YOUR_WHATSAPP_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2xl"
              className="text-orange1 w-[30px] scale2 py-4"
            />
          </Link>
          <Link
            href="mailto:info@flamingovibe.com"
            className="mr-4 text-xl pt-4"
          >
            info@flamingovibe.com
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/your-instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2xl"
              className="text-orange1 w-[30px]"
            />
          </Link>
          <Link
            href="https://www.facebook.com/your-facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="2xl"
              className="text-orange1 w-[30px]"
            />
          </Link>
          <Link
            href="https://www.snapchat.com/add/your-snapchat"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faSnapchat}
              size="2xl"
              className="text-orange1 w-[30px]"
            />
          </Link>
          <Link
            href="https://www.tiktok.com/@your-tiktok"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              size="2xl"
              className="text-orange1 w-[30px]"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
