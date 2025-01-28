import React, { useCallback } from "react";
import { motion } from "motion/react";
import { SlideInDown } from "../../../slideInDown";

interface NavItemProps {
  text: string;
  closeMenu?: () => void;
}
const NavItem: React.FC<NavItemProps> = ({ text, closeMenu }) => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
    }
  }, []);
  return (
    <SlideInDown>
      <motion.p
        initial={{ rotate: 0, scale: 1, color: "inherit" }}
        whileHover={{
          rotate: [10, -10, 10, -10, 0],
          scale: 1.1,
          color: "var(--color-purple-600)",
        }}
        transition={{ duration: 0.3, ease: "easeInOut", type: "tween" }}
        className="font-bold text-xs lg:text-sm cursor-pointer"
        onClick={() => {
          switch (text) {
            case "HOME":
              scrollToSection("home");
              break;
            case "ABOUT":
              scrollToSection("about");
              break;
            case "PROJECTS":
              scrollToSection("projects");
              break;
            case "CONTACT":
              scrollToSection("contact");
              break;
            default:
              break;
          }
          closeMenu && closeMenu();
        }}
      >
        {text}
      </motion.p>
    </SlideInDown>
  );
};

export default NavItem;
