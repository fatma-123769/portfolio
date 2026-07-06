"use client";

import { useMemo } from "react";

// Deterministic pseudo-random so SSR and client match
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function StarField({ count = 140 }: { count?: number }) {
  const stars = useMemo(() => {
    const rand = seededRandom(42);
    return Array.from({ length: count }, () => {
      const size = rand() * 2 + 0.5;
      return {
        left: rand() * 100,
        top: rand() * 100,
        size,
        opacity: rand() * 0.6 + 0.3,
        twinkleDelay: rand() * 5,
        twinkleDuration: rand() * 3 + 2,
      };
    });
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            animation: `twinkle ${s.twinkleDuration}s ease-in-out ${s.twinkleDelay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
