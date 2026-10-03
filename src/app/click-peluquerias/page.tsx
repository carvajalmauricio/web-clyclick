import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Click Peluquerías — Clyclick",
  description:
    "Gestiona la atención en tu local o a domicilio con una solución para peluquerías y barberías.",
  alternates: { canonical: "/click-peluquerias" },
};
const content = {
  name: "Click Peluquerías",
  audience: "Peluquerías y barberías",
  headline: "Organiza citas, cobros y lealtad.",
  intro:
    "Gestiona la atención en tu local o a domicilio con una solución para peluquerías y barberías.",
  cta: "Solicitar una demo",
  features: [
    "Citas en local y a domicilio",
    "Registro de estilistas",
    "Programa de lealtad",
    "Dashboard administrativo",
    "Cobros con Payphone",
    "Facturación electrónica",
  ],
  sections: [
    { title: "$500/año", text: "Suscripción anual con soporte incluido." },
    {
      title: "Conoce la plataforma",
      text: "Solicita una demo para revisar cómo se adapta a tu negocio. No incluye prueba gratuita.",
    },
  ],
};
export default function Page() {
  return <ProductPage content={content} />;
}
