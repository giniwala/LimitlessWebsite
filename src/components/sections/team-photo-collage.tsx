import Image from "next/image";
import type { TeamPhoto } from "@/types/content";

type TeamPhotoCollageProps = {
  photos: TeamPhoto[];
  eyebrow?: string;
  title: string;
  description: string;
};

export function TeamPhotoCollage({
  photos,
  eyebrow = "Inside Limitless",
  title,
  description,
}: TeamPhotoCollageProps) {
  return (
    <section className="py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase text-accent">{eyebrow}</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-foreground md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">{description}</p>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {photos.map((photo, index) => (
            <figure
              key={photo.src}
              className={[
                "depth-card relative overflow-hidden rounded-lg border border-border bg-surface shadow-subtle",
                index === 0 ? "col-span-6 h-56 sm:col-span-4 md:h-72" : "",
                index === 1 ? "col-span-3 h-40 sm:col-span-2 sm:h-52" : "",
                index === 2 ? "col-span-3 h-40 sm:col-span-4 sm:h-52" : "",
              ].join(" ")}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
                style={{ objectPosition: photo.objectPosition ?? "50% 50%" }}
              />
              {photo.label ? (
                <figcaption className="absolute bottom-3 left-3 rounded-md bg-white/86 px-2.5 py-1.5 text-xs font-semibold text-brand-deep backdrop-blur">
                  {photo.label}
                </figcaption>
              ) : null}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
