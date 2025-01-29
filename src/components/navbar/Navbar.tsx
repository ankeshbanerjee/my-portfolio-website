import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hamburger from "hamburger-react";
import { SlideInDown } from "../slideInDown";
import { NavItem } from "./components/navItem";
import { ImageAssets } from "../../assets";

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="fixed w-full z-50 shadow-lg shadow-black/5">
      <div className="w-full relative flex justify-between items-center px-5 py-3 lg:px-10 lg:py-6 bg-white z-40">
        <SlideInDown>
          <img
            src={ImageAssets.logo}
            alt="logo"
            className="cursor-pointer h-8"
            onClick={() => {
              document.getElementById("home")?.scrollIntoView();
            }}
          />
        </SlideInDown>
        <div className="hidden lg:flex gap-14 px-6">
          <NavItem text={"HOME"} />
          <NavItem text={"ABOUT"} />
          <NavItem text={"PROJECTS"} />
          <NavItem text={"CONTACT"} />
        </div>
        <div className="lg:hidden cursor-pointer">
          <SlideInDown>
            <Hamburger toggled={isExpanded} toggle={setIsExpanded} size={20} />
          </SlideInDown>
        </div>
      </div>
      <AnimatePresence>
        {isExpanded && (
          <>
            <motion.div
              initial={{
                y: "-100%",
              }}
              animate={{
                y: -1,
              }}
              exit={{
                y: "-100%",
              }}
              transition={{
                type: "tween",
              }}
              className="fixed flex flex-col gap-6 justify-center w-full items-center py-6 z-30 bg-white"
            >
              <NavItem text={"HOME"} closeMenu={() => setIsExpanded(false)} />
              <NavItem text={"ABOUT"} closeMenu={() => setIsExpanded(false)} />
              <NavItem
                text={"PROJECTS"}
                closeMenu={() => setIsExpanded(false)}
              />
              <NavItem
                text={"CONTACT"}
                closeMenu={() => setIsExpanded(false)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed w-[100vw] h-[100vh] bg-black z-10 top-0 left-0"
              onClick={() => setIsExpanded(false)}
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
