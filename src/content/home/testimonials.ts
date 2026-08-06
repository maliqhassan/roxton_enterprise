export interface Testimonial {
  id: string;
  /** Attributed speaker. See the PLACEHOLDER warning below. */
  name: string;
  position: string;
  organization: string;
  quote: string;
  /** 1–5. Rendered as stars plus a text equivalent for screen readers. */
  rating: number;
  /** Optional client mark; falls back to an initials avatar when absent. */
  logo?: string;
}

/**
 * ⚠️ PLACEHOLDER CONTENT — NOT FOR PRODUCTION ⚠️
 *
 * These three testimonials are invented. The names, job titles and quotes do
 * not belong to real people and nobody has said any of this about Roxton.
 * Publishing fabricated testimonials attributed to named individuals is
 * deceptive advertising in most jurisdictions, and it undermines the exact
 * credibility this section exists to build.
 *
 * Replace every entry with a real, permissioned quote before this page goes
 * live, or remove the section until you have them.
 */
export const testimonials: Testimonial[] = [
  {
    id: "ahmed-khan",
    name: "Ahmed Khan",
    position: "Procurement Manager",
    organization: "Private Sector",
    quote:
      "Roxton Enterprises consistently delivered quality products on time and provided excellent procurement support for our operational requirements.",
    rating: 5,
  },
  {
    id: "muhammad-ali",
    name: "Muhammad Ali",
    position: "Project Coordinator",
    organization: "Government Organization",
    quote:
      "Their professionalism, transparent communication and reliable logistics support made them a trusted partner for our projects.",
    rating: 5,
  },
  {
    id: "usman-tariq",
    name: "Usman Tariq",
    position: "Operations Head",
    organization: "Industrial Company",
    quote:
      "Roxton provided complete sourcing and supply solutions with competitive pricing and exceptional service.",
    rating: 5,
  },
];

export const testimonialsContent = {
  eyebrow: "Client Testimonials",
  title: "Trusted by Organizations Across Pakistan",
  description:
    "Roxton Enterprises has built long-term relationships through reliable procurement, quality products and dependable logistics solutions.",
};

/** "Ahmed Khan" -> "AK". Used when a client has no logo to show. */
export function initialsOf(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
