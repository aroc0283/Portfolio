"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const pillars = [
  {
    num: "01",
    name: "Smart Social Listening",
    description:
      "Instead of guessing what the timeline wants, I use custom tools to organize messy social chatter. I track the data to spot trends early, ensuring we make strategy decisions based on facts, not just gut feelings.",
  },
  {
    num: "02",
    name: "Scaling Brand Voice",
    description:
      "Good copy has to scale without losing its soul. I build systems that learn exactly how a brand speaks. By letting AI handle the routine drafting, I free up my time to focus on the big, creative campaign hooks that require a human touch",
  },
  {
    num: "03",
    name: "Meaningful Engagement",
    description:
      "Community management shouldn't mean drowning in manual replies. I automate the busywork of standard customer care so that my energy goes toward the actual human-to-human relationship building that turns followers into loyal fans.",
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
        background: "var(--card)",
        padding: "36px 32px",
        transition: "background 0.3s",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "#c9c9cb")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "var(--card)")
      }
    >
      <span
        style={{
          display: "block",
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "rgba(37,99,235,0.72)",
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
