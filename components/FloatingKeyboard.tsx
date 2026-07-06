"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import dynamic from "next/dynamic";

const Keyboard3D = dynamic(
  () => import("./Keyboard3D").then((m) => m.Keyboard3D),
  { ssr: false }
);

export function FloatingKeyboard() {
  const { scrollY } = useScroll();
  // Smooth the raw scroll value so movement feels physical, not jumpy
  const smooth = useSpring(scrollY, { damping: 30, stiffness: 100, mass: 0.5 });

  // Range: from scroll 0 (hero) to ~800px (tech stack section fully visible)
  const translateX = useTransform(smooth, [0, 800], ["22vw", "0vw"]);
  const translateY = useTransform(smooth, [0, 800], ["0vh", "6vh"]);
  const scale = useTransform(smooth, [0, 800], [1, 0.9]);
  const opacity = useTransform(smooth, [0, 800, 1200, 1400], [1, 1, 1, 0]);
  const pointerEvents = useTransform(smooth, [0, 900, 1000], ["auto", "auto", "none"]);
  const visibility = useTransform(smooth, [0, 1400, 1500], ["visible", "visible", "hidden"]);

  return (
    <motion.div
      aria-hidden={false}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: 700,
        height: 620,
        marginTop: -310,
        marginLeft: -350,
        translateX,
        translateY,
        scale,
        opacity,
        visibility: visibility as unknown as "visible" | "hidden",
        pointerEvents: pointerEvents as unknown as "auto" | "none",
        zIndex: 25,
      }}
    >
      <Keyboard3D showDescription />
    </motion.div>
  );
}
