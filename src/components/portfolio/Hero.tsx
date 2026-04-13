"use client";

import Image from "next/image";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function Hero() {
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
          color="rgb(212, 120, 47)"
          maxOpacity={0.12}
          flickerChance={0.08}
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
                color: "var(--muted)",
                margin: "0 0 36px",
              }}
            >
              Community &amp; Social Management
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
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Less</em>{" "}
              guesswork.<br />
              <em style={{ color: "var(--accent)", fontStyle: "italic" }}>More</em>{" "}
              framework. Building systems that scale social.
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
              Forward-thinking social copywriter and strategist building bespoke applications to solve complex community challenges. Leveraging AI tooling and social intelligence to create scalable systems that amplify brand impact.
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

    </section>
  );
}
