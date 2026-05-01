# Limitless Consulting Website

A responsive website for Limitless Consulting, a student consulting organization at Michigan State University. The site serves prospective members, student founders, clients, alumni, and current members who need quick access to internal resources.

## Stack

- **Next.js App Router + TypeScript** for routing, metadata, server actions, and Vercel deployment.
- **Tailwind CSS** for responsive styling.
- **Local typed data files** in `src/data` for content that future board members can edit without a CMS.
- **Simple shared-password portal** for current members using `MEMBER_PORTAL_PASSWORD` and an httpOnly cookie.
- **Vercel** for hosting.

The portal intentionally does not use Supabase or user accounts right now. A shared semester password is cheaper, simpler, and easier for a student organization to maintain.

## Architecture

- Public pages live in `src/app/(site)`.
- The member portal lives at `/portal` in `src/app/(portal)/portal`.
- Portal password helpers live in `src/lib/member-portal.ts`.
- Reusable UI components live in `src/components`.
- Editable website content lives in `src/data`.
- Public assets live in `public`.

## Sitemap

- `/` Home
- `/about`
- `/team`
- `/services`
- `/engagements`
- `/media`
- `/join`
- `/faq`
- `/contact`
- `/portal` shared-password member portal

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required for local portal access:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
MEMBER_PORTAL_PASSWORD=replace-with-semester-password
```

The public website works without `MEMBER_PORTAL_PASSWORD`. The portal will show a setup note until the password is configured.

### Contact form email

The contact UI posts to the server-only route **`/api/contact`**, implemented in `src/app/api/contact/route.ts`. The route sends email through Resend and keeps the API key out of browser code.

For launch, configure these variables locally and in Vercel. Without `RESEND_API_KEY` and `CONTACT_FROM_EMAIL`, the form shows a user-friendly fallback asking visitors to email `RSO.Limitless@msu.edu` directly.

Variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Server-only secret from the Resend dashboard. Never prefix with `NEXT_PUBLIC_`. |
| `CONTACT_FROM_EMAIL` | Verified sender/domain in Resend, such as `no-reply@your-verified-domain.com`. |
| `CONTACT_TO_EMAIL` | Inbox that receives inquiries (defaults to `siteConfig.contact.email`, currently `RSO.Limitless@msu.edu`). |

Example `.env.local` values:

```bash
RESEND_API_KEY=your_resend_key_here
CONTACT_TO_EMAIL=RSO.Limitless@msu.edu
CONTACT_FROM_EMAIL=no-reply@your-verified-domain.com
MEMBER_PORTAL_PASSWORD=test-password
```

**Configure on Vercel:** Project Settings → Environment Variables → add the vars for Preview and Production → redeploy.

**Test locally:**

1. Add `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and optionally `CONTACT_TO_EMAIL` in `.env.local`.
2. Restart `npm run dev`.
3. Submit the form on `/contact` and confirm the message arrives in the destination inbox.

Honeypot, validation, and light rate limiting happen in the route; there is **no secret in client code**. The visitor's submitted email is set as `replyTo`, not as the sender.

The form still exposes a **`mailto:`** link as a deliberate fallback for visitors who prefer their own mail client.

See `CONTACT_SETUP.md` for full Resend and Vercel setup steps.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

The default dev script must stay Webpack-based:

```json
"dev": "next dev --webpack",
"build": "next build --webpack",
"dev:turbo": "next dev --turbo",
"clean": "rm -rf .next"
```

If the browser ever gets stuck on a flashing or never-ending loading screen, stop the server and clear the cache:

```bash
npm run clean
npm run dev
```

Before pushing changes:

```bash
npm run clean
npm run lint
npm run build
```

## How to Update Website Content

Most updates should happen in `src/data` or `public`. Avoid editing page components unless you are changing layout or behavior.

### Official Links

Edit `src/data/siteConfig.ts`:

- `contact.email` controls email links.
- `externalLinks.linkedin` controls the official LinkedIn URL.
- `externalLinks.instagram` controls the official Instagram URL.
- `externalLinks.applyNow` controls Apply Now buttons.
- `externalLinks.clientInquiry` controls client inquiry links if you create a form.
- `externalLinks.memberPortal` should stay `/portal`.

Current official contact settings:

- Email: `RSO.Limitless@msu.edu`
- LinkedIn: `https://www.linkedin.com/company/limitless-club-at-michigan-state-university/posts/?feedView=all`
- Instagram: `https://www.instagram.com/limitlessclubmsu/`

### Homepage and Page Copy

Edit `src/data/siteCopy.ts` for major text blocks:

