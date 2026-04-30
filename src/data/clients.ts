import type { ClientHighlight } from "@/types/content";

// Homepage-safe client showcase.
// Keep private engagement scope, deliverables, internal recommendations, and outcomes out of this file.
// Use CLIENT_RESEARCH.md to track sources and claims that still need review.
export const clientHighlights: ClientHighlight[] = [
  {
    name: "BRCĒ",
    category: "Performance materials",
    websiteUrl: "https://www.brce.shop/",
    linkedInUrl: "https://www.linkedin.com/company/brce-corp/posts/?feedView=all",
    logoSrc: "/images/clients/brce-logo.png",
    logoAlt: "BRCĒ logo",
    shortDescription:
      "MSU-founded performance materials company behind untie-resistant athletic shoelaces.",
    publicHighlights: [
      "Appeared on Shark Tank in 2026",
      "$300K two-shark deal reported by MSU",
      "$611.5K in Rice competition prizes",
    ],
    sourceNotes: "MSUToday; MSU Burgess Institute; Rice Business Plan Competition coverage",
    publishStatus: "publish",
    needsReview: false,
  },
  {
    name: "Zolli Candy",
    category: "Consumer goods",
    websiteUrl: "https://zollicandy.com/",
    linkedInUrl: "https://www.linkedin.com/company/zolli-candy/",
    logoSrc: "/images/clients/zolli-candy-logo.png",
    logoAlt: "Zolli Candy logo",
    shortDescription:
      "Michigan consumer goods brand known for zero-sugar, allergy-friendly candy.",
    publicHighlights: [
      "Available through U.S. retailers and Amazon",
      "International distribution publicly reported",
      "Consumer goods / candy brand",
    ],
    sourceNotes: "Official LinkedIn; Michigan Economic Development Corporation profile",
    publishStatus: "publish",
    needsReview: false,
  },
  {
    name: "Cocomar",
    category: "Food and beverage",
    websiteUrl: "https://www.cocomar.shop/",
    linkedInUrl: "https://www.linkedin.com/company/cocomar/",
    logoSrc: "/images/clients/cocomar-logo.png",
    logoAlt: "Cocomar logo",
    shortDescription:
      "MSU student-founded coconut-water-based protein smoothie brand.",
    publicHighlights: [
      "Coconut-water-based protein smoothie",
      "QEC third-place finisher",
      "Selected for e-Fest 2026",
    ],
    sourceNotes: "Cocomar website; MSU Burgess Institute; public Cocomar LinkedIn page",
    publishStatus: "publish",
    needsReview: false,
  },
];

export const publishedClientHighlights = clientHighlights.filter(
  (client) => client.publishStatus === "publish" && !client.needsReview,
);
