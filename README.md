# Limitless Consulting Website

A polished, responsive website for Limitless Consulting, a student consulting organization at Michigan State University. The site is built for prospective applicants, student founders, clients, alumni, and members who need access to a private portal.

## Recommended Stack

- **Next.js App Router + TypeScript**: modern React framework, production-ready routing, metadata, server components, and easy Vercel deployment.
- **Tailwind CSS**: fast styling with a small learning curve and responsive utilities.
- **Supabase Auth**: inexpensive auth path for the member portal, with room to add a database and storage later.
- **Local typed data files first**: team, services, FAQs, case studies, and portal placeholder content live in `src/data`, so the site can launch before a CMS or database exists.
- **Vercel hosting**: straightforward GitHub-based deployments and free-tier friendly for a student organization.

I chose Supabase over Clerk for this starter because Supabase can later handle auth, database tables, storage, and row-level security in one platform. Clerk is also excellent for polished auth UI, but Supabase is simpler if the portal eventually needs resources, announcements, and member tables.

## Architecture

- Public pages use the `(site)` route group and share `Navbar` and `Footer`.
- Auth uses the `(auth)` route group at `/login`.
- The member portal uses the `(portal)` route group at `/portal`.
- `src/proxy.ts` protects `/portal` and redirects unauthenticated users to `/login`.
- Supabase helpers are isolated in `src/lib/supabase`.
- Reusable UI components live in `src/components`.
- Editable content lives in `src/data` with TypeScript types in `src/types/content.ts`.

## Sitemap

- `/` Home
- `/about`
- `/team`
- `/services`
- `/engagements`
- `/join`
- `/faq`
- `/contact`
- `/login`
- `/portal` protected member dashboard

## Folder Structure

```txt
src/
  app/
    (auth)/login/
    (portal)/portal/
    (site)/about/
    (site)/contact/
    (site)/engagements/
    (site)/faq/
    (site)/join/
    (site)/services/
    (site)/team/
    globals.css
    layout.tsx
    loading.tsx
    error.tsx
    not-found.tsx
    opengraph-image.tsx
  components/
    common/
    layout/
    portal/
    sections/
  data/
  lib/supabase/
  types/
  utils/
public/
  brand/
  images/
    hero/
    board/
    team/
    clients/
assets-to-import/
```

## Data Model

Editable content is intentionally simple:

- `src/data/siteConfig.ts`: organization name, logo path, email, CTA links, socials, shared external links, nav.
- `src/data/siteCopy.ts`: major website text blocks for homepage, about, join, services, engagements, and contact.
- `src/data/hero.ts`: homepage slideshow image list and fallback image.
- `src/data/stats.ts`: homepage statistics.
- `src/data/team.ts`: board and consultant cards.
- `src/data/services.ts`: service categories and deliverables.
- `src/data/engagements.ts`: placeholder or approved client engagement cards.
- `src/data/faqs.ts`: FAQ categories and answers.
- `src/data/portal.ts`: announcements, events, resources, role visibility.

Roles supported now:

- `member`
- `project-manager`
- `admin`

The portal checks `user.app_metadata.role` first, then `user.user_metadata.role`. For a production portal with sensitive files, move roles into a dedicated Supabase `profiles` table or locked app metadata plus Row Level Security.

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Required for real portal login:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The public site runs without Supabase. `/portal` redirects to `/login?setup=required` until these variables are configured. The current portal is a Supabase-ready starter: it has a login page, protected `/portal` route, role-aware placeholder content, and editable portal resources in `src/data/portal.ts`, but it does not require Supabase for public pages.

## Local Development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

This project intentionally uses Next's Webpack dev server for local development:

```json
"dev": "next dev --webpack"
```

Next.js 16 uses Turbopack by default, but Turbopack can currently panic on some local setups after folder moves, cache changes, or package resolution edge cases. If you want to try Turbopack later, run:

```bash
npm run dev:turbo
```

