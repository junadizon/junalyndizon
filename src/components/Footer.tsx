export function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.1)",
        padding: "24px 16px",
        textAlign: "center",
        color: "#999",
      }}
    >
      <div style={{ marginBottom: 8 }}>© {new Date().getFullYear()} Your Name</div>
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </footer>
  );
}


