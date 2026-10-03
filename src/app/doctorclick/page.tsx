import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Doctorclick — Clyclick",
  description:
    "Gestiona pacientes, doctores y la atención por especialidad, con calendario y facturación electrónica.",
  alternates: { canonical: "/doctorclick" },
};
const content = {
  name: "Doctorclick",
  audience: "Consultorios médicos",
  headline: "La operación de tu consultorio, en un solo lugar.",
  intro:
    "Gestiona pacientes, doctores y la atención por especialidad, con calendario y facturación electrónica.",
  cta: "Solicitar prueba gratuita de 14 días",
  features: [
    "Usuarios y doctores",
    "Personalización por especialidad",
    "Certificados y recetas",
    "Registro de evoluciones",
    "Inventario de medicamentos",
    "Dashboard administrativo",
    "Registro de pacientes por cédula conectado al Registro Civil",
    "Calendario",
    "Facturación electrónica",
  ],
  sections: [
    {
      title: "$700/año",
      text: "Suscripción anual. Soporte por separado a $10/hora. Consulta las condiciones en tu propuesta.",
    },
    {
      title: "Prueba gratuita de 14 días",
      text: "Conoce Doctorclick antes de contratar.",
    },
    {
      title: "Soporte a $10/hora",
      cta: {
        label: "Consultar soporte",
        message: "Hola, quiero consultar soporte para Doctorclick a $10/hora.",
      },
      text: "El soporte se contrata por separado. Consulta el trabajo requerido antes de solicitarlo.",
    },
  ],
};
export default function Page() {
  return <ProductPage content={content} />;
}
