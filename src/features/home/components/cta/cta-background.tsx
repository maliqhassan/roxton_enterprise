/**
 * Decorative layers inside the CTA panel.
 *
 * A Server Component. The drift comes from the existing --animate-drift token
 * rather than a new keyframe: it already combines a small translate with a
 * slight scale, which is exactly the float-and-pulse the brief asks for, and
 * the global prefers-reduced-motion rule in motion.css already parks it. Only
 * transform is animated, so the glows stay on the compositor.
 *
 * The whole layer sits at -z-10 inside the panel's own stacking context: an
 * element's negative-z children paint after its background but before its
 * content, so the decoration can never sit over the copy.
 */
export function CtaBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      {/* Base navy gradient. #122e58 is a one-off lift of --primary for this
          panel only, so it stays inline rather than becoming a global token. */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(160deg, #0e2344 0%, #122e58 100%)" }}
      />

      {/* Soft top glow, so the panel reads as lit from above. */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_0%,rgb(255_255_255/0.10),transparent_70%)]" />

      {/* Dotted grid. White, not primary — a navy dot on navy is invisible. */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(rgb(255 255 255) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Abstract logistics lines — faint diagonal routing across the panel. */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, rgb(255 255 255) 0 1px, transparent 1px 120px)",
        }}
      />

      {/* Drifting glows. Negative delays start them mid-cycle so the two are
          never in step, which is what stops the pair reading as one pulse. */}
      <div className="bg-accent/25 animate-drift absolute -top-24 -left-16 size-[26rem] rounded-full blur-[130px] [animation-delay:-6s]" />
      <div className="animate-drift absolute -right-20 -bottom-28 size-[30rem] rounded-full bg-[#2f6bd8]/25 blur-[150px] [animation-delay:-14s] [animation-duration:32s]" />
    </div>
  );
}
