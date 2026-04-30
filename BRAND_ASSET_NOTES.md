# Brand Asset Notes

Approved website brand files live in `public/brand`.

## Current Files

- `public/brand/limitless-logo.svg`: primary crisp logo mark.
- `public/brand/limitless-logo.jpeg`: fallback logo image.
- `public/brand/limitless-white-on-green.png`: static fallback/poster for motion.
- `public/brand/limitless-motion.mp4`: subtle infinity logo motion used in the CTA.

## Raw Import Sources

- `assets-to-import/logo/logo-green.svg`
- `assets-to-import/logo/limitless-white-on-green.png`
- `assets-to-import/logo-motion/animation-01.mp4`

`assets-to-import` is ignored by Git. Copy only approved, web-ready assets into `public`.

## Usage Guidance

- Use SVG for navigation, footer, and crisp decorative marks.
- Use MP4 only in limited, low-distraction placements.
- Keep video muted, looped, inline, and paired with a static poster.
- Respect reduced-motion preferences.
- Avoid placing motion behind important text.
- Compress large PNGs/videos before committing when possible.

## Updating Paths

Edit `src/data/siteConfig.ts`:

```ts
brand: {
  logoPath: "/brand/limitless-logo.svg",
  logoFallbackPath: "/brand/limitless-logo.jpeg",
  motionPath: "/brand/limitless-motion.mp4",
  motionPosterPath: "/brand/limitless-white-on-green.png",
}
```
