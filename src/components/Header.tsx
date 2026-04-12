"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HeaderProps {
  onOpenSettings: () => void;
  totalLinkCount: number;
}

export function Header({ onOpenSettings, totalLinkCount }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1, ease: [0.0, 0.0, 0.2, 1.0] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: scrolled ? "rgba(17,19,28,0.75)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
        transition: "background-color 0.35s ease, backdrop-filter 0.35s ease",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
        {/* Left: wordmark */}
        <span
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 700,
            fontSize: "15px",
            letterSpacing: "-0.02em",
            color: "var(--on-surface)",
          }}
        >
          Portfolio
        </span>

        {/* Right: Settings */}
        <button
          onClick={onOpenSettings}
          aria-label="Open settings"
          className="relative flex items-center justify-center w-8 h-8 rounded-full transition-colors"
          style={{ color: "var(--on-surface-faint)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--on-surface)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--on-surface-faint)")}
        >
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>

          {totalLinkCount > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="absolute -top-1 -right-1 min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center text-white"
              style={{
                fontSize: "9px",
                fontWeight: 700,
                backgroundColor: "var(--primary-deep)",
                letterSpacing: "0",
              }}
            >
              {totalLinkCount}
            </motion.span>
          )}
        </button>
      </div>
    </motion.header>
  );
}
