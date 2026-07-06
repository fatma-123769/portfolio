"use client";

import { motion } from "framer-motion";
import { StarField } from "./StarField";

type Entry = {
  period: string;
  title: string;
  place: string;
  description: string;
  type: "work" | "education" | "project";
};

const ENTRIES: Entry[] = [
  {
    period: "2026 — Present",
    title: "Freelance Full-Stack & AI Developer",
    place: "Self-employed",
    description:
      "Building web and mobile applications powered by AI, plus automation workflows for clients — from SaaS products to booking apps and internal tools.",
    type: "work",
  },
  {
    period: "2025",
    title: "Bachelor's Degree in Business Computing",
    place: "FSEG Sfax — Faculty of Economics and Management",
    description:
      "Degree obtained in 2025. Focus on information systems, software development, databases and project management.",
    type: "education",
  },
  {
    period: "2025",
    title: "Sunspace — Launched",
    place: "Personal project",
    description:
      "All-in-one platform: coworking booking, e-learning, and a Gemini-powered AI chatbot with an interactive 3D space preview built in Three.js.",
    type: "project",
  },
  {
    period: "2025",
    title: "RAG Document Assistant — Launched",
    place: "Personal project",
    description:
      "Shipped end-to-end: Next.js frontend, semantic search, streaming answers from OpenAI, and a PDF ingestion pipeline.",
    type: "project",
  },
  {
    period: "2024",
    title: "n8n + CRM Integration",
    place: "Personal project",
    description:
      "Automated lead-capture pipeline connecting chat, external APIs and a Postgres-backed CRM through n8n workflows.",
    type: "project",
  },
  {
    period: "2023",
    title: "High School Diploma — Economics & Management",
    place: "Grade: Good (Mention Bien)",
    description:
      "Tunisian Baccalauréat in Economics & Management, obtained with honors (Mention Bien).",
    type: "education",
  },
];

const TYPE_COLORS: Record<Entry["type"], string> = {
  work: "bg-violet-400",
  project: "bg-cyan-400",
  education: "bg-emerald-400",
};

const TYPE_LABELS: Record<Entry["type"], string> = {
  work: "Work",
  project: "Project",
  education: "Education",
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden px-6 py-32 md:px-16"
    >
      <StarField count={80} />

      <div className="relative z-20 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-white/40">
            03 — Journey
          </p>
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            The path so far
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent md:left-4" />

          <div className="space-y-10">
            {ENTRIES.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Dot */}
                <div
                  className={`absolute left-0 top-2 h-6 w-6 rounded-full ${TYPE_COLORS[entry.type]} shadow-[0_0_20px_currentColor] md:left-1 md:h-6 md:w-6`}
                  style={{ opacity: 0.9 }}
                >
                  <div className="absolute inset-1 rounded-full bg-black" />
                </div>

                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    {entry.period}
                  </span>
                  <span
                    className={`rounded-full border border-white/15 bg-white/5 px-2 py-0.5 text-[10px] uppercase tracking-widest text-white/60`}
                  >
                    {TYPE_LABELS[entry.type]}
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">
                  {entry.title}
                </h3>
                <p className="text-white/50">{entry.place}</p>
                <p className="mt-3 leading-relaxed text-white/70">
                  {entry.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
