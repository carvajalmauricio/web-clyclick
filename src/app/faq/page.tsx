import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  alternates: { canonical: "/faq" }, title: "Preguntas frecuentes — Clyclick", description: "Resuelve dudas sobre precios, demos, pruebas gratuitas, soporte, facturación y contratación de los productos de Clyclick." };
const questions = [
  [
    "¿Cómo elijo un producto?",
    "Busca el producto dirigido a tu actividad en el catálogo. Cada página detalla funciones, precios y condiciones; si tienes dudas, cuéntanos qué necesita tu negocio.",
  ],
  [
    "¿Qué productos ofrecen prueba gratuita?",
    "Odontoclick ofrece 7 días y Doctorclick 14 días. Click IA, Ecommerce Click y Click Peluquerías ofrecen demo, sin prueba gratuita. Para Mishkitap puedes solicitar una demo.",
  ],
  [
    "¿El soporte está incluido?",
    "Click Peluquerías incluye soporte. Ecommerce Click y Doctorclick lo cobran aparte a $10/hora. En Mishkitap consulta el soporte correspondiente a cada plan. En los proyectos a medida el soporte debe quedar definido en la propuesta.",
  ],
  [
    "¿Click IA incluye todos los mensajes?",
    "No. Cuesta $30/mes por cada canal. Los mensajes y la generación de IA se pagan aparte con las recargas del negocio.",
  ],
  [
    "¿Qué incluye un sitio web desde $150?",
    "Una landing page o hasta tres páginas informativas, con llamadas a la acción y alojamiento sin costo. Dominio aparte, hasta tres cambios durante el desarrollo y cambios posteriores a $10/hora. El alcance final se acuerda en la propuesta.",
  ],
  [
    "¿Cuánto cuesta Academy?",
    "Cada sesión cuesta $50 por persona y dura aproximadamente dos horas. Puede ser individual o para dos o tres personas sobre el mismo tema. Para equipos se prepara una cotización.",
  ],
  [
    "¿Qué productos tienen facturación electrónica?",
    "Mishkitap, Odontoclick, Doctorclick, Ecommerce Click y Click Peluquerías. Click IA no incluye facturación electrónica.",
  ],
  [
    "¿Puedo pagar mediante permuta?",
    "Puedes proponer un intercambio de tus productos o servicios. Revisa el programa de permuta y consulta las condiciones antes de contratar.",
  ],
];
export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <h1 className="font-display text-4xl font-bold text-brand">
        Preguntas frecuentes
      </h1>
      <p className="mt-5 text-lg text-slate-600">
        Precios, demos y condiciones para dar el siguiente paso.
      </p>
      <div className="mt-10 divide-y divide-slate-200">
        {questions.map(([q, a]) => (
          <details key={q} className="py-5">
            <summary className="min-h-12 cursor-pointer rounded-lg font-semibold text-brand">
              {q}
            </summary>
            <p className="mt-4 leading-relaxed text-slate-600">{a}</p>
          </details>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-5">
        <Link href="/#productos" className="cta">
          Ver productos
        </Link>
        <Link
          href="/contacto"
          className="inline-flex min-h-12 items-center font-semibold text-primary"
        >
          Consultar otra pregunta →
        </Link>
      </div>
    </div>
  );
}
