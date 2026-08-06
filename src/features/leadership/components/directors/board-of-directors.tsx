import { Briefcase, Target, UserRound } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";
import { Container } from "@/components/shared/container";
// lucide-react ships no brand marks; the project already keeps hand-drawn
// glyphs for exactly this, used by the footer's social links.
import { LinkedinIcon } from "@/components/shared/social-icons";
import { Heading } from "@/components/shared/heading";
import { Section } from "@/components/shared/section";
import { SectionBackdrop } from "@/components/shared/section-backdrop";
import { SectionIntro } from "@/components/shared/section-intro";
import {
  directors,
  leadershipPage,
  type DirectorProfile,
} from "@/content/leadership/leadership";

/**
 * One director. Every field degrades on its own: a missing portrait falls back
 * to a marked placeholder, a missing name to "Appointment to be announced",
 * and an absent LinkedIn simply omits the icon rather than leaving a dead one.
 *
 * That matters because both records are empty today — the section has to read
 * as deliberately pending rather than broken, and has to become real the
 * moment leadership.ts is filled in, with no component change.
 */
function DirectorCard({ director }: { director: DirectorProfile }) {
  const hasName = director.name.trim().length > 0;
  const hasPortrait = director.image.src.trim().length > 0;
  const displayName = hasName ? director.name : "Appointment to be announced";

  const details = [
    { label: "Specialization", value: director.specialization, icon: Target },
    { label: "Leadership Focus", value: director.leadershipFocus, icon: Briefcase },
    { label: "Experience", value: director.experience, icon: UserRound },
  ].filter((detail) => detail.value.trim().length > 0);

  return (
    <article className="group border-border bg-background hover:border-accent/30 relative flex h-full flex-col overflow-hidden rounded-3xl border shadow-sm transition-[transform,box-shadow,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:shadow-lg">
      <span
        aria-hidden="true"
        className="bg-accent absolute inset-x-0 top-0 z-10 h-[3px] origin-left scale-x-0 transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-hover:scale-x-100"
      />

      {/* Fixed ratio whether or not a portrait exists, so dropping images in
          later cannot shift the layout. */}
      <div className="bg-surface relative aspect-[4/5] overflow-hidden">
        {hasPortrait ? (
          <Image
            src={director.image.src}
            alt={director.image.alt}
            fill
            loading="lazy"
            sizes="(min-width: 640px) 45vw, 100vw"
            className="object-cover object-top transition-transform duration-[var(--duration-slow)] ease-[var(--ease-standard)] group-hover:scale-105"
          />
        ) : (
          <div className="text-muted-foreground/40 flex h-full flex-col items-center justify-center gap-3">
            <UserRound aria-hidden="true" strokeWidth={1} className="size-20" />
            <span className="text-body-sm font-medium">Portrait to follow</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Heading level={3} size="h5" className="font-bold">
          {displayName}
        </Heading>
        <p className="text-body-sm text-accent mt-1 font-semibold">{director.title}</p>

        {director.bio ? (
          <p className="text-body-sm text-muted-foreground mt-4">{director.bio}</p>
        ) : (
          <p className="text-body-sm text-muted-foreground/70 mt-4 italic">
            Full profile to follow.
          </p>
        )}

        {/* Every row is driven off a supplied value, and the whole list
            disappears when none are — an empty <dl> with three blank <dd>s is
            worse than no list, both visually and for a screen reader. */}
        {details.length > 0 && (
          <dl className="border-border mt-auto space-y-3 border-t pt-5">
            {details.map(({ label, value, icon: DetailIcon }) => (
              <div key={label} className="flex items-start gap-3">
                <DetailIcon
                  aria-hidden="true"
                  className="text-accent mt-0.5 size-4 shrink-0"
                />
                <div>
                  <dt className="text-body-sm text-foreground font-semibold">{label}</dt>
                  <dd className="text-body-sm text-muted-foreground">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        )}

        {director.linkedIn && (
          <a
            href={director.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="border-border text-primary hover:border-accent/40 hover:text-accent focus-visible:outline-ring mt-5 inline-flex size-9 items-center justify-center rounded-full border transition-colors duration-[var(--duration-base)] focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            <LinkedinIcon aria-hidden="true" className="size-4" />
            <span className="sr-only">
              {displayName} on LinkedIn (opens in a new tab)
            </span>
          </a>
        )}
      </div>
    </article>
  );
}

export function BoardOfDirectors() {
  return (
    <Section
      id="directors"
      aria-labelledby="directors-heading"
      background="surface"
      className="relative isolate overflow-hidden py-[clamp(4.5rem,9vw,8.75rem)]"
    >
      <SectionBackdrop radial />

      <Container>
        <SectionIntro
          headingId="directors-heading"
          eyebrow={leadershipPage.directors.eyebrow}
          title={leadershipPage.directors.title}
          description={leadershipPage.directors.description}
        />

        {/* max-w keeps two cards from stretching to the full 80rem measure,
            which would let them rival the chairman panel for weight. */}
        <ul className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
          {directors.map((director, index) => (
            <li key={director.id} className="h-full">
              <Reveal variant="fade-up" delay={index * 0.1} className="h-full">
                <DirectorCard director={director} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
