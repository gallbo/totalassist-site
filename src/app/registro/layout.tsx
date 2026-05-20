import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crea tu cuenta",
  description:
    "Activa tu cuenta de Total Assist gratis hasta diciembre 2026 y empieza a respaldar tus reclamaciones desde el primer día.",
  alternates: { canonical: "/registro" },
  robots: { index: false, follow: false },
};

export default function RegistroLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
