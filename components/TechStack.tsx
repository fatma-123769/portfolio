"use client";

import { motion } from "framer-motion";
import { StarField } from "./StarField";

export function TechStack() {
  return (
    <section
      id="skills"
      className="relative flex min-h-screen flex-col items-center overflow-hidden px-6 pt-24 md:px-16"
    >
      <StarField count={120} />

      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-4 text-center"
        >
          <h2 className="font-display text-6xl font-bold tracking-tight md:text-8xl">
            Tech Stack
          </h2>
          <p className="mt-3 text-sm text-white/50">(hint: hover a key)</p>
        </motion.div>

        {/* Empty spacer — the floating keyboard is drawn on top via fixed positioning */}
        <div className="h-[600px] w-full md:h-[700px]" aria-hidden />
      </div>
    </section>
  );
}
