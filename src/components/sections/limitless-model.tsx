import { SectionHeader } from "@/components/common/section-header";
import { PhotoCarousel } from "@/components/sections/photo-carousel";
import { iconMap } from "@/components/common/icon-map";
import { limitlessModelSteps } from "@/data/limitlessModel";
import { siteCopy } from "@/data/siteCopy";
import { homepageTeamPhotos } from "@/data/teamPhotos";

type LimitlessModelProps = {
  compact?: boolean;
  homepageMinimal?: boolean;
};

export function LimitlessModel({ compact = false, homepageMinimal = false }: LimitlessModelProps) {
  const showStepCards = compact && !homepageMinimal;
  const steps = showStepCards ? limitlessModelSteps.slice(0, 4) : [];

  return (
    <section className={compact ? "py-20" : "section-dark grain relative py-14 md:py-20"}>
      <div className="container-page relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-10">
          <div>
            <SectionHeader
              eyebrow="The Limitless model"
              title="From founder questions to structured student strategy."
              description={siteCopy.home.modelSummary}
              tone={compact ? "light" : "dark"}
              className="max-w-xl [&_p]:mt-3 [&_p]:text-base [&_p]:leading-7"
            />
            {showStepCards ? (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {steps.map((step, index) => {
                  const Icon = iconMap[step.icon];
                  return (
                    <article
                      key={step.title}
                      className="depth-card rounded-lg border border-border bg-surface p-5 shadow-subtle"
                      style={{ transitionDelay: `${index * 35}ms` }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex size-11 items-center justify-center rounded-lg bg-brand-soft text-brand">
                          <Icon aria-hidden className="size-5" />
                        </div>
                        <span className="rounded-full border border-border bg-background px-2 py-1 text-xs font-semibold uppercase text-muted">
                          {step.tag}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
                    </article>
                  );
                })}
              </div>
            ) : (
              <p className="mt-4 text-sm text-white/65">Townhall → Live problem-solving → Workshop follow-through.</p>
            )}
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
