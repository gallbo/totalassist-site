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

export const metadata: Metadata = {
  title: "Total Assist — Aliado estratégico en gestión de siniestros",
  description:
    "Total Assist gestiona las reclamaciones de seguro de tus clientes en tu nombre. Más de 27 años respaldando a agentes de seguros en México.",
};

export default function Home() {
  return (
    <>
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
