export interface MagneticOffsetOptions {
  /** 0-1, fraction of pointer-to-center distance to translate. */
  strength?: number;
  /** px cap so the pull never exceeds a sane bound. */
  maxOffset?: number;
}

/**
 * Pure function: given pointer coordinates and an element's bounds, returns
 * a clamped {x, y} translate offset — the "magnetic pull" math, independent
 * of React/DOM so it's easy to reason about and reuse.
 */
export function getMagneticOffset(
  pointerX: number,
  pointerY: number,
  bounds: DOMRect,
  { strength = 0.3, maxOffset = 16 }: MagneticOffsetOptions = {},
): { x: number; y: number } {
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  const rawX = (pointerX - centerX) * strength;
  const rawY = (pointerY - centerY) * strength;

  return {
    x: Math.max(-maxOffset, Math.min(maxOffset, rawX)),
    y: Math.max(-maxOffset, Math.min(maxOffset, rawY)),
  };
}
