import { ExternalLink, Mail } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { cn } from "@/utils/cn";

type SocialLinksProps = {
  className?: string;
  showEmail?: boolean;
  variant?: "default" | "light" | "compact";
};

const baseLink =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors";

const variantClasses = {
  default:
    "border-border bg-surface text-foreground hover:border-accent hover:text-accent",
  light:
    "border-white/25 bg-white/8 text-white hover:border-white hover:bg-white hover:text-brand-deep",
  compact:
    "border-border bg-transparent text-muted hover:border-accent hover:text-accent",
};

export function SocialLinks({ className, showEmail = false, variant = "default" }: SocialLinksProps) {
  const links = [
    {
      label: "Follow Limitless Consulting on LinkedIn",
      text: "LinkedIn",
      href: siteConfig.externalLinks.linkedin,
      icon: ExternalLink,
      isExternal: true,
    },
    {
      label: "Follow Limitless Consulting on Instagram",
      text: "Instagram",
      href: siteConfig.externalLinks.instagram,
      icon: ExternalLink,
      isExternal: true,
    },
    ...(showEmail
      ? [
          {
            label: `Email ${siteConfig.name}`,
            text: "Email",
            href: `mailto:${siteConfig.contact.email}`,
            icon: Mail,
            isExternal: false,
          },
        ]
      : []),
  ];

  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap", className)}>
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            aria-label={link.label}
            className={cn(baseLink, variantClasses[variant])}
            target={link.isExternal ? "_blank" : undefined}
            rel={link.isExternal ? "noopener noreferrer" : undefined}
          >
            <Icon aria-hidden className="size-4" />
            <span>{link.text}</span>
          </a>
        );
      })}
    </div>
  );
}
