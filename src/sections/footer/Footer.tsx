import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black px-10 lg:px-32 py-16 lg:py-20">
      <div className="w-full flex flex-wrap-reverse justify-between items-end gap-10 mb-16">
        <div className="w-full lg:w-1/3 space-y-4">
          <h1 className="font-bold text-lg lg:text-xl text-white">
            ANKESH BANERJEE
          </h1>
          <p className="text-xs lg:text-sm text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            odio necessitatibus quas adipisci? Inventore qui quos iusto, ex
            minima laborum.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="font-bold text-lg lg:text-xl text-white">SOCIAL</h1>
          <div className="flex flex-wrap justify-start items-center">
            <div className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer">
              <FaGithub className="size-5 lg:size-6" color="white" />
            </div>
            <div className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer">
              <FaLinkedin className="size-5 lg:size-6" color="white" />
            </div>
            <div className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer">
              <FaEnvelope className="size-5 lg:size-6" color="white" />
            </div>
            <div className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer">
              <FaFacebook className="size-5 lg:size-6" color="white" />
            </div>
            <div className="p-3 rounded-full hover:bg-white/15 transition duration-300 cursor-pointer">
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
