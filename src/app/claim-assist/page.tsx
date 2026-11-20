import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeMomento } from "@/components/sections/home-momento";
import { HomeFuncionamiento } from "@/components/sections/home-funcionamiento";
import { HomeServicios } from "@/components/sections/home-servicios";
import { HomeNosotros } from "@/components/sections/home-nosotros";
import { HomeValores } from "@/components/sections/home-valores";
import { HomeExperiencia } from "@/components/sections/home-experiencia";
import { Sedes } from "@/components/sections/sedes";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Contacto } from "@/components/sections/contacto";
import { homeFaqs, homeTagline } from "@/lib/site-config";

// Página corporativa de Claim Assist. Desde nov-2026 la raíz del sitio es la
// landing de agentes; esta queda accesible solo por URL directa (sin liga en
// el menú ni en el sitemap). No tocamos openGraph/twitter (Next.js
// sobreescribiría enteros los del layout).
export const metadata: Metadata = {
  alternates: { canonical: "/claim-assist" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header variant="corp" />
      <main>
        <HomeHero />
        <HomeMomento />
        <HomeFuncionamiento />
        <HomeServicios />
        <HomeNosotros />
        <HomeValores />
        <HomeExperiencia />
        <Faq
          eyebrow="Preguntas frecuentes"
          title="Lo que más nos preguntan"
          items={homeFaqs}
        />
        <Sedes />
        <CtaBanner
          title={homeTagline}
          subtitle="Suma a Total Assist como respaldo profesional de tu cartera."
          hideCta
        />
        <Contacto variant="corp" />
      </main>
      <Footer />
    </>
  );
}
