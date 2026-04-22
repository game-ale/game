import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "8rem",
          fontWeight: 900,
          background: "var(--gradient-text)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        404
      </h1>
      <h2 style={{ fontSize: "1.5rem", color: "var(--text-secondary)", marginBottom: "0.5rem" }}>
        Page Not Found
      </h2>
      <p style={{ color: "var(--text-muted)", maxWidth: "400px", marginBottom: "2rem" }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.75rem 2rem",
          background: "var(--accent-blue)",
          color: "white",
          borderRadius: "var(--radius-lg)",
          fontWeight: 600,
          textDecoration: "none",
          transition: "all 250ms ease",
        }}
      >
        Back to Home
      </Link>
    </section>
  );
}
