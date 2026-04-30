"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

export function ContactCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "var(--surface-lowest)",
        position: "relative",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      {/* Decorative blue glow behind the text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-10%",
          left: "-5%",
          width: "50vw",
          height: "50vw",
          maxWidth: "500px",
          maxHeight: "500px",
          background: "radial-gradient(circle at center, rgba(37,99,235,0.1) 0%, transparent 65%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-20 md:py-28" style={{ position: "relative", zIndex: 1 }}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, ease: EASE }}
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--primary-deep)",
            marginBottom: "36px",
          }}
        >
          Get in Touch
        </motion.p>

        {/* Large editorial contact links */}
        <div className="flex flex-col">
          {[
            { label: "austin.rockne@gmail.com", href: "mailto:austin.rockne@gmail.com", delay: 0.08 },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/austin-rockne-9a0313398", delay: 0.18 },
          ].map(({ label, href, delay }) => (
            <div key={label} style={{ overflow: "hidden" }}>
              <motion.a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                initial={{ y: "105%" }}
                animate={isInView ? { y: "0%" } : { y: "105%" }}
                transition={{ duration: 0.62, ease: EASE, delay }}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(26px, 4.5vw, 52px)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.2,
                  color: "var(--on-surface)",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  paddingBottom: "4px",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--on-surface)";
                }}
              >
                {label}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ opacity: 0.4, flexShrink: 0, marginBottom: "2px" }}
                >
                  <path d="M4 16L16 4M16 4H8M16 4v8" />
                </svg>
              </motion.a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
