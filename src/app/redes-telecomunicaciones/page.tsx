import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  title: "Redes y telecomunicaciones — Clyclick",
  description:
    "Consulta el diseño, instalación y configuración de redes empresariales según las necesidades de tu espacio.",
};
const content = {
  title: "Redes y telecomunicaciones",
  description:
    "Consulta el diseño, instalación y configuración de redes empresariales según las necesidades de tu espacio.",
  needs: [
    "Conectividad en áreas de trabajo.",
    "Organización de una red empresarial.",
    "Revisión de necesidades de cobertura y equipos.",
  ],
  inputs: [
    "Ciudad, ubicación y características del espacio.",
    "Cantidad de usuarios, dispositivos y equipos existentes.",
    "Problemas de conexión y necesidades de uso.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
