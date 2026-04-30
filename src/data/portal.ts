import type { Announcement, PortalEvent, PortalResource } from "@/types/content";
import { siteConfig } from "@/data/siteConfig";

// Portal data is member-facing. Do not put secret tokens or private keys here.
// Use these placeholders for now, then point href values to permissioned Drive,
// shared folders, or database-backed resource records when the portal expands.

export const announcements: Announcement[] = [
  {
    title: "Weekly meeting moved to Wednesday",
    date: "2026-09-09",
    body: "Placeholder announcement for all members. Replace with weekly updates from the executive board.",
  },
  {
    title: "Project manager scope reviews due Friday",
    date: "2026-09-11",
    body: "PMs should upload draft scope documents before the board review block.",
  },
  {
    title: "Shared drive cleanup",
    date: "2026-09-13",
    body: "Replace this with an update about resource folders, meeting materials, or semester logistics.",
  },
];

export const portalEvents: PortalEvent[] = [
  {
    title: "General Body Meeting",
    date: "Every Tuesday",
    time: "7:00 PM - 8:00 PM",
    location: "Business College room TBD",
  },
  {
    title: "Engagement Team Working Block",
    date: "Thursdays",
    time: "6:00 PM - 7:30 PM",
    location: "Team-selected workspace",
  },
  {
    title: "Project Manager Standup",
    date: "Mondays",
    time: "5:30 PM - 6:00 PM",
    location: "Virtual",
  },
];

export const portalResources: PortalResource[] = [
  {
    title: "Shared Google Drive",
    description: "Main folder for member resources, project materials, and shared organization files.",
    href: siteConfig.externalLinks.googleDriveFolder,
    type: "Folder",
    icon: "folder",
    section: "Important Links",
  },
  {
    title: "Meeting / Scheduling Link",
    description: "Semester scheduling link for member meetings, interviews, or office hours.",
    href: siteConfig.externalLinks.scheduling,
    type: "Link",
    icon: "calendar",
    section: "Important Links",
  },
  {
    title: "Member Handbook",
    description: "Organization expectations, meeting norms, and semester operating guide.",
    href: siteConfig.externalLinks.memberHandbook,
    type: "File",
    icon: "fileText",
    section: "Internal Docs",
  },
  {
    title: "Consulting Toolkit",
    description: "Frameworks, research templates, interview guides, and synthesis tools.",
    href: siteConfig.externalLinks.consultingToolkit,
    type: "Folder",
    icon: "folder",
    section: "Consulting Toolkit",
  },
  {
    title: "Case Interview Resources",
    description: "Practice cases, prep notes, and sample feedback rubrics.",
    href: siteConfig.externalLinks.caseInterviewResources,
    type: "Folder",
    icon: "graduationCap",
    section: "Training Resources",
  },
  {
    title: "Slide Deck Templates",
    description: "Client-ready deck shells and internal presentation examples.",
    href: siteConfig.externalLinks.slideDeckTemplates,
    type: "Template",
    icon: "fileText",
    section: "Templates",
  },
  {
    title: "Financial Model Templates",
    description: "Simple models for revenue, runway, pricing, and scenario planning.",
    href: siteConfig.externalLinks.financialModelTemplates,
    type: "Template",
    icon: "lineChart",
    section: "Templates",
  },
  {
    title: "Project Timeline",
    description: "Semester engagement milestones, check-ins, and deliverable due dates.",
    href: siteConfig.externalLinks.projectTimeline,
    type: "Link",
    icon: "calendar",
    section: "Semester Timeline",
  },
  {
    title: "Client Deliverables Folder",
    description: "Shared placeholder folder for final reports, decks, and research files.",
    href: siteConfig.externalLinks.clientDeliverablesFolder,
    type: "Folder",
    icon: "database",
    section: "Files / Resources",
  },
  {
    title: "Meeting Materials",
    description: "Slides, notes, attendance resources, and recap files from weekly meetings.",
    href: siteConfig.externalLinks.executiveBoardWorkspace,
    type: "Folder",
    icon: "briefcase",
    section: "Meeting Materials",
  },
];
