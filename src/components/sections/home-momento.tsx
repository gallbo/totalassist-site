import { Quote } from "lucide-react";
import { homeImages, homeMomento } from "@/lib/site-config";

export function HomeMomento() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-stretch lg:px-8">
        <div className="lg:col-span-7 lg:flex lg:flex-col lg:justify-center">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            {homeMomento.eyebrow}
          </p>
          <h2 className="text-brand-navy mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {homeMomento.title}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {homeMomento.body}
          </p>
        </div>

        <aside className="lg:col-span-5">
          <div className="relative h-full min-h-[340px] overflow-hidden rounded-3xl shadow-xl sm:min-h-[400px] lg:min-h-[440px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={homeImages.momento.src}
              alt={homeImages.momento.alt}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="from-brand-navy/95 via-brand-navy/75 absolute inset-0 bg-gradient-to-t to-transparent" />
            <div className="relative flex h-full flex-col justify-end p-8 text-white sm:p-10">
              <Quote
                className="text-brand-yellow/40 absolute right-6 top-6 h-12 w-12"
                aria-hidden
              />
              <p className="text-lg font-medium leading-relaxed sm:text-xl">
                {homeMomento.highlight}
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
