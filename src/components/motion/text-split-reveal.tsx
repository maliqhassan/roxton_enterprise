"use client";

import { motion } from "framer-motion";

import { fadeUp } from "@/animations/motion-variants";
import { staggerContainerFast } from "@/animations/stagger";
import { splitIntoChars, splitIntoWords } from "@/animations/text-reveal";
import { useInView } from "@/hooks/use-in-view";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";
import { cn } from "@/lib/utils";

interface TextSplitRevealProps {
  text: string;
  by?: "word" | "char";
  className?: string;
  /** Delay in seconds before this instance's stagger starts — for cascading multiple instances (e.g. heading lines). */
  delay?: number;
}

const NBSP = " ";

/**
 * Splits text for a staggered per-word/char reveal. The full string is set
 * as aria-label on the wrapper and each animated span is aria-hidden, so
 * screen readers get one clean read instead of fragmented words/characters.
 * Whitespace units render as NBSP so HTML whitespace-collapsing doesn't
 * swallow the space inside its own inline-block span.
 */
export function TextSplitReveal({
  text,
  by = "word",
  className,
  delay = 0,
}: TextSplitRevealProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const prefersReducedMotion = useSafeReducedMotion();

  if (prefersReducedMotion) {
    return <span className={className}>{text}</span>;
  }

  const units = by === "char" ? splitIntoChars(text) : splitIntoWords(text);

  return (
    <motion.span
      ref={ref}
      aria-label={text}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={staggerContainerFast}
      transition={{ delayChildren: delay }}
      className={cn("inline", className)}
    >
      {units.map((unit, index) => (
        <motion.span
          key={index}
          variants={fadeUp}
          aria-hidden="true"
          className="inline-block"
        >
          {/^\s+$/.test(unit) ? NBSP : unit}
        </motion.span>
      ))}
    </motion.span>
  );
}
