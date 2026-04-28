import { Clock } from "lucide-react";
import { consumoTiempo } from "@/lib/site-config";

export function Problema() {
  return (
    <section className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            El problema
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Gestionar reclamaciones consume tiempo, energía y recursos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            Cada siniestro abierto se convierte en horas de operación que dejan de invertirse en
            ventas, en cartera y en relaciones nuevas. Y la presión emocional del asegurado
            acelera todo.
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {consumoTiempo.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4"
            >
              <span className="bg-brand-navy/5 text-brand-navy inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                <Clock className="h-4 w-4" />
              </span>
              <span className="text-brand-navy text-sm font-medium leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
