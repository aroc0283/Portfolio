"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    num: "01",
    name: "Analyze",
    description:
      "Social listening, sentiment mapping, and trend velocity. Understanding what's happening before deciding what to do about it.",
  },
  {
    num: "02",
    name: "Resonate",
    description:
      "Content strategy and campaign architecture. Building narratives that meet people where they already are.",
  },
  {
    num: "03",
    name: "Engage",
    description:
      "Community management and customer care. Turning conversations into relationships and relationships into trust.",
  },
];

export function Framework() {
  useScrollReveal();

  return (
    <section
      id="approach"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "80px 0",
      }}
    >
      <div className="container">
        <SectionLabel>How I Think</SectionLabel>

        <div
          className="framework-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          {pillars.map((p, i) => (
            <PillarCard key={p.num} pillar={p} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Pillar {
  num: string;
  name: string;
  description: string;
}

function PillarCard({ pillar, delay }: { pillar: Pillar; delay: number }) {
  const { num, name, description } = pillar;

  return (
    <div
      data-reveal
      data-delay={String(delay)}
      style={{
        background: "rgba(255,255,255,0.015)",
        padding: "36px 32px",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.015)")
      }
    >
      <span
        style={{
          display: "block",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(212,120,47,0.6)",
          marginBottom: "16px",
        }}
      >
        {num}
      </span>
      <h3
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "22px",
          fontWeight: 400,
          color: "var(--text)",
          margin: "0 0 14px",
        }}
      >
        {name}
      </h3>
      <p
        style={{
          fontSize: "14px",
          lineHeight: 1.65,
          fontWeight: 300,
          color: "var(--muted)",
          margin: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
}
