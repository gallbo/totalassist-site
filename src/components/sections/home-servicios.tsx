import { ArrowRight, Briefcase, GraduationCap, Lightbulb, Scale } from "lucide-react";
import { homeServicios, siteConfig } from "@/lib/site-config";

const ICONS = {
  gestion: Briefcase,
  consultoria: Lightbulb,
  conferencias: GraduationCap,
  "defensa-legal": Scale,
} as const;

export function HomeServicios() {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Nuestros servicios
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Cuatro formas de respaldarte como agente
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            Te acompañamos en lo operativo, lo técnico, la formación profesional y la
            defensa legal. Tú decides hasta dónde sumar Total Assist a tu negocio.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {homeServicios.map((s) => {
            const Icon = ICONS[s.id as keyof typeof ICONS];
            return (
              <article
                key={s.id}
                className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <span className="bg-brand-yellow/15 text-brand-navy inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-brand-navy mt-5 text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {s.body}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-neutral-600">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="bg-brand-yellow mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold transition-colors"
          >
            Solicita información
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
