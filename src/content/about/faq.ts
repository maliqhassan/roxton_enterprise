import type { FaqItem } from "@/content/services/faq";

/**
 * Answers are written from what the site already states — the service list,
 * the sectors served and the Islamabad base. No founding year, headcount,
 * turnaround or client name appears, because none has been published and an
 * About page is the worst place to invent one.
 *
 * Reuses the FaqItem shape from the services content so every page feeds the
 * same accordion component.
 */
export const aboutFaqs: FaqItem[] = [
  {
    id: "who-is-roxton",
    question: "Who is Roxton Enterprises?",
    answer:
      "Roxton Enterprises (Pvt.) Ltd. is a procurement, logistics and general order supply company based in Islamabad. We source and deliver products for organizations that would rather hold one supplier accountable than coordinate a dozen.",
  },
  {
    id: "industries",
    question: "What industries do you serve?",
    answer:
      "Government and semi-government organizations, the armed services, healthcare, education, corporate offices, construction, manufacturing, oil and gas, and NGOs.",
  },
  {
    id: "government",
    question: "Do you work with government organizations?",
    answer:
      "Yes. We supply federal ministries, provincial departments and public institutions, and we support tender procurement and RFQ processes including the documentation those processes require.",
  },
  {
    id: "international",
    question: "Can you source international products?",
    answer:
      "Yes. Where an item is not available locally, or an international brand is specified, we handle import procurement — supplier identification abroad, freight forwarding and customs coordination through to your site.",
  },
  {
    id: "locations",
    question: "What locations do you serve?",
    answer:
      "We deliver across Pakistan and source from international markets. Our office is at Civic Center, Bahria Town Phase 4, Islamabad.",
  },
  {
    id: "project-procurement",
    question: "Do you support project procurement?",
    answer:
      "Yes. Project supply is scheduled in phases against your programme rather than delivered in one drop, so material arrives when the site is ready for it.",
  },
  {
    id: "quotation",
    question: "How can I request a quotation?",
    answer:
      "Send your requirement through the contact page with the specification, quantity and delivery location. If the specification is not finalised, an outline of what the item is for is enough for us to begin identifying options.",
  },
  {
    id: "logistics",
    question: "Do you provide logistics services?",
    answer:
      "Yes. Logistics and supply chain management is a service in its own right — freight forwarding, transportation, warehousing, inventory management, distribution and last mile delivery.",
  },
];
