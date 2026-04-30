# Brand Asset Notes

Approved website brand files live in `public/brand`.

## Current Files

- `public/brand/limitless-logo.svg`: primary crisp logo mark.
- `public/brand/limitless-mark.svg`: same primary mark used by metadata and decorative treatments.
- `public/brand/limitless-logo.jpeg`: fallback logo image.
- `public/brand/limitless-white-on-green.png`: static fallback/poster for motion.
- `public/brand/limitless-app-icon.png`: high-resolution app icon source.
- `public/brand/apple-touch-icon.png`: exported touch icon reference.
- `src/app/favicon.ico`, `src/app/icon.png`, and `src/app/apple-icon.png`: Next.js browser-tab and app icon files.
- `public/brand/motion/limitless-animation-02.mp4`: current subtle infinity logo motion used in the CTA.
- `public/brand/limitless-motion.mp4`: older imported motion file kept for reference unless you choose to remove it later.

## Raw Import Sources

- `assets-to-import/logo/logo-green.svg`
- `assets-to-import/logo/limitless-white-on-green.png`
- `assets-to-import/logo-motion/animation-02.mp4`

`assets-to-import` is ignored by Git. Copy only approved, web-ready assets into `public`.

## Usage Guidance

- Use SVG for navigation, footer, and crisp decorative marks.
- Use low-opacity SVG marks as subtle watermarks in high-impact sections only.
- Use MP4 only in limited, low-distraction placements.
- Keep video muted, looped, inline, and paired with a static poster.
- Respect reduced-motion preferences.
- Avoid placing motion behind important text.
- Compress large PNGs/videos before committing when possible.

## Current Brand Moments

- Navbar and footer use the real Limitless logo through `BrandLogo`.
- The homepage hero uses a low-opacity logo watermark behind the content.
- The homepage client showcase uses a subtle oversized logo motif.
- The Engagements hero uses a quiet logo watermark.
- The final CTA uses the `animation-02` motion asset with a static fallback.
- Browser tabs and app icons use the Limitless logo rather than the old “LC” mark.

## Replacing The Browser Tab Icon

1. Create a square logo image that stays readable at small sizes.
2. Export `src/app/favicon.ico`, `src/app/icon.png`, and `src/app/apple-icon.png`.
3. Keep optional reference copies in `public/brand`.
4. Confirm `src/app/layout.tsx` metadata points to the new files.
5. Run `npm run clean`, `npm run lint`, and `npm run build`.

## Updating Paths

Edit `src/data/siteConfig.ts`:

```ts
brand: {
  logoPath: "/brand/limitless-logo.svg",
  logoFallbackPath: "/brand/limitless-logo.jpeg",
  motionPath: "/brand/motion/limitless-animation-02.mp4",
  motionPosterPath: "/brand/limitless-white-on-green.png",
}
```

## Replacing the Motion File

1. Export the approved animation as an MP4 with no audio if possible.
2. Put the raw export in `assets-to-import/logo-motion`.
3. Copy the web-ready file into `public/brand/motion` with a lowercase hyphenated name.
4. Update `siteConfig.brand.motionPath`.
5. Keep `motionPosterPath` set to a static image so reduced-motion users and slow connections have a clean fallback.
