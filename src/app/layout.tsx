import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Total Assist — Respaldo profesional para agentes de seguros",
  description:
    "Equipo especializado en gestión de reclamaciones de seguros. Liberamos tu tiempo, integramos expedientes y damos seguimiento a tus siniestros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={cn("h-full antialiased", inter.variable, "font-sans")}
    >
      <body className="flex min-h-full flex-col bg-white">{children}</body>
    </html>
  );
}
