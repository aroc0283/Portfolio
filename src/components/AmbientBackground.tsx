"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();
  const blob1Y = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {/* Primary burnt orange — top right, dominant */}
      <motion.div
        style={{
          y: blob1Y,
          position: "absolute",
          top: "-15vh",
          right: "-10vw",
          width: "55vw",
          height: "55vw",
          maxWidth: "620px",
          maxHeight: "620px",
          background: "radial-gradient(circle at center, rgba(29,78,216,0.22) 0%, rgba(59,130,246,0.14) 45%, transparent 72%)",
          filter: "blur(50px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
      />

      {/* Warm amber — mid-left, secondary depth */}
      <motion.div
        style={{
          y: blob2Y,
          position: "absolute",
          top: "40vh",
          left: "-18vw",
          width: "42vw",
          height: "42vw",
          maxWidth: "480px",
          maxHeight: "480px",
          background: "radial-gradient(circle at center, rgba(37,99,235,0.16) 0%, rgba(30,64,175,0.08) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
      />

      {/* Deep violet — bottom right, cool counterweight */}
      <motion.div
        style={{
          position: "absolute",
          bottom: "-20vh",
          right: "5vw",
          width: "35vw",
          height: "35vw",
          maxWidth: "400px",
          maxHeight: "400px",
          background: "radial-gradient(circle at center, rgba(30,64,175,0.18) 0%, transparent 68%)",
          filter: "blur(70px)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3.5, ease: "easeOut", delay: 0.8 }}
      />
    </div>
  );
}