- Homepage hero and Who We Are copy
- About page mission, vision, values, and development copy
- Services intro and process copy
- Engagements intro and public company showcase copy
- Join page recruiting copy
- Contact page copy

### Homepage Stats

Edit `src/data/stats.ts`. Keep placeholder numbers marked until verified.

### Services

Edit `src/data/services.ts`. The homepage preview and Services page use the same source.

The public service menu is intentionally limited to four core services:

- Market Research
- Go-To-Market Strategy
- Business Model Development
- Financial Modeling

Other programming, such as Townhalls, Thursday Workshops, collaboration events, and pitch/case-style learning sessions, lives in `src/data/limitlessModel.ts`.

Each service includes:

- `title`
- `shortDescription`
- `longDescription`
- `exampleDeliverables`
- `icon`

### Clients and Engagements

Homepage client highlights and the simplified Engagements page both use `src/data/clients.ts`. The public website intentionally shows company identity, broad category, and public-safe context rather than private consulting scopes.

Use `src/data/clients.ts` for client/company cards:

- `name`
- `category`
- `websiteUrl`
- `primaryLinkLabel`
- `linkedInUrl`
- `logoSrc`
- `logoAlt`
- `shortDescription`
- `publicHighlights`
- `publishStatus`
- `needsReview`

Rules:

- Use public names only when the client/startup has appeared in a public Limitless post or an official public source.
- Keep descriptions conservative.
- Do not publish private recommendations, decks, metrics, or outcomes without client approval.
- Set `publishStatus: "review"` or `needsReview: true` for anything still under review.
- Use `CLIENT_RESEARCH.md` to track source links, confidence, and publication safety.

For the homepage, do not describe private project work. Use wording like:

```txt
Select organizations connected to our consulting work.
```

Avoid wording that implies Limitless caused public milestones, fundraising, competition results, or retail growth.

### Client Logos

Client logos live in `public/images/clients`. Current client logos:

- `brce-logo.png`
- `zolli-candy-logo.png`
- `cocomar-logo.png`
- `dawn-coldbridge-logo.png`
- `powerly-logo.png`
- `necessities-logo.png` (stored for review; not displayed until approved)
- `guideily-logo.png` (stored for review; not displayed until approved)

To replace or add a logo:

1. Add the image to `public/images/clients`.
2. Use a lowercase hyphenated filename such as `brce-logo.png`.
3. Add the path in `src/data/clients.ts`:

```ts
logoSrc: "/images/clients/brce-logo.png",
logoAlt: "BRCĒ logo"
```

Use logos only when the board has permission or the asset is publicly appropriate. If permission or quality is unclear, leave `logoSrc` empty and the site will use a clean text fallback.

### FAQs

Edit `src/data/faqs.ts`.

### Team Members

Edit `src/data/team.ts`.

Each member can include:

- `name`
- `role`
- `major`
- `year`
- `bio`
- `image`
- `imagePosition`
- `linkedin`
- `email`
- `category`
- `order`

Executive Board members appear first when `category: "Executive Board"` and lower `order` values are used.

The public Team page currently displays only:

- `category: "Executive Board"`
- `category: "Project Manager"`

Consultants and general members can stay in `src/data/team.ts` for internal recordkeeping, but they are not rendered publicly unless the Team page logic changes.

### Team Majors, Bios, and LinkedIn Review

Majors and bios also live in `src/data/team.ts`.

Rules:

- Keep bios to one or two sentences.
- Do not invent majors, internships, awards, or leadership claims.
- If a LinkedIn match is uncertain, leave `linkedin: ""` and set `needsLinkedInReview: true`.
- If a major is not verified through the roster, member confirmation, or a public source, leave `major` blank.
- Use `TEAM_REVIEW.md` to track source links, confidence, and missing information.

### Headshots and Framing

Put team images in `public/images/team` and use lowercase hyphenated filenames:

```txt
first-last.jpg
```

In `src/data/team.ts`, point the member to:

```ts
image: "/images/team/first-last.jpg"
```

The Team card uses a consistent portrait crop. If one image needs manual adjustment, add:

```ts
imagePosition: "50% 24%"
```

This value maps to CSS `object-position`. The first number is horizontal position; the second controls vertical framing.

Temporary or replacement headshots can be dropped into `assets-to-import/Limitless Headshots` first. Match the file to the member by full name, copy the approved image into `public/images/team`, rename it to lowercase hyphenated format, and then update `image` in `src/data/team.ts`.

### Team Photos

Approved group/event photos live in `public/images/team-photos` and are configured in `src/data/teamPhotos.ts`.

Use these photos for:

