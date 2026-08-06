"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

import { getMagneticOffset, type MagneticOffsetOptions } from "@/animations/mouse";
import { springs } from "@/animations/tokens";
import { useSafeReducedMotion } from "@/hooks/use-safe-reduced-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends MagneticOffsetOptions {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps its children (typically our Button) with magnetic pointer-follow —
 * composition over reimplementation, so it doesn't duplicate Button's styling.
 */
export function MagneticButton({
  children,
  className,
  strength,
  maxOffset,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useSafeReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, springs.snappy);
  const springY = useSpring(y, springs.snappy);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion || !ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const offset = getMagneticOffset(event.clientX, event.clientY, bounds, {
      strength,
      maxOffset,
    });
    x.set(offset.x);
    y.set(offset.y);
  }

  function handlePointerLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ x: springX, y: springY }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}
