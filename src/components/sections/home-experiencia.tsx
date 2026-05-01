import { Check } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { homeExperiencia } from "@/lib/site-config";

export function HomeExperiencia() {
  return (
    <section className="bg-brand-navy relative overflow-hidden py-20 text-white lg:py-28">
      <BackgroundPattern variant="subtle" invert />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-6">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            {homeExperiencia.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {homeExperiencia.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-300 sm:text-lg">
            {homeExperiencia.body}
          </p>
        </div>

        <ul className="space-y-4 lg:col-span-6">
          {homeExperiencia.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <span className="bg-brand-yellow text-brand-navy inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm leading-relaxed text-neutral-200 sm:text-base">
                {b}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
