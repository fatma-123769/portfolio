"use client";

import { motion } from "framer-motion";
import { StarField } from "./StarField";

const STATS = [
  { value: "20+", label: "Technologies mastered" },
  { value: "10+", label: "Projects shipped" },
  { value: "3+", label: "Years of coding" },
  { value: "∞", label: "Cups of coffee" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-32 md:px-16"
    >
      <StarField count={80} />

      <div className="relative z-20 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-white/40">
            01 — About
          </p>
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            I build things
            <br />
            <span className="text-white/50">for the web.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-5 text-lg leading-relaxed text-white/70"
          >
            <p>
              I&apos;m a full-stack developer with a growing focus on AI and
              automation. I like turning fuzzy ideas into products people
              actually use.
            </p>
            <p>
              Lately I&apos;ve been building{" "}
              <span className="text-white">RAG applications</span>, wiring{" "}
              <span className="text-white">n8n workflows</span> into custom CRMs,
              and shipping polished frontends with Next.js and Three.js.
            </p>
            <p>
              Outside of the terminal, I&apos;m probably reading about a new
              framework I don&apos;t need yet, or trying to figure out why my
              docker-compose won&apos;t start.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.05]"
              >
                <div className="font-display text-4xl font-bold tracking-tight md:text-5xl">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-white/50">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
