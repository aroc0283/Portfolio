"use client";

import Link from "next/link";
import Image from "next/image";

export default function AltPage() {
  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100dvh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ── Navigation ─────────────────────────────────────────────── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: "20px 40px",
        }}
      >
        <Link
          href="/"
          style={{
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--faint)",
            border: "1px solid var(--border)",
            borderRadius: "4px",
            padding: "6px 14px",
            textDecoration: "none",
            background: "rgba(10,10,10,0.7)",
            backdropFilter: "blur(10px)",
          }}
        >
          Main Design
        </Link>
      </nav>

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0px",
        }}
      >
        {/* Hero unit — portrait + name share one coordinate system so they
            stay locked together at any zoom level or viewport size */}
        <div style={{ position: "relative", height: "58vh" }}>
          {/* Name — positioned relative to portrait, behind it */}
          <div
            style={{
              position: "absolute",
              top: "68%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "baseline",
              gap: "30em",
              zIndex: 1,
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-block), sans-serif",
                fontSize: "clamp(72px, 13vw, 210px)",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                marginLeft: "0.3em",
              }}
            >
              AUSTIN
            </span>
            <span
              style={{
                fontFamily: "var(--font-block), sans-serif",
                fontSize: "clamp(72px, 13vw, 210px)",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
              }}
            >
              ROCKNE
            </span>
          </div>

          {/* Portrait — z-index above name */}
          <div
            style={{
              height: "100%",
              position: "relative",
              zIndex: 2,
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 5%, black 98%, transparent), linear-gradient(to bottom, black 90%, transparent 100%)",
              WebkitMaskComposite: "source-in",
              maskImage:
                "linear-gradient(to right, transparent, black 5%, black 98%, transparent), linear-gradient(to bottom, black 90%, transparent 100%)",
              maskComposite: "intersect",
            }}
          >
            <Image
              src="/headshot (no background.png"
              alt="Austin Rockne"
              width={798}
              height={1007}
              style={{
                height: "100%",
                width: "auto",
                display: "block",
              }}
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Content — flows directly below portrait, centered */}
        <div
          style={{
            textAlign: "center",
            padding: "0 5vw",
            marginTop: "-20px",
            zIndex: 3,
          }}
        >
          <p
            style={{
              fontSize: "14.4px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              color: "var(--faint)",
              margin: "0 0 20px",
            }}
          >
            Community &amp; Social Management
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "clamp(32px, 4.5vw, 68px)",
              fontWeight: 400,
              color: "var(--text)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: "0 0 28px",
            }}
          >
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              Less
            </em>{" "}
            guesswork.{" "}
            <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
              More
            </em>{" "}
            framework.
            <br />
            Building systems that scale social.
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 1.2vw, 18px)",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "560px",
              margin: "0 auto",
            }}
          >
            Forward-thinking social copywriter and strategist building bespoke
            applications to solve complex community challenges. I leverage AI
            tooling and social intelligence to create scalable systems that
            amplify brand impact.
          </p>
        </div>
      </section>
    </main>
  );
}
