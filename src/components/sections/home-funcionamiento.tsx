import { Check } from "lucide-react";
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

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <div className="flex flex-col rounded-3xl border border-neutral-200 bg-white p-8">
            <h3 className="text-brand-navy text-xl font-semibold">
              {homeFuncionamiento.agentTitle}
            </h3>
            <ol className="mt-6 space-y-4">
              {homeFuncionamiento.agentSteps.map((step, i) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="bg-brand-yellow text-brand-navy inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold">
                    {i + 1}
                  </span>
                  <span className="text-brand-navy pt-1 text-base font-medium">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p className="text-brand-navy bg-brand-yellow/15 mt-6 rounded-2xl px-4 py-3 text-sm font-semibold">
              {homeFuncionamiento.agentClosing}
            </p>
          </div>

          <div className="bg-brand-navy flex flex-col rounded-3xl p-8 text-white">
            <h3 className="text-xl font-semibold">
              {homeFuncionamiento.teamTitle}
            </h3>
            <ul className="mt-6 space-y-5">
              {homeFuncionamiento.steps.map((step) => (
                <li key={step.title} className="flex items-start gap-4">
                  <span className="bg-brand-yellow/20 text-brand-yellow inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full">
                    <Check className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-300">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 text-center text-base leading-relaxed text-neutral-600 sm:text-lg">
          {homeFuncionamiento.closing}
        </p>
      </div>
    </section>
  );
}
