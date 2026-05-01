import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { OpeningHero } from "@/components/sections/opening-hero";
import { Highlights } from "@/components/sections/highlights";
import { ExtensionProfesional } from "@/components/sections/extension-profesional";
import { Problema } from "@/components/sections/problema";
import { Riesgos } from "@/components/sections/riesgos";
import { Beneficios } from "@/components/sections/beneficios";
import { Proceso } from "@/components/sections/proceso";
import { Faq } from "@/components/sections/faq";
import { Sedes } from "@/components/sections/sedes";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contacto } from "@/components/sections/contacto";

export const metadata: Metadata = {
  title: "Total Assist — Respaldo profesional para agentes de seguros",
  description:
    "Liberamos tu tiempo, integramos expedientes y damos seguimiento a tus siniestros. Servicio gratuito hasta diciembre 2026.",
};

export default function Inicio() {
  return (
    <>
      <Header variant="landing" />
      <main>
        <OpeningHero />
        <Highlights />
        <ExtensionProfesional />
        <Problema />
        <Riesgos />
        <Beneficios />
        <Proceso />
        <Faq />
        <CtaBanner />
        <Sedes />
        <Contacto variant="landing" />
      </main>
      <Footer />
    </>
  );
}
