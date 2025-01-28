import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black px-10 lg:px-32 py-16 lg:py-20">
      <div className="w-full flex flex-wrap-reverse justify-between items-end gap-10 mb-16">
        <div className="w-full lg:w-1/3 space-y-4">
          <h1 className="font-bold text-lg lg:text-xl text-white">
            ANKESH BANERJEE
          </h1>
          <p className="text-xs lg:text-sm text-white">
            I am a passionate Mobile App Developer, dedicated to creating
            intuitive and innovative digital experiences.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-lg lg:text-xl text-white">SOCIAL</h1>
          <div className="flex flex-wrap justify-start items-center">
            <div
              className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/ankeshbanerjee", "_blank")
              }
            >
              <FaGithub className="size-5 lg:size-6" color="white" />
            </div>
            <div
              className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ankesh-banerjee-985911231/",
                  "_blank"
                )
              }
            >
              <FaLinkedin className="size-5 lg:size-6" color="white" />
            </div>
            <div
              className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer"
              onClick={() => window.open("https://medium.com/@banerjeeankesh")}
            >
              <FaMedium className="size-5 lg:size-6" color="white" />
            </div>
            <a
              className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer"
              href="mailto:banerjeeankesh@gmail.com"
            >
              <FaEnvelope className="size-5 lg:size-6" color="white" />
            </a>
            <div
              className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100073274455002"
                )
              }
            >
              <FaFacebook className="size-5 lg:size-6" color="white" />
            </div>
            <div
              className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer"
              onClick={() =>
                window.open("https://www.instagram.com/being__ankesh/")
              }
            >
              <FaInstagram className="size-5 lg:size-6" color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 w-full border-t-gray-600 border-t-[0.25px]" />
      <p className="text-white text-center text-xs mt-10">
        © Copyright 2025 . Made by <strong>Ankesh Banerjee</strong>
      </p>
    </div>
  );
};

export default Footer;
