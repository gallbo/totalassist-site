import { AlertTriangle } from "lucide-react";
import { riesgosMalaGestion } from "@/lib/site-config";

export function Riesgos() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Lo que está en juego
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Una reclamación mal atendida puede borrar años de relación con tu cliente
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            El siniestro es el momento de verdad de la póliza. Si la experiencia es mala, la
            confianza no se recupera — y la cartera se mueve.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {riesgosMalaGestion.map((r) => (
            <div
              key={r}
              className="border-state-danger/20 hover:border-state-danger/40 flex items-start gap-3 rounded-xl border bg-white p-5 transition-colors"
            >
              <span className="bg-state-danger/10 text-state-danger inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full">
                <AlertTriangle className="h-4 w-4" />
              </span>
              <span className="text-brand-navy text-sm font-medium leading-snug">{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
