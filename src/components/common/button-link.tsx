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
    "border-brand bg-brand text-white hover:bg-brand-deep hover:border-brand-deep",
  secondary:
    "border-border bg-surface text-foreground hover:border-brand hover:text-brand",
  light: "border-white bg-white text-brand-deep hover:bg-brand-soft hover:border-brand-soft",
  ghost: "border-transparent bg-transparent text-brand hover:bg-brand-soft",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon: Icon = ArrowRight,
  className,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors",
    variants[variant],
    className,
  );

  if (href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a className={classes} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        <span>{children}</span>
        <Icon aria-hidden className="size-4" />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      <span>{children}</span>
      <Icon aria-hidden className="size-4" />
    </Link>
  );
}
