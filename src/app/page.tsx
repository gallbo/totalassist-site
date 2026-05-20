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
import { homeFaqs, homeTagline, siteConfig } from "@/lib/site-config";

// La home corp usa los defaults del layout root (mismo title/description/og/twitter).
// El layout ya tiene canonical "/" + og:image, así que solo declaramos alternates
// explícitamente y no tocamos openGraph/twitter (Next.js sobreescribiría enteros).
export const metadata: Metadata = {
  alternates: { canonical: "/" },
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
          ctaLabel="Habla con un asesor"
          ctaHref={siteConfig.whatsappUrl}
        />
        <Contacto variant="corp" />
      </main>
      <Footer />
    </>
  );
}
