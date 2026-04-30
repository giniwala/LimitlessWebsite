import type { NavItem } from "@/types/content";

// Central organization and link settings.
// Update this file when application forms, socials, emails, or shared folders change.
export const siteConfig = {
  name: "Limitless Consulting",
  shortName: "Limitless",
  school: "Michigan State University",
  domain: "limitlessconsulting.org",
  url: "https://limitlessconsulting.org",
  brand: {
    // Controls the navbar/footer logo. Replace the file in public/brand to update it.
    logoPath: "/brand/limitless-logo.jpeg",
    fallbackInitials: "LC",
  },
  contact: {
    // Public contact email used on the contact page, footer, and mailto links.
    email: "limitlessconsulting@msu.edu",
  },
  externalLinks: {
    // TODO: Replace with the final new-member application form each recruiting cycle.
    applyNow: "https://forms.gle/limitless-application-placeholder",
    // TODO: Replace with a client inquiry form if you create one.
    clientInquiry: "#",
    // Internal portal route. This stays local unless you change the login path.
    memberPortalLogin: "/login",
    // TODO: Replace with official social profiles.
    instagram: "https://www.instagram.com/limitlessconsultingmsu",
    linkedin: "https://www.linkedin.com/company/limitless-consulting-msu",
    // TODO: Replace with the public/shared Drive folder once approved.
    googleDriveFolder: "#",
    // TODO: Replace with a Calendly or booking link if the board uses one.
    scheduling: "#",
    // Member portal resources. Keep private files permissioned in Google Drive/Supabase.
    memberHandbook: "#",
    consultingToolkit: "#",
    caseInterviewResources: "#",
    slideDeckTemplates: "#",
    financialModelTemplates: "#",
    projectTimeline: "#",
    clientDeliverablesFolder: "#",
    executiveBoardWorkspace: "#",
  },
};

export const publicNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Services", href: "/services" },
  { label: "Engagements", href: "/engagements" },
  { label: "Join", href: "/join" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const portalNav: NavItem[] = [
  { label: "Dashboard", href: "/portal" },
  { label: "Resources", href: "/portal#resources" },
  { label: "Schedule", href: "/portal#schedule" },
  { label: "Announcements", href: "/portal#announcements" },
];
