"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQ } from "@/types/content";
import { cn } from "@/utils/cn";

type FAQAccordionProps = {
  items: FAQ[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState(items[0]?.id);

  const grouped = useMemo(() => {
    return items.reduce<Record<string, FAQ[]>>((acc, item) => {
      acc[item.category] = [...(acc[item.category] ?? []), item];
      return acc;
    }, {});
  }, [items]);

  return (
    <div className="space-y-8">
      {Object.entries(grouped).map(([category, faqs]) => (
        <section key={category} aria-labelledby={`${category}-heading`}>
          <h2 id={`${category}-heading`} className="mb-3 text-xl font-semibold text-foreground">
            {category}
          </h2>
          <div className="divide-y divide-border rounded-lg border border-border bg-surface">
            {faqs.map((faq) => {
              const isOpen = faq.id === openId;

              return (
                <div key={faq.id}>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-semibold text-foreground transition-colors hover:bg-surface-muted"
                    aria-expanded={isOpen}
                    onClick={() => setOpenId(isOpen ? "" : faq.id)}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      aria-hidden
                      className={cn("size-5 shrink-0 text-accent transition-transform", isOpen && "rotate-180")}
                    />
                  </button>
                  {isOpen ? (
                    <div className="px-5 pb-5 text-sm leading-6 text-muted">
                      {faq.answer}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
