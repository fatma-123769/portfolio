"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import { StarField } from "./StarField";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-16 md:px-16">
      <StarField count={160} />

      <div className="relative z-20 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: text */}
        <div className="flex flex-col">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-white/60"
          >
            Hi, I am
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 font-display text-6xl font-bold leading-[0.95] tracking-tight md:text-8xl"
          >
            Fatma Ezzahra
            <br />
            <span className="text-white/90">Hadhri</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-md text-lg text-white/60"
          >
            A Full-Stack & AI Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="/resume"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm backdrop-blur transition hover:bg-white/10"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/fatma-123769"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/fatma-ezzahra-hadhri-579075354/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/15 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:hadhrifatma75@gmail.com"
                className="rounded-full border border-white/15 bg-white/5 p-3 backdrop-blur transition hover:bg-white/10"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column reserved — the floating keyboard visually sits here at scroll=0 */}
        <div className="relative hidden h-[500px] md:h-[600px] lg:block" aria-hidden />
        {/* On mobile, we don't reserve space (floating keyboard will still overlay) */}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
