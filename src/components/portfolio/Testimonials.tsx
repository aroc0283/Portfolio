"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const testimonials = [
  {
    quote:
      "Austin has this weird ability to just nail the voice. Whether it's a comment, a DM, or a full post — he writes stuff that actually sounds like a person, not a brand trying to sound like a person. He's fast too. I've seen him crank out a week's worth of copy in a sitting and every piece lands.",
    name: "Kyle",
    role: "Team Lead, Social at Clearlink",
  },
  {
    quote:
      "Austin is the fastest person I've ever seen go from 'I don't know how to do this' to 'here's a working version.' You show him something once and he's already adapting it to solve a problem you hadn't thought of yet. Coaching him barely feels like coaching — it's more like pointing him in a direction and getting out of the way.",
    name: "Andrew",
    role: "Current Mentor",
  },
  {
    quote:
      "Most people in social are either strategic thinkers or technical builders.Austin's both, and it's not close. He's built tools for our team that saved us real hours every week — not theoretical efficiency, actual time back.",
    name: "Hillary",
    role: "VP of Social at Clearlink",
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
        display: "flex",
        flexDirection: "column",
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

      <div style={{ marginTop: "auto" }}>
        <p style={{ fontSize: "13px", color: "rgba(232,228,223,0.5)", margin: "0 0 4px" }}>
          {name}
        </p>
        <p style={{ fontSize: "12px", color: "var(--faint)", margin: 0 }}>
          {role}
        </p>
      </div>
    </div>
  );
}
