import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

const SlideInDown: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{
        y: -75,
        opacity: 0,
      }}
      animate={{
        // here whileInView is not used because it will be used for the navItems, and as initially they aren't in view, so whileInView will not be triggered
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      viewport={{
        once: true,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideInDown;
