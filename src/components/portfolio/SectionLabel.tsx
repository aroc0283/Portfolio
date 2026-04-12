interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
        marginBottom: "56px",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "var(--faint)",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <div
        style={{
          flex: 1,
          height: "1px",
          background: "var(--faint)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
