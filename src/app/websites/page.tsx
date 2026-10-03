import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Páginas web para negocios desde $150 — Clyclick",
  description:
    "Desde $150 para una landing page o hasta tres páginas informativas, con llamadas a la acción. El alcance y precio final se acuerdan en la propuesta.",
  alternates: { canonical: "/websites" },
};
const content = {
  name: "Websites",
  audience: "Sitios informativos para negocios",
  headline: "Una web clara para presentar tu negocio y recibir consultas.",
  intro:
    "Desde $150 para una landing page o hasta tres páginas informativas, con llamadas a la acción. El alcance y precio final se acuerdan en la propuesta.",
  cta: "Solicitar una propuesta",
  features: [
    "Landing page o hasta tres páginas informativas",
    "Presentación de tu negocio y sus servicios",
    "Llamadas a la acción para recibir consultas",
    "Alojamiento sin costo para este tipo de sitio",
  ],
  sections: [
    {
      title: "Desde $150",
      items: [
        "Dominio por separado.",
        "Hasta tres cambios durante el desarrollo.",
        "Cambios después de la entrega: $10/hora.",
        "Alcance y precio final acordados en la propuesta.",
      ],
    },
    {
      title: "Dominios",
      text: "Dominio y renovación anual: .com $15,65/año; .com.ec $35/año; .ec $35/año. El dominio se cobra por separado del sitio web.",
    },
    {
      title: "¿Necesitas un alcance más amplio?",
      text: "El servicio está pensado para proyectos de alcance sencillo. Si necesitas investigación estratégica, funcionalidades especiales o una estructura más amplia, preparamos una propuesta a medida. Aplicaciones y ecommerce requieren una propuesta específica.",
    },
  ],
};
export default function Page() {
  return <ProductPage content={content} />;
}
