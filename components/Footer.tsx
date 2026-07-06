"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-12 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-3">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10">
              <span className="h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="font-medium">Fatma Ezzahra Hadhri</span>
          </div>
          <p className="mt-2 text-sm text-white/40">
            © {new Date().getFullYear()} — Built with Next.js & Three.js.
          </p>
        </div>

        <nav className="flex flex-wrap gap-6 text-sm text-white/60">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/fatma-123769"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition hover:border-white/25 hover:bg-white/10"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/fatma-ezzahra-hadhri-579075354/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition hover:border-white/25 hover:bg-white/10"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:hadhrifatma75@gmail.com"
            aria-label="Email"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition hover:border-white/25 hover:bg-white/10"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
