import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://totalassist.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Total Assist — Aliado estratégico en gestión de siniestros",
    template: "%s | Total Assist",
  },
  description:
    "Total Assist gestiona las reclamaciones de seguro de tus clientes en tu nombre. Más de 27 años respaldando a agentes de seguros en México.",
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: siteConfig.name,
  keywords: [
    "Total Assist",
    "gestión de siniestros",
    "reclamaciones de seguros",
    "agentes de seguros México",
    "consultoría de siniestros",
    "indemnización",
    "broker de seguros",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "/",
    siteName: siteConfig.name,
    title: "Total Assist — Aliado estratégico en gestión de siniestros",
    description:
      "Total Assist gestiona las reclamaciones de seguro de tus clientes en tu nombre. Más de 27 años respaldando a agentes de seguros en México.",
    images: [
      {
        url: "/brand/og-image-v3.png",
        width: 1200,
        height: 630,
        alt: "Total Assist — Aliado estratégico en gestión de siniestros",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Total Assist — Aliado estratégico en gestión de siniestros",
    description:
      "Gestionamos las reclamaciones de seguro de tus clientes. +27 años respaldando agentes de seguros en México.",
    images: ["/brand/og-image-v3.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F1F3C" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1F3C" },
  ],
  colorScheme: "light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/totalassist-full-v3.png`,
  description:
    "Total Assist gestiona las reclamaciones de seguro de tus clientes en tu nombre. Más de 27 años respaldando a agentes de seguros en México.",
  email: siteConfig.email,
  telephone: `+${siteConfig.phoneRaw}`,
  areaServed: "MX",
  sameAs: [siteConfig.whatsappUrl],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.phoneRaw}`,
      contactType: "customer service",
      areaServed: "MX",
      availableLanguage: ["Spanish"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: SITE_URL,
  inLanguage: "es-MX",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={cn("h-full antialiased", inter.variable, "font-sans")}
    >
      <body className="flex min-h-full flex-col bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
        <Toaster position="top-right" richColors closeButton />
      </body>
    </html>
  );
}
