"use client";

import { useEffect, useState } from "react";

export function CursorSpotlight() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      {/* Large soft spotlight — tints the background near the cursor */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.08), transparent 60%)`,
        }}
      />
      {/* White cursor dot */}
      <div
        aria-hidden
        className="pointer-events-none fixed z-50 h-9 w-9 rounded-full bg-white mix-blend-difference transition-opacity duration-200"
        style={{
          transform: `translate(${pos.x - 18}px, ${pos.y - 18}px)`,
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
}