If the browser ever gets stuck on a never-ending loading screen, stop the server with `Ctrl+C`, clear the generated cache, and restart:

```bash
npm run clean
npm run dev
```

Open:

```txt
http://localhost:3000
```

Check quality:

```bash
npm run lint
npm run build
```

## Supabase Auth Setup

1. Create a Supabase account and project.
2. In Supabase, go to **Project Settings > API**.
3. Copy the project URL and anon public key into `.env.local`.
4. Go to **Authentication > Providers** and enable Email.
5. Go to **Authentication > URL Configuration**.
6. Add local and production redirect URLs:

```txt
http://localhost:3000/portal
https://your-domain.com/portal
```

7. Add members under **Authentication > Users**.
8. Add role metadata for each member.

Example metadata:

```json
{
  "full_name": "Avery Chen",
  "role": "admin"
}
```

For a stricter production setup, disable open signups and invite users manually.

## Content and Assets to Gather

- Final logo or wordmark.
- Official color preferences, if different from the starter palette.
- Elected board names, roles, majors, years, bios, headshots, LinkedIn URLs.
- Consultant/member roster, if you want it public.
- Confirmed founding story, mission, vision, and values.
- Final application Google Form URL.
- Recruiting dates, info session times, and interview process.
- Client intake form or final contact workflow.
- Approved case studies with client permission.
- Testimonials from alumni, clients, or founders.
- Official Instagram and LinkedIn links.
- Final organization email.
- Member handbook, templates, resource folders, and project schedule links.

## Starter Color Palette

- Deep green: `#184D3A`
- Dark green: `#0D2F25`
- Soft mint: `#D9F0E4`
- Teal accent: `#1F7A8C`
- Warm accent: `#C8782B`
- Background: `#F7FAF8`
- Text: `#10231D`

This is intentionally MSU-adjacent without depending on official university branding.

## Deployment on Vercel

1. Create a GitHub repository.
2. Push this project to GitHub.
3. Create a Vercel account.
4. In Vercel, choose **Add New Project** and import the GitHub repo.
5. Framework should auto-detect as Next.js.
6. Add environment variables in **Project Settings > Environment Variables**.
7. Deploy.

Useful commands:

```bash
npm run build
npm install -g vercel
vercel login
vercel
vercel --prod
```

Vercel gives every project a free `vercel.app` URL. Add a real domain later in **Project Settings > Domains**.

## Domain Guide

Good domain options:

- `limitlessconsulting.org`
- `limitlessconsultingmsu.org`
- `limitlessmsu.com`
- `limitlessconsulting.co`
- `limitlessconsultinggroup.org`
- `lc-msu.org`

Domain selection tips:

- Prefer short, readable, easy-to-say names.
- Use `.org` if you want a student organization feel.
- Use `msu` in the domain if the generic name is unavailable.
- Avoid hyphens unless the clean version is taken.
- Check that the same handle is available on Instagram and LinkedIn.

Cheap registrar options to compare:

- Namecheap
- Cloudflare Registrar
- Porkbun
- Google Domains is no longer the default option; many domains moved under Squarespace.

After buying a domain:

1. In Vercel, open the project.
2. Go to **Settings > Domains**.
3. Add your domain.
4. Follow the DNS records Vercel gives you.
5. For an apex/root domain, Vercel commonly asks for an `A` record.
6. For `www`, Vercel commonly asks for a `CNAME`.
7. Wait for DNS propagation and SSL.

## Professional Email

Later options for `hello@yourdomain.com`:

- Google Workspace
- Microsoft 365
- Zoho Mail
- ImprovMX or Cloudflare Email Routing for forwarding only

For the cheapest launch, keep `limitlessconsulting@msu.edu` or use email forwarding first. Upgrade to a paid mailbox when the organization needs shared inboxes, aliases, or admin control.

## Expected Recurring Costs

Pricing changes, so check current provider pages before purchasing.

