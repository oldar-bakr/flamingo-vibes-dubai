// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '../fontawesome';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 fixed bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center">
        <p className="mb-4">Habibi, Travel To Dubai!</p>
        <div className="flex mb-4">
          <a href="https://api.whatsapp.com/send?phone=YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={["fab", "whatsapp"]} size="lg" />
          </a>
          <a href="mailto:info@flamingovibe.com" className="mr-4">info@flamingovibe.com</a>
        </div>
        <div className="flex">
          <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="lg" />
          </a>
          <a href="https://www.facebook.com/your-facebook" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="lg" />
          </a>
          <a href="https://www.snapchat.com/add/your-snapchat" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FontAwesomeIcon icon={["fab", "snapchat"]} size="lg" />
          </a>
          <a href="https://www.tiktok.com/@your-tiktok" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={["fab", "tiktok"]} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
