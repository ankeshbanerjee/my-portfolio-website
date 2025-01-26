import React from "react";
import { motion } from "motion/react";
import { SlideIn } from "../../slideIn";

interface NavItemProps {
  text: string;
}
const NavItem: React.FC<NavItemProps> = ({ text }) => {
  return (
    <SlideIn>
      <motion.p
        initial={{ rotate: 0, scale: 1, color: "inherit" }}
        whileHover={{
          rotate: [10, -10, 10, -10, 0],
          scale: 1.1,
          color: "var(--color-purple-600)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
        className="font-bold text-xs lg:text-sm cursor-pointer"
      >
        {text}
      </motion.p>
    </SlideIn>
  );
};

export default NavItem;
