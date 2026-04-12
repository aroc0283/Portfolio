import Link from "next/link";

export default function AltPage() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Link
        href="/"
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
          background: "rgba(10,10,10,0.7)",
          backdropFilter: "blur(10px)",
        }}
      >
        Main Design
      </Link>

      <p
        style={{
          fontSize: "13px",
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "var(--faint)",
        }}
      >
        Alternative design — build it out here.
      </p>
    </main>
  );
}
