"use client";

import Link from "next/link";
import Image from "next/image";
import { Work } from "@/components/portfolio/Work";
import { Framework } from "@/components/portfolio/Framework";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

export default function AltPage() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <style>{`
        /* ── Portrait ─────────────────────────────────────────────── */
        .alt-portrait-wrap {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          z-index: 2;
          -webkit-mask-image:
            linear-gradient(to right, transparent, black 8%, black 92%, transparent),
            linear-gradient(to bottom, black 82%, transparent 100%);
          -webkit-mask-composite: source-in;
          mask-image:
            linear-gradient(to right, transparent, black 8%, black 92%, transparent),
            linear-gradient(to bottom, black 82%, transparent 100%);
          mask-composite: intersect;
        }
        .alt-portrait-img {
          height: 95dvh;
          width: auto;
          max-width: 100%;
          display: block;
        }

        /* ── Name ─────────────────────────────────────────────────── */
        .alt-name-row {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 28%;
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 3vw;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }
        .alt-name-span {
          font-family: var(--font-block), sans-serif;
          font-size: clamp(56px, 10vw, 160px);
          font-weight: 400;
          color: var(--text);
          letter-spacing: -0.02em;
          line-height: 1;
          white-space: nowrap;
        }

        /* ── Below-hero content ───────────────────────────────────── */
        .alt-hero-content {
          padding: 56px 5vw 80px;
          text-align: center;
        }

        /* ── Mobile ───────────────────────────────────────────────── */
        @media (max-width: 640px) {
          .alt-portrait-wrap {
            -webkit-mask-image: linear-gradient(to bottom, black 72%, transparent 100%);
            mask-image: linear-gradient(to bottom, black 72%, transparent 100%);
          }
          .alt-portrait-img {
            height: 78dvh;
            max-width: 92vw;
          }
          .alt-name-row {
            bottom: 26%;
          }
          .alt-name-span {
            font-size: clamp(36px, 11vw, 72px);
          }
          .alt-hero-content {
            padding: 36px 6vw 56px;
          }
        }
      `}</style>

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
      <section style={{ position: "relative", height: "100dvh", overflow: "hidden" }}>
        {/* Name — behind portrait, always spread edge-to-edge */}
        <div className="alt-name-row">
          <span className="alt-name-span">AUSTIN</span>
          <span className="alt-name-span">ROCKNE</span>
        </div>

        {/* Portrait — centered, fades at edges and bottom */}
        <div className="alt-portrait-wrap">
          <Image
            src="/headshot (no background.png"
            alt="Austin Rockne"
            width={798}
            height={1007}
            className="alt-portrait-img"
            priority
            unoptimized
          />
        </div>
      </section>

      {/* ── Below-hero content ─────────────────────────────────────── */}
      <div className="alt-hero-content">
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
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>Less</em>{" "}
          guesswork.{" "}
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>More</em>{" "}
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

      {/* ── Sections ───────────────────────────────────────────────── */}
      <Work />
      <Framework />
      <Testimonials />
      <Contact />
    </main>
  );
}
