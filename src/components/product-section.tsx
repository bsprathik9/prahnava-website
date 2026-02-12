"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Brain,
  GraduationCap,
  BarChart3,
  Network,
} from "lucide-react";

const stats = [
  { icon: Zap, value: "12 min", label: "Lesson creation time", color: "violet" },
  { icon: TrendingUp, value: "15-20x", label: "Teacher efficiency", color: "cyan" },
  { icon: Target, value: "3x", label: "Faster gap closure", color: "violet" },
  { icon: BookOpen, value: "80%+", label: "Mastery rate", color: "cyan" },
];

const subProducts = [
  {
    name: "PRAHNOVA",
    tagline: "AI-Assisted Lesson Creation",
    icon: Sparkles,
    description:
      "Teachers describe a lesson in natural language, and AI generates a complete 5E model lesson in 12 minutes — vs 3-4 hours traditionally. Curriculum-aligned, standards-mapped, and ready to teach.",
    gradient: "from-violet-500 to-purple-600",
    borderColor: "border-violet-500/20 hover:border-violet-500/40",
    bgHover: "hover:bg-violet-500/5",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
  },
  {
    name: "PRAHNEVA",
    tagline: "Adaptive Student Learning",
    icon: Brain,
    description:
      "Multi-agent AI system: Strategist plans the learning path, Designer selects optimal content, Coach delivers with real-time hints. Pre-assessments detect gaps and difficulty adapts in real-time.",
    gradient: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
    bgHover: "hover:bg-cyan-500/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-400",
  },
  {
    name: "PRAHTECHNA",
    tagline: "AI Tutor — Socratic Method",
    icon: GraduationCap,
    description:
      "Curriculum-aware, multilingual (English/Hindi/Tamil) AI tutor that guides with questions — never gives answers. Detects misconceptions, prevents homework cheating, and escalates to teachers when needed.",
    gradient: "from-purple-500 to-violet-600",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
    bgHover: "hover:bg-purple-500/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    name: "PRAHDATA",
    tagline: "Continuous Learning Intelligence",
    icon: BarChart3,
    description:
      "Every student interaction feeds back into the AI. Learns which metaphors work, which content drives mastery, and predicts which students need intervention before they struggle.",
    gradient: "from-teal-500 to-cyan-600",
    borderColor: "border-teal-500/20 hover:border-teal-500/40",
    bgHover: "hover:bg-teal-500/5",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-400",
  },
  {
    name: "PRAHLOGIX",
    tagline: "Multi-Agent Orchestration",
    icon: Network,
    description:
      "Strategist Agent → Designer Agent → Coach Agent → Orchestrator Meta-Agent. Real-time feedback loops ensure every agent learns and adapts from every interaction.",
    gradient: "from-indigo-500 to-violet-600",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
    bgHover: "hover:bg-indigo-500/5",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-400",
  },
];

export function ProductSection() {
  return (
    <section id="product" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/8 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[128px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-cyan-400 mb-4"
          >
            Our Product
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-semibold text-white tracking-tight"
          >
            Prahnava{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              LMS
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-400 text-lg max-w-3xl mx-auto"
          >
            An AI-powered learning management system purpose-built for Indian
            education. Supports CBSE, ICSE, and state board curricula with
            adaptive learning paths that personalize education for every student.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <stat.icon
                className={`h-6 w-6 ${stat.color === "violet" ? "text-violet-400" : "text-cyan-400"} mx-auto mb-2`}
              />
              <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {subProducts.slice(0, 2).map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl border ${product.borderColor} bg-white/[0.02] p-6 ${product.bgHover} transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${product.iconBg} border border-white/5`}
                >
                  <product.icon className={`h-6 w-6 ${product.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {product.tagline}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {subProducts.slice(2).map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              className={`group relative rounded-2xl border ${product.borderColor} bg-white/[0.02] p-6 ${product.bgHover} transition-all duration-300`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${product.iconBg} border border-white/5`}
                >
                  <product.icon className={`h-6 w-6 ${product.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {product.tagline}
                  </h3>
                </div>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
