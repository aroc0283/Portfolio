"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SectionLabel } from "./SectionLabel";

const projects = [
  {
    tag: "AI Automation",
    title: "Bazaarvoice Agent",
    blurb:
      "A RAG-based system that automates customer review responses on Bazaarvoice. It ingests past responses to learn brand voice and tone, then drafts contextual replies that match how I'd actually write them. Replaced a manual per-review workflow with one-click generation.",
    metric: "Manual → automated response drafting",
    status: "Active",
    screenshots: [
      "/screenshots/bazaarvoice/bv-1.png",
      "/screenshots/bazaarvoice/bv-2.png",
      "/screenshots/bazaarvoice/bv-3.png",
    ],
  },
  {
    tag: "Process Design",
    title: "Weekly Intelligence System",
    blurb:
      "A 19-question query framework feeding NotebookLM to produce weekly social intelligence briefs. Turned a manual 4-hour process into a repeatable 45-minute workflow.",
    metric: "4hrs → 45min weekly",
    status: "Active",
    screenshots: [
      "/screenshots/wis/wis-1.png",
      "/screenshots/wis/wis-2.png",
      "/screenshots/wis/wis-3.png",
    ],
  },
];

// ─── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999,
        background: "rgba(0,0,0,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        cursor: "zoom-out",
        backdropFilter: "blur(6px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "85vh",
          borderRadius: "8px",
          overflow: "hidden",
          border: "1px solid var(--border)",
          cursor: "default",
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={900}
          style={{ width: "auto", height: "auto", maxWidth: "90vw", maxHeight: "85vh", display: "block" }}
          unoptimized
        />
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: "rgba(20,20,20,0.8)",
            border: "1px solid var(--border)",
            borderRadius: "50%",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--faint)",
            fontSize: "16px",
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

// ─── Work section ────────────────────────────────────────────────────────────
export function Work() {
  useScrollReveal();

  return (
    <section id="work" style={{ padding: "30px 0 120px" }}>
      <div className="container">
        <SectionLabel>Selected Work</SectionLabel>
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delay={i + 1} />
        ))}
      </div>
    </section>
  );
}

interface Project {
  tag: string;
  title: string;
  blurb: string;
  metric: string;
  status: string;
  screenshots?: string[];
}

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const { tag, title, blurb, metric, status, screenshots } = project;
  const [hovered, setHovered] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {lightbox && (
        <Lightbox
          src={lightbox}
          alt={title}
          onClose={() => setLightbox(null)}
        />
      )}

      <div
        data-reveal
        data-delay={String(delay)}
        style={{
          borderTop: "1px solid var(--border)",
          transition: "border-color 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          borderColor: hovered ? "rgba(212,120,47,0.2)" : undefined,
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className="project-card"
          style={{
            display: "grid",
            gridTemplateColumns: "160px 1fr 180px",
            gap: "32px",
            padding: "40px 0",
            cursor: "default",
            transform: hovered ? "translateX(20px)" : "translateX(0)",
            transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          {/* Tag */}
          <div style={{ paddingTop: "6px" }}>
            <span
              style={{
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--muted)",
              }}
            >
              {tag}
            </span>
          </div>

          {/* Title + Blurb */}
          <div>
            <h3
              className="card-title"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "28px",
                fontWeight: 400,
                color: hovered ? "var(--accent)" : "var(--text)",
                margin: "0 0 12px",
                transition: "color 0.4s",
              }}
            >
              {title}
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.65,
                fontWeight: 300,
                color: "var(--muted)",
                maxWidth: "520px",
                margin: 0,
              }}
            >
              {blurb}
            </p>
          </div>

          {/* Metric + Status */}
          <div
            className="project-card-meta"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: "10px",
              paddingTop: "6px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "rgba(212,120,47,0.6)",
                textAlign: "right",
              }}
            >
              {metric}
            </span>
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.06em",
                color: "var(--faint)",
                border: "1px solid var(--border)",
                borderRadius: "999px",
                padding: "3px 10px",
                whiteSpace: "nowrap",
              }}
            >
              {status}
            </span>
          </div>
        </div>

        {/* Screenshot strip */}
        {screenshots && screenshots.length > 0 && (
          <div
            style={{
              display: "grid",
              gridTemplateRows: hovered ? "1fr" : "0fr",
              opacity: hovered ? 1 : 0,
              transition: "grid-template-rows 0.45s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease",
            }}
          >
            <div style={{ minHeight: 0, overflow: "hidden" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                paddingBottom: "40px",
              }}
            >
              {screenshots.map((src, idx) => (
                <div
                  key={idx}
                  onClick={() => setLightbox(src)}
                  style={{
                    borderRadius: "6px",
                    overflow: "hidden",
                    border: "1px solid var(--border)",
                    background: "rgba(255,255,255,0.02)",
                    cursor: "zoom-in",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(212,120,47,0.4)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor =
                      "var(--border)")
                  }
                >
                  <Image
                    src={src}
                    alt={`${title} screenshot ${idx + 1}`}
                    width={600}
                    height={400}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    unoptimized
                  />
                </div>
              ))}
            </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
