import { services, type ServiceItem } from "@/content/home/services";

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutSlide extends AboutImage {
  /** Names the slide for its carousel control. */
  label: string;
  /** Shown in the floating card while this slide is active. */
  points: ServiceItem[];
}

/**
 * Resolves slide points against the real services list rather than restating
 * their copy here, so the card can never drift out of step with the Services
 * section. An unmatched title is dropped rather than rendered blank.
 */
function servicesNamed(...titles: string[]): ServiceItem[] {
  return titles
    .map((title) => services.find((service) => service.title === title))
    .filter((service): service is ServiceItem => service !== undefined);
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  differentiators: { title: string; description: string }[];
  cta: { label: string; href: string };
  collage: {
    /** Rotated through the large lead frame; the first loads eagerly. */
    slides: AboutSlide[];
    /** Static landscape tiles beneath the lead frame. */
    supporting: AboutImage[];
  };
}

export const aboutContent: AboutContent = {
  eyebrow: "Who We Are",
  title: "A Trusted Partner in Procurement & Logistics",
  paragraphs: [
    "Roxton Enterprises (Pvt.) Ltd. is an Islamabad-based procurement and logistics partner, helping businesses source, supply and deliver products efficiently across Pakistan and international markets.",
    "We serve small businesses, NGOs, and organizations across Pakistan and internationally. We source what you need and get it to you fast.",
  ],
  differentiators: [
    { title: "Honest", description: "Transparent in every transaction." },
    { title: "Accountable", description: "We deliver what we promise." },
  ],
  cta: { label: "Learn More About Us", href: "/about" },
  collage: {
    slides: [
      {
        src: "/images/about/about-handshake.jpg",
        alt: "Two business partners shaking hands after agreeing a supply contract",
        label: "Procurement",
        points: servicesNamed("Procurement Services", "Commercial Trading"),
      },
      {
        src: "/images/about/about-container-ship.jpg",
        alt: "Gantry cranes unloading containers from a cargo ship at a commercial port",
        label: "Sea Freight",
        points: servicesNamed("Logistics & Supply Chain", "Commercial Trading"),
      },
      {
        src: "/images/about/about-warehouse.jpg",
        alt: "Warehouse team member checking stock against a tablet and barcode scanner",
        label: "Warehousing",
        points: servicesNamed("General Order Supply", "Facility Support Services"),
      },
      {
        src: "/images/about/about-meeting.jpg",
        alt: "Colleagues reviewing an order together around a meeting-room table",
        label: "Coordination",
        points: servicesNamed("Procurement Services", "Facility Support Services"),
      },
    ],
    supporting: [
      {
        src: "/images/about/about-container-ship.jpg",
        alt: "Containers stacked on the quayside of a busy shipping terminal",
      },
      {
        src: "/images/about/about-warehouse.jpg",
        alt: "Racked warehouse aisle stocked with palletised goods",
      },
      {
        src: "/images/about/about-meeting.jpg",
        alt: "Team reviewing supply requirements in a planning meeting",
      },
    ],
  },
};
