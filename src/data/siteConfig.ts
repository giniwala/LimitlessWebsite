import type { NavItem } from "@/types/content";

// Central organization and link settings.
// Update this file when application forms, socials, emails, or shared folders change.
export const siteConfig = {
  name: "Limitless Consulting",
  shortName: "Limitless",
  school: "Michigan State University",
  domain: "limitlessatmsu.com",
  url: "https://limitlessatmsu.com",
  brand: {
    // Controls the navbar/footer logo. Replace the file in public/brand to update it.
    logoPath: "/brand/limitless-logo.svg",
    logoFallbackPath: "/brand/limitless-logo.jpeg",
    motionPath: "/brand/motion/limitless-animation-02.mp4",
    motionPosterPath: "/brand/limitless-white-on-green.png",
    fallbackInitials: "L",
  },
  contact: {
    // Public contact email used on the contact page, footer, and mailto links.
    email: "RSO.Limitless@msu.edu",
  },
  externalLinks: {
    // Temporary inactive application form while recruiting is closed.
    applyNow:
      "https://forms.office.com/pages/responsepage.aspx?id=MHEXIi9k2UGSEXQjetVofX4rdFRvR-xKjUo2pYQJvv5URU8yVk4wS1pNTkVGWUxFS01CNDNMVjJWMS4u&route=shorturl&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleAPSb9JleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAadury1CKgNMCbU32xtqg5SOZn56XaELTWjqyke7SXlUKHrJD-JyfW28nWMB6A_aem_yBq9ybN5j0hLhVcaA_f7mw",
    // TODO: Replace with a client inquiry form if you create one.
    clientInquiry: "#",
    // Shared-password member portal route for current members.
    memberPortal: "/portal",
    // Official Limitless Club social profiles.
    instagram: "https://www.instagram.com/limitlessclubmsu/",
    linkedin:
      "https://www.linkedin.com/company/limitless-club-at-michigan-state-university/posts/?feedView=all",
    // TODO: Replace with the public/shared Drive folder once approved.
    googleDriveFolder: "#",
    // TODO: Replace with a Calendly or booking link if the board uses one.
    scheduling: "#",
    // Member portal resources. Keep private files permissioned in Google Drive or your storage tool.
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
  { label: "Media", href: "/media" },
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
