"use client";

import { motion } from "framer-motion";

// Wolken met aan/uit pulsing effect
const GLOW_ORBS = [
  { left: "30%", top: "30%", color: "rgba(116, 209, 233, 0.08)", size: 500, delay: 0, duration: 8 },
  { left: "60%", top: "50%", color: "rgba(239, 170, 211, 0.06)", size: 450, delay: 2, duration: 10 },
  { left: "25%", top: "70%", color: "rgba(96, 206, 180, 0.07)", size: 480, delay: 4, duration: 9 },
  { left: "55%", top: "85%", color: "rgba(162, 121, 254, 0.06)", size: 420, delay: 6, duration: 11 },
];

interface FloatingBlocksProps {
  intensity?: "normal" | "subtle";
}

export default function FloatingBlocks({ intensity = "normal" }: FloatingBlocksProps) {
  const opacityMultiplier = intensity === "subtle" ? 0.4 : 1;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {GLOW_ORBS.map((orb, i) => (
        <motion.div
          key={`glow-${i}`}
          className="absolute rounded-full"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: 'blur(100px)',
            transform: 'translateX(-50%)',
          }}
          animate={{
            opacity: [0, 0.8 * opacityMultiplier, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}
    </div>
  );
}
