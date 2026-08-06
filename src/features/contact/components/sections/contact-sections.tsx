import { ArrowUpRight, Check, Info } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
import { CtaPanel } from "@/components/shared/cta-panel";
import { FaqAccordion } from "@/components/shared/faq-accordion";
import { Heading } from "@/components/shared/heading";
import { IconCardGrid } from "@/components/shared/icon-card-grid";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import { buttonVariants } from "@/components/ui/button";
import { businessHours } from "@/content/contact/business-hours";
import { contactChannels, contactPage, whyContactItems } from "@/content/contact/contact";
import { contactFaqs } from "@/content/contact/faq";
import { ContactForm } from "@/features/contact/components/contact-form/contact-form";
import { cn } from "@/lib/utils";

/** Section 2 — the four contact channels. */
export function ContactInformation() {
  return (
    <Section
      id="contact-information"
      aria-labelledby="contact-information-heading"
      background="surface"
      className="relative isolate scroll-mt-[var(--height-header)] overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />
      <Container>
        <SectionIntro
          headingId="contact-information-heading"
          eyebrow={contactPage.info.eyebrow}
          title={contactPage.info.title}
          description={contactPage.info.description}
        />

        <ul className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <li key={channel.id} className="h-full">
                <Reveal variant="fade-up" delay={index * 0.06} className="h-full">
                  <article className="group border-border bg-background hover:border-accent/30 has-[a:focus-visible]:ring-ring relative flex h-full flex-col overflow-hidden rounded-[20px] border p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-md has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-offset-2">
                    <span
                      aria-hidden="true"
                      className="bg-accent absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
                    />
                    <span className="border-border bg-primary/5 text-primary group-hover:border-accent/40 group-hover:bg-accent/10 group-hover:text-accent flex size-11 items-center justify-center rounded-xl border transition-[color,background-color,border-color,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-110">
                      <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                    </span>

                    <Heading level={3} size="h6" className="mt-4 text-base">
                      {channel.label}
                    </Heading>

                    <div className="text-body-sm text-muted-foreground mt-2 space-y-0.5">
                      {channel.lines.map((line) => (
                        <p key={line}>
                          {channel.href ? (
                            // Only the email is actionable — the phone is still
                            // a placeholder, so it stays plain text rather than
                            // a dial link that fails silently.
                            <a
                              href={channel.href}
                              className="hover:text-accent break-words underline-offset-4 after:absolute after:inset-0 hover:underline focus-visible:outline-none"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </article>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}

/** Section 3 — form left, supporting image and trust points right. */
export function ContactFormSection() {
  const { form } = contactPage;

  return (
    <Section
      id="contact-form"
      aria-labelledby="contact-form-heading"
      className="relative isolate scroll-mt-[var(--height-header)] overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <div className="grid gap-12 lg:grid-cols-[58fr_42fr] lg:gap-16">
          <div>
            <Reveal variant="fade-up">
              <div className="flex items-center gap-4">
                <p className="text-body-sm text-accent font-semibold tracking-[2px] uppercase">
                  {form.eyebrow}
                </p>
                <span aria-hidden="true" className="bg-accent/40 h-px w-12 shrink-0" />
              </div>
              <Heading id="contact-form-heading" level={2} size="h1" className="mt-5">
                {form.title}
              </Heading>
              <p className="text-body-lg text-muted-foreground mt-4">
                {form.description}
              </p>
            </Reveal>

            <Reveal variant="fade-up" delay={0.15} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>

          <div className="lg:pt-4">
            <Reveal variant="image">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-xl">
                <Image
                  src={form.image.src}
                  alt={form.image.alt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="from-primary/40 absolute inset-0 bg-gradient-to-t to-transparent"
                />
              </div>
            </Reveal>

            <Reveal variant="fade-up" delay={0.2}>
              <ul
                aria-label="What you can expect"
                className="border-border bg-surface mt-6 space-y-3 rounded-[20px] border p-6"
              >
                {form.trustPoints.map((point) => (
                  <li
                    key={point}
                    className="text-body-sm text-foreground flex items-center gap-3 font-medium"
                  >
                    <span className="bg-accent/15 text-accent flex size-5 shrink-0 items-center justify-center rounded-full">
                      <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/** Section 4 — embedded map plus the practical details beneath it. */
export function OfficeLocation() {
  const { location } = contactPage;

  return (
    <Section
      id="office-location"
      aria-labelledby="office-location-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />
      <Container>
        <SectionIntro
          headingId="office-location-heading"
          eyebrow={location.eyebrow}
          title={location.title}
          description={location.description}
        />

        <Reveal variant="image" className="mt-16">
          {/* Fixed aspect ratio reserves the box, so the third-party frame
              cannot shift the page as it loads. Lazy, because an embed is a
              heavy request for something below the fold. */}
          <div className="border-border relative aspect-[16/9] overflow-hidden rounded-[24px] border shadow-xl sm:aspect-[21/9]">
            <iframe
              src={location.mapSrc}
              title="Map showing Roxton Enterprises at Civic Center, Bahria Town Phase 4, Islamabad"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <Reveal variant="fade-up" delay={0.1}>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {location.details.map((detail) => (
                <div key={detail.label}>
                  <dt className="text-body-sm text-accent font-semibold tracking-wide uppercase">
                    {detail.label}
                  </dt>
                  <dd className="text-body-sm text-muted-foreground mt-1">
                    {detail.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal variant="fade-up" delay={0.2}>
            <a
              href={location.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "button-hover h-12 gap-2 rounded-xl px-7 text-base font-semibold",
              )}
            >
              Get Directions
              {/* The arrow marks this as leaving the site — the label alone
                  would not tell a screen reader a new tab is opening. */}
              <ArrowUpRight aria-hidden="true" className="size-4" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

/** Section 5 — the week, plus an urgent-assistance notice. */
export function BusinessHours() {
  const { hours } = contactPage;

  return (
    <Section
      id="business-hours"
      aria-labelledby="business-hours-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop accentGlow />
      <Container>
        <SectionIntro
          headingId="business-hours-heading"
          eyebrow={hours.eyebrow}
          title={hours.title}
          description={hours.description}
        />

        {/* A description list: each day is a term and its hours the definition,
            which is exactly the relationship a screen reader should convey. */}
        <Reveal variant="fade-up" className="mt-16">
          <dl className="border-border bg-background divide-border mx-auto max-w-3xl divide-y overflow-hidden rounded-[20px] border shadow-sm">
            {businessHours.map((entry) => {
              const isClosed = entry.hours === null;

              return (
                <div
                  key={entry.day}
                  className={cn(
                    "flex items-center justify-between gap-4 px-6 py-4",
                    isClosed && "bg-surface",
                  )}
                >
                  <dt className="text-body-sm text-foreground font-semibold">
                    {entry.day}
                  </dt>
                  <dd
                    className={cn(
                      "text-body-sm",
                      isClosed
                        ? "text-muted-foreground/70 italic"
                        : "text-muted-foreground",
                    )}
                  >
                    {entry.hours ?? "Closed"}
                  </dd>
                </div>
              );
            })}
          </dl>
        </Reveal>

        <Reveal variant="fade-up" delay={0.15}>
          <div className="border-accent/40 bg-accent/10 mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-[20px] border p-6">
            <Info aria-hidden="true" className="text-accent mt-0.5 size-5 shrink-0" />
            <div>
              <p className="text-body-sm text-foreground font-semibold">
                {hours.notice.title}
              </p>
              <p className="text-body-sm text-muted-foreground mt-1">
                {hours.notice.body}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

/** Section 6 — six reasons, from the shared grid. */
export function WhyContact() {
  return (
    <Section
      id="why-contact"
      aria-labelledby="why-contact-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial orbs />
      <Container>
        <SectionIntro
          headingId="why-contact-heading"
          eyebrow={contactPage.whyContact.eyebrow}
          title={contactPage.whyContact.title}
          description={contactPage.whyContact.description}
        />
        <IconCardGrid
          items={whyContactItems}
          ariaLabel="Why contact Roxton"
          columns={3}
          className="mt-16"
        />
      </Container>
    </Section>
  );
}

/** Section 7 — shared accordion. */
export function ContactFaq() {
  return (
    <Section
      id="contact-faq"
      aria-labelledby="contact-faq-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <SectionIntro
          headingId="contact-faq-heading"
          eyebrow={contactPage.faq.eyebrow}
          title={contactPage.faq.title}
          description={contactPage.faq.description}
        />
        <FaqAccordion items={contactFaqs} className="mt-16" />
      </Container>
    </Section>
  );
}

/** Section 8 — shared CTA panel. */
export function ContactCta() {
  const { cta } = contactPage;

  return (
    <Section
      id="contact-cta"
      aria-labelledby="contact-cta-heading"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop />
      <Container>
        <CtaPanel
          headingId="contact-cta-heading"
          eyebrow={cta.eyebrow}
          title={cta.title}
          description={cta.description}
          primaryCta={cta.primaryCta}
          secondaryCta={cta.secondaryCta}
          trustBadges={cta.trustBadges}
        />
      </Container>
    </Section>
  );
}
