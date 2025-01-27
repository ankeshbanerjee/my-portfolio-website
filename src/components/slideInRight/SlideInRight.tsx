import { MotionProps, motion, useAnimation, useInView } from "motion/react";
import React, { PropsWithChildren, useEffect, useRef } from "react";

interface Props extends PropsWithChildren {
  motionProps?: MotionProps;
}

const SlideInRight: React.FC<Props> = ({ children, motionProps }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
  });
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start({
        x: 0,
        opacity: 1,
      });
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{
          x: -1000,
          opacity: 0,
        }}
        animate={control}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
        {...motionProps}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default SlideInRight;
