import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  className?: string;
}

/**
 * Decorative ambient gradient. Pure CSS (no Framer Motion) so it stays a
 * Server Component and ships zero client JS — belongs in components/shared,
 * not components/motion, which is reserved for Framer Motion behavior.
 */
export function AnimatedBackground({ className }: AnimatedBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(40% 40% at 20% 20%, color-mix(in oklch, var(--primary) 16%, transparent), transparent), radial-gradient(35% 35% at 85% 30%, color-mix(in oklch, var(--accent) 14%, transparent), transparent)",
        }}
      />
    </div>
  );
}
