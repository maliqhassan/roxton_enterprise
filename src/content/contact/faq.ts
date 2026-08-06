import type { FaqItem } from "@/content/services/faq";

/**
 * Contact-stage questions. Answers are written from what the site already
 * states — the service list, sectors served and the Islamabad base.
 *
 * Note the response-time answer quotes no number. "We reply within X hours" is
 * a commitment the business has not published, and a contact page is exactly
 * where an invented one gets held against you.
 */
export const contactFaqs: FaqItem[] = [
  {
    id: "response-time",
    question: "How quickly do you respond to inquiries?",
    answer:
      "Enquiries are reviewed and routed to the relevant specialist during business hours — Monday to Friday 9:00 AM to 6:00 PM and Saturday 9:00 AM to 2:00 PM. Anything sent outside those hours is picked up the next working day.",
  },
  {
    id: "custom-quotation",
    question: "Can I request a custom quotation?",
    answer:
      "Yes. Quotations are built around your requirement rather than a fixed catalogue — split by line item, by department or by delivery phase, and revised as the specification firms up.",
  },
  {
    id: "government",
    question: "Do you support government procurement?",
    answer:
      "Yes. We supply federal ministries, provincial departments, public institutions and semi-government authorities, and we support tender procurement and RFQ processes including the documentation they require.",
  },
  {
    id: "international",
    question: "Can you source products internationally?",
    answer:
      "Yes. Where an item is not available locally, or an international brand is specified, we handle import procurement — supplier identification abroad, freight forwarding and customs coordination through to your site.",
  },
  {
    id: "delivery",
    question: "Do you deliver across Pakistan?",
    answer:
      "Yes. Freight, transportation and last mile delivery are coordinated nationwide, and we arrange onward distribution where an order needs splitting between several sites.",
  },
  {
    id: "meeting",
    question: "How can I schedule a meeting?",
    answer:
      "Send your requirement through the form on this page and note that you would like to meet. Our office is at Civic Center, Bahria Town Phase 4, Islamabad, and we can also arrange a call if that is easier.",
  },
  {
    id: "industries",
    question: "What industries do you serve?",
    answer:
      "Government and semi-government organizations, the armed services, healthcare, education, corporate offices, construction, manufacturing, oil and gas, and NGOs.",
  },
  {
    id: "become-supplier",
    question: "How do I become a supplier?",
    answer:
      "Use the form and select 'Other' as the required service, then describe your product range, certifications and the categories you can supply. Our procurement team evaluates suppliers before adding them to the network.",
  },
];
