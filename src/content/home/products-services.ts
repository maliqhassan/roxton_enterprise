import {
  Armchair,
  Boxes,
  Briefcase,
  Factory,
  FlaskConical,
  HardHat,
  Laptop,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface ProductCategory {
  /** Stable slug — also the deep-link fragment on the services page. */
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  /** Card banner. Path is derived from `id`, alt is authored per category. */
  imageAlt: string;
  items: string[];
}

/** Card banners live at a path derived from the category id. */
export function categoryImageSrc(id: string): string {
  return `/images/products/${id}.jpg`;
}

export const productsServicesContent = {
  eyebrow: "Products & Services",
  title: "Everything Your Business Needs",
  description:
    "Roxton Enterprises provides complete procurement, logistics, supply chain management and general order supply solutions for government organizations, NGOs, private companies and industrial clients.",
  cta: { label: "Explore All Products & Services", href: "/services" },
};

/**
 * Single source of truth for the section: the grid, the cards and their lists
 * all render from here, so adding a category is a data edit rather than a
 * component change.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "procurement",
    title: "Procurement Services",
    icon: Briefcase,
    description: "Sourcing, negotiation and vendor management.",
    imageAlt: "A contract being signed across an office desk",
    items: [
      "Local Procurement",
      "International Procurement",
      "Strategic Sourcing",
      "Vendor Management",
      "RFQs",
      "Tender Support",
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: Truck,
    description: "Freight, transport and storage, origin to delivery.",
    imageAlt: "A freight truck hauling a trailer along an open highway",
    items: [
      "Freight Forwarding",
      "Transportation",
      "Warehousing",
      "Distribution",
      "Import & Export",
      "Customs Support",
    ],
  },
  {
    id: "general-order-supply",
    title: "General Order Supply",
    icon: Boxes,
    description: "Consumables and materials that keep sites stocked.",
    imageAlt: "Palletised stock filling the racking of a supply warehouse",
    items: [
      "Office Supplies",
      "Industrial Consumables",
      "Engineering Materials",
      "Electrical Supplies",
      "Mechanical Items",
      "Cleaning Products",
    ],
  },
  {
    id: "it-equipment",
    title: "IT & Computer Equipment",
    icon: Laptop,
    description: "Business computing hardware and networking.",
    imageAlt: "Cabled server racks lining the aisle of a data centre",
    items: [
      "Laptops",
      "Desktop Computers",
      "Servers",
      "Networking Equipment",
      "Printers",
      "Computer Accessories",
    ],
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    icon: Armchair,
    description: "Workstations, seating and storage for workplaces.",
    imageAlt: "Desks and task chairs arranged in a bright modern office",
    items: [
      "Executive Desks",
      "Workstations",
      "Office Chairs",
      "Conference Tables",
      "Filing Cabinets",
      "Reception Furniture",
    ],
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment (PPE)",
    icon: HardHat,
    description: "Protective equipment and fire safety provision.",
    imageAlt: "A worker in a hi-vis vest holding a hard hat, gloves and goggles",
    items: [
      "Safety Helmets",
      "Safety Shoes",
      "Reflective Jackets",
      "Gloves",
      "Goggles",
      "Fire Safety Equipment",
    ],
  },
  {
    id: "adhesives-chemicals",
    title: "Adhesives & Industrial Chemicals",
    icon: FlaskConical,
    description: "Bonding, sealing and construction chemistry.",
    imageAlt: "A gloved hand applying sealant from a cartridge gun along a joint",
    items: [
      "Epoxy",
      "Industrial Adhesives",
      "Silicone Sealants",
      "PU Sealants",
      "Construction Chemicals",
      "Bonding Solutions",
    ],
  },
  {
    id: "industrial-engineering",
    title: "Industrial & Engineering Products",
    icon: Factory,
    description: "Electrical, mechanical and rotating equipment.",
    imageAlt: "Hand-wheel valves on industrial pipework inside a plant",
    items: [
      "Electrical Equipment",
      "Mechanical Equipment",
      "Pumps",
      "Valves",
      "Bearings",
      "Industrial Tools",
    ],
  },
];
