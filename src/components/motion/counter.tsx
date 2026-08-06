"use client";

import { motion } from "framer-motion";

import { useCounter } from "@/hooks/use-counter";

interface CounterProps {
  value: number;
  /** Static string appended after the number (e.g. "+", "%") — serializable, safe from a Server Component. */
  suffix?: string;
  duration?: number;
  /**
   * Custom formatter, for use when Counter is rendered from within an
   * already-client component tree. Functions can't cross a Server ->
   * Client props boundary — use `suffix` instead when the parent is a
   * Server Component (e.g. a section rendering this directly).
   */
  formatter?: (value: number) => string;
  className?: string;
}

export function Counter({
  value,
  suffix = "",
  duration,
  formatter,
  className,
}: CounterProps) {
  const resolvedFormatter =
    formatter ?? ((v: number) => `${Math.round(v).toLocaleString()}${suffix}`);
  const { ref, onViewportEnter } = useCounter(value, {
    duration,
    formatter: resolvedFormatter,
  });

  return (
    <motion.span
      ref={ref}
      className={className}
      viewport={{ once: true, amount: 0.2 }}
      onViewportEnter={onViewportEnter}
    >
      0
    </motion.span>
  );
}
