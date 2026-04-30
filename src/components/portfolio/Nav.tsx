"use client";

export function Nav() {
  const links = ["Work", "Approach", "Voices", "Contact"];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "rgba(238,238,240,0.86)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display), serif",
            fontSize: "20px",
            color: "var(--text)",
          }}
        >
          Austin W.
        </span>

        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "36px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                style={{
                  fontSize: "13px",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--muted)",
                  textDecoration: "none",
                  transition: "color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "var(--muted)")
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
