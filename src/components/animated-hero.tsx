"use client";

import { GooeyText } from "@/components/ui/gooey-text";

const brandSuffixes = [
  "NOVA",
  "NEVA",
  "TECHNA",
  "INOVA",
  "DATA",
  "LOGIX",
  "SYNVA",
  "GENVA",
  "DIGNA",
  "VERTA",
];

const taglines = [
  "New star, explosion of innovation",
  "New era feel, modern and fresh",
  "Direct tech association, futuristic tone",
  "Innovation + Nova blend",
  "Perfect if you're data/AI focused",
  "Logic, smart systems vibe",
  "Sync/synergy, connected tech",
  "Generation/next-gen",
  "Digital, transformation focus",
  "Convert/transform, good for solutions or AI",
];

export function AnimatedHero() {
  return (
    <section className="w-full relative overflow-hidden pt-28 md:pt-36 pb-10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[128px]" />
      </div>

      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-center flex-col">
          <GooeyText
            texts={brandSuffixes}
            taglines={taglines}
            morphTime={1.2}
            cooldownTime={1.8}
            className="w-full"
            textClassName="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight"
            prefixText="PRAH"
          />
        </div>
      </div>
    </section>
  );
}
