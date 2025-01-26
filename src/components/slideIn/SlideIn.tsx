import React, { PropsWithChildren } from "react";
import { motion } from "motion/react";

const SlideIn: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      initial={{
        y: -75,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      {children}
    </motion.div>
  );
};

export default SlideIn;
