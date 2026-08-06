/** Shared viewport/scroll defaults, centralized so no consumer hardcodes its own margin. */
export const viewport = {
  once: true,
  margin: "-80px",
  amount: 0.2,
} as const;

/**
 * useScroll target offset presets, keyed by intent. Kept as a literal tuple
 * (not widened to string[]) since Framer Motion's offset type only accepts
 * specific "edge edge" patterns like "start end".
 */
export const scrollOffset = {
  /** Track progress across an element's full pass through the viewport — for parallax. */
  enterViewport: ["start end", "end start"] as const,
};
