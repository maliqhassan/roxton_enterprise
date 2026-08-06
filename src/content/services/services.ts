import {
  Armchair,
  Boxes,
  Briefcase,
  Cog,
  Globe2,
  HardHat,
  Laptop,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface ServiceImage {
  src: string;
  alt: string;
}

export interface Service {
  /** Anchor target for the overview cards and the header's deep links. */
  id: string;
  title: string;
  /** One line, used on the overview card. */
  summary: string;
  /** Full paragraph, used in the detail section. */
  description: string;
  includes: string[];
  icon: LucideIcon;
  image: ServiceImage;
  cta: { label: string; href: string };
}

/**
 * Single source of truth for both the overview grid and the detailed
 * sections. They render different fields of the same eight records rather
 * than keeping two lists, so a service can never appear in one and not the
 * other, and the anchor links cannot go stale.
 *
 * Images are reused from the existing library — it already covers every
 * category the page needs (procurement meetings, logistics, containers,
 * warehouses, offices, IT, furniture, safety).
 */
export const services: Service[] = [
  {
    id: "procurement",
    title: "Procurement Services",
    summary: "Sourcing, negotiation and vendor management, end to end.",
    description:
      "We help organizations source quality products from trusted local and international suppliers while ensuring cost efficiency, transparency and timely delivery.",
    includes: [
      "Strategic Sourcing",
      "Vendor Selection",
      "Supplier Evaluation",
      "Tender Procurement",
      "RFQ Management",
      "Contract Purchasing",
      "Bulk Purchasing",
      "Government Procurement",
      "Import Procurement",
      "Export Procurement",
    ],
    icon: Briefcase,
    image: {
      src: "/images/products/procurement.jpg",
      alt: "A procurement contract being signed across an office desk",
    },
    cta: { label: "Discuss Procurement", href: "/contact" },
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    summary: "Freight, transport and storage from origin to delivery point.",
    description:
      "Efficient logistics and supply chain management to ensure products reach your location safely and on time.",
    includes: [
      "Freight Forwarding",
      "Transportation",
      "Warehousing",
      "Inventory Management",
      "Distribution",
      "Import & Export",
      "Customs Coordination",
      "Last Mile Delivery",
      "Fleet Coordination",
      "Cargo Handling",
    ],
    icon: Truck,
    image: {
      src: "/images/products/logistics.jpg",
      alt: "A freight truck hauling a trailer along an open highway",
    },
    cta: { label: "Discuss Logistics", href: "/contact" },
  },
  {
    id: "general-order-supply",
    title: "General Order Supply",
    summary: "The everyday consumables that keep sites and offices stocked.",
    description:
      "Reliable supply of everyday operational products for businesses, industries and institutions.",
    includes: [
      "Office Supplies",
      "Industrial Consumables",
      "Cleaning Materials",
      "Electrical Items",
      "Mechanical Items",
      "Engineering Products",
      "Hardware",
      "Packaging Materials",
      "Maintenance Supplies",
      "General Merchandise",
    ],
    icon: Boxes,
    image: {
      src: "/images/products/general-order-supply.jpg",
      alt: "Palletised stock filling the racking of a supply warehouse",
    },
    cta: { label: "Discuss Supply", href: "/contact" },
  },
  {
    id: "commercial-trading",
    title: "Commercial Trading",
    summary: "Connecting businesses with trusted manufacturers and suppliers.",
    description:
      "Facilitating local and international trade while connecting businesses with trusted manufacturers and suppliers.",
    includes: [
      "Import Services",
      "Export Services",
      "International Trading",
      "Wholesale Supply",
      "Distribution",
      "Trade Partnerships",
      "Vendor Coordination",
      "Product Sourcing",
      "Commercial Contracts",
    ],
    icon: Globe2,
    image: {
      src: "/images/about/about-container-ship.jpg",
      alt: "Gantry cranes unloading containers from a cargo ship at a commercial port",
    },
    cta: { label: "Discuss Trading", href: "/contact" },
  },
  {
    id: "it-equipment",
    title: "IT & Computer Equipment",
    summary: "Business computing, networking and peripherals.",
    description: "Supplying reliable technology solutions for modern workplaces.",
    includes: [
      "Laptops",
      "Desktop Computers",
      "Servers",
      "Networking Equipment",
      "Routers",
      "Switches",
      "Printers",
      "Scanners",
      "UPS Systems",
      "Storage Devices",
      "Accessories",
      "Software Licensing",
    ],
    icon: Laptop,
    image: {
      src: "/images/products/it-equipment.jpg",
      alt: "Cabled server racks lining the aisle of a data centre",
    },
    cta: { label: "Discuss IT Equipment", href: "/contact" },
  },
  {
    id: "office-furniture",
    title: "Office Furniture",
    summary: "Workstations, seating and storage for the whole workplace.",
    description:
      "Complete office furnishing solutions designed for productivity and comfort.",
    includes: [
      "Executive Tables",
      "Workstations",
      "Office Chairs",
      "Conference Tables",
      "Reception Furniture",
      "Storage Cabinets",
      "Meeting Room Furniture",
      "Visitor Chairs",
      "Shelving",
      "Custom Furniture",
    ],
    icon: Armchair,
    image: {
      src: "/images/products/office-furniture.jpg",
      alt: "Desks and task chairs arranged in a bright modern office",
    },
    cta: { label: "Discuss Furniture", href: "/contact" },
  },
  {
    id: "safety-equipment",
    title: "Safety Equipment",
    summary: "Certified PPE and workplace safety provision.",
    description:
      "Providing certified personal protective equipment and workplace safety products.",
    includes: [
      "Safety Helmets",
      "Safety Shoes",
      "Reflective Jackets",
      "Gloves",
      "Goggles",
      "Face Shields",
      "Fire Extinguishers",
      "Emergency Equipment",
      "Industrial PPE",
      "Safety Signage",
    ],
    icon: HardHat,
    image: {
      src: "/images/products/safety-equipment.jpg",
      alt: "A worker in a hi-vis vest holding a hard hat, gloves and goggles",
    },
    cta: { label: "Discuss Safety", href: "/contact" },
  },
  {
    id: "facility-support",
    title: "Facility Support Services",
    summary: "Operational support that keeps workplaces running.",
    description: "Helping organizations maintain efficient and productive workplaces.",
    includes: [
      "Facility Maintenance",
      "Cleaning Services",
      "Pantry Supplies",
      "Building Maintenance",
      "Office Support",
      "Utility Management",
      "Operational Support",
      "Maintenance Contracts",
      "Asset Support",
      "Administrative Supplies",
    ],
    icon: Cog,
    image: {
      src: "/images/about/about-meeting.jpg",
      alt: "Colleagues coordinating office operations around a meeting-room table",
    },
    cta: { label: "Discuss Facility Support", href: "/contact" },
  },
];
