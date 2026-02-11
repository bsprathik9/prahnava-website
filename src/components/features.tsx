"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Search,
  FileText,
  MessageSquare,
  Cloud,
  Cpu,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    description:
      "Autonomous AI agents that plan, reason, and execute complex workflows — from customer support to internal operations.",
  },
  {
    icon: Search,
    title: "RAG & Semantic Search",
    description:
      "Retrieval-augmented generation pipelines that ground LLM responses in your proprietary data with pinpoint accuracy.",
  },
  {
    icon: FileText,
    title: "Document Intelligence & OCR",
    description:
      "Extract, classify, and understand documents at scale — invoices, transcripts, legal contracts, and more.",
  },
  {
    icon: MessageSquare,
    title: "NLP & Sentiment Analysis",
    description:
      "Understand customer intent, analyze feedback, and power conversational AI with state-of-the-art NLP models.",
  },
  {
    icon: Cloud,
    title: "Full-Stack Cloud Apps",
    description:
      "Production-grade web and mobile applications built on modern cloud infrastructure — designed to scale from day one.",
  },
  {
    icon: Cpu,
    title: "LLM Integration",
    description:
      "Seamlessly integrate GPT-4, Claude, Gemini, and open-source models into your products with robust orchestration.",
  },
];

export function Features() {
  return (
    <section id="services" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-violet-400 mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
          >
            AI-Powered Solutions for
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Every Challenge
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            End-to-end AI engineering — from strategy to deployment. We build
            systems that deliver measurable impact.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/20">
                  <service.icon className="h-6 w-6 text-violet-400" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
