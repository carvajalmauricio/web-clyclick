import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Clyclick Academy — Clyclick",
  description:
    "Sesiones de aproximadamente dos horas sobre un tema específico. Acordamos el nivel y el alcance antes de reservar.",
  alternates: { canonical: "/academy" },
};
const content = {
  name: "Clyclick Academy",
  audience: "Sesiones prácticas de tecnología",
  headline: "Aprende tecnología aplicada a un objetivo concreto.",
  intro:
    "Sesiones de aproximadamente dos horas sobre un tema específico. Acordamos el nivel y el alcance antes de reservar.",
  cta: "Consultar mi tema",
  features: [
    "Inteligencia artificial aplicada",
    "Programación",
    "Configuración de servidores",
    "APIs e integraciones",
    "DevOps",
    "Cloud computing",
  ],
  sections: [
    {
      title: "$50 por persona y por sesión",
      text: "Cada sesión dura aproximadamente dos horas.",
      items: [
        "Sesión individual: $50.",
        "Dos participantes sobre el mismo tema: $100 total.",
        "Tres participantes sobre el mismo tema: $150 total.",
      ],
    },
    {
      title: "Equipos a cotizar",
      text: "La propuesta depende de los participantes, el tema y el alcance.",
    },
    {
      title: "Un objetivo concreto por sesión",
      text: "Cuéntanos qué quieres aprender, qué experiencia tienes y dónde necesitas aplicarlo. Definimos un objetivo acorde al tiempo disponible.",
    },
  ],
};
export default function Page() {
  return <ProductPage content={content} />;
}
