import { extensionBeneficios } from "@/lib/site-config";

export function ExtensionProfesional() {
  return (
    <section id="servicio" className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
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
