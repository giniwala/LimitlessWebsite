import type { Engagement } from "@/types/content";

// Keep client confidentiality in mind. If you do not have explicit permission
// to name a client, use an anonymous title and set isPublic to false until reviewed.
export const engagements: Engagement[] = [
  {
    name: "Anonymous Student Marketplace",
    industry: "Consumer technology",
    problem:
      "The founder needed to prioritize an initial customer segment before investing time in product expansion.",
    approach:
      "The team reviewed competitor positioning, interviewed prospective users, and ranked segments by pain intensity and reachability.",
    deliverables: ["Customer segment scorecard", "Competitive scan", "Launch recommendation"],
    impact:
      "Placeholder impact: helped the founder choose a narrower pilot audience and define next discovery questions.",
    isPublic: false,
  },
  {
    name: "Early-Stage Campus Service Venture",
    industry: "Local services",
    problem:
      "The team wanted a clearer operating plan for matching demand with limited student staffing.",
    approach:
      "Consultants mapped the current workflow, identified capacity constraints, and modeled weekly scheduling scenarios.",
    deliverables: ["Operations map", "Capacity model", "90-day action plan"],
    impact:
      "Placeholder impact: created a practical operating rhythm the founder could test during a semester pilot.",
    isPublic: false,
  },
  {
    name: "Student Health Product Concept",
    industry: "Health and wellness",
    problem:
      "A student team needed evidence to understand whether their idea solved an urgent enough user problem.",
    approach:
      "The engagement focused on customer discovery, survey design, and synthesis of early user feedback.",
    deliverables: ["Interview script", "Survey summary", "Problem validation memo"],
    impact:
      "Placeholder impact: clarified the strongest user pains and recommended changes to the product concept.",
    isPublic: false,
  },
];

export const publicEngagements = engagements.filter((engagement) => engagement.isPublic);
export const previewEngagements = engagements.slice(0, 3);
