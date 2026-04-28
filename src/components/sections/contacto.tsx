"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail } from "lucide-react";
import { BackgroundPattern } from "@/components/layout/background-pattern";
import { siteConfig } from "@/lib/site-config";

export function Contacto() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    `Contacto desde la web — ${name || "Agente"}`,
  )}&body=${encodeURIComponent(
    `Nombre: ${name}\nCorreo: ${email}\n\n${message}`,
  )}`;

  return (
    <section
      id="contacto"
      className="bg-brand-navy relative overflow-hidden py-20 text-white lg:py-28"
    >
      <BackgroundPattern variant="corner" invert />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-brand-yellow text-xs font-semibold uppercase tracking-widest">
            Hablemos
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Suma a Total Assist a tu operación — gratis hasta {siteConfig.freeUntil}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-300">
            Cuéntanos sobre ti y te explicamos cómo activamos el respaldo en tu cartera.
          </p>

          <div className="mt-10 space-y-4">
            <ContactRow
              icon={MessageCircle}
              title="WhatsApp"
              value={siteConfig.phone}
              href={siteConfig.whatsappUrl}
              external
            />
            <ContactRow
              icon={Phone}
              title="Teléfono"
              value={siteConfig.phone}
              href={`tel:+${siteConfig.phoneRaw}`}
            />
            <ContactRow
              icon={Mail}
              title="Correo"
              value={siteConfig.email}
              href={`mailto:${siteConfig.email}`}
            />
            <p className="pt-2 text-sm text-neutral-400">{siteConfig.hours}</p>
          </div>
        </div>

        <form
          className="rounded-3xl bg-white p-7 shadow-2xl sm:p-9"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = mailtoHref;
          }}
        >
          <h3 className="text-brand-navy text-xl font-semibold">Envíanos un mensaje</h3>
          <p className="mt-1 text-sm text-neutral-500">
            Te respondemos el mismo día hábil.
          </p>

          <div className="mt-6 space-y-4">
            <Field
              label="Nombre"
              id="name"
              value={name}
              onChange={setName}
              placeholder="Tu nombre"
              required
            />
            <Field
              label="Correo"
              id="email"
              type="email"
              value={email}
              onChange={setEmail}
              placeholder="tu@correo.com"
              required
            />
            <div>
              <label
                htmlFor="message"
                className="text-brand-navy mb-1.5 block text-sm font-medium"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Cuéntanos brevemente sobre tu operación"
                className="focus:border-brand-navy focus:ring-brand-navy/20 w-full resize-none rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:bg-white focus:ring-2"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-brand-yellow hover:bg-brand-yellow-hover text-brand-navy mt-6 w-full rounded-pill px-6 py-3 text-sm font-semibold transition-colors"
          >
            Enviar mensaje
          </button>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-navy hover:text-brand-yellow-hover mt-3 block text-center text-sm font-medium transition-colors"
          >
            o escríbenos por WhatsApp →
          </a>
        </form>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  title,
  value,
  href,
  external,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4"
    >
      <span className="bg-brand-yellow text-brand-navy inline-flex h-11 w-11 items-center justify-center rounded-full">
        <Icon className="h-5 w-5" />
      </span>
      <span>
        <span className="block text-xs uppercase tracking-wide text-neutral-400">
          {title}
        </span>
        <span className="group-hover:text-brand-yellow block text-base font-medium text-white transition-colors">
          {value}
        </span>
      </span>
    </a>
  );
}

function Field({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-brand-navy mb-1.5 block text-sm font-medium"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="focus:border-brand-navy focus:ring-brand-navy/20 w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-900 outline-none transition-colors focus:bg-white focus:ring-2"
      />
    </div>
  );
}
