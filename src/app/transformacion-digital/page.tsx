import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  title: "Transformación digital — Clyclick",
  description:
    "Conversemos sobre cómo organizar y digitalizar procesos de tu negocio con prioridades claras.",
};
const content = {
  title: "Transformación digital",
  description:
    "Conversemos sobre cómo organizar y digitalizar procesos de tu negocio con prioridades claras.",
  needs: [
    "Reducir trabajo manual o duplicado.",
    "Organizar información dispersa.",
    "Elegir qué proceso digitalizar primero.",
  ],
  inputs: [
    "Cómo opera hoy el negocio y qué dificultades encuentras.",
    "Las herramientas actuales y las personas involucradas.",
    "Prioridades, presupuesto disponible y objetivos.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
