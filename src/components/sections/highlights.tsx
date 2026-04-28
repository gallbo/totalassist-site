import { siteConfig } from "@/lib/site-config";

export function Highlights() {
  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-y-6 gap-x-4 px-4 py-8 sm:grid-cols-4 sm:px-6 sm:py-10 lg:px-8">
        <div className="sm:col-span-1">
          <span className="bg-brand-yellow/15 text-brand-navy inline-flex items-center rounded-pill px-3 py-1 text-[11px] font-semibold uppercase tracking-wide">
            Gratuito hasta {siteConfig.freeUntil}
          </span>
        </div>
        <Stat value={`${siteConfig.yearsExperience}+`} label="años de experiencia" />
        <Stat value="3" label="sedes en México" />
        <Stat value="100%" label="ramos atendidos" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-brand-navy text-2xl font-bold leading-none sm:text-3xl">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500">{label}</p>
    </div>
  );
}
