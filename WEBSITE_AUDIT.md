# Website Audit

Date: April 30, 2026

## Executive Summary

The Limitless Consulting site is in strong shape for a student consulting organization: it has a clear public sitemap, centralized editable content, good responsive foundations, a lightweight member portal, and a professional visual system. This pass focused on launch-readiness: favicon/app icons, cleaner public copy, real client logos, simplified client storytelling, conservative team bios, and subtle brand polish.

The uploaded `consulting_website_codex_quality_prompt(1).txt` file was not present in the project during inspection, so this audit applies the standards described in the task: polished consulting presentation, accessibility, responsive behavior, performance, privacy, and maintainable content ownership.

## What The Site Does Well

| Priority | Finding |
|---|---|
| High | Content is centralized in `src/data`, making future board updates realistic. |
| High | The shared-password portal is intentionally simple and does not expose the password client-side. |
| Medium | Public pages use consistent section spacing, typography, colors, and reusable cards. |
| Medium | The brand identity is stronger than a generic template because the real logo and subtle motion are integrated. |
| Medium | The site avoids overclaiming in most areas and uses placeholders where numbers still need confirmation. |

## Biggest Weaknesses

| Priority | Finding | Recommendation |
|---|---|---|
| High | Several public stats are still placeholders. | Replace `src/data/stats.ts` with verified counts before launch. |
| High | Recruiting dates and application links are placeholders. | Update `src/data/siteCopy.ts` and `src/data/siteConfig.ts` each semester. |
| Medium | The Engagements page is intentionally logo/company-focused and does not yet include approved case studies. | Get written client approval before adding detailed case studies. |
| Medium | The public site does not yet have real group/event photography. | Add approved hero and event photos in `public/images/hero`. |
| Low | No live social/news feed exists. | Start with a manually curated updates section before considering APIs. |

## Accessibility Findings

| Priority | Finding | Status |
|---|---|---|
| High | External social links need descriptive accessible labels. | Fixed with `SocialLinks`. |
| High | Motion should respect reduced-motion preferences. | Existing motion panel uses a static poster and CSS hides video for reduced-motion users. |
| Medium | Touch targets should remain at least 44px high. | Social links and primary buttons use `min-h-11`. |
| Medium | Form labels are present and inputs are keyboard accessible. | Pass. |
| Low | Some decorative icons could be redundant if not hidden. | Existing icons use `aria-hidden` in most places. |

## Design Consistency Findings

| Priority | Finding | Status |
|---|---|---|
| High | Homepage engagement preview was too detailed for a public client showcase. | Fixed with concise client highlight cards. |
| Medium | Social links were present but too quiet. | Fixed in footer, contact page, and CTA. |
| Medium | Team headshot framing is consistent after prior crop improvements. | Pass. |
| Low | Public-facing maintainer notes should not appear in UI. | Fixed in Team, FAQ, portal content, and not-found copy. |

## Content Strategy Findings

| Priority | Finding | Status |
|---|---|---|
| High | Public client claims need source-backed language. | Fixed with `src/data/clients.ts` and `CLIENT_RESEARCH.md`. |
| High | Limitless should not imply it caused client milestones. | Fixed in homepage copy and client card structure. |
| Medium | The Engagements page should remain a company/logo showcase until case studies are explicitly approved. | Current direction. |
| Medium | Applicant journey is clear but needs confirmed dates, application form, and expectations. | Future work. |

## Performance Findings

| Priority | Finding | Status |
|---|---|---|
| High | Default dev/build must avoid Turbopack due previous local instability. | Preserved Webpack scripts. |
| Medium | Motion video should be limited and metadata-preloaded only. | Pass. |
| Medium | Board-provided client logos should be optimized and sized consistently. | Added PNG files and object-contain display treatment. |
| Low | Hero fallback uses remote Unsplash. | Future: replace with local approved group photos. |

## SEO Findings

| Priority | Finding | Status |
|---|---|---|
| Medium | Global metadata and Open Graph image exist. | Pass. |
| Medium | Page-specific metadata exists for major pages. | Pass. |
| Low | Structured data is not present. | Future: add organization schema after final domain and official details are confirmed. |

## Maintainability Findings

| Priority | Finding | Status |
|---|---|---|
| High | Public links, copy, teams, services, portal resources, and clients are editable from `src/data`. | Pass. |
| Medium | Client research is separated from display data. | Pass. |
| Medium | Social link UI is reusable. | Fixed with `SocialLinks`. |
| Low | Docs should keep pace with asset changes. | Updated README and brand notes. |

## Security And Privacy Findings

| Priority | Finding | Status |
|---|---|---|
| High | Portal password is server-side and cookie is HTTP-only. | Pass. |
| High | No Supabase/user-account auth was reintroduced. | Pass. |
| High | Client showcase avoids private engagement details. | Fixed. |
| Medium | Portal is shared-password, not per-user access. | Acceptable for current scope, but not ideal for sensitive files. |
| Medium | Private files should stay permissioned in Google Drive or a controlled storage tool. | Documented. |

## Items Fixed In This Pass

- Replaced the active motion asset with `animation-02`.
- Replaced favicon/app icons with the real Limitless mark.
- Added real client logo paths for BRCĒ, Zolli Candy, and Cocomar.
- Simplified the Engagements page to a public-safe company showcase.
- Removed public-facing maintainer/placeholder notes from key UI surfaces.
- Added conservative team majors and bios plus `TEAM_REVIEW.md`.
- Added `src/data/clients.ts` for homepage-safe client highlights.
- Replaced homepage case-study preview with concise client showcase cards.
- Added reusable `SocialLinks` component.
- Increased Instagram/LinkedIn visibility in the footer, contact page, and CTA.
- Updated docs for client showcase, social links, and motion assets.
- Preserved Webpack dev/build scripts.

## Items Left For Future Work

| Priority | Recommendation |
|---|---|
| High | Replace placeholder stats, recruiting dates, application form, and shared resource links. |
| High | Confirm written permission before publishing detailed case studies or client logos. |
| Medium | Add approved group photography and a local hero slideshow. |
| Medium | Add a manually curated “Latest from Limitless” section before attempting social APIs. |
| Medium | Add faculty/advisor and alumni trust signals once confirmed. |
| Low | Add organization schema and final domain metadata after launch domain is selected. |
