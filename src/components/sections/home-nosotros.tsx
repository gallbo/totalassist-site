import { Compass, Target, Users } from "lucide-react";
import { homeImages, homeNosotros, siteConfig } from "@/lib/site-config";

export function HomeNosotros() {
  return (
    <section id="nosotros" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-stretch lg:gap-12">
          <div className="flex flex-col lg:col-span-7">
            <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
              {homeNosotros.eyebrow}
            </p>
            <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {homeNosotros.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
              {homeNosotros.body}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <article className="bg-brand-navy relative overflow-hidden rounded-3xl p-7 text-white">
                <Target className="text-brand-yellow h-9 w-9" />
                <h3 className="mt-5 text-xl font-semibold">
                  {homeNosotros.mision.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  {homeNosotros.mision.body}
                </p>
              </article>

              <article className="bg-brand-yellow text-brand-navy relative overflow-hidden rounded-3xl p-7">
                <Compass className="h-9 w-9" />
                <h3 className="mt-5 text-xl font-semibold">
                  {homeNosotros.vision.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">
                  {homeNosotros.vision.body}
                </p>
              </article>
            </div>

            <div className="mt-5 grid gap-4 rounded-3xl border border-neutral-200 bg-white p-6 sm:grid-cols-3">
              <Stat value={`${siteConfig.yearsExperience}+`} label="años de experiencia" />
              <Stat value="3" label="sedes en México" />
              <Stat value="100%" label="ramos atendidos" />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl shadow-xl sm:min-h-[480px] lg:min-h-[560px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={homeImages.nosotros.src}
                alt={homeImages.nosotros.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="from-brand-navy/85 via-brand-navy/40 absolute inset-0 bg-gradient-to-t to-transparent" />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/10 bg-white/95 p-5 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6">
                <div className="flex items-center gap-2 text-neutral-500">
                  <Users className="h-4 w-4" />
                  <span className="text-xs font-semibold uppercase tracking-widest">
                    Fundadoras
                  </span>
                </div>
                <ul className="mt-4 space-y-3">
                  {homeNosotros.founders.map((f) => (
                    <li key={f.name} className="flex items-center gap-3">
                      <span className="bg-brand-navy text-brand-yellow inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                        {f.name
                          .split(" ")
                          .slice(0, 2)
                          .map((p) => p[0])
                          .join("")}
                      </span>
                      <div>
                        <p className="text-brand-navy text-sm font-semibold leading-tight">
                          {f.name}
                        </p>
                        <p className="text-xs text-neutral-500">{f.role}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-brand-navy text-3xl font-bold leading-none sm:text-4xl">
        {value}
      </p>
      <p className="mt-2 text-xs uppercase tracking-wide text-neutral-500">{label}</p>
    </div>
  );
}
