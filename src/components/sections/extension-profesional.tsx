import { extensionBeneficios, landingImages } from "@/lib/site-config";

export function ExtensionProfesional() {
  return (
    <section id="servicio" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch">
          <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
            <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
              Extensión profesional
            </p>
            <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Trabajamos en tu nombre como apoyo estratégico
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
              Tú sigues siendo el asesor principal de tu cliente. Nosotros fortalecemos tu servicio
              asumiendo la operación pesada del siniestro: seguimiento, expedientes, comunicación con la
              aseguradora y acompañamiento técnico al asegurado.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[280px] overflow-hidden rounded-3xl shadow-xl sm:min-h-[340px] lg:min-h-[380px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={landingImages.extension.src}
                alt={landingImages.extension.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="from-brand-navy/40 absolute inset-0 bg-gradient-to-tr to-transparent" />
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {extensionBeneficios.map((b, i) => (
            <article
              key={b.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              <span className="bg-brand-yellow/15 text-brand-navy inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-brand-navy mt-4 text-lg font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{b.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