- Vercel Hobby: usually $0 for small personal/non-commercial projects within limits.
- Supabase Free: usually $0 for a small portal prototype within limits.
- Domain: often roughly $10-$25/year depending on TLD and registrar.
- Professional email: often $0 for forwarding or a few dollars per mailbox/month for hosted email.

Accounts to create:

- GitHub
- Vercel
- Supabase
- Domain registrar
- Optional email provider

## How to Update Website Content

Most website updates should happen in `src/data` or `public/images`. Avoid editing page components unless you are changing layout or behavior.

1. Replace the logo

   - Put the final logo at `public/brand/limitless-logo.jpeg`.
   - The navbar and footer read the path from `src/data/siteConfig.ts`.
   - Keep the image square or close to square when possible. The component uses `object-contain`, so it will not stretch the logo.
   - If the image is missing or cannot load, the site falls back to the `LC` initials from `siteConfig.brand.fallbackInitials`.

2. Add group photos to the homepage slideshow

   - Put approved photos in `public/images/hero`.
   - Use names like `spring-2026-board.jpg` or `startup-showcase-night.jpg`.
   - Add each image to `src/data/hero.ts` in `heroImages`.
   - The homepage rotates images every 6 seconds with a fade. If `heroImages` is empty, it uses the existing fallback visual.

3. Add or replace headshots

   - Put headshots in `public/images/team`.
   - Use lowercase, hyphenated file names: `first-last.jpg`.
   - In `src/data/team.ts`, set `image: "/images/team/first-last.jpg"`.
   - If a member has no image, leave `image` blank and set `needsImageReview: true`; the card will show an initials fallback.

4. Update board/member names and roles

   - Edit `src/data/team.ts`.
   - Executive Board members should use `category: "Executive Board"` and lower `order` values so they appear first.
   - Do not invent majors, years, or bios. Add them only after the board approves public profile copy.

5. Update LinkedIn links

   - Edit `linkedin` in `src/data/team.ts` only when you are confident the profile is correct.
   - Use `LINKEDIN_REVIEW.md` to track uncertain matches.
   - For uncertain profiles, keep `linkedin: ""` and set `needsLinkedInReview: true`.

6. Update Apply Now and other external links

   - Edit `src/data/siteConfig.ts`.
   - `externalLinks.applyNow` controls Apply Now buttons.
   - `externalLinks.clientInquiry` controls client inquiry CTAs.
   - `externalLinks.instagram`, `externalLinks.linkedin`, and `contact.email` control socials and contact links.
   - Portal resource URLs such as handbook, toolkit, deck templates, financial model templates, timelines, and Drive folders also live in `externalLinks`.

7. Update homepage stats

   - Edit `src/data/stats.ts`.
   - Replace placeholder numbers only after they are verified.

8. Update homepage/about/join/services/contact copy

   - Edit `src/data/siteCopy.ts`.
   - This file controls major text blocks, section intros, values, recruitment timeline text, and contact page copy.

9. Update services

   - Edit `src/data/services.ts`.
   - The homepage preview and Services page use the same data source.
   - Each service has a title, short description, long description, deliverables, and icon key.

10. Update engagements/case studies

   - Edit `src/data/engagements.ts`.
   - Use anonymous titles unless the client/startup has approved publication.
   - Set `isPublic: false` for anything that should not show on the site yet.

11. Update FAQs

   - Edit `src/data/faqs.ts`.
   - Keep answers specific enough to be useful, but avoid policies the board has not approved yet.

12. Update portal resources

   - Edit resource labels, descriptions, dates, and role visibility in `src/data/portal.ts`.
   - Edit actual shared links in `src/data/siteConfig.ts` under `externalLinks`.
   - Keep private Drive folders permissioned. Do not paste private keys or secret tokens into data files.

