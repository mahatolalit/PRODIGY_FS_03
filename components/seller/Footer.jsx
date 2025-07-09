import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse items-center justify-between text-left w-full px-10">
      <div className="flex items-center gap-4">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
        <div className="text-white bg-gradient-to-r from-purple-600 to-pink-500 px-2 py-1 rounded-lg text-xl font-extrabold tracking-tight shadow-md">
          Vix
        </div>
        <span className="text-xl font-bold text-gray-800 dark:text-gray-800">
          Kart
        </span>
      </div>
        <div className="hidden md:block h-7 w-px bg-gray-500/60"></div>
      </div>
      <div className="flex items-center gap-3">
        <a href="#">
          <Image src={assets.facebook_icon} alt="facebook_icon" />
        </a>
        <a href="#">
          <Image src={assets.twitter_icon} alt="twitter_icon" />
        </a>
        <a href="#">
          <Image src={assets.instagram_icon} alt="instagram_icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;