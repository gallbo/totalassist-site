import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { BrandIntro } from "@/components/sections/brand-intro";
import { Hero } from "@/components/sections/hero";
import { ExtensionProfesional } from "@/components/sections/extension-profesional";
import { Problema } from "@/components/sections/problema";
import { Riesgos } from "@/components/sections/riesgos";
import { Beneficios } from "@/components/sections/beneficios";
import { Proceso } from "@/components/sections/proceso";
import { Faq } from "@/components/sections/faq";
import { Sedes } from "@/components/sections/sedes";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Contacto } from "@/components/sections/contacto";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <BrandIntro />
        <Hero />
        <ExtensionProfesional />
        <Problema />
        <Riesgos />
        <Beneficios />
        <Proceso />
        <Faq />
        <CtaBanner />
        <Sedes />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
