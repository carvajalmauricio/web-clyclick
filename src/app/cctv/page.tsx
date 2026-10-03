import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  alternates: { canonical: "/cctv" },
  title: "CCTV y seguridad — Clyclick",
  description:
    "Consulta la instalación de sistemas de cámaras de seguridad para tu empresa u oficina.",
};
const content = {
  title: "CCTV y seguridad",
  description:
    "Consulta la instalación de sistemas de cámaras de seguridad para tu empresa u oficina.",
  needs: [
    "Visibilidad de áreas del negocio.",
    "Definición de ubicaciones para cámaras.",
    "Evaluación de un sistema existente.",
  ],
  inputs: [
    "Ubicación y áreas que necesitas observar.",
    "Equipos existentes y necesidades de acceso.",
    "Necesidades de grabación y restricciones del espacio.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
