interface SectionLabelProps {
  children: string;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "56px",
        gap: "5px",
      }}
    >
      <span
        style={{
          fontSize: "22px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          color: "var(--text)",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>
      <div
        style={{
          width: "100%",
          height: "1px",
          background: "var(--faint)",
          opacity: 0.4,
        }}
      />
    </div>
  );
}
