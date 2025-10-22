import Link from "next/link";

export default function Home() {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <h1 style={{ fontSize: 40, lineHeight: 1.2 }}>
        Hi, I’m <span style={{ color: "#7cd4fd" }}>Your Name</span>.
      </h1>
      <p style={{ color: "#a7a7a7", maxWidth: 720 }}>
        I build performant web apps with React, TypeScript, and modern tooling. This
        is my portfolio where I showcase selected projects and share a bit about my
        background.
      </p>
      <div style={{ display: "flex", gap: 12 }}>
        <Link href="/projects" style={{ textDecoration: "underline" }}>
          View Projects
        </Link>
        <Link href="/contact" style={{ textDecoration: "underline" }}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
