import type { Metadata } from "next";
import Image from "next/image";
import { ClientHighlightCard } from "@/components/client-highlight-card";
import { CTA } from "@/components/common/cta";
import { SectionHeader } from "@/components/common/section-header";
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
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page relative overflow-hidden">
          <div className="pointer-events-none absolute -right-16 top-0 hidden size-72 opacity-[0.08] mix-blend-screen lg:block">
            <Image
              src="/brand/limitless-logo.svg"
              alt=""
              fill
              sizes="288px"
              className="object-contain"
            />
          </div>
          <p className="text-sm font-semibold uppercase text-brand-soft">{siteCopy.engagements.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            {siteCopy.engagements.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            {siteCopy.engagements.description}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Past companies"
            title={siteCopy.engagements.sectionTitle}
            description={siteCopy.engagements.sectionDescription}
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {publishedClientHighlights.map((client) => (
              <ClientHighlightCard key={client.name} client={client} showHighlights={false} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <SectionHeader
            eyebrow="Client privacy"
            title={siteCopy.engagements.confidentialityTitle}
            description={siteCopy.engagements.confidentialityDescription}
          />
          <div className="rounded-lg border border-border bg-surface p-6 shadow-subtle">
            <p className="text-sm leading-7 text-muted">
              {siteCopy.engagements.confidentialityNote}
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
