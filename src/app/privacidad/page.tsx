import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/layout/logo";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad de Total Assist.",
};

export default function PrivacidadPage() {
  return (
    <div className="min-h-svh bg-neutral-50 text-neutral-900">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <Link href="/" aria-label="Total Assist — Inicio">
            <Logo variant="compact" />
          </Link>
          <Link
            href="/"
            className="hover:text-brand-navy inline-flex items-center gap-2 text-sm font-medium text-neutral-500 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <h1 className="text-brand-navy text-xl font-bold sm:text-2xl">
          Aviso de privacidad
        </h1>

        <div className="mt-8 space-y-5 text-sm leading-relaxed text-neutral-700">
          <p>
            En Total Assist protegemos tus datos personales. Este aviso describe
            cómo recabamos, usamos y resguardamos la información que nos
            proporcionas al utilizar nuestros servicios.
          </p>

          <div>
            <h2 className="text-brand-navy text-base font-semibold">
              Responsable del tratamiento
            </h2>
            <p className="mt-2">
              Total Assist es responsable del uso y protección de tus datos
              personales, conforme a la Ley Federal de Protección de Datos
              Personales en Posesión de los Particulares.
            </p>
          </div>

          <div>
            <h2 className="text-brand-navy text-base font-semibold">
              Datos que recabamos
            </h2>
            <p className="mt-2">
              Recabamos los datos que registras al crear tu cuenta y al dar de
              alta casos: datos de identificación y contacto, información
              profesional del corredor y los datos necesarios para gestionar
              cada reclamación.
            </p>
          </div>

          <div>
            <h2 className="text-brand-navy text-base font-semibold">
              Finalidad del tratamiento
            </h2>
            <p className="mt-2">
              Usamos tus datos para operar tu cuenta, gestionar los casos que
              registras, darte seguimiento y mantener contacto contigo sobre el
              servicio.
            </p>
          </div>

          <div>
            <h2 className="text-brand-navy text-base font-semibold">
              Tus derechos
            </h2>
            <p className="mt-2">
              Puedes acceder, rectificar, cancelar u oponerte al tratamiento de
              tus datos personales, así como limitar su uso o divulgación,
              contactándonos por los medios que ponemos a tu disposición.
            </p>
          </div>

          <p className="text-xs text-neutral-500">
            Este aviso de privacidad puede actualizarse. Te notificaremos
            cualquier cambio a través de nuestros canales oficiales.
          </p>
        </div>
      </main>
    </div>
  );
}
