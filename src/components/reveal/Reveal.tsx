import React, { PropsWithChildren } from "react";
import { motion, MotionConfig } from "motion/react";

const Reveal: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="relative w-fit">
      <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
        <motion.div
          initial={{
            opacity: 0,
            y: 75,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          {children}
        </motion.div>
        <motion.div
          initial={{
            left: 0,
            y: 75,
          }}
          whileInView={{
            left: "100%",
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="absolute right-0 top-0 bg-black h-full"
        ></motion.div>
      </MotionConfig>
    </div>
  );
};

export default Reveal;
