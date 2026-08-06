export interface CtaContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  /** Reassurance line under the buttons. */
  trustBadges: string[];
}

export const ctaContent: CtaContent = {
  eyebrow: "Ready to Work With Us?",
  title: "Let's Build Your Next Procurement Solution",
  description:
    "Whether you need office supplies, IT equipment, industrial materials, safety products, furniture or complete procurement and logistics support, Roxton Enterprises is ready to deliver reliable solutions across Pakistan.",
  primaryCta: { label: "Request a Quote", href: "/contact" },
  secondaryCta: { label: "Contact Us", href: "/contact" },
  trustBadges: [
    "Fast Response",
    "Reliable Procurement",
    "Nationwide Delivery",
    "Trusted Business Partner",
  ],
};
