"use client";
import Link from "next/link";
import Image from "next/image";

export function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full" style={{ borderColor: "var(--color-nav-border)", backgroundColor: "color-mix(in oklab, var(--color-bg) 70%, transparent)" }}>
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 px-4 py-4">
        <Link href="/" aria-label="Home" className="shrink-0">
          <Image src="/favicon-32x32.png" alt="Home" width={32} height={32} priority />
        </Link>
        <nav aria-label="Primary" className="block">
          <ul role="list" className="list-none m-0 p-0 flex items-center gap-8 md:gap-10 lg:gap-5">
            <li>
              <a
                href="#About"
                className="nav-link"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Experience"
                className="nav-link"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="nav-link"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/12ZmbXuGfCttQxoKFFiJ5rHVy_T9YoHFc/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}



