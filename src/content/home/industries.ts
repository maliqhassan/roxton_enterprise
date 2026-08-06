import {
  Building2,
  BriefcaseBusiness,
  Fuel,
  GraduationCap,
  HardHat,
  Hospital,
  Landmark,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface Industry {
  /** Stable slug — used for React keys and per-card labelling. */
  id: string;
  title: string;
  /**
   * Who the sector covers, then what Roxton supplies it, as one sentence.
   * The supply half is drawn from the real product categories in
   * products-services.ts, so a card cannot claim a capability the Products
   * section does not list.
   */
  description: string;
  icon: LucideIcon;
}

export const industriesContent = {
  eyebrow: "Industries We Serve",
  // Kept short on purpose: this heading sits in a 38% column beside the sector
  // scroller, and the long-form version wrapped to six lines there.
  title: "Supporting Every Sector",
  description:
    "Roxton Enterprises delivers procurement, logistics and supply solutions across government, defense, corporate and industrial sectors throughout Pakistan.",
  cta: { label: "Discuss Your Requirements", href: "/contact" },
};

/**
 * Single source of truth for the scroller — adding a ninth sector is a data
 * edit, not a component change.
 */
export const industries: Industry[] = [
  {
    id: "government",
    title: "Government Sector",
    description:
      "Federal and provincial departments, ministries and public institutions, supplied with general order goods, IT equipment and office furniture.",
    icon: Building2,
  },
  {
    id: "semi-government",
    title: "Semi-Government",
    description:
      "Authorities, corporations and autonomous organizations, supported with end-to-end procurement, general order supply and office furniture.",
    icon: Landmark,
  },
  {
    id: "private-sector",
    title: "Private Sector",
    description:
      "Corporate offices, SMEs and multinational companies, supplied with IT equipment, office furniture and everyday consumables.",
    icon: BriefcaseBusiness,
  },
  {
    id: "defense",
    title: "Defense Organizations",
    description:
      "Army, Navy, Air Force and strategic defense institutions, supported with safety equipment, industrial products and full tender procurement.",
    icon: ShieldCheck,
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Hospitals, laboratories and medical facilities, supplied with general order goods, protective equipment and IT hardware.",
    icon: Hospital,
  },
  {
    id: "education",
    title: "Education",
    description:
      "Universities, colleges and research institutions, supplied with IT equipment, furniture and laboratory consumables.",
    icon: GraduationCap,
  },
  {
    id: "construction",
    title: "Construction",
    description:
      "Engineering firms, EPC contractors and infrastructure projects, supplied with safety equipment, adhesives and industrial products.",
    icon: HardHat,
  },
  {
    id: "oil-and-gas",
    title: "Oil & Gas",
    description:
      "Energy companies, refineries and industrial operations, supplied with industrial equipment, protective gear and construction chemicals.",
    icon: Fuel,
  },
];
