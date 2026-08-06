import type { FaqItem } from "@/content/services/faq";

/**
 * Product-supply questions. Answers are written against what the site already
 * states Roxton does — the category list, the sectors served and the Islamabad
 * base. Deliberately no quoted lead times, prices or payment terms: none have
 * been published, and inventing them here would put a commitment on the page
 * that nobody in the business has agreed to.
 *
 * Reuses the FaqItem shape from the services content so both pages feed the
 * same accordion component.
 */
export const productFaqs: FaqItem[] = [
  {
    id: "unlisted-products",
    question: "Can you source products not listed?",
    answer:
      "Yes. The categories on this page are the lines we supply most often, not a limit. Custom procurement is a service in its own right — send the technical specification or a description of what the item is for, and we will identify suppliers who can meet it.",
  },
  {
    id: "imports",
    question: "Do you import products?",
    answer:
      "Yes. Where an item is not available locally, or where an international brand is specified, we handle import procurement including supplier identification abroad, freight forwarding and customs coordination through to your site.",
  },
  {
    id: "government-procurement",
    question: "Do you support government procurement?",
    answer:
      "Yes. We supply federal ministries, provincial departments, public institutions and semi-government authorities, and we support tender procurement and RFQ processes including the documentation those processes require.",
  },
  {
    id: "bulk-orders",
    question: "Can you handle bulk orders?",
    answer:
      "Yes. Bulk purchasing and contract purchasing are part of our procurement service, and we handle wholesale supply and distribution for organizations ordering at volume or on a recurring schedule.",
  },
  {
    id: "delivery-time",
    question: "How long does delivery take?",
    answer:
      "It depends on the item and where it is sourced from. Stocked local goods move fastest; imported or made-to-specification items take longer because of manufacturing lead time and customs clearance. The expected timeline is confirmed with your quotation, before you commit to the order.",
  },
  {
    id: "branded-products",
    question: "Do you provide branded products?",
    answer:
      "Yes. We supply from established manufacturers across IT, electrical, industrial, safety and office categories. If your specification names a particular brand, we source to that brand; if it does not, we can quote alternatives alongside it.",
  },
  {
    id: "custom-quotations",
    question: "Can you customize quotations?",
    answer:
      "Yes. Quotations are built around your requirement rather than a fixed catalogue — split by line item, by department or by delivery phase, and revised as the specification firms up.",
  },
  {
    id: "payment-methods",
    question: "What payment methods are accepted?",
    answer:
      "Payment terms are agreed per order and set out in your quotation, since they differ between one-off purchases, contract supply and government procurement. Contact the team to confirm the terms that apply to your requirement.",
  },
  {
    id: "nationwide-delivery",
    question: "Do you provide nationwide delivery?",
    answer:
      "Yes. Freight, transportation and last mile delivery are coordinated across Pakistan, and we arrange onward distribution to multiple sites where an order needs splitting between locations.",
  },
  {
    id: "request-quotation",
    question: "How do I request a quotation?",
    answer:
      "Send your requirement through the contact page with the specification, quantity and delivery location. If the specification is not finalised yet, an outline of what the item is for is enough for us to begin identifying options.",
  },
];
