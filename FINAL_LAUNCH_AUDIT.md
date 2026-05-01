# Final Launch Audit

Branch audited: `design-integration-v2`  
Audit date: May 1, 2026  
Verdict: **Ready with minor manual items**

## Executive Summary

The Limitless Consulting site is in strong pre-launch shape for a student organization website. Public pages load, the Webpack-based Next.js workflow is preserved, the member portal remains server-protected by a shared password, and the contact form uses a server-side email route rather than exposing secrets in browser code.

This audit fixed several launch-polish issues, including the Engagements page watermark crop, missing search metadata files, portal indexing controls, external link security attributes, a Next.js smooth-scroll warning, and one public error message that still referenced developer logs.

Remaining launch work is mostly operational: configure production environment variables in Vercel, verify the contact form with real Resend credentials, confirm public stats/recruiting links, replace placeholder portal resource URLs, and review image compression over time.

## Pages Audited

Audited routes:

- `/`
- `/about`
- `/team`
- `/services`
- `/engagements`
- `/media`
- `/join`
- `/faq`
- `/contact`
- `/portal`
- `/robots.txt`
- `/sitemap.xml`

Negative route check:

- `/login` returns `404`, as required.
- `/content` is not an active route in this project.

Each active page was checked for load status, logical `h1`, metadata, desktop overflow, mobile overflow, public copy quality, image references, and link behavior.

## Functionality Findings

What passed:

- Desktop and mobile navigation load and expose expected routes.
- Footer and CTA links remain connected to centralized site config.
- FAQ accordion toggles.
- Homepage photo carousel has accessible previous/next controls.
- Media carousel has accessible previous/next controls.
- Public pages do not require member portal credentials.
- `/login` remains removed.
- `/portal` unlocks with `MEMBER_PORTAL_PASSWORD` and supports logout.

Fixed during audit:

- Added `rel="noopener noreferrer"` where external links previously used only `noreferrer`.
- Added the root `data-scroll-behavior="smooth"` attribute recommended by Next.js for the global smooth-scroll setting.

Manual review:

- Some portal resource links are intentionally placeholders until the board connects approved internal Drive/resources.
- Application and recruiting links should be rechecked before launch.

## Accessibility Findings

What passed:

- Tested pages have one logical `h1`.
- Core buttons and carousel controls use accessible names.
- Forms expose labels and visible validation feedback.
- Contact form feedback uses an `aria-live` region.
- Motion-heavy areas use restrained transitions, and existing carousel hooks account for reduced-motion behavior.
- Mobile touch targets are generally large enough.

Fixed during audit:

- Improved external link security attributes without changing link semantics.
- Removed developer-facing error copy from the global error boundary.

Manual review:

- A full automated WCAG color-contrast scan was not run. Visual contrast appears launch-appropriate, but a follow-up axe/Lighthouse pass is still useful.

## Mobile Findings

Viewport checks covered:

- `375x667`
- `390x844`
- `430x932`
- `768x1024`
- `1440x1000`

What passed:

- No horizontal overflow was detected on public pages at tested widths.
- Cards, forms, media sections, and navigation stack cleanly.
- Contact and portal forms remain usable on small screens.
- Engagements watermark is hidden on mobile, avoiding crowding.

Manual review:

- Do one final hands-on phone check on a real iPhone and Android device after the Vercel preview deployment, especially for carousel feel and tap targets.

## Security Findings

What passed:

- No hardcoded API keys, portal passwords, or Resend keys were found in source code.
- `npm audit --audit-level=moderate` reported `0` vulnerabilities.
- `.env.local` is ignored.
- `assets-to-import` is ignored and not tracked.
- Contact form API validates server-side.
- Contact form user input is escaped before email HTML is built.
- Contact form uses `replyTo` for the submitter email instead of treating user input as the sender.
- Honeypot spam protection is present.
- Light in-memory rate limiting is present.
- Portal password is read from `MEMBER_PORTAL_PASSWORD`.
- Portal session cookie is `httpOnly`, scoped to `/portal`, `sameSite: "lax"`, and `secure` in production.
- Supabase auth has not been reintroduced.

Manual review:

- The shared-password portal is appropriate for low-risk student organization resources. It is not appropriate for high-security personal data, financial records, or sensitive client files.
- Production Resend credentials must be set only in Vercel environment variables, not committed.

## Performance Findings

What passed:

- Next/Image is used for major card/photo assets.
- Videos are muted/inline where used.
- Build completed without major warnings.
- No unnecessary auth/database client is required for public routes.

Observed:

- `public` is about 37 MB.
- `public/images/team` is about 31 MB, mostly due to large headshots.

Recommendation:

- After launch, compress large headshots and any oversized photos with ImageOptim, Squoosh, or similar export settings. This is not blocking because Next.js image optimization handles served sizes, but the repo/deploy payload can be leaner.

## SEO / Metadata Findings

What passed:

- Public pages have titles and meta descriptions.
- Global Open Graph and Twitter metadata are configured.
- Favicon/app icon metadata is configured.
- `/portal` now has `robots: { index: false, follow: false }`.

Fixed during audit:

- Added `src/app/robots.ts`.
- Added `src/app/sitemap.ts`.
- `robots.txt` disallows `/portal`.
- `sitemap.xml` lists public pages and excludes `/portal`.

Manual review:

