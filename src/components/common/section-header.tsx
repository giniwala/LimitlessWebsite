import { cn } from "@/utils/cn";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase",
            tone === "dark" ? "text-brand-soft" : "text-accent",
          )}
        >
          <span
            aria-hidden
            className={cn(
              "h-px w-8",
              tone === "dark" ? "bg-brand-soft/70" : "bg-accent/70",
            )}
          />
          <span>{eyebrow}</span>
        </p>
      ) : null}
      <h2
        className={cn(
          "text-4xl font-semibold leading-[1.05] md:text-5xl",
          tone === "dark" ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-7 md:text-lg",
            tone === "dark" ? "text-white/72" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
