"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

import { useParallax } from "@/hooks/use-parallax";

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  distance?: number;
  className?: string;
}

export function Parallax({ children, speed, distance, className }: ParallaxProps) {
  const { ref, y } = useParallax({ speed, distance });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
