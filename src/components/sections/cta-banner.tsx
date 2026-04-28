import { siteConfig } from "@/lib/site-config";

export function CtaBanner() {
  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div>
          <h2 className="text-brand-navy text-2xl font-bold tracking-tight sm:text-3xl">
            Suma Total Assist a tu operación — sin costo hasta {siteConfig.freeUntil}
          </h2>
          <p className="text-brand-navy/80 mt-2 text-sm sm:text-base">
            Cero compromiso. Activamos el respaldo en cuanto te registras.
          </p>
        </div>
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-navy hover:bg-brand-navy-hover w-full shrink-0 rounded-pill px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors sm:w-auto"
        >
          Regístrate ahora
        </a>
      </div>
    </section>
  );
}
