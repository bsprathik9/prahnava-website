"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

interface GooeyTextProps {
  texts: string[];
  taglines?: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
  prefixText?: string;
}

export function GooeyText({
  texts,
  taglines,
  morphTime = 1,
  cooldownTime = 0.25,
  className,
  textClassName,
  prefixText,
}: GooeyTextProps) {
  const text1Ref = React.useRef<HTMLSpanElement>(null);
  const text2Ref = React.useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;
    let animationId: number;

    if (text1Ref.current && text2Ref.current) {
      text1Ref.current.textContent = texts[textIndex % texts.length];
      text2Ref.current.textContent = texts[(textIndex + 1) % texts.length];
    }

    const setMorph = (fraction: number) => {
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        text2Ref.current.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        const f = 1 - fraction;
        text1Ref.current.style.filter = `blur(${Math.min(8 / f - 8, 100)}px)`;
        text1Ref.current.style.opacity = `${Math.pow(f, 0.4) * 100}%`;
      }
    };

    const doCooldown = () => {
      morph = 0;
      if (text1Ref.current && text2Ref.current) {
        text2Ref.current.style.filter = "";
        text2Ref.current.style.opacity = "100%";
        text1Ref.current.style.filter = "";
        text1Ref.current.style.opacity = "0%";
      }
    };

    const doMorph = () => {
      morph -= cooldown;
      cooldown = 0;
      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    };

    function animate() {
      animationId = requestAnimationFrame(animate);
      const newTime = new Date();
      const shouldIncrementIndex = cooldown > 0;
      const dt = (newTime.getTime() - time.getTime()) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          textIndex = (textIndex + 1) % texts.length;
          const nextIndex = (textIndex + 1) % texts.length;
          if (text1Ref.current && text2Ref.current) {
            text1Ref.current.textContent = texts[textIndex];
            text2Ref.current.textContent = texts[nextIndex];
          }
          setActiveIndex(nextIndex);
        }
        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [texts, morphTime, cooldownTime]);

  return (
    <div className={cn("relative flex flex-col items-center", className)}>
      <svg
        className="absolute h-0 w-0"
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <filter id="gooey-threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div className="relative w-full flex items-center justify-center h-20 md:h-28">
        {prefixText && (
          <span
            className={cn(
              "select-none z-10",
              textClassName
            )}
          >
            {prefixText}
          </span>
        )}
        <div
          className={prefixText ? "relative inline-block min-w-[300px] md:min-w-[400px] lg:min-w-[500px]" : "relative w-full"}
          style={{ filter: "url(#gooey-threshold)" }}
        >
          <span
            ref={text1Ref}
            className={cn(
              prefixText
                ? "select-none whitespace-nowrap inline-block"
                : "absolute inset-0 flex items-center justify-center select-none",
              textClassName
            )}
          />
          <span
            ref={text2Ref}
            className={cn(
              prefixText
                ? "absolute left-0 top-0 select-none whitespace-nowrap inline-block"
                : "absolute inset-0 flex items-center justify-center select-none",
              textClassName
            )}
          />
        </div>
      </div>

      {taglines && taglines.length > 0 && (
        <div className="h-8 mt-3 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="text-base md:text-lg text-zinc-400 text-center"
            >
              {taglines[activeIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
