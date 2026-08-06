import {
  Gem,
  Handshake,
  Lightbulb,
  ScrollText,
  ShieldCheck,
  Sparkles,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

import type { IconCardItem } from "@/components/shared/icon-card-grid";

export interface LeadershipHighlight {
  id: string;
  label: string;
  icon: LucideIcon;
}

export interface ChairmanProfile {
  name: string;
  /** Displayed on the badge and under the name. */
  title: string;
  /** Heading above the message — follows the title, so it stays in step. */
  messageHeading: string;
  image: { src: string; alt: string };
  message: string;
  /** Typeset as a signature line; replace with an image when one exists. */
  signature: string;
  highlights: LeadershipHighlight[];
}

export interface DirectorProfile {
  id: string;
  name: string;
  title: string;
  /** Empty string renders the placeholder silhouette instead of a portrait. */
  image: { src: string; alt: string };
  bio: string;
  specialization: string;
  experience: string;
  leadershipFocus: string;
  /** Optional — the icon is omitted entirely when absent, never left dead. */
  linkedIn?: string;
}

/**
 * ⚠️ PLACEHOLDER CONTENT — everything except the chairman's name, title and
 * portrait is written copy, not supplied fact.
 *
 * The chairman's message and signature are drafted from the brief; the two
 * directors have no names, portraits or biographies yet and render as marked
 * placeholders. Replace the fields in this file and the page follows — no
 * component needs touching.
 *
 * The phone number supplied with the portrait is deliberately absent: a
 * personal mobile does not belong on a public leadership page.
 */
export const chairman: ChairmanProfile = {
  name: "Niaz Shah",
  // The brief used "Chairman" throughout, but the details supplied with the
  // portrait say CEO. Titled from the fact rather than the template — change
  // this one field (and messageHeading) to flip it back.
  title: "Chief Executive Officer",
  messageHeading: "Message from the CEO",
  image: {
    src: "/images/leadership/niaz-shah.jpg",
    alt: "Niaz Shah, Chief Executive Officer of Roxton Enterprises",
  },
  message:
    "I believe long-term business relationships are built through trust, integrity, quality and consistent performance. At Roxton Enterprises our mission is to deliver dependable procurement and supply solutions that create lasting value for our clients.",
  signature: "Niaz Shah",
  highlights: [
    { id: "integrity", label: "Integrity", icon: ShieldCheck },
    { id: "leadership", label: "Leadership", icon: Sparkles },
    { id: "commitment", label: "Commitment", icon: Handshake },
  ],
};

/**
 * Names, portraits and biographies pending. Each entry renders with a
 * placeholder portrait and a visible "profile to follow" note, so the section
 * reads as deliberately incomplete rather than broken.
 */
export const directors: DirectorProfile[] = [
  {
    id: "amer",
    name: "Amer",
    title: "Director",
    image: {
      src: "/images/leadership/amer.jpg",
      alt: "Amer, Director at Roxton Enterprises",
    },
    // Blank until supplied. These previously held invented values
    // ("Procurement & Supplier Relations", "Operational Excellence") written
    // while the record was anonymous. Now that a real person is named, an
    // invented specialisation would be a claim about him, so the fields render
    // as pending instead.
    bio: "",
    specialization: "",
    experience: "",
    leadershipFocus: "",
  },
  {
    id: "irfan",
    name: "Irfan",
    title: "Director",
    image: {
      src: "/images/leadership/irfan.jpg",
      alt: "Irfan, Director at Roxton Enterprises",
    },
    // Blank until supplied — see the note on Amer above.
    bio: "",
    specialization: "",
    experience: "",
    leadershipFocus: "",
  },
];

export const leadershipPrinciples: IconCardItem[] = [
  {
    id: "integrity",
    title: "Integrity",
    description: "We quote what we can deliver, and deliver what we quoted.",
    icon: ShieldCheck,
  },
  {
    id: "transparency",
    title: "Transparency",
    description: "Costs, lead times and trade-offs are stated before you commit.",
    icon: ScrollText,
  },
  {
    id: "innovation",
    title: "Innovation",
    description: "Every completed order informs how we run the next one.",
    icon: Lightbulb,
  },
  {
    id: "customer-first",
    title: "Customer First",
    description: "Your requirement sets the specification, not our stock list.",
    icon: UserCheck,
  },
  {
    id: "operational-excellence",
    title: "Operational Excellence",
    description: "One process, followed the same way on every order.",
    icon: Gem,
  },
  {
    id: "long-term-partnerships",
    title: "Long-Term Partnerships",
    description: "Built for repeat supply rather than one-off transactions.",
    icon: Handshake,
  },
];

export const leadershipPage = {
  hero: {
    eyebrow: "Our Leadership",
    title: "Leadership Built on Integrity, Vision & Excellence",
    description:
      "Behind every successful project is a leadership team committed to quality, transparency and long-term partnerships. Our leadership guides Roxton Enterprises with professionalism, accountability and a customer-first approach.",
    primaryCta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    image: {
      src: "/images/about/about-meeting.jpg",
      alt: "Colleagues in discussion around a meeting-room table",
    },
  },
  intro: {
    eyebrow: "Meet Our Leadership",
    title: "Meet Our Leadership",
    description:
      "Roxton Enterprises is led by experienced professionals dedicated to delivering reliable procurement, logistics and supply solutions. Their combined vision and commitment help us build trusted relationships with clients across Pakistan.",
  },
  directors: {
    eyebrow: "Board of Directors",
    title: "Board of Directors",
    description:
      "Supporting the company's vision through operational excellence, innovation and customer-focused leadership.",
  },
  principles: {
    eyebrow: "How We Lead",
    title: "Leadership Principles",
    description: "The commitments that shape how every order is quoted and run.",
  },
  whyLeadership: {
    eyebrow: "Why It Matters",
    title: "Leading Every Project with Confidence",
    description:
      "Our leadership team ensures every procurement project is managed with transparency, quality assurance and a commitment to exceeding client expectations.",
    highlights: [
      "Strategic Decision Making",
      "Quality Focus",
      "Client Relationships",
      "Reliable Execution",
      "Nationwide Support",
      "Continuous Improvement",
    ],
    image: {
      src: "/images/products/office-furniture.jpg",
      alt: "A quiet professional office with desks and meeting seating",
    },
  },
  cta: {
    eyebrow: "Ready When You Are",
    title: "Partner with a Team You Can Trust",
    description:
      "Experience professional procurement, dependable logistics and reliable project execution backed by strong leadership and a commitment to excellence.",
    primaryCta: { label: "Request a Quote", href: "/contact" },
    secondaryCta: { label: "Contact Us", href: "/contact" },
    trustBadges: [
      "Trusted Leadership",
      "Nationwide Delivery",
      "Reliable Procurement",
      "Quality Assured",
    ],
  },
};
