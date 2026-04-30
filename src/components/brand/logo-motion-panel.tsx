import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";

type LogoMotionPanelProps = {
  className?: string;
};

export function LogoMotionPanel({ className }: LogoMotionPanelProps) {
  return (
    <div
      className={cn(
        "relative isolate min-h-40 overflow-hidden rounded-lg border border-white/15 bg-white/8",
        className,
      )}
      aria-hidden
    >
      <Image
        src={siteConfig.brand.motionPosterPath}
        alt=""
        fill
        sizes="320px"
        className="object-cover opacity-80"
      />
      <video
        className="absolute inset-0 hidden h-full w-full object-cover opacity-90 motion-safe:block"
        src={siteConfig.brand.motionPath}
        poster={siteConfig.brand.motionPosterPath}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-brand-deep/18" />
    </div>
  );
}
