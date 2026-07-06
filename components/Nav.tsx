"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-6 flex items-center justify-between">
      <a href="#" className="flex items-center gap-3 text-sm font-medium">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-white" />
        </span>
        <span className="hidden sm:inline">Fatma</span>
      </a>

      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm backdrop-blur transition hover:bg-white/10"
      >
        <span>Menu</span>
        <Menu className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="absolute right-0 top-0 h-full w-full max-w-sm border-l border-white/10 bg-black p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/15 p-2 transition hover:bg-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <ul className="mt-16 space-y-6">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block font-display text-4xl font-bold transition hover:text-white/60"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
