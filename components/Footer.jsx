import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-gray-500/30 text-gray-500">
        <div className="w-4/5">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push('/')}>
        <div className="text-white bg-gradient-to-r from-purple-600 to-pink-500 px-2 py-1 rounded-lg text-xl font-extrabold tracking-tight shadow-md">
          Vix
        </div>
        <span className="text-xl font-bold text-gray-800 dark:text-gray-800">
          Kart
        </span>
      </div>
          <p className="mt-6 text-sm">
            VixKart is your one-stop destination for quality products at unbeatable prices. Discover a seamless shopping experience, fast delivery, and top-notch customer support—shop smarter with VixKart today!
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>draky.ubuntu@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        By Lalit Mahato. &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;