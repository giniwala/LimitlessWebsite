import type { Metadata } from "next";
import { SocialUpdateShowcase } from "@/components/sections/social-update-showcase";
import { siteConfig } from "@/data/siteConfig";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Explore curated public LinkedIn updates, Townhall recaps, and content from Limitless Consulting at Michigan State University.",
};

export default function MediaPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase text-brand-soft">Media</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.media.pageTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.media.pageDescription}
          </p>
          <a
            href={siteConfig.externalLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-md border border-white/30 bg-white px-4 py-2 text-sm font-semibold text-brand-deep transition-colors hover:bg-brand-soft"
          >
            Follow on LinkedIn
          </a>
        </div>
      </section>

      <SocialUpdateShowcase fullPage />
    </>
  );
}
