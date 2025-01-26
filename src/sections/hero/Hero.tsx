import React from "react";
import heroBackground from "../../assets/hero_bg.svg";
import { Reveal } from "../../components/reveal";
import { SideMenu } from "../components/sideMenu";
import { motion } from "motion/react";

const Hero: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-repeat h-[100vh] w-full flex flex-col gap-10 items-center justify-center"
      style={{
        background: `linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(${heroBackground})`,
      }}
    >
      <Reveal>
        <h2 className="font-bold text-3xl lg:text-5xl text-center">
          HEY, I'M ANKESH BANERJEE
        </h2>
      </Reveal>
      <div className="px-6 lg:px-80">
        <Reveal>
          <p className="text-sm lg:text-lg text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae vero
            provident doloribus velit suscipit numquam amet? Dolorem cumque aut
            tempore architecto, aliquam provident vero sed commodi deserunt iste
            sequi, praesentium possimus porro nostrum corrupti magnam.
          </p>
        </Reveal>
      </div>
      <motion.div
        initial={{
          y: 75,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        whileTap={{ scale: 0.8 }}
        className="px-10 lg:px-16 py-4 rounded-lg bg-purple-600 text-white cursor-pointer mt-6"
      >
        <p className="text-white font-semibold text-base lg:text-lg">
          PROJECTS
        </p>
      </motion.div>
      <SideMenu />
    </div>
  );
};

export default Hero;
