import { iconMap } from "@/components/common/icon-map";
import { SectionHeader } from "@/components/common/section-header";
import { PhotoCarousel } from "@/components/sections/photo-carousel";
import { limitlessModelSteps } from "@/data/limitlessModel";
import { homepageTeamPhotos } from "@/data/teamPhotos";

type LimitlessModelProps = {
  compact?: boolean;
};

export function LimitlessModel({ compact = false }: LimitlessModelProps) {
  const steps = compact ? limitlessModelSteps.slice(0, 4) : limitlessModelSteps;

  return (
    <section className={compact ? "py-20" : "section-dark grain relative py-14 md:py-20"}>
      <div className="container-page relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
          <div>
            <SectionHeader
              eyebrow="The Limitless model"
              title="From founder questions to structured student strategy."
              description="Townhalls keep pitches public and concrete. Workshops and teams carry the hardest threads forward without losing momentum."
              tone={compact ? "light" : "dark"}
              className="max-w-xl [&_p]:mt-3 [&_p]:text-base [&_p]:leading-7"
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {steps.map((step, index) => {
                const Icon = iconMap[step.icon];
                return (
                  <article
                    key={step.title}
                    className={compact ? "depth-card rounded-lg border border-border bg-surface p-5 shadow-subtle" : "depth-card glass-panel rounded-lg p-5"}
                    style={{ transitionDelay: `${index * 35}ms` }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex size-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                        <Icon aria-hidden className="size-5" />
                      </div>
                      <span className={compact ? "rounded-full border border-border bg-background px-2 py-1 text-xs font-semibold uppercase text-muted" : "rounded-full border border-white/12 bg-white/8 px-2 py-1 text-xs font-semibold uppercase text-white/62"}>
                        {step.tag}
                      </span>
                    </div>
                    <h3 className={compact ? "mt-5 text-lg font-semibold text-foreground" : "mt-5 text-lg font-semibold text-white"}>{step.title}</h3>
                    <p className={compact ? "mt-3 text-sm leading-6 text-muted" : "mt-3 text-sm leading-6 text-white/68"}>{step.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border border-white/12 bg-brand-deep p-5 shadow-soft">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/limitless-logo.svg"
              alt=""
              className="pointer-events-none absolute -right-24 -top-24 size-[420px] opacity-[0.08] mix-blend-screen motion-safe:animate-infinity-float"
            />
            <PhotoCarousel
              slides={homepageTeamPhotos}
              ariaLabel="Limitless Townhall and Workshop photo carousel"
              className="relative"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
