"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Preguntas frecuentes
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Lo que más nos preguntan los agentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-brand-navy text-base font-semibold sm:text-lg">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={cn(
                      "text-brand-navy h-5 w-5 shrink-0 transition-transform",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
