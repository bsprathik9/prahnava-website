import {
  Sparkles,
  Brain,
  GraduationCap,
  BarChart3,
  Network,
} from "lucide-react";

export interface Product {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: any;
  gradient: string;
  sections: {
    title: string;
    content: string;
    highlights?: string[];
  }[];
  features: string[];
  benefits: string[];
  useCases: string[];
}

export const productData: Product[] = [
  {
    id: 1,
    slug: "prahnova",
    title: "PRAHNOVA",
    subtitle: "AI-Assisted Lesson Creation",
    description:
      "Teachers describe a lesson in natural language, and AI generates a complete 5E model lesson in 12 minutes — vs 3-4 hours traditionally. Curriculum-aligned, standards-mapped, and ready to teach.",
    icon: Sparkles,
    gradient: "from-violet-500 to-purple-600",
    sections: [
      {
        title: "Overview",
        content:
          "PRAHNOVA revolutionizes lesson planning by leveraging AI to create comprehensive, curriculum-aligned lessons in minutes. Teachers simply describe their lesson objectives, and our AI generates a complete 5E model lesson plan.",
        highlights: [
          "12-minute lesson creation",
          "Curriculum-aligned content",
          "Standards-mapped activities",
          "Ready-to-teach materials",
        ],
      },
      {
        title: "How It Works",
        content:
          "Our AI system understands educational frameworks and curriculum standards. Teachers input their lesson topic and learning objectives, and PRAHNOVA generates a structured lesson plan following the 5E instructional model (Engage, Explore, Explain, Elaborate, Evaluate).",
      },
    ],
    features: [
      "Natural language lesson description",
      "5E model lesson generation",
      "CBSE/ICSE/State board alignment",
      "Automatic standards mapping",
      "Customizable templates",
      "Multi-format export",
    ],
    benefits: [
      "Reduce planning time from 3-4 hours to 12 minutes",
      "Ensure curriculum alignment",
      "Maintain consistent quality",
      "Focus more time on teaching",
    ],
    useCases: [
      "Individual lesson planning",
      "Unit planning and sequencing",
      "Differentiated instruction",
      "Resource creation",
    ],
  },
  {
    id: 2,
    slug: "prahneva",
    title: "PRAHNEVA",
    subtitle: "Adaptive Student Learning",
    description:
      "Multi-agent AI system: Strategist plans the learning path, Designer selects optimal content, Coach delivers with real-time hints. Pre-assessments detect gaps and difficulty adapts in real-time.",
    icon: Brain,
    gradient: "from-cyan-500 to-blue-600",
    sections: [
      {
        title: "Overview",
        content:
          "PRAHNEVA is an intelligent adaptive learning system powered by multi-agent AI. It personalizes the learning experience for each student by continuously assessing their understanding and adjusting content difficulty in real-time.",
        highlights: [
          "Multi-agent AI architecture",
          "Real-time difficulty adaptation",
          "Gap detection and remediation",
          "Personalized learning paths",
        ],
      },
      {
        title: "Multi-Agent Architecture",
        content:
          "Three specialized AI agents work together: The Strategist Agent plans optimal learning paths, the Designer Agent selects appropriate content, and the Coach Agent provides real-time hints and guidance. This orchestrated approach ensures each student receives personalized support.",
      },
    ],
    features: [
      "Pre-assessment gap detection",
      "Adaptive difficulty adjustment",
      "Real-time hint system",
      "Learning path optimization",
      "Progress tracking",
      "Intervention recommendations",
    ],
    benefits: [
      "Personalized learning for every student",
      "Faster gap closure",
      "Improved mastery rates",
      "Data-driven insights for teachers",
    ],
    useCases: [
      "Self-paced learning",
      "Homework assignments",
      "Remedial education",
      "Advanced learner acceleration",
    ],
  },
  {
    id: 3,
    slug: "prahtechna",
    title: "PRAHTECHNA",
    subtitle: "AI Tutor — Socratic Method",
    description:
      "Curriculum-aware, multilingual (English/Hindi/Tamil) AI tutor that guides with questions — never gives answers. Detects misconceptions, prevents homework cheating, and escalates to teachers when needed.",
    icon: GraduationCap,
    gradient: "from-purple-500 to-violet-600",
    sections: [
      {
        title: "Overview",
        content:
          "PRAHTECHNA is an AI tutor that uses the Socratic method to guide students toward understanding. Unlike traditional answer-giving systems, it asks thought-provoking questions to help students discover solutions themselves.",
        highlights: [
          "Socratic questioning method",
          "Multilingual support",
          "Misconception detection",
          "Anti-cheating mechanisms",
        ],
      },
      {
        title: "Pedagogy",
        content:
          "Based on proven Socratic teaching methods, PRAHTECHNA never directly provides answers. Instead, it guides students through questioning, helping them develop critical thinking skills and deep understanding.",
      },
    ],
    features: [
      "Multilingual support (English/Hindi/Tamil)",
      "Curriculum-aware questioning",
      "Misconception detection",
      "Homework integrity protection",
      "Teacher escalation system",
      "Conversation history",
    ],
    benefits: [
      "Develop critical thinking",
      "Build genuine understanding",
      "Maintain academic integrity",
      "24/7 learning support",
    ],
    useCases: [
      "Homework help",
      "Concept clarification",
      "Test preparation",
      "Independent study",
    ],
  },
  {
    id: 4,
    slug: "prahdata",
    title: "PRAHDATA",
    subtitle: "Continuous Learning Intelligence",
    description:
      "Every student interaction feeds back into the AI. Learns which metaphors work, which content drives mastery, and predicts which students need intervention before they struggle.",
    icon: BarChart3,
    gradient: "from-teal-500 to-cyan-600",
    sections: [
      {
        title: "Overview",
        content:
          "PRAHDATA is the intelligence layer that powers the entire Prahnava ecosystem. It continuously learns from every student interaction, identifying what works and predicting who needs help before they fall behind.",
        highlights: [
          "Continuous learning from interactions",
          "Predictive analytics",
          "Content effectiveness tracking",
          "Early intervention alerts",
        ],
      },
      {
        title: "Predictive Intelligence",
        content:
          "By analyzing patterns across thousands of student interactions, PRAHDATA can predict which students are at risk of struggling and recommend interventions proactively.",
      },
    ],
    features: [
      "Interaction analytics",
      "Metaphor effectiveness tracking",
      "Content performance analysis",
      "Student risk prediction",
      "Intervention recommendations",
      "A/B testing framework",
    ],
    benefits: [
      "Proactive intervention",
      "Optimized content selection",
      "Data-driven pedagogy",
      "Continuous system improvement",
    ],
    useCases: [
      "Early intervention systems",
      "Content optimization",
      "Pedagogical research",
      "Student success prediction",
    ],
  },
  {
    id: 5,
    slug: "prahlogix",
    title: "PRAHLOGIX",
    subtitle: "Multi-Agent Orchestration",
    description:
      "Strategist Agent → Designer Agent → Coach Agent → Orchestrator Meta-Agent. Real-time feedback loops ensure every agent learns and adapts from every interaction.",
    icon: Network,
    gradient: "from-indigo-500 to-violet-600",
    sections: [
      {
        title: "Overview",
        content:
          "PRAHLOGIX is the orchestration layer that coordinates all AI agents across the Prahnava platform. It ensures seamless collaboration between agents and continuous learning from every interaction.",
        highlights: [
          "Multi-agent coordination",
          "Real-time feedback loops",
          "Agent learning system",
          "Scalable architecture",
        ],
      },
      {
        title: "Agent Architecture",
        content:
          "The system consists of specialized agents: Strategist for planning, Designer for content selection, Coach for delivery, and an Orchestrator meta-agent that coordinates everything. Each agent learns and improves over time.",
      },
    ],
    features: [
      "Multi-agent orchestration",
      "Real-time feedback integration",
      "Agent performance monitoring",
      "Scalable infrastructure",
      "Cross-agent learning",
      "System optimization",
    ],
    benefits: [
      "Coordinated AI intelligence",
      "Continuous improvement",
      "Scalable performance",
      "Robust error handling",
    ],
    useCases: [
      "Platform-wide AI coordination",
      "System optimization",
      "Agent performance tuning",
      "Infrastructure scaling",
    ],
  },
];
