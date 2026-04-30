import type { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common applicant, member experience, client service, and general questions.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-brand-deep py-20 text-white">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase text-brand-soft">FAQ</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            Questions from applicants, founders, clients, and campus partners.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            These answers are editable placeholders. Confirm policies before launch.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Answers"
            title="Editable FAQ library"
            description="FAQs are grouped by category and powered by a single data file."
          />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
