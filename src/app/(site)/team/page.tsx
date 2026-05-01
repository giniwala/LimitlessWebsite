import type { Metadata } from "next";
import { SectionHeader } from "@/components/common/section-header";
import { TeamCard } from "@/components/team-card";
import { boardMembers, projectManagers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the elected board and student consultants behind Limitless Consulting at Michigan State University.",
};

export default function TeamPage() {
  return (
    <>
      <section className="page-hero page-hero-soft-bottom grain text-white">
        <div className="container-page relative z-10">
          <p className="text-sm font-semibold uppercase text-brand-soft">Team</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            The students leading Townhalls, Workshops, and project teams.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Meet the executive board and project managers shaping founder support, recruiting, operations, content, and member development at Limitless.
          </p>
        </div>
      </section>

      <section className="section-light py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Executive Board"
            title="Organization leadership"
            description="Executive board members guiding Townhalls, Workshops, recruiting, operations, and founder support."
          />
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {boardMembers.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-soft py-14 md:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Project Managers"
            title="Engagement team leads"
            description="Project managers run workshop support, client-facing project work, and weekly execution."
          />
          <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-2 lg:grid-cols-3">
            {projectManagers.map((person) => (
              <TeamCard key={person.name} person={person} />
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
