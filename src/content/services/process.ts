export interface ProcessStep {
  /** Displayed as the step number; also the list order. */
  step: number;
  title: string;
  description: string;
}

/**
 * The seven stages of a procurement engagement, in order. Descriptions state
 * what happens at each stage rather than claiming an outcome, so nothing here
 * commits Roxton to a metric it has not published.
 */
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "We map exactly what you need — specification, quantity, timeline and budget — before anything is sourced.",
  },
  {
    step: 2,
    title: "Supplier Identification",
    description:
      "We shortlist local and international suppliers capable of meeting that specification.",
  },
  {
    step: 3,
    title: "Quotation & Approval",
    description:
      "You receive a costed quotation to review, question and approve before any order is placed.",
  },
  {
    step: 4,
    title: "Procurement",
    description:
      "Orders are placed and tracked against the agreed specification, price and delivery date.",
  },
  {
    step: 5,
    title: "Quality Inspection",
    description:
      "Goods are checked against the specification before they are released for despatch.",
  },
  {
    step: 6,
    title: "Logistics & Delivery",
    description:
      "Freight, customs coordination and transport are arranged through to your site.",
  },
  {
    step: 7,
    title: "After Sales Support",
    description:
      "We stay available for replacements, documentation and repeat orders after delivery.",
  },
];
