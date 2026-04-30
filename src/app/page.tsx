import Link from "next/link";
import { Hero } from "@/components/portfolio/Hero";
import { Work } from "@/components/portfolio/Work";
import { Framework } from "@/components/portfolio/Framework";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";

export default function Page() {
  return (
    <main style={{ background: "#eeeef0", minHeight: "100dvh" }}>
      <Link
        href="/alt"
        style={{
          position: "fixed",
          top: "16px",
          right: "20px",
          zIndex: 100,
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--faint)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: "6px 14px",
          textDecoration: "none",
          background: "rgba(238,238,240,0.78)",
          backdropFilter: "blur(10px)",
          transition: "color 0.2s, border-color 0.2s",
        }}
      >
        Alternative Design
      </Link>

      <Hero />
      <Work />
      <Framework />
      <Testimonials />
      <Contact />
    </main>
  );
}
