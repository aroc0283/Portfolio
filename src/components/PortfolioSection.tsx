"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { SectionMeta, SectionData } from "@/lib/types";
import { LinkChips } from "./LinkChips";
import { EmptyState } from "./EmptyState";

interface PortfolioSectionProps {
  section: SectionMeta;
  data: SectionData;
  index: number;
}

const EASE: [number, number, number, number] = [0.0, 0.0, 0.2, 1.0];

// Alternating surface tiers — tonal separation, no lines
const SURFACE_COLORS = [
  "var(--surface)",
  "var(--surface-low)",
  "var(--surface)",
  "var(--surface-low)",
  "var(--surface)",
  "var(--surface-low)",
  "var(--surface)",
];

export function PortfolioSection({ section, data, index }: PortfolioSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const hasContent = data.links.length > 0 || data.notes.trim().length > 0;
  const bg = SURFACE_COLORS[index % SURFACE_COLORS.length];

  return (
    <section
      ref={ref}
      style={{ backgroundColor: bg, position: "relative" }}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-14 md:py-20" style={{ position: "relative", zIndex: 1 }}>
        {/* Decorative number — inside content container, behind everything via z-index -1 */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-0.1em",
            left: 0,
            fontFamily: "Inter, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(120px, 16vw, 220px)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
            color: "var(--primary-deep)",
            opacity: 0.35,
            userSelect: "none",
            pointerEvents: "none",
            whiteSpace: "nowrap",
            maskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to left, black 0%, rgba(0,0,0,0.85) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.15) 75%, transparent 100%)",
            zIndex: -1,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row md:gap-16 lg:gap-24">
            {/* Left: Title */}
            <motion.div
              className="md:w-[40%] flex-shrink-0"
              variants={{
                hidden: { opacity: 0, x: -16 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <h2
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(20px, 2.4vw, 26px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  color: "var(--on-surface)",
                  marginBottom: "16px",
                }}
              >
                {section.title}
              </h2>
            </motion.div>

            {/* Right: Description + content */}
            <motion.div
              className="flex-1"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "15px",
                  lineHeight: 1.75,
                  color: "var(--on-surface-muted)",
                }}
              >
                {section.description}
              </p>

              {data.notes.trim() && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "16px 20px",
                    backgroundColor: "var(--surface-high)",
                    borderRadius: "12px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      lineHeight: 1.7,
                      color: "var(--on-surface-mid)",
                    }}
                  >
                    {data.notes}
                  </p>
                </div>
              )}

              {data.links.length > 0 ? (
                <LinkChips links={data.links} />
              ) : (
                !hasContent && <EmptyState sectionTitle={section.title} />
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
