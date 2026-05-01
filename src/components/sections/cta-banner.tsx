import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type Props = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function CtaBanner({
  title = `Suma Total Assist a tu operación — sin costo hasta ${siteConfig.freeUntil}`,
  subtitle = "Cero compromiso. Activamos el respaldo en cuanto te registras.",
  ctaLabel = "Regístrate ahora",
  ctaHref = "/registro",
}: Props) {
  const isInternal = ctaHref.startsWith("/");
  const className =
    "bg-brand-navy hover:bg-brand-navy-hover w-full shrink-0 rounded-pill px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors sm:w-auto";

  return (
    <section className="bg-brand-yellow py-14">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left lg:px-8">
        <div>
          <h2 className="text-brand-navy text-2xl font-bold tracking-tight sm:text-3xl">
            {title}
          </h2>
          <p className="text-brand-navy/80 mt-2 text-sm sm:text-base">
            {subtitle}
          </p>
        </div>
        {isInternal ? (
          <Link href={ctaHref} className={className}>
            {ctaLabel}
          </Link>
        ) : (
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </section>
  );
}
