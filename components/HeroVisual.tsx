"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 60, y: 60, r: 5 },
  { x: 220, y: 40, r: 3.5 },
  { x: 340, y: 110, r: 6 },
  { x: 180, y: 180, r: 4 },
  { x: 40, y: 220, r: 3.5 },
  { x: 300, y: 240, r: 4.5 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [3, 4],
  [3, 5],
  [2, 5],
];

export function HeroVisual() {
  return (
    <svg viewBox="0 0 380 300" className="h-auto w-full max-w-md" aria-hidden="true">
      <defs>
        <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
        </linearGradient>
      </defs>

      {edges.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#edgeGrad)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}

      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          fill="#22D3EE"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 * i + 0.3 }}
        />
      ))}

      <rect x="0" y="0" width="380" height="300" fill="none" stroke="rgba(255,255,255,0.06)" />
    </svg>
  );
}
