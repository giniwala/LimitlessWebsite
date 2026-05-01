import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";

type BrandWatermarkProps = {
  className?: string;
  position?: "left" | "right";
  /** Stronger imprint on tinted panels */
  blend?: boolean;
  /** Dark sections (footer, night panels) vs light pages */
  surface?: "light" | "dark";
};

/** Low-opacity logo motif for quiet depth behind content. Parent should be `relative overflow-hidden`. */
export function BrandWatermark({
  className,
  position = "right",
  blend = false,
  surface = "light",
}: BrandWatermarkProps) {
  const isDark = surface === "dark";

  return (
    <div
      className={cn(
        "brand-watermark pointer-events-none absolute -z-0 select-none",
        position === "right" ? "right-[max(-5rem,calc(-1*(100vw-100%)/8))]" : "left-[max(-5rem,calc(-1*(100vw-100%)/8))]",
        position === "right" ? "-top-8 lg:top-[12%]" : "top-[8%]",
        className,
      )}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={siteConfig.brand.logoPath}
        alt=""
        width={560}
        height={560}
        className={cn(
          "h-auto w-[min(22rem,78vw)] max-w-none saturate-[1.06]",
          isDark
            ? "opacity-[0.1] brightness-[1.08] saturate-[0.92] motion-reduce:opacity-[0.08]"
            : cn("opacity-[0.05]", blend && "opacity-[0.075] mix-blend-multiply lg:opacity-[0.06]", "motion-reduce:opacity-[0.04]"),
          isDark ? "mix-blend-screen" : "",
        )}
      />
    </div>
  );
}
