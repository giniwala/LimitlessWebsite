import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/utils/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "ghost";
  icon?: LucideIcon;
  className?: string;
};

const variants = {
  primary:
    "border-brand bg-brand text-white shadow-[0_14px_34px_rgb(24_77_58_/_0.18)] hover:border-brand-deep hover:bg-brand-deep hover:shadow-[0_18px_44px_rgb(15_143_106_/_0.18)]",
  secondary:
    "border-border bg-surface/86 text-foreground shadow-subtle hover:border-accent hover:text-accent",
  light: "border-white bg-white text-brand-deep shadow-[0_18px_44px_rgb(255_255_255_/_0.12)] hover:border-brand-soft hover:bg-brand-soft",
  ghost: "border-white/18 bg-white/6 text-white hover:border-white/38 hover:bg-white/12",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300",
    variants[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        <span>{children}</span>
        <Icon aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
      <Icon aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </Link>
  );
}
