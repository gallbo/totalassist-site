import { Award, Building2, ShieldCheck } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { siteConfig } from "@/lib/site-config";

const credenciales = [
  {
    icon: Award,
    title: `${siteConfig.yearsExperience}+ años de experiencia`,
    body: "Equipo con trayectoria comprobada en gestión de siniestros.",
  },
  {
    icon: ShieldCheck,
    title: "Ramos que atendemos",
    body: "Auto, vida y gastos médicos. Reclamaciones atendidas de punta a punta.",
  },
  {
    icon: Building2,
    title: "Cobertura nacional",
    body: "Operación coordinada desde Culiacán, CDMX y Monterrey.",
  },
];

export function Beneficios() {
  return (
    <section
      id="beneficios"
      className="bg-brand-navy relative overflow-hidden py-20 text-white lg:py-28"
    >
      <BackgroundPattern variant="hero" invert />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Por qué Total Assist
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Un equipo que ya hizo el camino — {siteConfig.yearsExperience}+ años de oficio
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {credenciales.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur"
            >
              <span className="bg-brand-yellow text-brand-navy inline-flex h-12 w-12 items-center justify-center rounded-full">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
