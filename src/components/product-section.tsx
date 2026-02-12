"use client";

import {
  Sparkles,
  Brain,
  GraduationCap,
  BarChart3,
  Network,
} from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "PRAHNOVA",
    date: "Lesson Creation",
    content:
      "Teachers describe a lesson in natural language, and AI generates a complete 5E model lesson in 12 minutes — vs 3-4 hours traditionally. Curriculum-aligned, standards-mapped, and ready to teach.",
    category: "Creation",
    icon: Sparkles,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "PRAHNEVA",
    date: "Adaptive Learning",
    content:
      "Multi-agent AI system: Strategist plans the learning path, Designer selects optimal content, Coach delivers with real-time hints. Pre-assessments detect gaps and difficulty adapts in real-time.",
    category: "Learning",
    icon: Brain,
    relatedIds: [1, 3, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "PRAHTECHNA",
    date: "AI Tutor",
    content:
      "Curriculum-aware, multilingual (English/Hindi/Tamil) AI tutor that guides with questions — never gives answers. Detects misconceptions, prevents homework cheating, and escalates to teachers when needed.",
    category: "Tutoring",
    icon: GraduationCap,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 80,
  },
  {
    id: 4,
    title: "PRAHDATA",
    date: "Intelligence",
    content:
      "Every student interaction feeds back into the AI. Learns which metaphors work, which content drives mastery, and predicts which students need intervention before they struggle.",
    category: "Analytics",
    icon: BarChart3,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "PRAHLOGIX",
    date: "Orchestration",
    content:
      "Strategist Agent → Designer Agent → Coach Agent → Orchestrator Meta-Agent. Real-time feedback loops ensure every agent learns and adapts from every interaction.",
    category: "Architecture",
    icon: Network,
    relatedIds: [1, 2, 4],
    status: "completed" as const,
    energy: 90,
  },
];

export function ProductSection() {
  return (
    <section id="product" className="relative">
      <RadialOrbitalTimeline timelineData={timelineData} />
    </section>
  );
}
