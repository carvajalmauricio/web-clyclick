import Link from "next/link";
import { ProjectShowcase } from "@/components/project-showcase";
import { WebsitePortfolio } from "@/components/website-portfolio";
import { Check, ArrowRight } from "lucide-react";
import { wa, products } from "@/lib/site";
export type ProductContent = {
  name: string;
  audience: string;
  headline: string;
  intro: string;
  cta: string;
  features: string[];
  sections: {
    title: string;
    text?: string;
    items?: string[];
    cta?: { label: string; message: string };
  }[];
};
export function ProductPage({ content: c }: { content: ProductContent }) {
  const product = products.find((p) => p.name === c.name);
  const summaryPrice = product?.price;
  const href = wa(
    `Hola, me interesa ${c.name}. Quiero ${c.cta.toLowerCase()}.`,
  );
  return (
    <div className="bg-[#FAFAF7] text-[#17212B]">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <Link
          href="/#productos"
          className="inline-flex min-h-12 items-center font-semibold text-primary"
        >
          ← Todos los productos
        </Link>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
          {c.audience} · {c.name}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">
          {c.headline}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
          {c.intro}
        </p>
        {summaryPrice && (
          <p className="mt-6 font-semibold text-brand">{summaryPrice}</p>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <a className="cta" href={href}>
            {c.cta}
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
          {product && (
            <a
              href={
                product.slug === "websites" ? "#proyectos-web" : "#capturas"
              }
              className="inline-flex min-h-12 items-center rounded-lg font-semibold text-primary"
            >
              {product.slug === "websites"
                ? "Ver proyectos web"
                : "Ver capturas y vídeos"}
            </a>
          )}
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-brand">
            Qué puedes hacer con {c.name}
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.features.map((f) => (
              <li
                key={f}
                className="flex gap-3 rounded-xl border border-slate-200 p-5"
              >
                <Check
                  aria-hidden="true"
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {product?.slug === "websites" ? (
        <WebsitePortfolio />
      ) : (
        product && <ProjectShowcase productSlug={product.slug} id="capturas" />
      )}
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
        {c.sections.map((s) => (
          <section
            key={s.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
          >
            <h2 className="font-display text-2xl font-bold text-brand">
              {s.title}
            </h2>
            {s.text && (
              <p className="mt-4 leading-relaxed text-slate-600">{s.text}</p>
            )}
            {s.items && (
              <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-600">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            )}
            {s.cta && (
              <a className="cta mt-6" href={wa(s.cta.message)}>
                {s.cta.label}
              </a>
            )}
          </section>
        ))}
      </div>
      <section className="border-t border-slate-200 px-4 py-12 text-center">
        <h2 className="font-display text-2xl font-bold">
          ¿Quieres conocer {c.name}?
        </h2>
        <a href={href} className="cta mt-6">
          {c.cta}
        </a>
      </section>
    </div>
  );
}
