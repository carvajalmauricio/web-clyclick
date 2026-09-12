import type { Metadata } from "next";
import { OdontoclickLanding } from "@/components/odontoclick-landing";

export const metadata: Metadata = {
  title: "Odontoclick — Software dental para consultorios en Ecuador",
  description:
    "Gestiona agenda, pacientes, historia clínica conforme al MSP, odontograma, tratamientos, pagos y facturación electrónica. Prueba guiada de 7 días.",
  alternates: { canonical: "/odontoclick" },
  openGraph: {
    title: "Odontoclick — Tu consultorio, en orden",
    description:
      "Software dental con historia clínica conforme al MSP, agenda, odontograma, cobros y facturación electrónica desde USD 30 al mes.",
    url: "/odontoclick",
    siteName: "Clyclick",
    locale: "es_EC",
    type: "website",
  },
};

export default function OdontoclickPage() {
  return <OdontoclickLanding />;
}
