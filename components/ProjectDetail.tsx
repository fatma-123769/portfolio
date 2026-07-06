"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/projects";
import { StarField } from "./StarField";
import { CursorSpotlight } from "./CursorSpotlight";

export function ProjectDetail({ project }: { project: Project }) {
  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(
    0,
    3
  );

  return (
    <main className="relative min-h-screen">
      <CursorSpotlight />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-16 md:px-16 md:pt-32">
        <StarField count={100} />

        {/* Gradient background accent */}
        <div
          className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`}
        />

        <div className="relative z-20 mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/#projects"
              className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to projects
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {project.featured && (
              <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70">
                Featured
              </span>
            )}
            <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              {project.title}
            </h1>
            <p className="mt-4 text-xl text-white/60 md:text-2xl">
              {project.tagline}
            </p>
          </motion.div>

          {/* Tech + links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-white/70"
              >
                {t}
              </span>
            ))}

            {project.demo && (
              <>
                <span className="mx-2 hidden h-4 w-px bg-white/10 md:inline-block" />
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs text-black transition hover:bg-white/90"
                >
                  Live demo
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Video */}
      <section className="relative px-6 pb-16 md:px-16">
        <div className="relative z-20 mx-auto flex max-w-3xl justify-center">
          {project.video ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-black shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]"
            >
              <video
                src={project.video}
                controls
                playsInline
                preload="metadata"
                className="block h-auto max-h-[75vh] w-auto max-w-full"
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex aspect-video w-full items-center justify-center rounded-3xl border border-dashed border-white/10 bg-white/[0.02]"
            >
              <p className="text-white/40">Demo video coming soon</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Long description */}
      {project.longDescription && (
        <section className="relative px-6 py-16 md:px-16">
          <div className="relative z-20 mx-auto max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 font-display text-3xl font-bold tracking-tight md:text-4xl"
            >
              About this project
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg leading-relaxed text-white/70"
            >
              {project.longDescription}
            </motion.p>
          </div>
        </section>
      )}

      {/* Other projects */}
      <section className="relative overflow-hidden px-6 py-24 md:px-16">
        <StarField count={80} />
        <div className="relative z-20 mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 font-display text-3xl font-bold tracking-tight md:text-4xl"
          >
            Other projects
          </motion.h2>

          <div className="grid gap-4 md:grid-cols-3">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className={`group relative block overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${p.gradient} p-6 transition hover:border-white/25`}
                >
                  <h3 className="font-display text-xl font-bold tracking-tight">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{p.tagline}</p>
                  <ArrowUpRight className="mt-6 h-5 w-5 text-white/40 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm backdrop-blur transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              All projects
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
