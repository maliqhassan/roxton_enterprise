import type { TimelineStep } from "@/components/shared/step-timeline";

/**
 * The company journey. Deliberately undated: no founding year or milestone
 * dates have been published, and inventing them would put fabricated history
 * on an About page — the one page where that matters most. The sequence still
 * reads chronologically without them.
 */
export const storyMilestones: TimelineStep[] = [
  {
    step: 1,
    title: "The Beginning",
    description:
      "Started with a vision to simplify procurement for organizations tired of coordinating a dozen separate vendors.",
  },
  {
    step: 2,
    title: "A Wider Network",
    description:
      "Expanded the supplier network across Pakistan, so sourcing was no longer limited by geography.",
  },
  {
    step: 3,
    title: "Logistics Added",
    description:
      "Introduced logistics and supply chain services, taking responsibility for goods through to delivery rather than only to purchase.",
  },
  {
    step: 4,
    title: "Workplace Supply",
    description:
      "Added IT equipment and office furnishing solutions, covering whole workplace fit-outs from a single point of contact.",
  },
  {
    step: 5,
    title: "Industrial & Safety",
    description:
      "Expanded into industrial products and safety equipment for plants, sites and contractors.",
  },
  {
    step: 6,
    title: "Where We Are Today",
    description:
      "Serving government, defense, NGOs and private organizations nationwide across every category we supply.",
  },
];

/**
 * The ten-stage engagement route. Descriptions state what happens at each
 * stage rather than claiming an outcome, so nothing commits Roxton to a
 * turnaround or figure it has not published.
 */
export const processSteps: TimelineStep[] = [
  {
    step: 1,
    title: "Requirement Analysis",
    description:
      "We map what you need — specification, quantity, destination and timeline — before anything is sourced.",
  },
  {
    step: 2,
    title: "Technical Evaluation",
    description:
      "The specification is checked for gaps, substitutions and compatibility with what you already run.",
  },
  {
    step: 3,
    title: "Supplier Identification",
    description:
      "Local and international suppliers capable of meeting that specification are shortlisted.",
  },
  {
    step: 4,
    title: "Quotation",
    description:
      "You receive a costed quotation, line by line, with the expected lead time stated.",
  },
  {
    step: 5,
    title: "Approval",
    description:
      "Nothing is ordered until you have reviewed, questioned and approved the quotation.",
  },
  {
    step: 6,
    title: "Procurement",
    description:
      "Orders are placed and tracked against the agreed price, specification and delivery date.",
  },
  {
    step: 7,
    title: "Quality Inspection",
    description:
      "Goods are checked against the specification before they are released for despatch.",
  },
  {
    step: 8,
    title: "Logistics",
    description:
      "Freight, customs coordination and transport are arranged from the supplier onward.",
  },
  {
    step: 9,
    title: "Delivery",
    description:
      "Goods arrive at your site, consolidated where an order spans several suppliers.",
  },
  {
    step: 10,
    title: "Customer Satisfaction",
    description:
      "We confirm the order landed as specified, and stay available for replacements and repeat supply.",
  },
];
