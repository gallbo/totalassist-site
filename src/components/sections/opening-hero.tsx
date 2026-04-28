import { BackgroundPattern } from "@/components/layout/background-pattern";
import { siteConfig } from "@/lib/site-config";

export function OpeningHero() {
  return (
    <section className="bg-brand-navy relative flex min-h-svh items-center overflow-hidden text-white">
      <BackgroundPattern variant="auth" invert />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          <div className="inline-flex flex-col">
            <p className="text-2xl font-bold leading-none tracking-tight sm:text-3xl">
              TOTAL <span className="text-brand-yellow">ASSIST</span>
            </p>
            <span className="bg-brand-yellow mt-2 h-px w-full" />
            <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.28em] text-neutral-400 sm:text-[11px]">
              Insurance Claim by Skipper
            </p>
          </div>

          <h1 className="mt-10 text-balance text-4xl font-bold leading-[1.05] tracking-tight sm:mt-12 sm:text-6xl lg:text-7xl">
            Respaldo profesional para
            <span className="text-brand-yellow"> tus reclamaciones de seguros</span>
          </h1>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy w-full rounded-pill px-7 py-3.5 text-center text-sm font-semibold transition-colors sm:w-auto"
            >
              Regístrate gratis
            </a>
            <a
              href="#servicio"
              className="w-full rounded-pill border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              Conoce el servicio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
