import type { Announcement, PortalEvent, PortalResource } from "@/types/content";
import { siteConfig } from "@/data/siteConfig";

// Portal data is member-facing. Do not put secret tokens or private keys here.
// Use these placeholders for now, then point href values to permissioned Drive,
// Supabase Storage, or database-backed resource records when the portal launches.

export const announcements: Announcement[] = [
  {
    title: "Weekly meeting moved to Wednesday",
    date: "2026-09-09",
    audience: ["member", "project-manager", "admin"],
    body: "Placeholder announcement for all members. Replace with weekly updates from the executive board.",
  },
  {
    title: "Project manager scope reviews due Friday",
    date: "2026-09-11",
    audience: ["project-manager", "admin"],
    body: "PMs should upload draft scope documents before the board review block.",
  },
  {
    title: "Board planning notes available",
    date: "2026-09-13",
    audience: ["admin"],
    body: "Admin-only placeholder for executive board links, planning notes, and operating docs.",
  },
];

export const portalEvents: PortalEvent[] = [
  {
    title: "General Body Meeting",
    date: "Every Tuesday",
    time: "7:00 PM - 8:00 PM",
    location: "Business College room TBD",
    audience: ["member", "project-manager", "admin"],
  },
  {
    title: "Engagement Team Working Block",
    date: "Thursdays",
    time: "6:00 PM - 7:30 PM",
    location: "Team-selected workspace",
    audience: ["member", "project-manager", "admin"],
  },
  {
    title: "Project Manager Standup",
    date: "Mondays",
    time: "5:30 PM - 6:00 PM",
    location: "Virtual",
    audience: ["project-manager", "admin"],
  },
];

export const portalResources: PortalResource[] = [
  {
    title: "Member Handbook",
    description: "Organization expectations, meeting norms, and semester operating guide.",
    href: siteConfig.externalLinks.memberHandbook,
    type: "File",
    icon: "fileText",
    roles: ["member", "project-manager", "admin"],
  },
  {
    title: "Consulting Toolkit",
    description: "Frameworks, research templates, interview guides, and synthesis tools.",
    href: siteConfig.externalLinks.consultingToolkit,
    type: "Folder",
    icon: "folder",
    roles: ["member", "project-manager", "admin"],
  },
  {
    title: "Case Interview Resources",
    description: "Practice cases, prep notes, and sample feedback rubrics.",
    href: siteConfig.externalLinks.caseInterviewResources,
    type: "Folder",
    icon: "graduationCap",
    roles: ["member", "project-manager", "admin"],
  },
  {
    title: "Slide Deck Templates",
    description: "Client-ready deck shells and internal presentation examples.",
    href: siteConfig.externalLinks.slideDeckTemplates,
    type: "Template",
    icon: "fileText",
    roles: ["member", "project-manager", "admin"],
  },
  {
    title: "Financial Model Templates",
    description: "Simple models for revenue, runway, pricing, and scenario planning.",
    href: siteConfig.externalLinks.financialModelTemplates,
    type: "Template",
    icon: "lineChart",
    roles: ["member", "project-manager", "admin"],
  },
  {
    title: "Project Timeline",
    description: "Semester engagement milestones, check-ins, and deliverable due dates.",
    href: siteConfig.externalLinks.projectTimeline,
    type: "Link",
    icon: "calendar",
    roles: ["member", "project-manager", "admin"],
  },
  {
    title: "Client Deliverables Folder",
    description: "Shared placeholder folder for final reports, decks, and research files.",
    href: siteConfig.externalLinks.clientDeliverablesFolder,
    type: "Folder",
    icon: "database",
    roles: ["project-manager", "admin"],
  },
  {
    title: "Executive Board Workspace",
    description: "Private board-only planning resources and administrative notes.",
    href: siteConfig.externalLinks.executiveBoardWorkspace,
    type: "Folder",
    icon: "briefcase",
    roles: ["admin"],
  },
];
