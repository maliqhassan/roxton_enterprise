import { Reveal } from "@/components/motion/reveal";
import { whyChooseFeatures } from "@/content/home/why-choose-us";
import { FeatureCard } from "@/features/home/components/why-choose-us/feature-card";

/**
 * Two columns by three rows on desktop, one column on mobile. Cards are
 * stretched by the grid and each is h-full, so a row's cards match height
 * however long their copy runs.
 *
 * Note there is no per-card link or hover arrow. An arrow signals navigation,
 * and "Quality Assurance" has no destination that would not be invented;
 * giving the cards tabindex so they are "keyboard accessible" would add six
 * tab stops that do nothing, which is worse for keyboard users than leaving
 * plain text as plain text. The section's one real action is its CTA.
 */
const STAGGER_STEP = 0.06;
const STAGGER_CAP = 0.24;

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {whyChooseFeatures.map((feature, index) => (
        <Reveal
          key={feature.id}
          variant="fade-up"
          delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
          className="h-full"
        >
          <FeatureCard feature={feature} />
        </Reveal>
      ))}
    </div>
  );
}
