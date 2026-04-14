"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

function FiberLine({ delay, duration, top, angle }: { delay: number; duration: number; top: string; angle: number }) {
  return (
    <motion.div
      className="absolute left-0 w-full h-px origin-left pointer-events-none"
      style={{ top, transform: `rotate(${angle}deg)` }}
    >
      <motion.div
        className="h-full w-24 rounded-full"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(0, 82, 204, 0.6), rgba(241, 36, 0, 0.4), transparent)",
        }}
        initial={{ x: "-10%" }}
        animate={{ x: "calc(100vw + 10%)" }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.div>
  );
}

function GridNode({ x, y, delay }: { x: string; y: string; delay: number }) {
  return (
    <motion.div
      className="absolute w-1.5 h-1.5 rounded-full bg-[#0052CC]"
      style={{ left: x, top: y }}
      animate={{
        opacity: [0.1, 0.6, 0.1],
        scale: [0.8, 1.3, 0.8],
        boxShadow: [
          "0 0 4px rgba(0, 82, 204, 0.2)",
          "0 0 12px rgba(0, 82, 204, 0.6)",
          "0 0 4px rgba(0, 82, 204, 0.2)",
        ],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const nodePositions = [
  { x: "10%", y: "15%", delay: 0 },
  { x: "25%", y: "70%", delay: 0.8 },
  { x: "40%", y: "30%", delay: 1.6 },
  { x: "55%", y: "80%", delay: 0.4 },
  { x: "70%", y: "20%", delay: 1.2 },
  { x: "85%", y: "60%", delay: 2.0 },
  { x: "15%", y: "45%", delay: 2.4 },
  { x: "60%", y: "50%", delay: 0.6 },
  { x: "90%", y: "35%", delay: 1.8 },
  { x: "35%", y: "85%", delay: 1.0 },
  { x: "78%", y: "75%", delay: 1.4 },
  { x: "48%", y: "12%", delay: 2.2 },
  { x: "5%", y: "90%", delay: 0.2 },
  { x: "92%", y: "10%", delay: 2.6 },
];

const fiberLines = [
  { delay: 0, duration: 4.5, top: "18%", angle: 2 },
  { delay: 1.5, duration: 5.2, top: "35%", angle: -1.5 },
  { delay: 3.0, duration: 4.0, top: "52%", angle: 1 },
  { delay: 0.8, duration: 5.8, top: "68%", angle: -2 },
  { delay: 2.2, duration: 4.8, top: "82%", angle: 0.5 },
  { delay: 4.0, duration: 5.0, top: "25%", angle: -0.8 },
  { delay: 1.0, duration: 6.0, top: "45%", angle: 1.5 },
  { delay: 3.5, duration: 4.2, top: "90%", angle: -1 },
];

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + i * 0.04,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const headingText = "UNDER CONSTRUCTION";
  const subText = "We're building something incredible.";

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#04080F] flex items-center justify-center">
      {/* Subtle radial gradient overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0, 82, 204, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 82, 204, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 82, 204, 0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Fiber optic light streaks */}
      <div className="absolute inset-0 z-[1] overflow-hidden">
        {fiberLines.map((line, i) => (
          <FiberLine key={i} {...line} />
        ))}
      </div>

      {/* Pulsing network nodes */}
      <div className="absolute inset-0 z-[1]">
        {nodePositions.map((node, i) => (
          <GridNode key={i} {...node} />
        ))}
      </div>

      {/* Corner accent — top left */}
      <motion.div
        className="absolute top-0 left-0 w-32 h-32 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-[#0052CC] to-transparent" />
        <div className="absolute top-0 left-0 h-full w-px bg-gradient-to-b from-[#0052CC] to-transparent" />
      </motion.div>

      {/* Corner accent — bottom right */}
      <motion.div
        className="absolute bottom-0 right-0 w-32 h-32 z-[2]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.7 }}
      >
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-[#F12400] to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-[#F12400] to-transparent" />
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 8px rgba(0, 82, 204, 0.3))",
                "drop-shadow(0 0 20px rgba(0, 82, 204, 0.6))",
                "drop-shadow(0 0 8px rgba(0, 82, 204, 0.3))",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/logos/blue_logo.png"
              alt="FibeX Logo"
              width={200}
              height={200}
              priority
              className="w-auto h-20 sm:h-28 md:h-36 lg:h-40"
            />
          </motion.div>
        </motion.div>

        {/* Horizontal rule */}
        <motion.div
          className="w-full max-w-xs h-px mb-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          style={{
            background: "linear-gradient(90deg, transparent, #0052CC, #F12400, transparent)",
          }}
        />

        {/* Main heading — letter-by-letter */}
        <div className="mb-4 overflow-hidden">
          <h1
            className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.08em] sm:tracking-[0.15em] text-white"
            style={{ fontFamily: "Origin Heavy" }}
          >
            {headingText.split("").map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block text-white"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 font-medium tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          {subText}
        </motion.p>

        {/* Animated progress bar */}
        <motion.div
          className="w-full max-w-sm mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <div className="relative w-full h-1 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{
                background: "linear-gradient(90deg, #0052CC, #F12400)",
              }}
              animate={{
                width: ["0%", "65%", "45%", "80%", "60%", "0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-0 h-full w-8 rounded-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
              }}
              animate={{ left: ["-10%", "110%"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 2.6,
              }}
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-xs sm:text-sm text-gray-600 tracking-widest uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.6 }}
        >
          True Speed, True Connection
        </motion.p>
      </div>

      {/* Bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.2, duration: 0.6 }}
      >
        <p className="text-gray-600 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} FibeX Turbo Inc. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
}
