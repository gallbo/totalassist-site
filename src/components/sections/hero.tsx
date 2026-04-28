import { Check } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { siteConfig, beneficiosHero } from "@/lib/site-config";

export function Hero() {
  return (
    <section className="bg-brand-navy relative overflow-hidden text-white">
      <BackgroundPattern variant="hero" invert />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:px-8 lg:py-28">
        <div className="lg:col-span-7">
          <span className="bg-brand-yellow text-brand-navy inline-flex items-center rounded-pill px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Servicio gratuito hasta {siteConfig.freeUntil}
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Respaldo profesional para
            <span className="text-brand-yellow"> tus reclamaciones de seguros</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            Total Assist es un equipo especializado que opera detrás de ti como agente.
            Integramos expedientes, damos seguimiento con la aseguradora y mantenemos
            comunicación ordenada con el asegurado — para que tú vendas más y atiendas mejor.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {beneficiosHero.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-neutral-200">
                <span className="bg-brand-yellow text-brand-navy mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy w-full rounded-pill px-6 py-3.5 text-center text-sm font-semibold transition-colors sm:w-auto"
            >
              Regístrate gratis
            </a>
            <a
              href="#servicio"
              className="w-full rounded-pill border border-white/30 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Conoce el servicio
            </a>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:block">
          <div className="relative">
            <div className="bg-brand-yellow/10 ring-brand-yellow/30 rounded-3xl p-8 ring-1 backdrop-blur">
              <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
                {siteConfig.yearsExperience}+ años de experiencia
              </p>
              <p className="mt-3 text-2xl font-semibold leading-snug text-white">
                Operamos como una extensión transparente de tu servicio. Tu cliente percibe que tú resolviste.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                <Stat value="27+" label="Años" />
                <Stat value="3" label="Sedes" />
                <Stat value="100%" label="Ramos" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-brand-yellow text-2xl font-bold">{value}</p>
      <p className="text-xs uppercase tracking-wide text-neutral-400">{label}</p>
    </div>
  );
}
