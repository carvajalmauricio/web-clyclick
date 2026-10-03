import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  Stethoscope,
  Bot,
  ShoppingCart,
  Scissors,
  Lightbulb,
  UtensilsCrossed,
  Network,
  ChartColumn,
  Video,
} from "lucide-react";
import { products } from "@/lib/site";
export const BRAND = "#023A5E";
const icons = {
  Globe,
  Stethoscope,
  Bot,
  ShoppingCart,
  Scissors,
  Lightbulb,
  UtensilsCrossed,
};
export function Niches() {
  const order = [
    "mishkitap",
    "ecommerce",
    "click-ia",
    "odontoclick",
    "click-peluquerias",
    "websites",
    "academy",
    "doctorclick",
  ];
  return (
    <section
      id="productos"
      aria-labelledby="products-title"
      className="bg-[#FAFAF7] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2
          id="products-title"
          className="font-display text-3xl font-bold text-brand sm:text-4xl"
        >
          Una solución para tu tipo de negocio
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Encuentra el producto pensado para tu actividad y conoce cómo puede
          ayudarte.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {order.map((slug) => {
            const p = products.find((p) => p.slug === slug)!;
            const Icon = icons[p.icon as keyof typeof icons];
            return (
              <article
                key={p.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                {p.slug === "mishkitap" ? (
                  <div className="mb-4 flex h-16 items-center">
                    <Image
                      src="/logos/MISHKI.png"
                      alt=""
                      width={180}
                      height={64}
                      className="h-16 w-44 object-contain"
                    />
                  </div>
                ) : (
                  <Icon
                    aria-hidden="true"
                    className="mb-4 h-8 w-8 text-primary"
                  />
                )}
                <h3 className="font-display text-xl font-bold text-brand">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm font-semibold text-primary">
                  {p.tag}
                </p>
                <p className="mt-3 flex-1 leading-relaxed text-slate-600">
                  {p.benefit}
                </p>
                <p className="mt-6 font-semibold text-[#17212B]">{p.price}</p>
                <Link
                  href={`/${p.slug}`}
                  className="cta mt-5"
                  aria-label={`Conocer ${p.name}`}
                >
                  Conocer producto
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export function ProductGrid() {
  return (
    <section id="soluciones" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl font-bold text-brand">
        Servicios para tu próximo proyecto
      </h2>
      <p className="mt-4 max-w-2xl text-slate-600">
        Si necesitas algo fuera de nuestros productos, conversemos sobre el
        objetivo y el alcance.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Consultoría y datos",
            text: "Explica qué necesita resolver tu negocio. Revisamos el alcance de una consultoría de IA, Power BI o transformación digital.",
            href: "/contacto",
            Icon: ChartColumn,
          },
          {
            title: "Redes e infraestructura",
            text: "Conoce nuestros servicios de redes empresariales, videovigilancia y respaldo de datos.",
            href: "/redes-telecomunicaciones",
            Icon: Network,
          },
          {
            title: "Videos con IA",
            text: "Cuéntanos qué video necesitas y consulta el alcance del proyecto.",
            href: "/contacto",
            Icon: Video,
          },
        ].map(({ title, text, href, Icon }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-bold">{title}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
            <Link
              href={href}
              className="mt-5 inline-flex min-h-12 items-center font-semibold text-primary"
              aria-label={`Consultar ${title}`}
            >
              Consultar servicio →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
export function WhyClyclick() {
  return (
    <section
      data-why
      aria-labelledby="why-title"
      className="bg-sky-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2
          id="why-title"
          className="font-display text-3xl font-bold text-brand"
        >
          ¿Por qué elegirnos?
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [
              "Productos probados en entornos reales",
              "Nuestro software ya funciona en negocios reales.",
            ],
            [
              "Aliados a largo plazo",
              "Buscamos construir una relación que acompañe la evolución de tu negocio.",
            ],
            [
              "Más de 30 proyectos realizados",
              "Experiencia en proyectos para mejorar la operación de los negocios.",
            ],
            [
              "Pensado para el mercado ecuatoriano",
              "Productos que consideran cómo operan los negocios en Ecuador.",
            ],
          ].map(([title, desc]) => (
            <article
              key={title}
              className="rounded-2xl border border-sky-200 bg-white p-6"
            >
              <h3 className="font-display text-xl font-bold text-brand">
                {title}
              </h3>
              <p className="mt-3 leading-relaxed text-slate-600">{desc}</p>
            </article>
          ))}
        </div>
        <Link
          href="/nosotros"
          className="mt-8 inline-flex min-h-12 items-center font-semibold text-primary"
        >
          Conocer Clyclick →
        </Link>
      </div>
    </section>
  );
}
export function CustomDevBlock() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12">
        <h2 className="font-display text-3xl font-bold text-brand">
          ¿Necesitas un desarrollo a medida?
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          Cuéntanos qué proceso necesitas mejorar. Acordamos las funciones y el
          alcance en una propuesta para tu negocio.
        </p>
        <Link href="/contacto" className="cta mt-6">
          Consultar mi proyecto
        </Link>
      </div>
    </section>
  );
}
export function FinalCta() {
  return (
    <section className="bg-brand px-4 py-16 text-white">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold">
          Conversemos sobre tu negocio
        </h2>
        <p className="mt-4 text-slate-200">
          Te ayudamos a identificar el producto o servicio que corresponde a tu
          actividad.
        </p>
        <Link href="/contacto" className="cta mt-6">
          Contactar con Clyclick
        </Link>
        <p className="mt-5">
          <Link href="/permuta" className="underline underline-offset-4">
            Conocer el programa de permuta
          </Link>
        </p>
      </div>
    </section>
  );
}
