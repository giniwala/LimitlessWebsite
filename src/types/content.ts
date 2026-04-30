import type { LucideIcon } from "lucide-react";

export type IconKey =
  | "barChart"
  | "briefcase"
  | "calendar"
  | "chartPie"
  | "checkCircle"
  | "clipboard"
  | "compass"
  | "database"
  | "fileText"
  | "folder"
  | "globe"
  | "graduationCap"
  | "handshake"
  | "lightbulb"
  | "lineChart"
  | "link"
  | "megaphone"
  | "messages"
  | "rocket"
  | "sparkles"
  | "target"
  | "users";

export type IconMap = Record<IconKey, LucideIcon>;

export type NavItem = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
  description?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  major?: string;
  year?: string;
  bio?: string;
  image?: string;
  imagePosition?: string;
  linkedin?: string;
  email?: string;
  category: "Executive Board" | "Project Manager" | "Consultant" | "Member";
  order: number;
  needsLinkedInReview?: boolean;
  needsImageReview?: boolean;
};

export type Service = {
  title: string;
  icon: IconKey;
  shortDescription: string;
  longDescription: string;
  exampleDeliverables: string[];
};

export type ClientHighlight = {
  name: string;
  category: string;
  websiteUrl: string;
  linkedInUrl: string;
  logoSrc?: string;
  logoAlt?: string;
  shortDescription: string;
  publicHighlights: string[];
  sourceNotes?: string;
  publishStatus: "publish" | "review" | "draft";
  needsReview: boolean;
};

export type FAQ = {
  id: string;
  category: "Recruiting" | "Member Experience" | "Client Services" | "General";
  question: string;
  answer: string;
};

export type Announcement = {
  title: string;
  body: string;
  date: string;
};

export type PortalEvent = {
  title: string;
  date: string;
  time: string;
  location: string;
};

export type PortalResource = {
  title: string;
  description: string;
  href: string;
  type: "File" | "Folder" | "Template" | "Link";
  icon: IconKey;
  section:
    | "Important Links"
    | "Files / Resources"
    | "Meeting Materials"
    | "Consulting Toolkit"
    | "Templates"
    | "Training Resources"
    | "Internal Docs"
    | "Semester Timeline";
};
