import type { Metadata } from "next";
import { ProjectShowcase } from "@/components/project-showcase";
import { wa } from "@/lib/site";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Mishkitap — Software para restaurantes en Ecuador | Clyclick",
  description:
    "Organiza tu restaurante con POS, menú QR y pedidos desde la mesa. Desde $30/mes, con funciones y límites según el plan.",
  alternates: { canonical: "/mishkitap" },
};
const content = {
  name: "Mishkitap",
  audience: "Restaurantes",
  headline: "De la mesa a la cocina, la caja y la factura.",
  intro:
    "Organiza tu restaurante con POS, menú QR y pedidos desde la mesa. Desde $30/mes, con funciones y límites según el plan.",
  cta: "Solicitar una demo",
  features: [
    "POS y menú QR con fotos, precios y descripciones",
    "Pedidos desde la mesa y envío a cocina",
    "Caja, cortes, propinas y formas de pago",
    "Facturación electrónica SRI y notas de crédito",
    "Inventario, recetas y FIFO según plan",
    "Reservas y áreas de mesas según plan",
    "Reportes y dashboards",
    "Mishki IA según plan",
    "PWA para celular, tablet y computadora",
    "Notificaciones push",
  ],
  sections: [
    {
      title: "Esencial — $30/mes",
      text: "Total mínimo de 3 meses: $90.",
      items: [
        "Hasta 8 mesas; POS + kiosco QR y pedidos desde la mesa.",
        "Facturación SRI y caja.",
        "Menú de hasta 40 productos; inventario básico de hasta 50 productos.",
        "2 usuarios; PWA y notificaciones push.",
        "Reportes del último mes.",
        "Sin reservas ni Mishki IA.",
      ],
    },
    {
      title: "Profesional — $50/mes",
      text: "Todo lo del Esencial, más. Total mínimo de 3 meses: $150.",
      items: [
        "Hasta 20 mesas; menú de hasta 100 productos; 5 usuarios.",
        "Inventario completo, FIFO y recetas.",
        "Reservas y hasta 4 áreas o zonas.",
        "Rol de cocina/Chef y personalización completa.",
        "Reportes de los últimos 6 meses.",
        "Mishki IA: 300 sesiones mensuales.",
        "Soporte email/chat con respuesta indicada de 24 horas.",
      ],
    },
    {
      title: "Premium — $70/mes",
      text: "Todo lo del Profesional, más. Total mínimo de 3 meses: $210.",
      items: [
        "Mesas y productos ilimitados; hasta 15 usuarios.",
        "Áreas o zonas ilimitadas y reportes históricos.",
        "Exportación CSV/Excel y clasificación ABC.",
        "Mishki IA: 1.000 sesiones mensuales.",
        "Upselling y pairing con IA.",
        "Elección de OpenAI, Claude o Gemini.",
        "Soporte prioritario con respuesta indicada de 4 horas.",
      ],
    },
    {
      title: "Contratación",
      text: "Mínimo 3 meses. También hay opciones de 6 y 12 meses. Se anuncian 2 meses gratis al contratar 12 meses; consulta cómo se aplican antes de contratar.",
    },
    {
      title: "Multisucursal",
      text: "Opción adicional con descuentos anunciados del 15–25%, inventario centralizado y reportes consolidados según propuesta.",
    },
    {
      title: "Consulta planes y disponibilidad",
      text: "Solicita una demo o consulta el plan que necesitas. También puedes visitar mishkitap.app.",
    },
  ],
};
export default function Page() {
  return (
    <>
      <ProductPage content={content} />
      <ProjectShowcase productSlug="mishkitap" id="capturas" />
      <div className="mx-auto flex max-w-6xl flex-wrap gap-5 px-4 pb-12">
        <a
          className="cta"
          href={wa("Hola, quiero consultar los planes de Mishkitap.")}
        >
          Consultar planes
        </a>
        <a
          className="inline-flex min-h-12 items-center font-semibold text-primary"
          href="https://mishkitap.app"
        >
          Visitar mishkitap.app →
        </a>
      </div>
    </>
  );
}
