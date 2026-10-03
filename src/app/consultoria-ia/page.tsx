import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  alternates: { canonical: "/consultoria-ia" },
  title: "Consultoría de IA — Clyclick",
  description:
    "Conversemos sobre dónde la inteligencia artificial podría ayudar a tu negocio y qué conviene evaluar antes de implementarla.",
};
const content = {
  title: "Consultoría de IA",
  description:
    "Conversemos sobre dónde la inteligencia artificial podría ayudar a tu negocio y qué conviene evaluar antes de implementarla.",
  needs: [
    "Identificar tareas repetitivas que podrían beneficiarse de IA.",
    "Evaluar un caso de uso y sus límites.",
    "Comprender qué información necesitaría una solución.",
  ],
  inputs: [
    "El proceso que quieres mejorar y quién lo realiza.",
    "Las herramientas que utilizas y la información disponible.",
    "El resultado esperado y las restricciones del negocio.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
