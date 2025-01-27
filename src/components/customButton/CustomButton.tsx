import React from "react";
import { SlideInUp } from "../slideInUp";

const CustomButton: React.FC<{
  onClick: () => void;
  text: string;
  styles?: string;
}> = ({ onClick, text, styles }) => {
  return (
    <SlideInUp
      motionProps={{
        whileTap: {
          scale: 0.8,
        },
      }}
    >
      <div
        className={`px-10 lg:px-16 py-3 lg:py-4 rounded-lg bg-purple-600 text-white cursor-pointer shadow-lg ${
          styles ?? ""
        }`}
        onClick={onClick}
      >
        <p className="text-white font-semibold text-base lg:text-lg">{text}</p>
      </div>
    </SlideInUp>
  );
};

export default CustomButton;
