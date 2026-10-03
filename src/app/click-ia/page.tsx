import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Click IA — Agentes de IA para WhatsApp y otros canales | Clyclick",
  description:
    "Implementamos y personalizamos un agente de IA para responder con la información de tu negocio. WhatsApp es el canal predeterminado.",
  alternates: { canonical: "/click-ia" },
};
const content = {
  name: "Click IA",
  audience: "Atención con inteligencia artificial",
  headline: "Un agente que responde según tu negocio.",
  intro:
    "Implementamos y personalizamos un agente de IA para responder con la información de tu negocio. WhatsApp es el canal predeterminado.",
  cta: "Solicitar una demo",
  features: [
    "Implementación y personalización según tu negocio",
    "WhatsApp como canal predeterminado",
    "Canales opcionales: Telegram, TikTok, Facebook Messenger e Instagram",
    "Modelos posibles: OpenAI, Gemini o Claude",
  ],
  sections: [
    {
      title: "$30/mes por cada canal",
      items: [
        "WhatsApp solo: $30/mes.",
        "WhatsApp + 1 canal: $60/mes.",
        "WhatsApp + 2 canales: $90/mes.",
      ],
    },
    {
      title: "Consumo y recargas aparte",
      text: "Los mensajes y la generación de IA se pagan aparte mediante las recargas del negocio. El saldo y las condiciones de los proveedores determinan el uso; la mensualidad no incluye consumo ilimitado.",
    },
    {
      title: "Una demo para tu caso",
      text: "Conoce la solución y define qué debe responder el agente. No incluye prueba gratuita ni funciones de agenda o ventas sin acordar el caso.",
    },
  ],
};
export default function Page() {
  return <ProductPage content={content} />;
}
