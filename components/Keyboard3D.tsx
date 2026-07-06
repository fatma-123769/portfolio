"use client";

import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { AnimatePresence, motion } from "framer-motion";
import { TECH_STACK, type Tech } from "@/lib/tech-stack";

const KEYS = TECH_STACK.slice(0, 20);

const KEY_W = 1;
const KEY_D = 1;
const KEY_H = 0.58;
const GAP = 0.16;
const COLS = 5;
const ROWS = 4;
const BASE_PAD = 0.34;

const baseW = COLS * KEY_W + (COLS - 1) * GAP + BASE_PAD * 2;
const baseD = ROWS * KEY_D + (ROWS - 1) * GAP + BASE_PAD * 2;
const BASE_H = 0.5;

/**
 * Load an image URL (SVG or PNG) into a THREE.CanvasTexture.
 * Handles SVGs (which THREE.TextureLoader doesn't natively support).
 */
function useLogoTexture(url: string, fallbackLabel: string, keyColor: string) {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    let cancelled = false;
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d")!;

    const drawFallback = () => {
      ctx.clearRect(0, 0, 256, 256);
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 80px 'Space Grotesk', system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(fallbackLabel || "?", 128, 132);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      tex.colorSpace = THREE.SRGBColorSpace;
      if (!cancelled) setTexture(tex);
    };

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      if (cancelled) return;
      ctx.clearRect(0, 0, 256, 256);
      // Center image with padding
      const pad = 32;
      const size = 256 - pad * 2;
      ctx.drawImage(img, pad, pad, size, size);
      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      tex.colorSpace = THREE.SRGBColorSpace;
      setTexture(tex);
    };
    img.onerror = drawFallback;
    img.src = url;

    return () => {
      cancelled = true;
    };
  }, [url, fallbackLabel, keyColor]);

  return texture;
}

function Key({
  tech,
  position,
  onHover,
  onLeave,
  onClick,
  hovered,
  pressed,
}: {
  tech: Tech;
  position: [number, number, number];
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
  hovered: boolean;
  pressed: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const targetY = pressed ? -0.08 : hovered ? 0.18 : 0;
  const texture = useLogoTexture(tech.logo, tech.label || tech.name.slice(0, 2), tech.color);

  useFrame((_, delta) => {
    if (!groupRef.current) return;
    const current = groupRef.current.position.y;
    groupRef.current.position.y = THREE.MathUtils.damp(current, targetY, 12, delta);
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Keycap body */}
      <mesh
        castShadow
        receiveShadow
        onPointerOver={(e: ThreeEvent<PointerEvent>) => {
          e.stopPropagation();
          onHover();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          onLeave();
          document.body.style.cursor = "";
        }}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <RoundedBox args={[KEY_W, KEY_H, KEY_D]} radius={0.22} smoothness={10} creaseAngle={0.6}>
          <meshStandardMaterial
            color={tech.color}
            roughness={0.45}
            metalness={0.05}
          />
        </RoundedBox>
      </mesh>

      {/* Logo on top face */}
      {texture && (
        <mesh position={[0, KEY_H / 2 + 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[KEY_W * 0.52, KEY_D * 0.52]} />
          <meshBasicMaterial map={texture} transparent depthWrite={false} />
        </mesh>
      )}
    </group>
  );
}

function KeyboardMesh({
  hoveredKey,
  setHoveredKey,
  pressedKey,
  setPressedKey,
  groupScale,
}: {
  hoveredKey: string | null;
  setHoveredKey: (name: string | null) => void;
  pressedKey: string | null;
  setPressedKey: (name: string | null) => void;
  groupScale: number;
}) {
  const groupRef = useRef<THREE.Group>(null);

  // Subtle mouse-follow rotation — clamped tightly so we never flip past the isometric look
  useFrame((state) => {
    if (!groupRef.current) return;
    const targetY = -0.28 + state.mouse.x * 0.08;
    const targetX = 0.8 + state.mouse.y * -0.05;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetY,
      0.04
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetX,
      0.04
    );
  });

  return (
    <group ref={groupRef} rotation={[0.8, -0.28, 0]} scale={groupScale}>
      {/* Base */}
      <mesh castShadow receiveShadow position={[0, -KEY_H / 2 - BASE_H / 2, 0]}>
        <RoundedBox args={[baseW, BASE_H, baseD]} radius={0.24} smoothness={6}>
          <meshStandardMaterial color="#0e0e10" roughness={0.6} metalness={0.15} />
        </RoundedBox>
      </mesh>

      {/* Keys */}
      {KEYS.map((tech, i) => {
        const col = i % COLS;
        const row = Math.floor(i / COLS);
        const x = (col - (COLS - 1) / 2) * (KEY_W + GAP);
        const z = (row - (ROWS - 1) / 2) * (KEY_D + GAP);
        return (
          <Key
            key={tech.name}
            tech={tech}
            position={[x, 0, z]}
            hovered={hoveredKey === tech.name}
            pressed={pressedKey === tech.name}
            onHover={() => setHoveredKey(tech.name)}
            onLeave={() => setHoveredKey(null)}
            onClick={() => {
              setPressedKey(tech.name);
              setTimeout(() => setPressedKey(null), 220);
            }}
          />
        );
      })}
    </group>
  );
}

export function Keyboard3D({
  scale = 1.15,
  showDescription = false,
}: {
  scale?: number;
  showDescription?: boolean;
}) {
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const [pressedKey, setPressedKey] = useState<string | null>(null);
  const hoveredTech = KEYS.find((t) => t.name === hoveredKey);

  return (
    <div className="relative h-full w-full">
      <AnimatePresence>
        {hoveredTech && (
          <motion.div
            key={hoveredTech.name}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="pointer-events-none absolute left-1/2 top-4 z-30 -translate-x-1/2 text-center"
          >
            <div className="font-display text-4xl font-bold leading-none tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] md:text-5xl">
              {hoveredTech.name}
            </div>
            {showDescription && (
              <div className="mt-2 text-sm font-medium text-white/70 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] md:text-base">
                {hoveredTech.desc}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas
        shadows
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        camera={{ position: [0, 4.5, 8.5], fov: 45 }}
      >

        {/* Lighting */}
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[4, 8, 6]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <directionalLight position={[-5, 3, -3]} intensity={0.4} color="#8fa3ff" />
        <pointLight position={[0, 3, 3]} intensity={0.6} color="#ffffff" />

        <KeyboardMesh
          hoveredKey={hoveredKey}
          setHoveredKey={setHoveredKey}
          pressedKey={pressedKey}
          setPressedKey={setPressedKey}
          groupScale={scale}
        />
      </Canvas>
    </div>
  );
}
