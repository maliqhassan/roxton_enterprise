/**
 * Numeric mirror of src/styles/tokens/motion.css, for consumers that need
 * real JS values instead of CSS strings (Framer Motion transition props,
 * GSAP timeline configs). Keep these in sync with motion.css by hand —
 * this is the one deliberate CSS/TS duplication point in the token system.
 */

export const duration = {
  instant: 0.1,
  fast: 0.15,
  base: 0.25,
  moderate: 0.4,
  slow: 0.6,
  slower: 0.9,
} as const;

export type DurationToken = keyof typeof duration;

export const easing = {
  standard: [0.22, 1, 0.36, 1],
  emphasized: [0.16, 1, 0.3, 1],
} as const satisfies Record<string, readonly [number, number, number, number]>;

export type EasingToken = keyof typeof easing;

/** Spring physics presets for interaction-driven motion (magnetic, hover, scroll-smoothed values). */
export const springs = {
  snappy: { stiffness: 400, damping: 30, mass: 0.5 },
  gentle: { stiffness: 200, damping: 25, mass: 1 },
  smooth: { stiffness: 300, damping: 40, mass: 1 },
} as const;

export type SpringToken = keyof typeof springs;

/** Pixel offsets for directional reveal variants (fade-up/down/left/right). */
export const offset = {
  sm: 12,
  md: 24,
  lg: 48,
} as const;

export type OffsetToken = keyof typeof offset;
