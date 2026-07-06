"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { StarField } from "./StarField";

const EMAIL = "hadhrifatma75@gmail.com";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New message from ${name || "portfolio visitor"}`);
    const body = encodeURIComponent(
      `Hi Fatma,\n\n${message}\n\n— ${name}\nReply to: ${email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-32 md:px-16"
    >
      <StarField count={100} />

      <div className="relative z-20 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-white/40">
            04 — Contact
          </p>
          <h2 className="font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Let&apos;s work
            <br />
            <span className="text-white/50">together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/60">
            Freelance opportunity, collaboration, or just to say hi — drop me a
            message below or reach out on any of my channels.
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          onSubmit={handleSubmit}
          className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm md:p-10"
        >
          <h3 className="font-display text-2xl font-bold tracking-tight">
            Contact Form
          </h3>
          <p className="mt-1 text-sm text-white/50">
            You can also email me directly at{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              {EMAIL}
            </a>
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Full name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.06]"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.06]"
              />
            </div>
          </div>

          <div className="mt-5">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-white/70"
            >
              Your message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about your project, timeline, or just say hi..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/[0.06]"
            />
          </div>

          <p className="mt-4 text-xs text-white/40">
            I&apos;ll never share your data. Typical reply time: under 24 hours.
          </p>

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black transition hover:bg-white/90 md:w-auto"
          >
            Send message
            <Send className="h-4 w-4" />
          </button>
        </motion.form>

        {/* Direct links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://github.com/fatma-123769"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/fatma-ezzahra-hadhri-579075354/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-sm backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.05]"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-3 text-sm text-white/50"
        >
          <MapPin className="h-4 w-4" />
          <span>Available worldwide — remote-friendly</span>
        </motion.div>
      </div>
    </section>
  );
}
