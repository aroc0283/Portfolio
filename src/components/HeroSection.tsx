"use client";

import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import type { Link } from "@/lib/types";
import { LinkChips } from "./LinkChips";

interface HeroSectionProps {
  introLinks: Link[];
}

const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

export function HeroSection({ introLinks }: HeroSectionProps) {
  const [showScroll, setShowScroll] = useState(true);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setShowScroll(v < 80));
    return unsub;
  }, [scrollY]);

  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroY = useTransform(scrollY, [0, 440], [0, 65]);

  return (
    <section
      className="relative flex items-center min-h-dvh pt-20 pb-16"
      style={{ zIndex: 1 }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 w-full">
        <motion.div style={{ y: heroY, opacity: heroOpacity }}>

          {/* Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.5, ease: EASE }}
            style={{ marginBottom: "24px" }}
          >
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid var(--outline-orange)",
                flexShrink: 0,
              }}
            >
              <Image
                src="/headshot.png"
                alt="Austin Rockne"
                width={72}
                height={72}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                priority
              />
            </div>
          </motion.div>

          {/* Eyebrow — name · role */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5, ease: EASE }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--on-surface-faint)",
              marginBottom: "28px",
            }}
          >
            Austin Rockne&nbsp;&nbsp;·&nbsp;&nbsp;Brand Community &amp; Social Media
          </motion.p>

          {/* Headline — clip reveal, two lines */}
          <div style={{ marginBottom: "32px" }}>
            {/* Line 1 */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.28, duration: 0.7, ease: EASE }}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 6vw, 76px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                  color: "var(--on-surface)",
                }}
              >
                I build{" "}
                <span className="gradient-text">communities</span>
              </motion.h1>
            </div>

            {/* Line 2 */}
            <div style={{ overflow: "hidden" }}>
              <motion.h1
                initial={{ y: "105%" }}
                animate={{ y: "0%" }}
                transition={{ delay: 0.38, duration: 0.7, ease: EASE }}
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(36px, 6vw, 76px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.0,
                  color: "var(--on-surface)",
                }}
              >
                that drive culture.
              </motion.h1>
            </div>
          </div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.55, ease: EASE }}
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.7,
              color: "var(--on-surface-muted)",
              maxWidth: "480px",
              marginBottom: "36px",
            }}
          >
            Brand community strategist. I build the spaces where audiences
            become advocates — and the strategies that keep them there.
          </motion.p>

          {/* Intro links */}
          {introLinks.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.45, ease: EASE }}
            >
              <LinkChips links={introLinks} />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <AnimatePresence>
        {showScroll && (
          <motion.div
            key="scroll-hint"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.35, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            style={{ color: "var(--on-surface-faint)" }}
          >
            <motion.svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            >
              <path d="M10 4v12M5 11l5 5 5-5" />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
