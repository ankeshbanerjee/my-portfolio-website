import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Hamburger from "hamburger-react";
import { SlideInDown } from "../slideInDown";
import { NavItem } from "./components/navItem";

const Navbar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="fixed w-full z-50">
      <div className="w-full relative flex justify-between items-center px-5 py-3 lg:px-10 lg:py-6 bg-white z-40">
        <SlideInDown>
          <h2 className="font-bold lg:text-xl cursor-pointer">ANKESH</h2>
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
                y: 0,
              }}
              exit={{
                y: "-100%",
              }}
              transition={{
                type: "tween",
              }}
              className="fixed flex flex-col gap-6 justify-center w-full items-center py-6 z-30 bg-white"
            >
              <NavItem text={"HOME"} />
              <NavItem text={"ABOUT"} />
              <NavItem text={"PROJECTS"} />
              <NavItem text={"CONTACT"} />
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
