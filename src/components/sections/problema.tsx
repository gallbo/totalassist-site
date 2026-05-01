import { Clock } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { consumoTiempo, landingImages } from "@/lib/site-config";

export function Problema() {
  return (
    <section className="relative overflow-hidden bg-neutral-50 py-20 lg:py-28">
      <BackgroundPattern variant="subtle" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:items-stretch lg:gap-12 lg:px-8">
        <div className="flex flex-col lg:col-span-7">
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

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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

        <aside className="lg:col-span-5">
          <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl shadow-xl sm:min-h-[400px] lg:min-h-[480px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={landingImages.problema.src}
              alt={landingImages.problema.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="from-brand-navy/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-white/95 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6">
              <div className="flex items-center gap-2 text-neutral-500">
                <Clock className="h-4 w-4" />
                <span className="text-xs font-semibold uppercase tracking-widest">
                  Cada siniestro
                </span>
              </div>
              <p className="text-brand-navy mt-3 text-base font-semibold leading-snug sm:text-lg">
                Horas que dejan de invertirse en ventas, cartera y relaciones nuevas.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
