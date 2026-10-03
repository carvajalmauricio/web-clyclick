import type { Metadata } from "next";
import { ServicePage } from "@/components/service-page";
export const metadata: Metadata = {
  title: "Desarrollo con IA — Clyclick",
  description:
    "Consulta un proyecto a medida para aplicar inteligencia artificial a una necesidad concreta de tu operación.",
};
const content = {
  title: "Desarrollo con IA",
  description:
    "Consulta un proyecto a medida para aplicar inteligencia artificial a una necesidad concreta de tu operación.",
  needs: [
    "Automatización de una tarea definida.",
    "Uso de IA con información del negocio.",
    "Conexión de una solución con herramientas existentes.",
  ],
  inputs: [
    "El flujo actual y el cambio que necesitas.",
    "Sistemas o APIs con los que habría que trabajar.",
    "Tipos de datos, permisos y criterios para evaluar el resultado.",
  ],
};
export default function Page() {
  return <ServicePage {...content} />;
}
