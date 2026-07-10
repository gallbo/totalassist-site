import { ArrowRight } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { homeHero, homeImages } from "@/lib/site-config";

export function HomeHero() {
  return (
    <section className="bg-brand-navy relative flex min-h-svh items-center text-white">
      <BackgroundPattern variant="subtle" invert className="opacity-40" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-16 pb-6 sm:px-6 sm:pt-20 sm:pb-8 lg:px-8 lg:pt-24 lg:pb-12">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          <div className="min-w-0 lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
            <div className="inline-flex flex-col">
              <span className="bg-brand-yellow h-px w-10" />
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400 sm:text-[11px]">
                {homeHero.eyebrow}
              </p>
            </div>

            <h1 className="mt-4 text-balance text-2xl font-bold leading-[1.05] tracking-tight sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
              {homeHero.titlePrimary}{" "}
              <span className="text-brand-yellow">{homeHero.titleAccent}</span>
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-snug text-neutral-300 sm:mt-5 sm:text-base sm:leading-relaxed lg:text-lg">
              {homeHero.subtitle}
            </p>

            <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-3 sm:gap-3">
              {homeHero.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-neutral-200 backdrop-blur sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <span className="bg-brand-yellow mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-col gap-3 sm:mt-7 sm:flex-row">
              <a
                href={homeHero.ctaPrimary.href}
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy inline-flex w-full items-center justify-center gap-2 rounded-pill px-6 py-3 text-center text-sm font-semibold transition-colors sm:w-auto sm:px-7 sm:py-3.5"
              >
                {homeHero.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={homeHero.ctaSecondary.href}
                className="w-full rounded-pill border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto sm:px-7 sm:py-3.5"
              >
                {homeHero.ctaSecondary.label}
              </a>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative h-full min-h-[420px] xl:min-h-[480px]">
              <div className="bg-brand-yellow absolute -inset-3 rounded-3xl opacity-20 blur-2xl" />
              <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={homeImages.hero.src}
                  alt={homeImages.hero.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="from-brand-navy/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
                    Equipo dedicado
                  </p>
                  <p className="text-brand-yellow mt-1 text-2xl font-bold">
                    Todos los ramos
                  </p>
                  <p className="mt-1 text-xs text-neutral-300">
                    gestionamos tu siniestro de principio a fin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
