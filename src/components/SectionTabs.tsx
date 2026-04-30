"use client";

import { motion, LayoutGroup } from "framer-motion";
import { SECTIONS } from "@/lib/config";
import type { SectionId, PortfolioConfig } from "@/lib/types";

interface SectionTabsProps {
  activeSection: SectionId;
  onSelect: (id: SectionId) => void;
  config: PortfolioConfig;
}

export function SectionTabs({ activeSection, onSelect, config }: SectionTabsProps) {
  return (
    <LayoutGroup>
      <div className="flex flex-wrap gap-1">
        {SECTIONS.map((section) => {
          const isActive = section.id === activeSection;
          const linkCount = config[section.id].links.length;

          return (
            <button
              key={section.id}
              onClick={() => onSelect(section.id)}
              className="relative px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors"
              style={{
                fontSize: "12px",
                fontWeight: isActive ? 600 : 400,
                fontFamily: "var(--font-inter), sans-serif",
                letterSpacing: "-0.01em",
                color: isActive ? "var(--on-surface)" : "var(--on-surface-faint)",
              }}
            >
              {isActive && (
                <motion.span
                  layoutId="section-tab-pill"
                  className="absolute inset-0 rounded-lg"
                  style={{ backgroundColor: "var(--surface-highest)" }}
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}

              <span className="relative z-10 flex items-center gap-1.5">
                {section.tabLabel}
                {linkCount > 0 && (
                  <span
                    className="inline-flex items-center justify-center rounded-full min-w-[15px] h-[15px] px-1"
                    style={{
                      fontSize: "9px",
                      fontWeight: 600,
                      backgroundColor: isActive
                        ? "rgba(147,197,253,0.22)"
                        : "rgba(255,255,255,0.06)",
                      color: isActive ? "var(--primary)" : "var(--on-surface-faint)",
                    }}
                  >
                    {linkCount}
                  </span>
                )}
              </span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
