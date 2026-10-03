import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  title: "Power BI / Business Intelligence — Clyclick",
  description:
    "Consulta dashboards y reportes para entender los datos de tu negocio y apoyar tus decisiones.",
};
const content = {
  title: "Power BI / Business Intelligence",
  description:
    "Consulta dashboards y reportes para entender los datos de tu negocio y apoyar tus decisiones.",
  needs: [
    "Reunir indicadores que hoy revisas por separado.",
    "Visualizar ventas, costos u operación con tus datos.",
    "Definir qué métricas necesitas consultar.",
  ],
  inputs: [
    "Las preguntas que quieres responder.",
    "Dónde están los datos y con qué frecuencia cambian.",
    "Quién usará los reportes y qué acceso necesita.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
