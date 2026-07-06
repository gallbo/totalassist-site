import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { siteConfig, sedes, servicios } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-neutral-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Logo variant="shield" className="h-12 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm text-neutral-400">
            Respaldo profesional para agentes de seguros.{" "}
            {siteConfig.yearsExperience}+ años gestionando reclamaciones.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Servicios</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {servicios.map((s) => (
              <li key={s} className="text-neutral-400">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Sedes</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            {sedes.map((s) => (
              <li key={s.city}>
                <span className="text-white">{s.city}</span>
                <br />
                <span className="text-xs">{s.address}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            <li>
              <a
                href={`tel:+${siteConfig.phoneRaw}`}
                className="hover:text-brand-yellow transition-colors"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-yellow transition-colors"
              >
                WhatsApp
              </a>
            </li>
            <li className="text-xs">{siteConfig.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los
            derechos reservados.
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <Link
              href="/terminos"
              className="hover:text-brand-yellow transition-colors"
            >
              Términos y condiciones
            </Link>
            <Link
              href="/avisodeprivacidadagentes"
              className="hover:text-brand-yellow transition-colors"
            >
              Aviso de privacidad
            </Link>
          </nav>
          <p>www.{siteConfig.domain} | Marca registrada</p>
        </div>
      </div>
    </footer>
  );
}
