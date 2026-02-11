"use client";

import React from "react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section id="contact" className="relative w-full py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <PulseBeamsSVG />
      </div>

      <div className="absolute inset-0 -z-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-violet-600/15 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[96px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight mb-6">
            Ready to Build the{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Future
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Let&apos;s discuss how Prahnava can engineer intelligent systems
            tailored to your business. From proof-of-concept to production —
            we&apos;re ready.
          </p>

          <div className="flex items-center justify-center">
            <a
              href="mailto:services@prahnava.com"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-px"
            >
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(139,92,246,0.6)_0%,rgba(139,92,246,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-4 ring-1 ring-white/10 transition-all group-hover:ring-violet-500/30">
                <span className="text-lg font-medium bg-gradient-to-r from-violet-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  Book a Discovery Call
                </span>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PulseBeamsSVG() {
  const beams = [
    {
      path: "M429 0V217C429 230 419 240 406 240H53C40 240 30 250 30 263V434",
      delay: 0,
    },
    {
      path: "M429 0V217C429 230 439 240 452 240H805C818 240 828 250 828 263V434",
      delay: 0.4,
    },
    {
      path: "M429 0V100C429 113 415 123 402 123H180C167 123 157 133 157 146V434",
      delay: 0.8,
    },
    {
      path: "M429 0V100C429 113 443 123 456 123H678C691 123 701 133 701 146V434",
      delay: 1.2,
    },
    {
      path: "M429 0V60C429 73 420 83 407 83H270C257 83 247 93 247 106V434",
      delay: 1.6,
    },
    {
      path: "M429 0V60C429 73 438 83 451 83H588C601 83 611 93 611 106V434",
      delay: 2.0,
    },
  ];

  return (
    <svg
      width="858"
      height="434"
      viewBox="0 0 858 434"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-30 w-full max-w-4xl"
    >
      {beams.map((beam, i) => (
        <React.Fragment key={i}>
          <path d={beam.path} stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
          <path
            d={beam.path}
            stroke={`url(#pulse-grad-${i})`}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <motion.linearGradient
              id={`pulse-grad-${i}`}
              gradientUnits="userSpaceOnUse"
              initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "10%" }}
              animate={{
                x1: ["0%", "100%", "100%"],
                x2: ["0%", "100%", "100%"],
                y1: ["0%", "100%", "100%"],
                y2: ["10%", "100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 1,
                delay: beam.delay,
              }}
            >
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0" />
              <stop offset="30%" stopColor="#06b6d4" stopOpacity="1" />
              <stop offset="60%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </React.Fragment>
      ))}
    </svg>
  );
}
