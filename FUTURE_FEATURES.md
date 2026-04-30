# Future Features

Date: April 30, 2026

These ideas are ordered around value and maintainability. Avoid fragile scraping of Instagram or LinkedIn. If a feature needs official APIs, plan for platform review, permissions, and ongoing maintenance.

## Recommendations

| Feature | User Value | Complexity | Maintenance | Recommended Path | Build Now? | Risks / Limits |
|---|---|---|---|---|---|---|
| Manually Curated “Latest from Limitless” | Makes the site feel active and gives visitors a reason to trust the org. | Low | Low | Create `src/data/socialUpdates.ts` with title, date, summary, platform, and URL. Display 3-4 cards on homepage. | Later, soon | Requires someone to update it monthly. Do not call it “live.” |
| Live Instagram Feed | Shows fresh event/recruiting content. | High | Medium | Use official Instagram Basic Display / Graph API if eligible. Otherwise embed approved posts manually. | Later | API permissions and platform changes can break it. Avoid scraping. |
| Live LinkedIn Posts Feed | Useful for professional credibility and client updates. | High | Medium | Use LinkedIn API only if the org can get approved access. Safer alternative: curated post links in data. | Later | LinkedIn API access is limited; scraping is not recommended. |
| “Latest from Limitless” Page | Central place for Town Hall recaps, recruiting news, and client-safe updates. | Low | Low | Start with local MDX or typed data. Upgrade to a CMS later. | Later | Needs editorial ownership. |
| Lightweight CMS | Lets nontechnical board members edit updates and pages. | Medium | Medium | Consider Sanity, Contentful, or Notion-backed publishing after launch. | Later | Adds accounts, permissions, and cost/complexity. |
| Google Sheets Updates Feed | Easy for board members to maintain event/news updates. | Medium | Medium | Publish a read-only Google Sheet as JSON or use a small build-time script. | Later | Data validation and accidental public sharing need care. |
| Founder Inquiry Intake Flow | Makes “Work With Us” more actionable. | Medium | Low | Add a form with venture stage, business question, timeline, confidentiality note, and contact info. Store in Formspree, Google Forms, or a server action with email. | Soon | Avoid collecting sensitive client info without a privacy note. |
| Public Founder Spotlight Cards | Builds credibility and celebrates student entrepreneurs. | Low | Medium | Add approved spotlight data with company, founder quote, public link, and permission status. | Later | Requires explicit permission and review. |
| Recruitment Timeline Module | Helps applicants know what to do next. | Low | Low | Replace placeholder timeline with confirmed dates and events in `src/data/siteCopy.ts`. | Now when dates are known | Must be updated each semester. |
| Alumni / Member Outcomes | Strong trust signal for applicants and partners. | Medium | Medium | Add opt-in outcomes: internships, full-time roles, startups, graduate programs. | Later | Must avoid overstating causation or publishing private info. |
| Project Lifecycle Visualization | Helps founders understand the consulting process. | Low | Low | Add a simple visual flow: intake, scope, research, synthesis, presentation, handoff. | Soon | Keep it accurate to how the org actually operates. |
| Professor / Advisor Partnership Page | Makes referrals easier. | Medium | Low | Add page for faculty referrals, classroom collaborations, and advisor contacts. | Later | Needs approved advisor language and contacts. |
| Member Resource Center v2 | Improves portal usefulness. | Medium | Medium | Add sections by semester/team and optional resource tags. Keep shared password until true per-user needs exist. | Later | Shared-password model is not suitable for highly sensitive materials. |
| Animated Infinity Moments | Strengthens brand recall. | Low | Low | Use one or two subtle SVG/video accents near CTAs and section breaks. Respect reduced motion. | Only selectively | Overuse can make the site feel distracting. |

## Best Next Small Feature

The best near-term feature is a manually curated “Latest from Limitless” section powered by `src/data/socialUpdates.ts`. It avoids platform API complexity, keeps board members in control, and can link to official Instagram/LinkedIn posts without pretending to be live.

Suggested data shape:

```ts
export type SocialUpdate = {
  title: string;
  date: string;
  platform: "Instagram" | "LinkedIn";
  summary: string;
  href: string;
};
```

Build it after the board has 3-5 real public posts they want to feature.
