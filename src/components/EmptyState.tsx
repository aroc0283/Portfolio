interface EmptyStateProps {
  sectionTitle: string;
}

export function EmptyState({ sectionTitle }: EmptyStateProps) {
  return (
    <div
      className="mt-6 rounded-xl py-7 px-5"
      style={{
        backgroundColor: "var(--surface-high)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          color: "var(--on-surface-faint)",
          lineHeight: 1.5,
        }}
      >
        No content added to{" "}
        <span style={{ color: "var(--on-surface-muted)" }}>{sectionTitle}</span> yet.{" "}
        <span style={{ opacity: 0.6 }}>Open settings to add links and notes.</span>
      </p>
    </div>
  );
}
