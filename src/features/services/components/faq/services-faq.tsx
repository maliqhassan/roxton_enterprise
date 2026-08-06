import { Plus } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { SectionIntro } from "@/components/shared/section-intro";
import { faqs } from "@/content/services/faq";
import { servicesPage } from "@/content/services/page";

const STAGGER_STEP = 0.04;
const STAGGER_CAP = 0.24;

/**
 * FAQ accordion built on native <details>/<summary>.
 *
 * This is the whole reason the section ships zero JavaScript. The browser
 * already gives <details> the expand/collapse behaviour, Enter and Space
 * handling, focusability, and the expanded/collapsed state that screen readers
 * announce — all of which a custom accordion has to re-implement, usually
 * imperfectly. Find-in-page also reaches text inside a closed <details> in
 * modern browsers, which a display:none panel defeats.
 *
 * Each item is independent rather than sharing a `name` (which would make them
 * mutually exclusive): on an FAQ people frequently open two answers to compare
 * them, and auto-closing the previous one fights that.
 */
export function ServicesFaq() {
  return (
    <Section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(var(--primary) 1px, transparent 1px), linear-gradient(90deg, var(--primary) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <Container>
        <SectionIntro
          headingId="faq-heading"
          eyebrow={servicesPage.faq.eyebrow}
          title={servicesPage.faq.title}
          description={servicesPage.faq.description}
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <Reveal
              key={faq.id}
              variant="fade-up"
              delay={Math.min(index * STAGGER_STEP, STAGGER_CAP)}
            >
              <details
                id={faq.id}
                className="group border-border bg-background hover:border-accent/30 overflow-hidden rounded-[18px] border shadow-xs transition-[border-color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-standard)] open:shadow-md hover:shadow-md"
              >
                <summary className="focus-visible:outline-ring text-body text-foreground flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-semibold focus-visible:outline-2 focus-visible:-outline-offset-2 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  {/* Rotates to a minus when open — transform only. */}
                  <Plus
                    aria-hidden="true"
                    className="text-accent size-5 shrink-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-open:rotate-45"
                  />
                </summary>
                <div className="text-body-sm text-muted-foreground px-6 pb-6 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
