import { proceso } from "@/lib/site-config";

export function Proceso() {
  return (
    <section id="proceso" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Cómo trabajamos
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Del primer aviso a la resolución
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            Intervenimos desde el momento en que el siniestro se reporta y acompañamos
            hasta el cierre del expediente.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {proceso.map((p, i) => (
            <li
              key={p.step}
              className="relative rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <span className="text-brand-yellow text-4xl font-bold">{p.step}</span>
              <h3 className="text-brand-navy mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{p.body}</p>
              {i < proceso.length - 1 && (
                <span className="bg-brand-yellow absolute right-4 top-7 hidden h-px w-6 lg:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
