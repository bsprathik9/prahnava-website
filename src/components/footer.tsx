"use client";

import React from "react";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, MapPin, Phone } from "lucide-react";

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Services",
    links: [
      { title: "Agentic AI Systems", href: "#services" },
      { title: "RAG & Semantic Search", href: "#services" },
      { title: "Document Intelligence", href: "#services" },
      { title: "LLM Integration", href: "#services" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Prahnava LMS", href: "#product" },
      { title: "Privacy Policy", href: "#" },
      { title: "Terms of Service", href: "#" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Case Studies", href: "#" },
      { title: "Documentation", href: "#" },
      { title: "Careers", href: "#" },
    ],
  },
  {
    label: "Connect",
    links: [
      { title: "LinkedIn", href: "https://linkedin.com/company/prahnava", icon: Linkedin },
      { title: "Twitter", href: "https://twitter.com/prahnava", icon: Twitter },
      { title: "GitHub", href: "https://github.com/prahnava", icon: Github },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl md:rounded-t-[3rem] border-t border-white/10 bg-[radial-gradient(35%_128px_at_50%_0%,rgba(139,92,246,0.08),transparent)] px-6 py-12 lg:py-14">
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/30 blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Prahnava AI"
              width={32}
              height={32}
              className="w-8 h-8 rounded-lg object-contain"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = "none";
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = "flex";
              }}
            />
            <div
              className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-400 items-center justify-center hidden"
            >
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-white font-semibold text-lg tracking-tight">
              Prahnava AI
            </span>
          </div>
          <p className="text-sm text-zinc-400 mt-4">
            Where Intelligence Meets Engineering
          </p>
          <div className="space-y-2.5 mt-4">
            <a
              href="mailto:services@prahnava.com"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Mail className="size-4 shrink-0" />
              services@prahnava.com
            </a>
            <a
              href="tel:+917760663434"
              className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <Phone className="size-4 shrink-0" />
              +91-7760663434
            </a>
            <div className="flex items-start gap-2 text-sm text-zinc-400">
              <MapPin className="size-4 shrink-0 mt-0.5" />
              <span>
                871, 80 Feet Rd, Kalyan Nagar, Indira Nagar 1st Stage, Stage 1,
                New Tippasandra, Bengaluru, Karnataka 560075
              </span>
            </div>
          </div>
          <p className="text-zinc-500 text-xs mt-6">
            &copy; {new Date().getFullYear()} Prahnava AI. All rights reserved.
          </p>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-medium text-white">
                  {section.label}
                </h3>
                <ul className="text-zinc-400 mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        href={link.href}
                        className="hover:text-white inline-flex items-center transition-all duration-300"
                        target={
                          link.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          link.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {link.icon && <link.icon className="me-1.5 size-3.5" />}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
