import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { siteConfig } from "@/lib/site-config";

type Variant = "corp" | "landing";

type Props = {
  variant?: Variant;
  eyebrow?: string;
  title?: string;
  body?: string;
};

export function Contacto({
  variant = "corp",
  eyebrow,
  title,
  body,
}: Props = {}) {
  const copy = resolveCopy(variant, { eyebrow, title, body });

  return (
    <section
      id="contacto"
      className="bg-brand-navy relative overflow-hidden py-20 text-white lg:py-28"
    >
      <BackgroundPattern variant="corner" invert />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:px-8">
        <div className="min-w-0 lg:col-span-6">
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            {copy.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {copy.title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-300">
            {copy.body}
          </p>

          {variant === "landing" ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/registro"
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold transition-colors"
              >
                Regístrate gratis
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`${siteConfig.appUrl}/login`}
                className="rounded-pill border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Ya tengo cuenta
              </a>
            </div>
          ) : (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy inline-flex items-center justify-center gap-2 rounded-pill px-7 py-3.5 text-sm font-semibold transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Escríbenos por WhatsApp
              </a>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                className="rounded-pill border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Llamar ahora
              </a>
            </div>
          )}
        </div>

        <div className="min-w-0 lg:col-span-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-widest text-neutral-300">
              {variant === "landing" ? "También puedes contactarnos" : "Otras formas de contacto"}
            </p>

            <div className="mt-6 space-y-4">
              <ContactRow
                icon={MessageCircle}
                title="WhatsApp"
                value={siteConfig.phone}
                href={siteConfig.whatsappUrl}
                external
                primary={variant === "corp"}
              />
              <ContactRow
                icon={Phone}
                title="Teléfono"
                value={siteConfig.phone}
                href={`tel:+${siteConfig.phoneRaw}`}
              />
              <ContactRow
                icon={Mail}
                title="Correo"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
            </div>

            <p className="mt-8 border-t border-white/10 pt-5 text-sm text-neutral-400">
              {siteConfig.hours}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function resolveCopy(
  variant: Variant,
  override: { eyebrow?: string; title?: string; body?: string },
) {
  const defaults: Record<Variant, { eyebrow: string; title: string; body: string }> = {
    corp: {
      eyebrow: "Hablemos",
      title: "¿Listo para sumar respaldo profesional a tu operación?",
      body: "Cuéntanos sobre tu cartera por WhatsApp y te explicamos cómo Total Assist se integra a tu día a día.",
    },
    landing: {
      eyebrow: "Empieza ya",
      title: `Activa tu cuenta gratis hasta ${siteConfig.freeUntil}`,
      body: "Crea tu cuenta en minutos y empezamos a respaldar tus reclamaciones desde el primer día. Sin compromisos.",
    },
  };

  const base = defaults[variant];
  return {
    eyebrow: override.eyebrow ?? base.eyebrow,
    title: override.title ?? base.title,
    body: override.body ?? base.body,
  };
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
  external,
  primary,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href: string;
  external?: boolean;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4"
    >
      <span
        className={
          primary
            ? "bg-brand-yellow text-brand-navy inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            : "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"
        }
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs uppercase tracking-wide text-neutral-400">
          {title}
        </span>
        <span className="group-hover:text-brand-yellow block text-base font-medium text-white transition-colors [overflow-wrap:anywhere]">
          {value}
        </span>
      </span>
    </a>
  );
}
