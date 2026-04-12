"use client";

import { motion } from "framer-motion";
import type { Link } from "@/lib/types";

interface LinkChipsProps {
  links: Link[];
}

const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

export function LinkChips({ links }: LinkChipsProps) {
  if (links.length === 0) return null;

  return (
    <motion.div
      className="flex flex-wrap gap-2 mt-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.06 } },
      }}
    >
      {links.map((link, i) => (
        <motion.a
          key={i}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: EASE } },
          }}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.18 }}
          className="inline-flex items-center gap-1.5 rounded-full"
          style={{
            padding: "7px 16px",
            backgroundColor: "var(--surface-high)",
            color: "var(--on-surface-muted)",
            fontSize: "13px",
            fontWeight: 500,
            fontFamily: "var(--font-inter), sans-serif",
            letterSpacing: "-0.01em",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--surface-highest)";
            el.style.color = "var(--primary)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.backgroundColor = "var(--surface-high)";
            el.style.color = "var(--on-surface-muted)";
          }}
        >
          <span className="truncate max-w-[220px]">{link.label || link.url}</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.5, flexShrink: 0 }}
          >
            <path d="M2 8L8 2M8 2H4.5M8 2V5.5" />
          </svg>
        </motion.a>
      ))}
    </motion.div>
  );
}
