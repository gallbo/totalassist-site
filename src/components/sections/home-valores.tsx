import { homeValores } from "@/lib/site-config";

export function HomeValores() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Nuestros valores
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            La forma en la que trabajamos cada caso
          </h2>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {homeValores.map((v, i) => (
            <article
              key={v.title}
              className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white p-6 text-center transition-shadow hover:shadow-md"
            >
              <span className="bg-brand-yellow/15 text-brand-navy inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-brand-navy mt-4 text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
