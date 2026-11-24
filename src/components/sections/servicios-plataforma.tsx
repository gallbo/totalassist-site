import { ArrowRight, FileText, GraduationCap, Info, MessageSquare, Scale } from "lucide-react";
import Link from "next/link";
import { landingCasoOConsulta, landingServicios } from "@/lib/site-config";

const ICONS = {
  casos: FileText,
  consultas: MessageSquare,
  conferencias: GraduationCap,
  "defensa-legal": Scale,
} as const;

/**
 * Qué incluye la cuenta del agente y cuándo usar cada sección del portal.
 * Énfasis en separar Casos (siniestros) de Consultas (dudas técnico-jurídicas).
 */
export function ServiciosPlataforma() {
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Todo en tu cuenta
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Más que gestión de siniestros
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            Con tu cuenta de Total Assist tienes cuatro servicios. Cada uno vive en su
            propia sección de la plataforma.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {landingServicios.map((s) => {
            const Icon = ICONS[s.id as keyof typeof ICONS];
            return (
              <article
                key={s.id}
                className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-7"
              >
                <span className="bg-brand-yellow/15 text-brand-navy inline-flex h-12 w-12 items-center justify-center rounded-2xl">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-brand-navy mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.body}</p>
                {/* Alineado al fondo para que las cajas queden parejas entre tarjetas. */}
                <div className="mt-auto pt-5">
                  <div className="min-h-32 rounded-2xl bg-neutral-50 p-4 text-sm">
                    <p className="text-brand-navy font-semibold">Úsalo cuando</p>
                    <p className="mt-1 leading-relaxed text-neutral-600">{s.cuando}</p>
                  </div>
                  <p className="pt-5 text-xs font-semibold uppercase tracking-wide text-neutral-500">
                    En tu cuenta: <span className="text-brand-navy">{s.seccion}</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="border-brand-yellow/60 bg-brand-yellow/10 mx-auto mt-10 flex max-w-4xl flex-col items-start gap-4 rounded-3xl border p-6 sm:flex-row sm:items-center">
          <span className="bg-brand-yellow text-brand-navy inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
            <Info className="h-5 w-5" />
          </span>
          <div className="flex-1">
            <p className="text-brand-navy font-semibold">{landingCasoOConsulta.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-neutral-700">
              {landingCasoOConsulta.body}
            </p>
          </div>
          <Link
            href="/registro"
            className="bg-brand-navy inline-flex shrink-0 items-center gap-2 rounded-pill px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
          >
            Regístrate gratis
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
