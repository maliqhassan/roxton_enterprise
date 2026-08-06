"use client";

import { useRef } from "react";
import { useInView as useFramerInView } from "framer-motion";

import { viewport } from "@/animations/scroll";

interface UseInViewOptions {
  once?: boolean;
  margin?: string;
  amount?: number;
}

/**
 * Thin wrapper over Framer Motion's useInView with our standardized
 * defaults, so consumers don't each re-specify the same margin/amount.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {},
) {
  const ref = useRef<T>(null);
  const inView = useFramerInView(ref, {
    once: options.once ?? viewport.once,
    margin: (options.margin ?? viewport.margin) as `${number}px`,
    amount: options.amount ?? viewport.amount,
  });

  return { ref, inView };
}
