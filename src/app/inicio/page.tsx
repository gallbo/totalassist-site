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
import { faqs } from "@/lib/site-config";

// openGraph override en page sobrescribe el del layout entero, así que repetimos
// todos los campos (incluyendo images) para preservar el preview en redes sociales.
export const metadata: Metadata = {
  title: "Total Assist — Respaldo profesional para agentes de seguros",
  description:
    "Liberamos tu tiempo, integramos expedientes y damos seguimiento a tus siniestros. Servicio gratuito hasta diciembre 2026.",
  alternates: { canonical: "/inicio" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/inicio",
    siteName: "Total Assist",
    title: "Total Assist — Respaldo profesional para agentes de seguros",
    description:
      "Liberamos tu tiempo, integramos expedientes y damos seguimiento a tus siniestros. Gratis hasta diciembre 2026.",
    images: [
      {
        url: "/brand/og-image-v3.png",
        width: 1200,
        height: 630,
        alt: "Total Assist — Respaldo profesional para agentes de seguros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Assist — Respaldo profesional para agentes de seguros",
    description:
      "Liberamos tu tiempo, integramos expedientes y damos seguimiento a tus siniestros. Gratis hasta diciembre 2026.",
    images: ["/brand/og-image-v3.png"],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Inicio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
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
