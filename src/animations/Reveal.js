import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const RevealY = ({ children }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const RevealX = ({ children }) => {
  const ref = useRef(null);

  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
      }}
    >
      {children}
    </motion.div>
  );
};
