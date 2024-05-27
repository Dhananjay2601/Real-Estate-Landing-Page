import { animate, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Counter = ({ from, to }) => {
  const ref = useRef();
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    const node = ref.current;
    // if (!inView) return;
    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to, inView]);

  return <p ref={ref} />;
};

export default Counter;
