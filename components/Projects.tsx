"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";
import { StarField } from "./StarField";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-32 md:px-16"
    >
      <StarField count={100} />

      <div className="relative z-20 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-white/40">
            02 — Projects
          </p>
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Selected work
          </h2>
          <p className="mt-4 max-w-xl text-white/50">
            A mix of AI apps, automation workflows and full-stack products.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/25"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Open ${project.title}`}
      />
      {/* Gradient accent background */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${project.gradient} opacity-40 transition-opacity duration-500 group-hover:opacity-80`}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          {project.featured && (
            <span className="mb-3 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
              Featured
            </span>
          )}
          <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-1 text-sm text-white/50">{project.tagline}</p>
        </div>

        <div className="relative z-20 flex items-center gap-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 bg-black/40 p-2 backdrop-blur transition hover:bg-white/10 hover:scale-110"
              aria-label="Live demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.video && (
            <span
              className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white/80 backdrop-blur transition group-hover:border-white/30 group-hover:bg-white/10"
              aria-label="Has video demo"
            >
              <Play className="h-3 w-3 fill-current" />
              Video
            </span>
          )}
        </div>
      </div>

      <p className="mt-6 leading-relaxed text-white/70">{project.description}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/60"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