- Homepage hero slideshow through `src/data/hero.ts`
- The Limitless Model carousel
- About page collage
- Join page student experience collage

To add a new team photo:

1. Put the raw image in `assets-to-import/team-photos`.
2. Export or copy an optimized version into `public/images/team-photos`.
3. Use a lowercase hyphenated filename.
4. Add alt text and optional `objectPosition` in `src/data/teamPhotos.ts` or `src/data/hero.ts`.

Recommended size: around `1400-1800px` on the long edge, compressed enough to stay under roughly `700KB` when possible.

The hero slideshow order is deterministic. Keep `team-group-photo` first in `src/data/hero.ts` if that should remain the first image visitors see on fresh page load.

### Limitless Model Content

The "How Limitless Works" / "Limitless Model" content lives in `src/data/limitlessModel.ts`.

Edit this file when the organization changes how Townhalls, Workshops, collaboration events, or training sessions are described. Keep the copy concrete and specific to Limitless.

### Media / Content Page

The `/media` page uses the `SocialUpdateShowcase` carousel powered by `src/data/socialUpdates.ts`. The homepage may surface media elsewhere over time (for example linking to `/media`) while keeping pacing tight.

This is a manually curated thumbnail carousel, not a live LinkedIn or Instagram feed. To update it:

1. Add the official LinkedIn post URL in `linkedInUrl`.
2. Write a short `title`, `eyebrow`, and `caption`.
3. Add a thumbnail image to `public/images/media` and reference it with `thumbnailSrc`.
4. Keep `featured: true` only for clips you want prioritized in carousel selections (see carousel usage).
5. Do not download or autoplay LinkedIn videos unless the board owns the original video asset and has permission to host it.

If you later add direct video files, place approved files in `public/videos/media`, set `videoSrc` in `src/data/socialUpdates.ts`, keep playback muted and `playsInline`, and provide a static thumbnail for reduced-motion users. Without a local `videoSrc`, the carousel uses thumbnails and links visitors to the official LinkedIn post.

### Member Portal Resources

Portal content lives in `src/data/portal.ts`.

Use it to update:

- Announcements
- Upcoming meetings
- Important links
- Files / resources
- Meeting materials
- Consulting toolkit
- Templates
- Training resources
- Internal docs
- Semester timeline

Actual shared folder/resource URLs live in `src/data/siteConfig.ts` under `externalLinks`, including:

- `googleDriveFolder`
- `scheduling`
- `memberHandbook`
- `consultingToolkit`
- `caseInterviewResources`
- `slideDeckTemplates`
- `financialModelTemplates`
- `projectTimeline`
- `clientDeliverablesFolder`
- `executiveBoardWorkspace`

Do not paste private keys or secret tokens into data files.

### Social Media Links and Icons

Official social URLs live in `src/data/siteConfig.ts`:

- `externalLinks.linkedin`
- `externalLinks.instagram`
- `contact.email`

The site currently uses lucide icon components through `src/components/common/social-links.tsx`. Raw social logo files in `assets-to-import` are not used unless they are clearly approved and license-safe. If you later use custom social logo files, place optimized versions in `public/images/social` and update the social component.

## Member Portal Password

The portal uses a server-side shared password:

1. A member visits `/portal`.
2. They enter the current semester password.
3. The server compares it with `MEMBER_PORTAL_PASSWORD`.
4. If correct, the server sets an httpOnly cookie.
5. The member can view resources until the cookie expires or they click Log Out.

To rotate the password each semester:

1. Update `MEMBER_PORTAL_PASSWORD` in Vercel Project Settings.
2. Update local `.env.local` if testing locally.
3. Redeploy or restart the dev server.
4. Share the new password with current members through an internal channel.

Recommended local test:

```bash
MEMBER_PORTAL_PASSWORD=test-password npm run dev
```

Then visit `/portal`, enter `test-password`, confirm the dashboard loads, and test Log Out.

## Brand Assets

Final brand assets used by the website live in `public/brand`:

- `limitless-logo.svg`
- `limitless-logo.jpeg`
- `limitless-white-on-green.png`
- `limitless-app-icon.png`
- `apple-touch-icon.png`
- `motion/limitless-animation-02.mp4`

The navbar and footer use `siteConfig.brand.logoPath`, with a JPEG and simple text fallback.

The production SVG logo uses a compound path with `fill-rule="evenodd"` / `clip-rule="evenodd"` so the inner infinity holes are transparent cutouts. Do not add separate white circles or white paths to fake the negative space, because those will show up as light blobs on dark, image, or transparent backgrounds.

Logo motion is used subtly in the final CTA. It is muted, looped, inline, and hidden for reduced-motion users through CSS.

