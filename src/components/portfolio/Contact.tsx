"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface SavedLink {
  id: string;
  label: string;
  url: string;
}

// ─── Settings Modal ───────────────────────────────────────────────────────────
function SettingsModal({ onClose }: { onClose: () => void }) {
  const [links, setLinks] = useState<SavedLink[]>([]);
  const [label, setLabel] = useState("");
  const [url, setUrl] = useState("");

  // Load from localStorage on mount (client-only)
  useEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio-saved-links");
      if (stored) setLinks(JSON.parse(stored));
    } catch {}
  }, []);

  const persist = (updated: SavedLink[]) => {
    setLinks(updated);
    localStorage.setItem("portfolio-saved-links", JSON.stringify(updated));
  };

  const addLink = () => {
    const trimmedUrl = url.trim();
    if (!trimmedUrl) return;
    const newLink: SavedLink = {
      id: Date.now().toString(),
      label: label.trim() || trimmedUrl,
      url: trimmedUrl.startsWith("http") ? trimmedUrl : `https://${trimmedUrl}`,
    };
    persist([...links, newLink]);
    setLabel("");
    setUrl("");
  };

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
        background: "rgba(10,9,8,0.62)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--bg)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "32px",
          width: "480px",
          maxWidth: "90vw",
          maxHeight: "80vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display), serif",
              fontSize: "22px",
              fontWeight: 400,
              color: "var(--text)",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Saved Links
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "transparent",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
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

        {/* Add link form */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
          <input
            type="text"
            placeholder="Label (optional)"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid var(--border)",
              borderRadius: "4px",
              padding: "10px 14px",
              color: "var(--text)",
              fontSize: "14px",
              outline: "none",
              fontFamily: "inherit",
            }}
          />
          <div style={{ display: "flex", gap: "8px" }}>
            <input
              type="text"
              placeholder="URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addLink()}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                padding: "10px 14px",
                color: "var(--text)",
                fontSize: "14px",
                outline: "none",
                fontFamily: "inherit",
              }}
            />
            <button
              onClick={addLink}
              style={{
                background: "var(--accent)",
                color: "#141414",
                border: "none",
                borderRadius: "4px",
                padding: "10px 18px",
                fontSize: "13px",
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: "0.04em",
                whiteSpace: "nowrap",
              }}
            >
              Add
            </button>
          </div>
        </div>

        {/* Link list */}
        {links.length === 0 ? (
          <p
            style={{
              fontSize: "14px",
              color: "var(--faint)",
              textAlign: "center",
              padding: "20px 0",
              margin: 0,
            }}
          >
            No links saved yet.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {links.map((link) => (
              <div
                key={link.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid var(--border)",
                  borderRadius: "4px",
                }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    color: "var(--accent)",
                    fontSize: "14px",
                    textDecoration: "none",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {link.label}
                </a>
                <button
                  onClick={() => persist(links.filter((l) => l.id !== link.id))}
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "var(--faint)",
                    cursor: "pointer",
                    fontSize: "18px",
                    lineHeight: 1,
                    padding: "0 4px",
                    flexShrink: 0,
                  }}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Contact section ──────────────────────────────────────────────────────────
export function Contact() {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const clickTimesRef = useRef<number[]>([]);

  const handleCopyrightClick = () => {
    const now = Date.now();
    // Keep only clicks within the last 5 seconds
    clickTimesRef.current = [...clickTimesRef.current, now].filter(
      (t) => now - t < 5000
    );
    if (clickTimesRef.current.length >= 5) {
      clickTimesRef.current = [];
      setSettingsOpen(true);
    }
  };

  return (
    <>
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}

      <section id="contact" style={{ padding: "140px 0 80px" }}>
        <div className="container" style={{ textAlign: "center" }}>
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
                el.style.boxShadow = "0 0 40px rgba(37,99,235,0.22)";
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

          {/* Copyright — click 5× in 5s to open settings */}
          <p
            onClick={handleCopyrightClick}
            style={{
              marginTop: "64px",
              fontSize: "12px",
              color: "var(--faint)",
              letterSpacing: "0.06em",
              cursor: "default",
              userSelect: "none",
            }}
          >
            © 2026 Austin Rockne
          </p>
        </div>
      </section>
    </>
  );
}
