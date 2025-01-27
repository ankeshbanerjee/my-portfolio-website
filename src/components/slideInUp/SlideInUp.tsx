import { MotionProps, motion } from "motion/react";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  motionProps?: MotionProps;
}

const SlideInUp: React.FC<Props> = ({ children, motionProps }) => {
  return (
    <motion.div
      initial={{
        y: 75,
        opacity: 0,
      }}
      whileInView={{
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
      {...motionProps}
    >
      {children}
    </motion.div>
  );
};

export default SlideInUp;
