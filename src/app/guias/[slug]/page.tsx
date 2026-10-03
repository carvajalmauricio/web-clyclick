import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/lib/guides";
export const dynamicParams = false;
export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
async function getGuide(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return guide;
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = await getGuide(params);
  return {
    title: `${guide.title} — Clyclick`,
    description: guide.description,
    alternates: { canonical: `/guias/${guide.slug}` },
    openGraph: {
      type: "article",
      title: guide.title,
      description: guide.description,
      url: `/guias/${guide.slug}`,
      locale: "es_EC",
      siteName: "Clyclick",
    },
  };
}
export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const guide = await getGuide(params);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    mainEntityOfPage: `https://clyclick.online/guias/${guide.slug}`,
    author: {
      "@type": "Organization",
      name: "Clyclick",
      url: "https://clyclick.online/nosotros",
    },
    publisher: {
      "@type": "Organization",
      "@id": "https://clyclick.online/#organization",
      name: "Clyclick",
      url: "https://clyclick.online/",
    },
  };
  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <Link
        href="/guias"
        className="inline-flex min-h-12 items-center rounded-lg font-semibold text-primary"
      >
        ← Todas las guías
      </Link>
      <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
        {guide.title}
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-slate-600">
        {guide.description}
      </p>
      <p className="mt-5 text-sm text-slate-600">
        Por{" "}
        <Link
          href="/nosotros"
          className="font-semibold text-primary underline underline-offset-4"
        >
          Clyclick
        </Link>
      </p>
      <nav
        aria-label="Contenido de la guía"
        className="mt-8 rounded-2xl border border-slate-200 bg-white p-6"
      >
        <p className="font-semibold text-brand">En esta guía</p>
        <ol className="mt-3 list-decimal space-y-2 pl-5">
          {guide.sections.map((section, index) => (
            <li key={section.title}>
              <a
                href={`#paso-${index + 1}`}
                className="inline-block rounded text-primary underline underline-offset-4"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      {guide.sections.map((section, index) => (
        <section
          id={`paso-${index + 1}`}
          key={section.title}
          className="mt-12 scroll-mt-24"
        >
          <h2 className="font-display text-2xl font-bold text-brand sm:text-3xl">
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-5 text-lg leading-relaxed text-slate-700"
            >
              {paragraph}
            </p>
          ))}
          {section.checklist && (
            <ul className="mt-6 list-disc space-y-3 rounded-xl bg-white p-6 pl-10 text-slate-700">
              {section.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <h2 className="font-display text-2xl font-bold text-brand">
          Revisa la oferta de {guide.productName}
        </h2>
        <p className="mt-4 leading-relaxed text-slate-600">
          Consulta funciones, límites y condiciones y solicita la demostración o
          prueba indicada en su página.
        </p>
        <Link href={`/${guide.productSlug}`} className="cta mt-6">
          Conocer {guide.productName}
        </Link>
      </section>
    </article>
  );
}
