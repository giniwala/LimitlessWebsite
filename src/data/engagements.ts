import type { Engagement } from "@/types/content";

// Keep client confidentiality in mind. If you do not have explicit permission
// to name a client, use an anonymous title and set isPublic to false until reviewed.
export const engagements: Engagement[] = [
  {
    name: "Get Loaded Food Truck",
    industry: "Student-owned food and beverage",
    problem:
      "A student-owned food truck needed practical growth thinking around brand momentum, local demand, and next-stage operating choices.",
    approach:
      "Limitless publicly featured Get Loaded in a Town Hall format, giving members and founders space to discuss business questions and pressure-test ideas.",
    deliverables: ["Town Hall discussion", "Growth questions", "Founder-facing feedback themes"],
    impact:
      "Public sources identify Get Loaded as a featured client. Specific recommendations and results should only be added after client approval.",
    isPublic: true,
    confidence: "high",
    sourceLabel: "Official LinkedIn post and MSU Burgess profile",
  },
  {
    name: "Dawn",
    industry: "Consumer wellness beverage",
    problem:
      "A wellness beverage startup was exploring how to communicate a new anti-energy drink category and build traction with early audiences.",
    approach:
      "Limitless hosted a Town Hall conversation focused on innovation, wellness-driven entrepreneurship, and market positioning.",
    deliverables: ["Positioning discussion", "Market education questions", "Strategic feedback themes"],
    impact:
      "Publicly safe to describe as a featured Town Hall startup. Do not publish private recommendations without approval.",
    isPublic: true,
    confidence: "high",
    sourceLabel: "Official LinkedIn post and Dawn website",
  },
  {
    name: "KJA Night Vision",
    industry: "Hardware and outdoor safety technology",
    problem:
      "A student-led hardware venture was building accessible night-vision products and exploring product, market, and entrepreneurship questions.",
    approach:
      "Limitless featured KJA Night Vision in a Town Hall setting centered on innovation, product development, and venture-building discussion.",
    deliverables: ["Product discussion", "Market questions", "Founder feedback themes"],
    impact:
      "Public sources support naming the company and category. Specific consulting outputs remain internal until approved.",
    isPublic: true,
    confidence: "high",
    sourceLabel: "Official LinkedIn post, KJA website, and MSU Burgess CES profile",
  },
  {
    name: "Powerly",
    industry: "Mobile charging and venue experience",
    problem:
      "A startup building portable phone charger rental stations was exploring strategic decisions around venues, customer experience, and growth.",
    approach:
      "Limitless publicly framed the session as an opportunity for members to hear the founder journey and think through active strategic decisions.",
    deliverables: ["Strategy discussion", "Venue use-case questions", "Growth feedback themes"],
    impact:
      "Safe to publish as a public Town Hall example; measured outcomes should be added only if the startup approves them.",
    isPublic: true,
    confidence: "medium",
    sourceLabel: "Official LinkedIn post",
  },
  {
    name: "Kinetiq",
    industry: "Sports technology",
    problem:
      "A sports-tech startup was exploring a unified platform for training, competition, event discovery, and performance-driven engagement.",
    approach:
      "Limitless hosted the team for a Town Hall conversation about the future of sports technology and platform strategy.",
    deliverables: ["Platform strategy discussion", "User journey questions", "Market feedback themes"],
    impact:
      "Public source supports a high-level description. Keep details conservative until the team approves a full case study.",
    isPublic: true,
    confidence: "medium",
    sourceLabel: "Official LinkedIn post",
  },
  {
    name: "Zolli Candy",
    industry: "Consumer packaged goods",
    problem:
      "A consumer candy company joined a Town Hall for student perspectives on strategic ideas that could support future growth and decision-making.",
    approach:
      "Limitless brought students together for a strategy and creativity-focused discussion with the company and founder.",
    deliverables: ["Growth discussion", "Student perspective themes", "Decision-making questions"],
    impact:
      "Publicly safe as a featured Town Hall example. Avoid implying a formal consulting engagement or outcome unless approved.",
    isPublic: true,
    confidence: "high",
    sourceLabel: "Official LinkedIn post and public Zolli Candy sources",
  },
];

export const publicEngagements = engagements.filter((engagement) => engagement.isPublic);
export const previewEngagements = publicEngagements.slice(0, 3);
