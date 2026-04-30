import type { Service } from "@/types/content";

// Services are shared by the homepage preview and the full Services page.
export const services: Service[] = [
  {
    title: "Market Research",
    icon: "barChart",
    shortDescription:
      "Understand market size, customer segments, demand signals, and practical entry points.",
    longDescription:
      "We help student founders turn broad market questions into focused research, customer segment hypotheses, and usable summaries that support next-step decisions.",
    exampleDeliverables: ["Market sizing", "Customer segment map", "Research summary"],
  },
  {
    title: "Go-To-Market Strategy",
    icon: "rocket",
    shortDescription:
      "Clarify launch priorities, positioning, channel strategy, and early traction experiments.",
    longDescription:
      "Teams evaluate who the venture should reach first, what message should lead, and which channels are realistic for a student startup to test.",
    exampleDeliverables: ["Launch roadmap", "Channel analysis", "Messaging recommendations"],
  },
  {
    title: "Business Model Development",
    icon: "lightbulb",
    shortDescription:
      "Pressure-test revenue models, pricing logic, unit economics, and assumptions.",
    longDescription:
      "We help founders organize assumptions about customers, pricing, costs, and growth so they can identify the riskiest parts of the business model.",
    exampleDeliverables: ["Business model canvas", "Assumption tracker", "Revenue paths"],
  },
  {
    title: "Financial Modeling",
    icon: "lineChart",
    shortDescription:
      "Build clear operating models that help founders understand runway, pricing, and growth scenarios.",
    longDescription:
      "Consultants create beginner-friendly spreadsheet models for planning, scenario comparison, and explaining the financial logic behind a startup decision.",
    exampleDeliverables: ["Editable model", "Scenario analysis", "Key assumptions"],
  },
  {
    title: "Operations / Process Improvement",
    icon: "clipboard",
    shortDescription:
      "Map workflows, identify bottlenecks, and recommend lightweight processes for small teams.",
    longDescription:
      "We support founders who need clearer handoffs, scheduling, fulfillment, or internal processes without adding unnecessary complexity.",
    exampleDeliverables: ["Process map", "Efficiency recommendations", "Implementation plan"],
  },
  {
    title: "Customer Discovery",
    icon: "messages",
    shortDescription:
      "Turn founder hypotheses into interview guides, survey plans, and actionable customer insights.",
    longDescription:
      "Teams help founders ask better questions, synthesize feedback, and learn whether the problem is urgent enough for a real market.",
    exampleDeliverables: ["Interview guide", "Survey outline", "Insights report"],
  },
  {
    title: "Competitive Analysis",
    icon: "target",
    shortDescription:
      "Compare alternatives, identify whitespace, and define a sharper point of differentiation.",
    longDescription:
      "We map relevant alternatives and help founders understand how their offer can stand apart in a practical, credible way.",
    exampleDeliverables: ["Competitor matrix", "Positioning map", "Opportunity areas"],
  },
  {
    title: "Pitch Deck Support",
    icon: "fileText",
    shortDescription:
      "Strengthen narrative, evidence, and investor-facing materials without overclaiming traction.",
    longDescription:
      "Consultants review structure, evidence, and clarity so founders can communicate the opportunity and next milestone more effectively.",
    exampleDeliverables: ["Deck feedback", "Storyline improvements", "Data appendix"],
  },
];
