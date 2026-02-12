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
        title: "The Magic Experience",
        content:
          "PRAHNOVA transforms lesson planning from a 3-4 hour task into a 12-minute experience. Teachers simply input their lesson intent through natural language or a structured form, and our AI generates a complete, curriculum-aligned 5E model lesson plan. The system validates prerequisites, searches the content library for reusable learning blocks, and constructs pedagogically sound lessons following research-backed frameworks.",
        highlights: [
          "12-minute lesson creation",
          "15-20x efficiency gain",
          "Auto curriculum alignment",
          "5E model structure",
        ],
      },
      {
        title: "AI Generation Pipeline",
        content:
          "Our sophisticated AI pipeline operates in four phases: Content Discovery queries the curriculum graph and searches existing lessons; Pedagogical Structure builds the 5E framework (Engage, Explore, Explain, Elaborate, Evaluate); Content Generation creates videos, quizzes, and differentiated materials; Quality Assurance validates curriculum alignment and accessibility compliance.",
      },
      {
        title: "Teacher Review & Refinement",
        content:
          "Teachers see AI-generated lessons in an intuitive preview mode with side-by-side editing. The left panel shows the editable lesson outline, while the right panel displays content previews. Teachers can accept, modify, or replace any section. The system learns from teacher edits to improve future generations, creating a continuous improvement loop.",
      },
      {
        title: "Collaborative Curriculum Development",
        content:
          "Department heads can create semester-wide curricula and invite teachers to collaborate in real-time (Google Docs-style). The system tracks contributions, enables peer review workflows, validates curriculum coherence (vertical and horizontal alignment), and provides version control with merge conflict resolution.",
      },
    ],
    features: [
      "Natural language lesson description",
      "5E pedagogical framework (Engage, Explore, Explain, Elaborate, Evaluate)",
      "CBSE/ICSE/State board curriculum alignment",
      "Automatic standards mapping to learning objectives",
      "Reusable learning block library",
      "Interactive simulations and quizzes",
      "Differentiation for struggling and advanced learners",
      "Multilingual support (English/Hindi/Tamil)",
      "Accessibility compliance (WCAG 2.1 AA)",
      "Real-time collaborative editing",
      "Version control and approval workflows",
      "Quality assurance automation",
    ],
    benefits: [
      "Reduce lesson planning from 3-4 hours to 12 minutes (15-20x faster)",
      "Ensure 100% curriculum alignment with automatic standards mapping",
      "Maintain consistent pedagogical quality across all lessons",
      "Enable teacher collaboration at scale",
      "Free up teacher time to focus on instruction, not planning",
      "Access library of reusable, high-quality learning blocks",
      "Automatically generate differentiated content for diverse learners",
      "Meet accessibility requirements without additional effort",
    ],
    useCases: [
      "Individual lesson planning for daily classes",
      "Unit planning and semester curriculum design",
      "Department-wide curriculum development",
      "Differentiated instruction for mixed-ability classrooms",
      "Resource creation and content library building",
      "Cross-board curriculum adaptation (CBSE → ICSE)",
      "Multilingual lesson delivery",
      "Accessibility-compliant content generation",
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
        title: "Adaptive Learning at Scale",
        content:
          "PRAHNEVA personalizes education for every student through a sophisticated multi-agent AI architecture. The system starts with pre-assessments to detect knowledge gaps, then dynamically adjusts content difficulty and learning paths in real-time based on student performance. Unlike traditional one-size-fits-all approaches, PRAHNEVA ensures each student receives exactly the support they need, when they need it.",
        highlights: [
          "Multi-agent AI architecture",
          "Real-time difficulty adaptation",
          "70-80% mastery threshold",
          "3x faster gap closure",
        ],
      },
      {
        title: "Pre-Assessment & Gap Detection",
        content:
          "Before each lesson, students complete quick pre-assessments (3-5 questions) that evaluate prerequisite knowledge. The system analyzes results to identify knowledge gaps and determines whether to proceed with the lesson, add scaffolding, or provide remedial content. For example, if 40% of students struggled with 'organelle functions', the system automatically inserts a review section.",
      },
      {
        title: "Adaptive Branching in Action",
        content:
          "As students progress through lessons, PRAHNEVA continuously monitors engagement and comprehension. If a student spends 3+ minutes without progress on a simulation, the AI Coach offers subtle hints. If a student excels on quiz questions, the system increases difficulty. Visual learners receive video-first delivery, while reading learners get text-first content, all determined by analyzing past learning patterns.",
      },
      {
        title: "Multi-Modal Content Delivery",
        content:
          "The AI Strategist Agent analyzes student profiles to determine optimal content delivery: visual learners get videos and interactive diagrams; kinesthetic learners get simulations and hands-on activities; reading learners get text explanations. Content can be dynamically reordered, supplemented, or simplified based on real-time student interactions.",
      },
    ],
    features: [
      "Pre-assessment gap detection",
      "Adaptive difficulty adjustment (Easy → Medium → Hard)",
      "Real-time hint system with Socratic questioning",
      "Learning path optimization based on student profiles",
      "Multi-agent coordination (Strategist, Designer, Coach)",
      "Progress tracking with knowledge graph updates",
      "Intervention recommendations for teachers",
      "Personalized content sequencing",
      "Learning style matching (visual, auditory, kinesthetic)",
      "Formative assessment checkpoints",
      "Self-assessment prompts",
      "Micro-lesson generation for gap closure",
    ],
    benefits: [
      "Personalized learning for every student automatically",
      "3x faster gap closure compared to traditional methods",
      "80%+ mastery rates with adaptive difficulty",
      "Early intervention before students fall behind",
      "Data-driven insights for teachers on student progress",
      "Reduced need for one-on-one tutoring",
      "Continuous assessment without teacher overhead",
      "Scalable personalization across hundreds of students",
    ],
    useCases: [
      "Self-paced learning environments",
      "Homework assignments with adaptive support",
      "Remedial education and gap closure programs",
      "Advanced learner acceleration paths",
      "Formative assessment during lessons",
      "Differentiated instruction automation",
      "Intervention-based teaching strategies",
      "Continuous progress monitoring",
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
        title: "Socratic AI Tutoring",
        content:
          "PRAHTECHNA is an AI tutor that uses the Socratic method to guide students toward understanding through questioning, not answer-giving. Based on research-proven pedagogical approaches, it asks thought-provoking questions that help students discover solutions themselves, developing critical thinking skills and deep conceptual understanding. The system is curriculum-aware, multilingual, and designed to prevent homework cheating.",
        highlights: [
          "Socratic questioning method",
          "Multilingual (English/Hindi/Tamil)",
          "Misconception detection",
          "Anti-cheating safeguards",
        ],
      },
      {
        title: "How It Works: Text & Voice Interaction",
        content:
          "Students can interact with PRAHTECHNA via text chat or voice (in their preferred language). When a student asks for help, the AI analyzes their question, identifies the underlying misconception, and responds with guiding questions rather than direct answers. For example, if a student asks 'Why is -3 x -2 = +6?', the AI guides them through 'opposite of an opposite' reasoning step-by-step.",
      },
      {
        title: "Curriculum-Aware Intelligence",
        content:
          "Unlike generic AI tutors, PRAHTECHNA understands the current lesson context, learning objectives, and student's knowledge state. It knows which prerequisites the student has mastered and which concepts they're struggling with. This context allows it to provide targeted, pedagogically sound guidance aligned with curriculum standards and teacher preferences.",
      },
      {
        title: "Homework Prevention & Teacher Oversight",
        content:
          "PRAHTECHNA is designed to guide learning, not enable cheating. It detects 'give me the answer' requests and redirects to Socratic questioning. Teachers can review all AI conversation logs, provide feedback, and set pedagogical approaches (e.g., level of hint directness). The system escalates to teachers when students show frustration, off-topic behavior, or profanity.",
      },
    ],
    features: [
      "Multilingual support (English, Hindi, Tamil)",
      "Voice and text interaction modes",
      "Curriculum-aware questioning aligned with learning objectives",
      "Misconception detection and targeted remediation",
      "Socratic method with progressive scaffolding",
      "Homework integrity protection (no direct answers)",
      "Teacher escalation system for complex issues",
      "Conversation history and analytics",
      "Context retention across sessions",
      "Factual accuracy verification against curriculum",
      "Profanity and harassment detection",
      "Teacher oversight and review capabilities",
    ],
    benefits: [
      "24/7 learning support without teacher intervention",
      "Develop critical thinking through Socratic questioning",
      "Build genuine understanding, not memorization",
      "Maintain academic integrity with anti-cheating design",
      "Reduce teacher workload for basic concept clarification",
      "Serve multilingual student populations effectively",
      "Provide instant feedback without wait times",
      "Scale one-on-one tutoring to entire classrooms",
    ],
    useCases: [
      "Homework help and concept clarification",
      "Test preparation and practice",
      "Independent study support",
      "After-school tutoring supplement",
      "Multilingual learning environments",
      "Misconception remediation",
      "Critical thinking development",
      "Asynchronous learning support",
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
        title: "The Intelligence Layer",
        content:
          "PRAHDATA is the continuous learning intelligence that powers the entire Prahnava ecosystem. It analyzes every student interaction, teacher edit, and learning outcome to identify what works and what doesn't. Unlike static systems, PRAHDATA gets smarter over time, learning from millions of interactions to optimize content effectiveness, predict student struggles, and recommend interventions proactively.",
        highlights: [
          "Continuous learning from interactions",
          "Predictive analytics for interventions",
          "Content effectiveness tracking",
          "3-5 year competitive moat",
        ],
      },
      {
        title: "Data Collection & Insight Generation",
        content:
          "PRAHDATA collects anonymized student interaction data (time-on-task, video replays, quiz performance, AI tutor conversations), teacher behavior data (content acceptance rates, edit patterns, difficulty calibrations), and learning outcomes data (pre/post-assessment gains, long-term retention, transfer to new contexts). Nightly batch processing generates pedagogical insights like 'Students who watched video 2x had 15% better quiz scores'.",
      },
      {
        title: "Predictive Intelligence",
        content:
          "By analyzing patterns across thousands of student interactions, PRAHDATA predicts which students are at risk of struggling before they fall behind. For example, if a student's engagement pattern matches historical data of students who later struggled with 'negative exponents', the system recommends pre-emptive remedial content. This shifts education from reactive to proactive.",
      },
      {
        title: "The Competitive Moat",
        content:
          "Year 1: Basic analytics and simple recommendations. Year 3: Sophisticated pedagogical AI trained on 50M+ interactions, mapping 'which content works for which student archetype' with high precision. Year 5: Predictive intelligence that forecasts struggles weeks in advance. Competitors entering the market have zero training data and need 2-3 years to catch up—by then, Prahnava is 5 years ahead. This is the flywheel that compounds advantage over time.",
      },
    ],
    features: [
      "Real-time interaction analytics",
      "Metaphor and analogy effectiveness tracking",
      "Content performance analysis and ranking",
      "Student risk prediction (before they struggle)",
      "Intervention recommendation engine",
      "A/B testing framework for content",
      "Pedagogical insight generation",
      "Long-term retention analysis",
      "Transfer learning measurement",
      "Teacher behavior pattern recognition",
      "Continuous model improvement",
      "Dashboard reporting for teachers",
    ],
    benefits: [
      "Proactive intervention before students fall behind",
      "Optimized content selection based on effectiveness data",
      "Data-driven pedagogy backed by real outcomes",
      "Continuous system improvement from every interaction",
      "Competitive moat that compounds over years",
      "Reduced teacher burden with automated analytics",
      "Higher student success rates through predictive support",
      "Insights unavailable in traditional education systems",
    ],
    useCases: [
      "Early intervention systems for at-risk students",
      "Content optimization and library curation",
      "Pedagogical research and curriculum design",
      "Student success prediction and tracking",
      "A/B testing of teaching strategies",
      "Teacher professional development insights",
      "Board-level education analytics",
      "Longitudinal learning outcome studies",
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
        title: "Multi-Agent Architecture",
        content:
          "PRAHLOGIX is the orchestration layer that coordinates all AI agents across the Prahnava platform. Unlike monolithic AI systems, PRAHLOGIX uses specialized agents—Strategist (learning path planner), Designer (content selector), Coach (real-time tutor)—orchestrated by a meta-agent. This architecture enables modularity, parallel processing, explainability, and continuous improvement of individual components without retraining the entire system.",
        highlights: [
          "Multi-agent coordination",
          "Real-time feedback loops",
          "Modular upgradability",
          "Explainable AI decisions",
        ],
      },
      {
        title: "Agent 1: Strategist (Learning Path Planner)",
        content:
          "The Strategist Agent designs personalized learning paths for each student. It analyzes student knowledge state, learning objectives, student profile (learning style, pace), and curriculum graph to decide which learning blocks to assign next, when to branch to remedial vs advanced paths, optimal pacing, and when to assess mastery. For example, it plans 'Remedial micro-lesson on opposite concept → Number line simulation → Practice problems → Formative quiz'.",
      },
      {
        title: "Agent 2: Designer (Content Selector)",
        content:
          "The Designer Agent selects or generates specific content for each learning step. It searches the content library (learning blocks, assessments), evaluates content effectiveness scores, matches content modality to student learning style (video vs text vs simulation), and decides whether to reuse existing content or generate fresh material. For instance, it might generate a NEW micro-lesson combining a video metaphor with a simplified number line for a struggling visual learner.",
      },
      {
        title: "Agent 3: Coach (Real-Time Tutor)",
        content:
          "The Coach Agent delivers content and provides real-time tutoring. It monitors student interactions (clicks, time-on-task, responses), offers hints when students are stuck (>2 min), phrases explanations at appropriate difficulty levels, escalates to teachers when needed, and decides when to advance to the next step. After delivering a practice problem, if the student answers correctly and quickly, the Coach escalates difficulty; if they struggle, it provides scaffolded hints.",
      },
      {
        title: "Meta-Agent: Orchestrator",
        content:
          "The Orchestrator meta-agent monitors all three agents, resolves conflicts (e.g., Strategist wants advanced path but Designer says no suitable content exists → generate new content), balances AI inference load across GPUs, validates agent decisions against pedagogical rules, and escalates to teachers if students need human intervention. This ensures coordinated intelligence across the entire system.",
      },
    ],
    features: [
      "Multi-agent orchestration (Strategist, Designer, Coach)",
      "Real-time feedback integration across agents",
      "Agent performance monitoring and optimization",
      "Scalable infrastructure with load balancing",
      "Cross-agent learning and knowledge sharing",
      "Conflict resolution between agent decisions",
      "Explainable AI with decision tracing",
      "Modular agent upgrades without full retraining",
      "Parallel processing for efficiency",
      "Quality control validation layer",
      "Teacher escalation protocols",
      "System-wide optimization",
    ],
    benefits: [
      "Coordinated AI intelligence across entire platform",
      "Continuous improvement through agent specialization",
      "Scalable performance with parallel processing",
      "Robust error handling and conflict resolution",
      "Explainable decisions for teacher trust",
      "Faster iteration with modular upgrades",
      "Reduced latency with load balancing",
      "Higher success rates through agent collaboration",
    ],
    useCases: [
      "Platform-wide AI coordination",
      "System optimization and tuning",
      "Agent performance benchmarking",
      "Infrastructure scaling for growth",
      "Pedagogical rule enforcement",
      "Complex learning path orchestration",
      "Multi-modal content delivery",
      "Real-time adaptive tutoring at scale",
    ],
  },
];