The browser tab and app icons live in:

- `src/app/favicon.ico`
- `src/app/icon.png`
- `src/app/apple-icon.png`

To replace the favicon/browser-tab icon, export a square Limitless mark that remains readable at small size, replace those three files, and confirm `src/app/layout.tsx` still references them in `metadata.icons`.

To replace logo assets:

1. Put raw exports in `assets-to-import/logo` or `assets-to-import/logo-motion`.
2. Copy approved, web-ready files into `public/brand`.
3. Update paths in `src/data/siteConfig.ts`.
4. Compress large PNG/video files before committing.

Subtle brand treatments use the same logo files as low-opacity decorative marks in the homepage hero, homepage client showcase, Engagements hero, and final CTA. Keep these accents restrained so they support the content rather than competing with it.

To replace the motion animation:

1. Export the new animation as a small MP4, ideally with no audio.
2. Put the raw file in `assets-to-import/logo-motion`.
3. Copy the production file into `public/brand/motion` with a lowercase hyphenated filename.
4. Update `siteConfig.brand.motionPath`.
5. Keep a static fallback image in `siteConfig.brand.motionPosterPath`.
6. Run `npm run lint` and `npm run build`.

## Asset Organization Guide

Recommended folders:

- `assets-to-import`: temporary local drop zone for raw files.
- `public/brand`: approved logo and motion assets.
- `public/brand/motion`: approved MP4 animation files.
- `public/images/hero`: group photos for the homepage slideshow.
- `public/images/team-photos`: approved group, Townhall, Workshop, and event photos used across pages.
- `public/images/board`: optional board-specific photos.
- `public/images/team`: standardized team headshots.
- `public/images/clients`: approved client/case study visuals only.
- `public/images/media`: curated thumbnails for the Media page and homepage media carousel.
- `public/videos/media`: optional approved local video files for posts the board has permission to host.
- `public/images/social`: optional custom social media logo assets.

Asset rules:

- Use lowercase file names.
- Use hyphens instead of spaces.
- Avoid special characters.
- Recommended headshot size: around `800x1000px` or `1200x1200px`.
- Recommended hero image size: around `1800x1200px`.
- Keep headshots ideally under `400KB` and hero images under `800KB`.
- Use Squoosh, TinyPNG, ImageOptim, or export settings to compress images.
- If an image does not show up, confirm the file exists in `public`, the path starts with `/`, and the extension matches exactly.

`assets-to-import` is ignored by Git because it can contain raw rosters, client notes, and oversized originals. Commit only approved files copied into `public`.

## Deployment on Vercel

1. Push changes to GitHub.
2. Vercel redeploys automatically from the connected branch.
3. Add or update environment variables in **Vercel > Project Settings > Environment Variables**.
4. Confirm production `/portal` has `MEMBER_PORTAL_PASSWORD` configured.

Useful commands:

```bash
npm run clean
npm run lint
npm run build
git status
git add .
git commit -m "Update client showcase and brand polish"
git push
npm install -g vercel
vercel login
vercel
vercel --prod
```

Vercel should use the connected GitHub repository for normal deployments. The `vercel` CLI commands are optional if you need to manage deployments manually.

## Domain and Email

Good domain options:

- `limitlessconsulting.org`
- `limitlessconsultingmsu.org`
- `limitlessmsu.com`
- `limitlessconsulting.co`
- `limitlessconsultinggroup.org`
- `lc-msu.org`

Cheap registrar options to compare:

- Namecheap
- Cloudflare Registrar
- Porkbun

Professional email options later:

- Keep `RSO.Limitless@msu.edu` for launch.
- Use Cloudflare Email Routing or ImprovMX for forwarding.
- Upgrade to Google Workspace, Microsoft 365, or Zoho Mail if the org needs shared mailboxes.

## Expected Recurring Costs

- Vercel Hobby: usually $0 within small-site limits.
- Domain: often roughly $10-$25/year depending on TLD and registrar.
- Professional email: often $0 for forwarding or a few dollars per mailbox/month.

Accounts to maintain:

- GitHub
- Vercel
- Domain registrar
- Optional email provider

## Reference Links

- Official LinkedIn: https://www.linkedin.com/company/limitless-club-at-michigan-state-university/posts/?feedView=all
- Official Instagram: https://www.instagram.com/limitlessclubmsu/
- Inspiration only: https://www.180dcmichstate.com/
- Inspiration only: https://www.spectconsulting.com/
- Vercel Domains: https://vercel.com/docs/domains
- Vercel Environment Variables: https://vercel.com/docs/environment-variables
