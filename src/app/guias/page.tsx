import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/lib/guides";
export const metadata: Metadata = {
  title: "Guías para elegir software y tecnología — Clyclick",
  description:
    "Guías prácticas para evaluar un POS para restaurantes, software odontológico y agentes de IA multicanal antes de contratar.",
  alternates: { canonical: "/guias" },
};
export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Para decidir con información
      </p>
      <h1 className="mt-4 font-display text-4xl font-bold text-brand sm:text-5xl">
        Guías para tu negocio.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
        Qué comprobar, qué preguntar y cómo revisar una demostración antes de
        elegir una solución.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.slug}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
          >
            <p className="text-sm font-semibold text-primary">
              {guide.productName}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-brand">
              {guide.title}
            </h2>
            <p className="mt-4 flex-1 leading-relaxed text-slate-600">
              {guide.description}
            </p>
            <Link
              className="mt-6 inline-flex min-h-12 items-center rounded-lg font-semibold text-primary"
              href={`/guias/${guide.slug}`}
            >
              Leer guía<span className="sr-only">: {guide.title}</span> →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
