"use client";

import Image from "next/image";
import { useLocalTime } from "@/hooks/useLocalTime";

export function Hero() {
  const time = useLocalTime();

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        }}
      >
        {/* Two-column grid — label is inside left col so photo tops align */}
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 340px",
            gap: "56px",
            alignItems: "start",
          }}
        >
          {/* Left: label → headline → subhead */}
          <div>
            <p
              style={{
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                color: "var(--faint)",
                margin: "0 0 36px",
              }}
            >
              Community &amp; Social Intelligence
            </p>

            <h1
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "clamp(38px, 5.5vw, 76px)",
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                margin: "0 0 28px",
                fontWeight: 400,
              }}
            >
              I build systems that make{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>social</em>{" "}
              work{" "}
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>smarter</em>
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                fontWeight: 300,
                color: "var(--muted)",
                maxWidth: "480px",
                margin: 0,
              }}
            >
              Community manager and social strategist who builds the tools he
              wishes existed. Currently on the SocialX team at Clearlink,
              working at the intersection of social intelligence, AI tooling,
              and community systems.
            </p>
          </div>

          {/* Right: photo + name */}
          <div
            className="hero-photo"
            style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
          >
            <div
              style={{
                width: "340px",
                borderRadius: "6px",
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
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
            <p
              style={{
                fontFamily: "var(--font-display), serif",
                fontSize: "45px",
                fontWeight: 400,
                color: "var(--text)",
                margin: "24px 0 0",
                letterSpacing: "-0.03em",
                lineHeight: 1,
              }}
            >
              Austin Rockne
            </p>
          </div>
        </div>
      </div>

      {/* Bottom meta row */}
      <div
        className="container hero-meta"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "48px",
          fontSize: "13px",
          color: "var(--faint)",
          letterSpacing: "0.04em",
        }}
      >
        <span>Salt Lake City, UT</span>
        <span>{time ? `${time} MST` : ""}</span>
      </div>

      {/* Scroll line */}
      <div
        className="scroll-line"
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          height: "80px",
          background: "linear-gradient(to bottom, rgba(212,120,47,0.4), transparent)",
        }}
      />
    </section>
  );
}
