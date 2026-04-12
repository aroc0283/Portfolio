"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
  {
    quote:
      "Austin doesn't just manage communities — he builds systems that make communities self-sustaining. He thinks in frameworks where most people think in posts.",
    name: "Former Manager",
    role: "Director of Marketing",
  },
  {
    quote:
      "What sets Austin apart is speed-to-insight. He'll have a prototype running before most people finish their brief. And it usually works.",
    name: "Collaborator",
    role: "Product Lead",
  },
  {
    quote:
      "He has a rare ability to translate messy business problems into clear, buildable solutions. The kind of person who makes everyone around him sharper.",
    name: "Mentor",
    role: "VP of Strategy",
  },
];

export function Testimonials() {
  useScrollReveal();

  return (
    <section id="voices" style={{ padding: "120px 0" }}>
      <div className="container">
        <SectionLabel>What Others Say</SectionLabel>

        <div
          className="testimonials-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} delay={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  const { quote, name, role } = testimonial;

  return (
    <div
      data-reveal
      data-delay={String(delay)}
      style={{
        position: "relative",
        background: "rgba(255,255,255,0.02)",
        padding: "36px 32px 32px",
        transition: "background 0.3s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.02)")
      }
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: "12px",
          right: "24px",
          fontFamily: "var(--font-display), serif",
          fontSize: "64px",
          lineHeight: 1,
          color: "rgba(212,120,47,0.12)",
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        &ldquo;
      </span>

      <blockquote
        style={{
          fontFamily: "var(--font-display), serif",
          fontSize: "18px",
          fontStyle: "italic",
          lineHeight: 1.6,
          color: "rgba(232,228,223,0.7)",
          margin: "0 0 24px",
          padding: 0,
        }}
      >
        {quote}
      </blockquote>

      <p style={{ fontSize: "13px", color: "rgba(232,228,223,0.5)", margin: "0 0 4px" }}>
        {name}
      </p>
      <p style={{ fontSize: "12px", color: "var(--faint)", margin: 0 }}>
        {role}
      </p>
    </div>
  );
}
