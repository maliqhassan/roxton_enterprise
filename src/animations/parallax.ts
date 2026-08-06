export interface ParallaxRangeOptions {
  /** -1 to 1; negative reverses direction. */
  speed?: number;
  /** Max travel distance in px at speed = 1. */
  distance?: number;
}

/**
 * Pure function: given a speed/distance, returns the [from, to] translateY
 * range to drive with useTransform(scrollYProgress, [0, 1], range). GPU-safe
 * (transform-only) by construction — there's no way to misuse this into a
 * layout-triggering property since it only ever returns px translate values.
 */
export function getParallaxOffsetRange({
  speed = 0.3,
  distance = 120,
}: ParallaxRangeOptions = {}): [string, string] {
  const travel = distance * speed;
  return [`${travel}px`, `${-travel}px`];
}
