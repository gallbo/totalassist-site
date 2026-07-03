import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { AvisoPrivacidadContenido } from "@/components/aviso-privacidad-contenido";

export const metadata: Metadata = {
  title: "Aviso de privacidad — Agentes de seguros",
  description:
    "Aviso de privacidad integral de Claim Assist México, S.C. para agentes de seguros.",
};

export default function AvisoPrivacidadAgentesPage() {
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
        <AvisoPrivacidadContenido />
      </main>
    </div>
  );
}
