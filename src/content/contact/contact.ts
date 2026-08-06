import {
  Clock,
  Handshake,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  SlidersHorizontal,
  Timer,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

import type { IconCardItem } from "@/components/shared/icon-card-grid";
import { siteConfig } from "@/config/site";

export interface ContactChannel {
  id: string;
  label: string;
  /** Rendered one per line, so multi-line addresses keep their shape. */
  lines: string[];
  icon: LucideIcon;
  /** Present only where the value is genuinely actionable. */
  href?: string;
}

/**
 * ⚠️ The phone number is still the placeholder from siteConfig
 * (+92 000 0000000) — the page brief supplied "+92 XXX XXXXXXX", which
 * confirms the real number has not been assigned yet.
 *
 * Because of that, no phone entry gets a `tel:` href and no button dials out.
 * A dead dial link on a contact page is worse than none: it looks functional,
 * fails silently, and the visitor blames the business rather than the link.
 * Add the number to siteConfig and give this entry an href to switch it on.
 */
export const contactChannels: ContactChannel[] = [
  {
    id: "address",
    label: "Office Address",
    lines: ["Office #302, Civic Center", "Bahria Town Phase 4", "Islamabad, Pakistan"],
    icon: MapPin,
  },
  {
    id: "phone",
    label: "Phone",
    lines: [siteConfig.contact.phone],
    icon: Phone,
  },
  {
    id: "email",
    label: "Email",
    lines: [siteConfig.contact.email],
    icon: Mail,
    href: `mailto:${siteConfig.contact.email}`,
  },
  {
    id: "hours",
    label: "Business Hours",
    lines: [
      "Mon – Fri: 9:00 AM – 6:00 PM",
      "Saturday: 9:00 AM – 2:00 PM",
      "Sunday: Closed",
    ],
    icon: Clock,
  },
];

/** Options for the enquiry form's two dropdowns. */
export const organizationTypes = [
  "Government",
  "Semi Government",
  "Private Company",
  "Army",
  "Navy",
  "Air Force",
  "NGO",
  "Educational Institute",
  "Healthcare",
  "Construction",
  "Other",
] as const;

export const requiredServices = [
  "Procurement Services",
  "General Order Supply",
  "Logistics & Supply Chain",
  "Commercial Trading",
  "IT Equipment",
  "Office Furniture",
  "Safety Equipment",
  "Industrial Equipment",
  "Facility Support",
  "Other",
] as const;

export const whyContactItems: IconCardItem[] = [
  {
    id: "fast-response",
    title: "Fast Response",
    description: "Enquiries are picked up and routed to a specialist, not a queue.",
    icon: Timer,
  },
  {
    id: "experienced-team",
    title: "Experienced Team",
    description: "Specialists who handle tenders, RFQs and technical sourcing daily.",
    icon: Users,
  },
  {
    id: "trusted-suppliers",
    title: "Trusted Suppliers",
    description: "Suppliers evaluated before they are ever put forward to you.",
    icon: ShieldCheck,
  },
  {
    id: "nationwide-delivery",
    title: "Nationwide Delivery",
    description: "Freight and last mile delivery coordinated across Pakistan.",
    icon: Truck,
  },
  {
    id: "customized-procurement",
    title: "Customized Procurement",
    description: "Sourcing to your exact specification, not a fixed catalogue.",
    icon: SlidersHorizontal,
  },
  {
    id: "long-term-partnership",
    title: "Long-Term Partnership",
    description: "Built for repeat supply rather than one-off transactions.",
    icon: Handshake,
  },
];

const MAP_QUERY = encodeURIComponent(
  "Civic Center, Bahria Town Phase 4, Islamabad, Pakistan",
);

export const contactPage = {
  hero: {
    eyebrow: "Contact Us",
    title: "Let's Start Your Next Project Together",
    description:
      "Whether you need procurement services, logistics support, product sourcing or project consultation, our team is ready to assist you with reliable solutions tailored to your organization's requirements.",
    primaryCta: { label: "Request a Quote", href: "#contact-form" },
    // Jumps to the contact details rather than dialling — see the phone note above.
    secondaryCta: { label: "Call Us", href: "#contact-information" },
    image: {
      src: "/images/about/about-meeting.jpg",
      alt: "Colleagues discussing a requirement around a meeting-room table",
    },
  },
  info: {
    eyebrow: "Contact Information",
    title: "Get In Touch",
    description:
      "Reach our team through your preferred communication channel. We aim to respond to all inquiries promptly.",
  },
  form: {
    eyebrow: "Send an Enquiry",
    title: "Tell Us What You Need",
    description:
      "The more detail you can give about specification, quantity and destination, the faster we can come back with options.",
    trustPoints: [
      "Fast Response",
      "Professional Team",
      "Reliable Procurement",
      "Nationwide Service",
    ],
    image: {
      src: "/images/products/office-furniture.jpg",
      alt: "A quiet professional office with desks and meeting seating",
    },
  },
  location: {
    eyebrow: "Find Us",
    title: "Visit Our Office",
    description: "Our office is conveniently located in Bahria Town Phase 4, Islamabad.",
    mapSrc: `https://www.google.com/maps?q=${MAP_QUERY}&output=embed`,
    directionsHref: `https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`,
    // NOTE: the landmark line restates the address, which is verifiable. The
    // parking line is NOT confirmed — remove it or replace it with the real
    // arrangement before launch.
    details: [
      { label: "Address", value: siteConfig.contact.address },
      {
        label: "Landmark",
        value: "Inside the Civic Center complex, Bahria Town Phase 4",
      },
      { label: "Parking", value: "Visitor parking at Civic Center" },
      { label: "Hours", value: "Mon – Fri 9:00 AM – 6:00 PM · Sat 9:00 AM – 2:00 PM" },
    ],
  },
  hours: {
    eyebrow: "Business Hours",
    title: "When We're Open",
    description:
      "Islamabad time. Enquiries sent outside these hours are picked up the next working day.",
    notice: {
      title: "Need urgent assistance?",
      body: "Call our team during business hours for immediate support.",
    },
  },
  whyContact: {
    eyebrow: "Why Contact Roxton",
    title: "What Happens Next",
    description: "What you get when your enquiry reaches us, whatever you are sourcing.",
  },
  faq: {
    eyebrow: "Frequently Asked Questions",
    title: "Questions, Answered",
    description: "The things organizations most often ask before getting in touch.",
  },
  cta: {
    eyebrow: "Ready When You Are",
    title: "Ready to Discuss Your Requirements?",
    description:
      "Our procurement specialists are ready to help you source quality products, manage logistics and deliver reliable procurement solutions for your organization.",
    primaryCta: { label: "Request a Quote", href: "#contact-form" },
    secondaryCta: { label: "Call Our Team", href: "#contact-information" },
    trustBadges: [
      "Fast Response",
      "Reliable Service",
      "Nationwide Delivery",
      "Trusted Procurement Partner",
    ],
  },
};
