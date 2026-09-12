import type { Metadata } from "next";
import { OdontoclickLanding } from "@/components/odontoclick-landing";

export const metadata: Metadata = {
  title: "Odontoclick — Software dental para consultorios en Ecuador",
  description:
    "Gestiona agenda, pacientes, historia clínica, odontograma, tratamientos, pagos y facturación electrónica.",
  alternates: { canonical: "/odontoclick" },
};

export default function DentalclickCompatibilityPage() {
  return <OdontoclickLanding />;
}
