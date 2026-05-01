import type { Metadata } from "next";
import { ClientHighlightCard } from "@/components/client-highlight-card";
import { CTA } from "@/components/common/cta";
import { SectionHeader } from "@/components/common/section-header";
import { siteConfig } from "@/data/siteConfig";
import { publishedClientHighlights } from "@/data/clients";
import { siteCopy } from "@/data/siteCopy";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Explore selected public organizations connected to Limitless Consulting work.",
};

export default function EngagementsPage() {
  return (
    <>
      <section className="page-hero page-hero-soft-bottom grain text-white">
        <div className="pointer-events-none absolute right-[-4rem] top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={siteConfig.brand.logoPath}
            alt=""
            className="h-auto w-[22rem] max-w-none object-contain opacity-[0.08] mix-blend-screen [mask-image:linear-gradient(180deg,black_0%,black_70%,transparent_100%)]"
          />
        </div>
        <div className="container-page relative z-10">
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.engagements.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.engagements.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.engagements.description}
          </p>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Past companies"
            title={siteCopy.engagements.sectionTitle}
            description={siteCopy.engagements.sectionDescription}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {publishedClientHighlights.map((client) => (
              <ClientHighlightCard key={client.name} client={client} />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
