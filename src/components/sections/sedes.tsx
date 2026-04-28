import { MapPin } from "lucide-react";
import { sedes } from "@/lib/site-config";

export function Sedes() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Presencia nacional
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Tres sedes para acompañarte donde estés
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {sedes.map((s) => (
            <article
              key={s.city}
              className="rounded-2xl border border-neutral-200 bg-white p-6"
            >
              <span className="bg-brand-yellow/15 text-brand-navy inline-flex h-10 w-10 items-center justify-center rounded-full">
                <MapPin className="h-5 w-5" />
              </span>
              <p className="text-brand-yellow mt-5 text-xs font-semibold uppercase tracking-widest">
                {s.label}
              </p>
              <h3 className="text-brand-navy mt-1 text-xl font-semibold">{s.city}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{s.address}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
