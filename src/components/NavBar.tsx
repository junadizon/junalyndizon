"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px",
  borderBottom: "1px solid rgba(255,255,255,0.1)",
  position: "sticky",
  top: 0,
  backdropFilter: "blur(6px)",
  zIndex: 10,
};

const linkStyle: React.CSSProperties = {
  padding: "8px 12px",
  borderRadius: 8,
  fontWeight: 600,
};

const activeStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.08)",
};

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function NavBar() {
  const pathname = usePathname();

  return (
    <nav style={navStyle}>
      <Link href="/" style={{ fontWeight: 800, letterSpacing: 0.5 }}>
        Portfolio
      </Link>
      <div style={{ display: "flex", gap: 8 }}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              ...linkStyle,
              ...(pathname === l.href ? activeStyle : {}),
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}


