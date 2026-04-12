export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0" }}>
      <div
        className="container footer-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "12px",
          color: "var(--faint)",
        }}
      >
        <span>© 2026 Austin W.</span>
        <span>Built as a product, not a project.</span>
      </div>
    </footer>
  );
}
