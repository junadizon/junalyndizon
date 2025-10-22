export default function ContactPage() {
  return (
    <section style={{ display: "grid", gap: 16 }}>
      <h1>Contact</h1>
      <p style={{ color: "#a7a7a7", maxWidth: 720 }}>
        Want to collaborate or chat? Email me at
        {" "}
        <a href="mailto:you@example.com">you@example.com</a>
        {" "}
        or reach out on LinkedIn.
      </p>
    </section>
  );
}


