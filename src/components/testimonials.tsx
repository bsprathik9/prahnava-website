"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Prahnava's document intelligence pipeline achieved 98% accuracy on transcript extraction — a task our previous vendor couldn't crack past 80%. Their team understood our data challenges from day one.",
    name: "Operations Head",
    designation: "EdTech Company",
  },
  {
    quote:
      "What used to take our teachers 3 hours per lesson now takes 12 minutes with Prahnava LMS. The AI-generated lesson plans are perfectly aligned with our CBSE curriculum. It's transformed how we teach.",
    name: "Principal",
    designation: "CBSE School, Bangalore",
  },
  {
    quote:
      "We integrated Prahnava's agentic AI system into our customer support pipeline. Resolution time dropped 40% in the first month. Their engineering team shipped faster than our own internal team.",
    name: "CTO",
    designation: "SaaS Startup",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="relative py-16 md:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[128px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-medium text-violet-400 mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-semibold text-white tracking-tight"
          >
            Trusted by{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </motion.h2>
        </div>

        <div className="relative">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="mb-8">
                  <svg
                    className="h-8 w-8 text-violet-500/50"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>

                <motion.p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-8">
                  {testimonials[active].quote.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ filter: "blur(8px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {testimonials[active].name}
                  </h4>
                  <p className="text-sm text-violet-400">
                    {testimonials[active].designation}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-3 mt-8">
              <button
                onClick={handlePrev}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group hover:border-violet-500/30 hover:bg-violet-500/10 transition-all"
              >
                <ArrowLeft className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:-translate-x-0.5 transition-all" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group hover:border-violet-500/30 hover:bg-violet-500/10 transition-all"
              >
                <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
              </button>
              <div className="flex items-center gap-2 ml-auto">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === active
                        ? "w-8 bg-violet-500"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
