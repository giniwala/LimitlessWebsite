import { ButtonLink } from "@/components/common/button-link";
import { SectionHeader } from "@/components/common/section-header";
import { MediaCarousel } from "@/components/sections/media-carousel";
import { featuredSocialUpdates, socialUpdates } from "@/data/socialUpdates";
import { siteCopy } from "@/data/siteCopy";

type SocialUpdateShowcaseProps = {
  fullPage?: boolean;
};

export function SocialUpdateShowcase({ fullPage = false }: SocialUpdateShowcaseProps) {
  const updates = fullPage ? socialUpdates : featuredSocialUpdates;

  return (
    <section className={fullPage ? "py-16 md:py-20" : "section-soft py-14 md:py-18"}>
      <div className="container-page">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow={siteCopy.media.eyebrow}
            title={fullPage ? siteCopy.media.sectionTitle : siteCopy.home.mediaPreview.title}
            description={fullPage ? siteCopy.media.sectionDescription : siteCopy.home.mediaPreview.description}
          />
          {!fullPage ? (
            <ButtonLink href="/media" variant="secondary">
              View Media
            </ButtonLink>
          ) : null}
        </div>

        <div className="mt-10">
          <MediaCarousel updates={updates} compact={!fullPage} />
        </div>
      </div>
    </section>
  );
}
