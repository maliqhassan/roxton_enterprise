export interface FaqItem {
  /** Stable slug — used for keys and as the accordion's grouping name. */
  id: string;
  question: string;
  answer: string;
}

/**
 * Answers are written against what the site already states Roxton does — the
 * service list, the sectors served and the Islamabad base. None of them quote
 * a turnaround time, price or volume, because no such figure has been
 * published; the timing answer describes what drives the timeline instead of
 * promising a number.
 */
export const faqs: FaqItem[] = [
  {
    id: "request-quotation",
    question: "How do I request a quotation?",
    answer:
      "Send your requirement through the contact page with the specification, quantity and delivery location. If a specification is not finalised yet, an outline of what the item is for is enough for us to begin sourcing options.",
  },
  {
    id: "government-procurement",
    question: "Do you support government procurement?",
    answer:
      "Yes. We supply federal ministries, provincial departments, public institutions and semi-government authorities, and we support tender procurement and RFQ processes including the documentation those processes require.",
  },
  {
    id: "international-sourcing",
    question: "Can you source international products?",
    answer:
      "Yes. Alongside local procurement we handle import procurement and international trading, including supplier identification abroad, freight forwarding and customs coordination through to your site.",
  },
  {
    id: "industries-served",
    question: "What industries do you serve?",
    answer:
      "Government and semi-government organizations, private sector companies, defense institutions, oil and gas, construction and engineering, healthcare, education, corporate offices and manufacturing.",
  },
  {
    id: "logistics",
    question: "Do you provide logistics?",
    answer:
      "Yes. Logistics and supply chain management is a full service in its own right — freight forwarding, transportation, warehousing, inventory management, distribution and last mile delivery.",
  },
  {
    id: "office-furniture",
    question: "Can you supply office furniture?",
    answer:
      "Yes. We supply executive tables, workstations, office and visitor chairs, conference and meeting room furniture, reception furniture, storage cabinets and shelving, including custom furniture where a standard product will not fit.",
  },
  {
    id: "it-equipment",
    question: "Do you supply IT equipment?",
    answer:
      "Yes. Laptops, desktops, servers, networking equipment, routers, switches, printers, scanners, UPS systems, storage devices, accessories and software licensing.",
  },
  {
    id: "procurement-timeline",
    question: "How long does procurement take?",
    answer:
      "It depends on the item and where it is sourced from. Stocked local goods move fastest; imported or made-to-specification items take longer because of manufacturing lead time and customs. We confirm the expected timeline with your quotation, before you commit.",
  },
  {
    id: "bulk-orders",
    question: "Do you support bulk orders?",
    answer:
      "Yes. Bulk purchasing and contract purchasing are part of our procurement service, and we handle wholesale supply and distribution for organizations ordering at volume or on a recurring basis.",
  },
  {
    id: "contact",
    question: "How do I contact Roxton?",
    answer:
      "Use the contact page to reach the team, or email us directly. We are based at Civic Center, Bahria Town Phase 4, Islamabad, and serve clients across Pakistan and international markets.",
  },
];
