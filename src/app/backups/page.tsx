import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  title: "Backups y recuperación — Clyclick",
  description:
    "Consulta opciones de respaldo y recuperación para los datos de tu empresa.",
};
const content = {
  title: "Backups y recuperación",
  description:
    "Consulta opciones de respaldo y recuperación para los datos de tu empresa.",
  needs: [
    "Identificar información que necesita respaldo.",
    "Evaluar cómo se guarda y recupera hoy.",
    "Planificar necesidades de recuperación.",
  ],
  inputs: [
    "Qué información necesitas proteger y dónde se guarda.",
    "Volumen de datos y frecuencia de cambios.",
    "Cuánto tiempo puedes operar sin esa información.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
