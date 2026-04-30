import type { Service } from "@/types/content";

// Services are shared by the homepage preview and the full Services page.
export const services: Service[] = [
  {
    title: "Market Research",
    icon: "barChart",
    shortDescription:
      "Turn founder questions into clearer customer segments, market signals, and next places to test.",
    longDescription:
      "After a Townhall or Workshop conversation, student teams help founders organize what they know, spot what they still need to learn, and translate market noise into usable evidence.",
    exampleDeliverables: ["Customer segment map", "Market signal summary", "Interview or survey plan"],
  },
  {
    title: "Go-To-Market Strategy",
    icon: "rocket",
    shortDescription:
      "Clarify who to reach first, what message should lead, and which traction experiments are realistic.",
    longDescription:
      "Limitless helps founders move from a strong pitch to a focused launch path by pressure-testing channels, positioning, and early customer touchpoints.",
    exampleDeliverables: ["Launch priorities", "Channel test plan", "Positioning notes"],
  },
  {
    title: "Business Model Development",
    icon: "lightbulb",
    shortDescription:
      "Pressure-test pricing, revenue logic, customer behavior, and the assumptions behind the startup.",
    longDescription:
      "Consultants help founders make the business model visible, then identify which assumptions need evidence before the team commits more time or money.",
    exampleDeliverables: ["Business model map", "Assumption tracker", "Revenue path comparison"],
  },
  {
    title: "Financial Modeling",
    icon: "lineChart",
    shortDescription:
      "Build simple, editable models that help founders understand pricing, costs, runway, and scenarios.",
    longDescription:
      "Student teams create beginner-friendly spreadsheet tools that make the financial logic behind a founder decision easier to discuss and revise.",
    exampleDeliverables: ["Editable model", "Scenario analysis", "Assumption summary"],
  },
];
