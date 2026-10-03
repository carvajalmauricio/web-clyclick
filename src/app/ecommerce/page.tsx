import type { Metadata } from "next";
import { ProductPage } from "@/components/product-page";
export const metadata: Metadata = {
  title: "Ecommerce Click — Clyclick",
  description:
    "Vende en línea con catálogo, pedidos, seguimiento y dashboard administrativo. Incluye conexión logística y facturación electrónica.",
  alternates: { canonical: "/ecommerce" },
};
const content = {
  name: "Ecommerce Click",
  audience: "Tiendas y negocios que venden en línea",
  headline: "Tu catálogo y tus pedidos, organizados.",
  intro:
    "Vende en línea con catálogo, pedidos, seguimiento y dashboard administrativo. Incluye conexión logística y facturación electrónica.",
  cta: "Solicitar una demo",
  features: [
    "Catálogo de productos",
    "Pedidos y seguimiento",
    "Dashboard administrativo",
    "Cobros con tarjeta",
    "Facturación electrónica",
    "Conexión con empresas de logística incluida",
  ],
  sections: [
    {
      title: "$1.100/año",
      text: "Renovación anual. Soporte por separado a $10/hora.",
    },
    {
      title: "Elige tu proveedor de pago",
      text: "Pago Plux, Payphone o DataFast. Las comisiones y condiciones se consultan con el proveedor elegido.",
    },
    {
      title: "Conexión logística incluida",
      text: "La conexión con empresas de logística forma parte de la oferta base. No implica envíos gratuitos.",
    },
    {
      title: "Funciones adicionales",
      items: [
        "Integración con proveedores: adicional, fuera del precio base.",
        "Click IA: adicional con tarifa preferencial a consultar.",
        "Recargas y consumo de Click IA por separado.",
      ],
    },
    {
      title: "Conoce la plataforma",
      text: "Solicita una demo. No incluye prueba gratuita.",
    },
  ],
};
export default function Page() {
  return <ProductPage content={content} />;
}