13. Test the website locally

   ```bash
   npm install
   npm run clean
   npm run dev
   ```

   The terminal should show `Next.js ... (webpack)`. Open `http://localhost:3000` and check `/`, `/about`, `/team`, `/services`, `/engagements`, `/join`, `/faq`, `/contact`, `/login`, and `/portal`.

   Before pushing changes:

   ```bash
   npm run lint
   npm run build
   ```

14. Deploy to Vercel

   - Push changes to GitHub.
   - Import the repo in Vercel.
   - Add Supabase environment variables only when the member portal is ready for real login.
   - Vercel redeploys automatically after pushes to the connected production branch.

## Asset Organization Guide

Recommended folders:

- `assets-to-import`: temporary drop zone for raw files before standardizing names.
- `public/brand`: final logo/brand files used by the live website.
- `public/images/hero`: group photos for the homepage slideshow.
- `public/images/board`: optional board-specific photos.
- `public/images/team`: standardized headshots used by Team cards.
- `public/images/clients`: approved client or case study visuals only.

Asset rules:

- Use lowercase file names.
- Use hyphens instead of spaces.
- Use descriptive names, such as `adi-giniwala.jpg` or `spring-2026-info-session.jpg`.
- Avoid special characters in file names.
- Recommended logo size: at least `400x400px` if square.
- Recommended headshot size: around `800x1000px` or `1200x1200px`; keep files ideally under `400KB` after compression.
- Recommended hero image size: around `1800x1200px`; keep files ideally under `800KB`.
- Use tools like Squoosh, TinyPNG, ImageOptim, or Photoshop export settings to compress large images.
- If an image does not show up, confirm the file exists in `public`, the path starts with `/`, the extension matches exactly, and the filename matches the value in the data file.
- To match spreadsheet names with headshots, use `First Last` from the roster and name the image `first-last.jpg`.
- `assets-to-import` is ignored by Git because it can contain raw rosters, emails, client notes, and oversized originals. Commit only approved files copied into `public`.

Imported assets in this project:

- Logo copied from `assets-to-import/limitless log.jpeg` to `public/brand/limitless-logo.jpeg`.
- Headshots copied from `assets-to-import/Limitless Headshots` to `public/images/team` with lowercase hyphenated names.

## Build Plan by Phase

### Phase 1: Planning

- Stack selected: Next.js, TypeScript, Tailwind, Supabase Auth, Vercel.
- Sitemap and architecture defined above.
- Editable content model created under `src/data`.
- Required accounts and env vars documented.

### Phase 2: Initial Build

- Next.js app scaffolded.
- Reusable components built: Navbar, Footer, Hero, SectionHeader, CTA, TeamCard, ServiceCard, CaseStudyCard, FAQAccordion, StatCard, PortalLayout, ResourceCard.
- Public pages built.
- Portal UI built with placeholder member content.

### Phase 3: Authentication

- Supabase Auth packages installed.
- Middleware protects `/portal`.
- Login page supports password login and magic links when Supabase env vars are configured.
- Role-aware placeholder logic is included.

### Phase 4: Deployment

- README includes Vercel, domain, environment, and maintenance instructions.
- Project is ready to push to GitHub and import into Vercel.

### Phase 5: Polish

- SEO metadata, Open Graph image, favicon placeholder, loading state, error state, and 404 are included.
- Responsive layouts are built for mobile, tablet, and desktop.
- Run lint/build and do a browser pass before launch.

## Reference and Documentation Links

- Inspiration only: [180 Degrees Consulting MSU](https://www.180dcmichstate.com/)
- Inspiration only: [Spectrum Consulting Group](https://www.spectconsulting.com/)
- [Vercel Hobby Plan](https://vercel.com/docs/accounts/plans/hobby)
- [Vercel Custom Domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [Vercel Environment Variables](https://vercel.com/docs/environment-variables)
- [Supabase Auth](https://supabase.com/docs/guides/auth)
- [Supabase User Metadata](https://supabase.com/docs/guides/auth/managing-user-data)
