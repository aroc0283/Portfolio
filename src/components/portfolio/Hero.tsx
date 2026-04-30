"use client";

import Image from "next/image";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Hero() {
  useScrollReveal();
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
        background: "#eeeef0",
      }}
    >
      {/* Flickering grid background — extends below hero and fades out */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "calc(100% + 320px)",
          zIndex: 0,
          maskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 100%)",
        }}
      >
        <FlickeringGrid
          color="rgb(29, 78, 216)"
          maxOpacity={0.22}
          flickerChance={0.1}
          squareSize={4}
          gridGap={6}
        />
      </div>
      {/* Main content */}
      <div
        className="container hero-content"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: "100px",
          paddingBottom: "60px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Two-column grid — label is inside left col so photo tops align */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 408px",
            gap: "67px",
            alignItems: "start",
          }}
        >
          {/* Left: label → headline → subhead */}
          <div>
            <p
              data-reveal
              data-delay="1"
              style={{
                fontSize: "14.4px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "var(--muted)",
                margin: "0 0 43px",
              }}
            >
              Community &amp; Social Management
            </p>

            <h1
              data-reveal
              data-delay="2"
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(46px, 6.6vw, 91px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                margin: "0 0 34px",
                fontWeight: 400,
              }}
            >
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Less</em>{" "}
              guesswork.<br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>More</em>{" "}
              framework. Building systems that scale your social media.
            </h1>

            <p
              data-reveal
              data-delay="3"
              style={{
                fontSize: "20px",
                lineHeight: 1.65,
                fontWeight: 300,
                color: "var(--muted)",
                maxWidth: "576px",
                margin: 0,
              }}
            >
              I’m a social copywriter and workflow builder who helps brands respond faster, sound more human, and build repeatable systems for the messy, high-volume work behind social media and community management
            </p>
          </div>

          {/* Right: photo + name */}
          <div
            data-reveal
            data-delay="4"
            className="hero-photo"
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div style={{ position: "relative", width: "100%" }}>
              {/* Accent backdrop */}
              <div style={{ position: "absolute", inset: 0, borderRadius: "20px", background: "var(--accent)", transform: "translate(14px, 14px)", zIndex: 0 }} />
              {/* Photo */}
              <div style={{ position: "relative", zIndex: 1, width: "100%", borderRadius: "20px", overflow: "hidden", border: "1px solid var(--border)" }}>
                <Image
                  src="/headshot.png"
                  alt="Austin Rockne"
                  width={798}
                  height={1007}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                  unoptimized
                />
              </div>
            </div>
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "54px",
                fontWeight: 400,
                color: "var(--text)",
                margin: "29px 0 0",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Austin Rockne
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
