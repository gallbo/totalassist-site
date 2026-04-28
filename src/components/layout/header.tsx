"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Servicio", href: "#servicio" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const SCROLL_THRESHOLD = 220;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!scrolled && open) setOpen(false);
  }, [scrolled, open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b border-neutral-200/60 bg-white/90 shadow-sm backdrop-blur transition-all duration-300 ease-out",
        scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0",
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Total Assist — Inicio">
          <Logo variant="compact" className="lg:hidden" priority />
          <Logo variant="full" className="hidden lg:flex" priority />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-brand-navy hover:text-brand-yellow text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy rounded-pill px-5 py-2.5 text-sm font-semibold transition-colors"
          >
            Solicita asesoría
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="text-brand-navy inline-flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-neutral-200 bg-white lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-brand-navy hover:bg-neutral-50 rounded-md px-3 py-3 text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="bg-brand-yellow text-brand-navy mt-2 rounded-pill px-4 py-3 text-center text-sm font-semibold"
          >
            Solicita asesoría
          </a>
        </nav>
      </div>
    </header>
  );
}
