"use client";

export function Contact() {
  return (
    <section id="contact" style={{ padding: "140px 0" }}>
      <div
        className="container"
        style={{ textAlign: "center" }}
      >
        <h2
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 400,
            color: "var(--text)",
            margin: "0 0 16px",
            letterSpacing: "-0.02em",
          }}
        >
          Let&apos;s build something together.
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: 1.6,
            fontWeight: 300,
            color: "var(--muted)",
            margin: "0 0 48px",
          }}
        >
          Two ways to reach me. Pick whichever fits.
        </p>

        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:austin.rockne@gmail.com"
            style={{
              display: "inline-block",
              background: "var(--accent)",
              color: "#141414",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 500,
              padding: "14px 32px",
              borderRadius: "4px",
              textDecoration: "none",
              transition: "background 0.3s, box-shadow 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent-hover)";
              el.style.boxShadow = "0 0 40px rgba(212,120,47,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "var(--accent)";
              el.style.boxShadow = "none";
            }}
          >
            Send an Email
          </a>

          <a
            href="https://calendly.com/austin-rockne"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "var(--text)",
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 500,
              padding: "13px 32px",
              borderRadius: "4px",
              border: "1px solid var(--border)",
              textDecoration: "none",
              transition: "border-color 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--accent)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--border)")
            }
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
