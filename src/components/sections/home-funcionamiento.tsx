import { homeFuncionamiento } from "@/lib/site-config";

export function HomeFuncionamiento() {
  return (
    <section id="proceso" className="bg-neutral-50 py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            {homeFuncionamiento.eyebrow}
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {homeFuncionamiento.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600">
            {homeFuncionamiento.intro}
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {homeFuncionamiento.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-neutral-200 bg-white p-7"
            >
              <span className="text-brand-yellow text-5xl font-bold leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-brand-navy mt-5 text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-12 text-center text-base leading-relaxed text-neutral-600 sm:text-lg">
          {homeFuncionamiento.closing}
        </p>
      </div>
    </section>
  );
}
