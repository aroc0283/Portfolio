"use client";

import { useScroll, useSpring, motion } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: "linear-gradient(90deg, var(--primary-deep) 0%, var(--primary) 100%)",
        zIndex: 9999,
      }}
    />
  );
}
