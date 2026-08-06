"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { useReveal, type RevealVariant } from "@/hooks/use-reveal";

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
}

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  className,
}: RevealProps) {
  const reveal = useReveal(variant, { delay });

  return (
    <motion.div className={className} {...reveal}>
      {children}
    </motion.div>
  );
}
