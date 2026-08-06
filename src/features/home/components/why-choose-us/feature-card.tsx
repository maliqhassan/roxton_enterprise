import { Heading } from "@/components/shared/heading";
import type { WhyChooseFeature } from "@/content/home/why-choose-us";

interface FeatureCardProps {
  feature: WhyChooseFeature;
}

/**
 * One reason to choose Roxton.
 *
 * Presentational, not interactive: these are statements, not destinations.
 * See FeatureGrid for why that rules out the hover arrow.
 *
 * A Server Component — every hover effect is CSS, so the card ships no JS.
 */
export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="group border-border bg-background relative flex h-full flex-col overflow-hidden rounded-[20px] border p-7 shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
      {/* Gold rule that wipes in from the left on hover — scaleX only. */}
      <span
        aria-hidden="true"
        className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
      />

      <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-12 items-center justify-center rounded-2xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
      </span>

      <Heading level={3} size="h6" className="mt-5">
        {feature.title}
      </Heading>

      <p className="text-body-sm text-muted-foreground mt-2">{feature.description}</p>
    </article>
  );
}
