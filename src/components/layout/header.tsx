"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type Variant = "corp" | "landing";

const NAV_LINKS: Record<Variant, { label: string; href: string }[]> = {
  corp: [
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Proceso", href: "#proceso" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
  landing: [
    { label: "Servicio", href: "#servicio" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Proceso", href: "#proceso" },
    { label: "Preguntas", href: "#faq" },
    { label: "Contacto", href: "#contacto" },
  ],
};

const CTA: Record<Variant, { label: string; href: string; external: boolean }> = {
  corp: {
    label: "Solicita asesoría",
    href: siteConfig.whatsappUrl,
    external: true,
  },
  landing: {
    label: "Regístrate gratis",
    href: "/registro",
    external: false,
  },
};

const CROSS_LINK: Record<Variant, { label: string; href: string; external: boolean }> = {
  corp: { label: "Para agentes", href: "/inicio", external: false },
  landing: {
    label: "Iniciar sesión",
    href: `${siteConfig.appUrl}/login`,
    external: true,
  },
};

export function Header({ variant = "corp" }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = NAV_LINKS[variant];
  const cta = CTA[variant];
  const cross = CROSS_LINK[variant];

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.innerHeight * 0.6;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out",
        scrolled
          ? "border-b border-neutral-200/60 bg-white/90 shadow-sm backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Total Assist — Inicio">
          <Logo
            variant="compact"
            tone={scrolled ? "default" : "inverted"}
            className="lg:hidden"
            priority
          />
          <Logo
            variant="full"
            tone={scrolled ? "default" : "inverted"}
            className="hidden lg:flex"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hover:text-brand-yellow text-sm font-medium transition-colors",
                scrolled ? "text-brand-navy" : "text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          {cross.external ? (
            <a
              href={cross.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hover:text-brand-yellow text-sm font-medium transition-colors",
                scrolled ? "text-neutral-500" : "text-white/80",
              )}
            >
              {cross.label}
            </a>
          ) : (
            <Link
              href={cross.href}
              className={cn(
                "hover:text-brand-yellow text-sm font-medium transition-colors",
                scrolled ? "text-neutral-500" : "text-white/80",
              )}
            >
              {cross.label}
            </Link>
          )}
          <a
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy rounded-pill px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            {cta.label}
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-md border transition-colors lg:hidden",
            scrolled
              ? "text-brand-navy border-neutral-200"
              : "border-white/30 text-white",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t lg:hidden",
          open ? "block" : "hidden",
          scrolled ? "border-neutral-200 bg-white" : "border-white/10 bg-brand-navy",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-3 text-sm font-medium",
                scrolled
                  ? "text-brand-navy hover:bg-neutral-50"
                  : "text-white hover:bg-white/5",
              )}
            >
              {link.label}
            </Link>
          ))}
          {cross.external ? (
            <a
              href={cross.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-3 text-sm font-medium",
                scrolled
                  ? "text-neutral-500 hover:bg-neutral-50"
                  : "text-white/80 hover:bg-white/5",
              )}
            >
              {cross.label}
            </a>
          ) : (
            <Link
              href={cross.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-md px-3 py-3 text-sm font-medium",
                scrolled
                  ? "text-neutral-500 hover:bg-neutral-50"
                  : "text-white/80 hover:bg-white/5",
              )}
            >
              {cross.label}
            </Link>
          )}
          <a
            href={cta.href}
            target={cta.external ? "_blank" : undefined}
            rel={cta.external ? "noopener noreferrer" : undefined}
            onClick={() => setOpen(false)}
            className="bg-brand-yellow text-brand-navy mt-2 rounded-pill px-4 py-3 text-center text-sm font-semibold"
          >
            {cta.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