- Confirm `siteConfig.url` matches the final custom domain before production launch so sitemap and metadata URLs resolve to the real domain.

## Copy / Content Findings

What passed:

- Public copy is specific to Limitless: Townhalls, Workshops, student founders, MSU entrepreneurs, and founder challenges.
- No obvious internal "confirm before launch" notes were found in public UI.
- Contact copy now describes the direct email fallback in user-facing language.

Manual review:

- Verify homepage stats in `src/data/stats.ts` before announcing launch.
- Verify current semester recruiting dates and application link.
- Review client cards and public claims one last time with the board before sharing widely.

## Visual / Design Findings

What passed:

- Overall design is polished, brand-aware, and cohesive.
- Team headshots, client cards, media cards, and CTAs visually align with the current design system.
- Media and photo carousels are substantially cleaner than earlier text-heavy/static treatments.

Fixed during audit:

- The large subtle Limitless watermark on `/engagements` no longer gets abruptly cut off at the bottom of the green hero section. It is now positioned outside the content container, kept subtle, and faded with a mask so the transition into the next section feels intentional.

Screenshot generated:

- `/tmp/limitless-engagements-audit-desktop.png`

## Code Quality Findings

What passed:

- Content remains centralized in `src/data` where practical.
- Route structure remains intact.
- Webpack dev/build scripts are preserved.
- No `dangerouslySetInnerHTML` usage was found.
- No debug `console.log` or `debugger` statements were found.

Fixed during audit:

- Removed developer-facing language from `src/app/error.tsx`.
- Added search route handlers through standard App Router metadata files.
- Used existing config (`siteConfig`) for the Engagements watermark asset path.

Manual review:

- Some uncommitted work predates this audit. Review `git diff` before committing so the final commit message accurately reflects everything included.

## Domain / Vercel Readiness Findings

Ready:

- The project builds with `next build --webpack`.
- Public pages do not depend on local-only URLs.
- Vercel environment variable requirements are documented.
- `CONTACT_SETUP.md` explains Resend setup.
- README documents custom domain and domain registrar considerations.

Required before production launch:

- Set `MEMBER_PORTAL_PASSWORD` in Vercel.
- Set `RESEND_API_KEY` in Vercel.
- Set `CONTACT_TO_EMAIL=RSO.Limitless@msu.edu` in Vercel.
- Set `CONTACT_FROM_EMAIL` to a verified Resend sender/domain.
- Set/update `NEXT_PUBLIC_SITE_URL` or `siteConfig.url` to the final custom domain if needed.
- Redeploy after environment variable changes.
- Test a real contact form delivery on the Vercel preview or production deployment.

## Issues Fixed During Audit

- Fixed abruptly clipped `/engagements` hero logo watermark.
- Added `/robots.txt` generation.
- Added `/sitemap.xml` generation.
- Marked `/portal` as noindex/no-follow.
- Added `noopener` to external links that only had `noreferrer`.
- Replaced developer-facing global error copy.
- Added `data-scroll-behavior="smooth"` to the root HTML element to satisfy Next.js smooth-scroll guidance.
- Polished contact fallback copy from "Mail link" to "email link".

## Issues Still Requiring Manual Review

High priority before launch:

- Configure Vercel environment variables for contact form and portal.
- Verify real Resend delivery to `RSO.Limitless@msu.edu`.
- Verify homepage stats are accurate.
- Verify Apply Now, recruiting dates, and any semester-specific copy.
- Replace placeholder portal resource links with approved internal URLs.

Medium priority:

- Review all public client/company claims with board approval.
- Compress large headshots and photo assets after launch.
- Run Lighthouse/axe on the Vercel preview.
- Test on at least one real iPhone and one real Android device.

Low priority:

- Consider adding analytics after launch if the organization wants traffic insight.
- Consider a CMS or lightweight admin workflow only if future board maintenance becomes difficult.

## Launch Readiness Verdict

**Ready with minor manual items.**

The codebase and UI are ready for a Vercel preview and final stakeholder review. The site should not be pointed at a real domain until production environment variables are configured and one real contact-form delivery test passes.

## Final Deployment Checklist

1. Confirm branch:
   ```bash
   git branch
   ```
   The star should be next to `design-integration-v2`.

2. Run local checks:
   ```bash
   npm run clean
   npm run lint
   npm run build
   ```

3. Run the local app:
   ```bash
   MEMBER_PORTAL_PASSWORD=test-password npm run dev
   ```

4. Manually verify:
   - `/`
   - `/about`
   - `/team`
   - `/services`
   - `/engagements`
   - `/media`
   - `/join`
   - `/faq`
   - `/contact`
   - `/portal`
   - `/login` returns `404`

5. Push the branch:
   ```bash
   git status
   git add .
   git commit -m "Final launch audit fixes"
   git push origin design-integration-v2
   ```

6. Review the Vercel preview deployment.

7. In Vercel Project Settings -> Environment Variables, add:
   - `MEMBER_PORTAL_PASSWORD`
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`

8. Redeploy the preview/production environment after changing env vars.

9. Submit a real contact form test and confirm it arrives at `RSO.Limitless@msu.edu`.

10. Add the custom domain in Vercel and configure DNS at the registrar using Vercel's provided records.

11. After final approval, merge `design-integration-v2` into `main` through a GitHub pull request.
