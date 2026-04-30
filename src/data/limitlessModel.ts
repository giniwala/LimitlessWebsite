import type { LimitlessEventFormat, LimitlessModelStep } from "@/types/content";

// Explains the operating model that makes Limitless different.
// Keep this specific to the real Townhall and Workshop rhythm.
export const limitlessModelSteps: LimitlessModelStep[] = [
  {
    title: "Founder joins a Townhall",
    description:
      "An MSU founder or student entrepreneur brings the room inside the business they are building.",
    icon: "megaphone",
    tag: "Open to all",
  },
  {
    title: "Pitch the business",
    description:
      "Students hear the product, customer, market, and story directly from the founder.",
    icon: "briefcase",
    tag: "Founder-led",
  },
  {
    title: "Name obstacles",
    description:
      "The founder frames the real questions on their plate, from market entry to pricing to finance.",
    icon: "target",
    tag: "Real problems",
  },
  {
    title: "Brainstorm live",
    description:
      "Students from different majors spend focused time pressure-testing ideas and surfacing next moves.",
    icon: "messages",
    tag: "15-minute sprint",
  },
  {
    title: "Workshops go deeper",
    description:
      "Thursday Workshops give interested founders one-on-one support from consultants and project teams.",
    icon: "calendar",
    tag: "Thursday support",
  },
  {
    title: "Campus partners plug in",
    description:
      "Collaboration events connect founders with other MSU student organizations and entrepreneurship resources.",
    icon: "handshake",
    tag: "MSU ecosystem",
  },
];

export const eventFormats: LimitlessEventFormat[] = [
  {
    title: "Townhall meetings",
    description:
      "Open sessions where founders pitch, share current challenges, and invite the room into live problem solving.",
    icon: "megaphone",
  },
  {
    title: "Thursday Workshops",
    description:
      "Smaller working sessions where consultants help founders clarify next steps and build toward action.",
    icon: "calendar",
  },
  {
    title: "Collaboration events",
    description:
      "Partnered programming with other student organizations, including entrepreneurship and pitch-focused groups.",
    icon: "handshake",
  },
  {
    title: "Skill-building sessions",
    description:
      "Pitch, case, research, and finance workshops that help students learn startup strategy by practicing it.",
    icon: "graduationCap",
  },
];
