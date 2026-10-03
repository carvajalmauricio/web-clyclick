"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Check,
  Layers3,
  ShoppingBag,
  Stethoscope,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { products } from "@/lib/site";

const choices: {
  slug: string;
  activity: string;
  icon: LucideIcon;
  features: string[];
}[] = [
  {
    slug: "mishkitap",
    activity: "Restaurantes",
    icon: UtensilsCrossed,
    features: ["POS y menú QR", "Pedidos a cocina", "Facturación SRI"],
  },
  {
    slug: "odontoclick",
    activity: "Consultorios dentales",
    icon: Stethoscope,
    features: [
      "Agenda y pacientes",
      "Historia y odontograma",
      "Facturación electrónica",
    ],
  },
  {
    slug: "ecommerce",
    activity: "Tiendas en línea",
    icon: ShoppingBag,
    features: [
      "Catálogo y pedidos",
      "Cobros con tarjeta",
      "Conexión logística",
    ],
  },
  {
    slug: "click-ia",
    activity: "Atención con IA",
    icon: Bot,
    features: [
      "Respuestas personalizadas",
      "WhatsApp y canales opcionales",
      "Consumo por separado",
    ],
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const choice = choices[active];
  const product = products.find((p) => p.slug === choice.slug)!;
  const Icon = choice.icon;
  return (
    <section
      data-hero
      className="hero-scene relative isolate overflow-hidden bg-[#071D2B] text-white"
    >
      <div
        aria-hidden="true"
        className="hero-wash pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden="true"
        className="hero-wordmark pointer-events-none absolute bottom-[-.12em] left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-[21vw] font-bold leading-none"
      >
        CLYCLICK
      </div>
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:py-20">
        <div className="hero-copy">
          <h1
            data-headline
            className="max-w-2xl font-display text-[clamp(2.25rem,4.15vw,4.1rem)] font-bold leading-[1.08] tracking-[-0.035em]"
          >
            Software y tecnología{" "}
            <span className="text-[#FB923C]">para hacer crecer</span> tu negocio
            en Ecuador.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            Encuentra una solución para tu actividad: restaurantes,
            consultorios, tiendas y peluquerías. También creamos sitios web y te
            ayudamos a aplicar tecnología a tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link data-cta href="#productos" className="cta hero-primary">
              Explorar productos{" "}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/40 px-5 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Consultar mi proyecto{" "}
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-slate-200">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20">
              <Check className="h-4 w-4 text-[#FB923C]" aria-hidden="true" />
            </span>
            <p>
              Más de 30 proyectos realizados.
              <br className="sm:hidden" /> Productos en negocios reales.
            </p>
          </div>
        </div>

        <div className="hero-workbench relative">
          <svg
            aria-hidden="true"
            className="hero-circuit pointer-events-none absolute -inset-x-6 -top-8 h-[calc(100%+4rem)] w-[calc(100%+3rem)]"
            viewBox="0 0 600 600"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M20 0 V95 Q20 125 50 125 H560 Q590 125 590 155 V450 Q590 480 560 480 H30"
              stroke="#4C9CC3"
              strokeOpacity=".35"
              strokeWidth="1"
            />
            <path
              className="hero-trace"
              d="M20 0 V95 Q20 125 50 125 H560 Q590 125 590 155 V450 Q590 480 560 480 H30"
              stroke="#FB923C"
              strokeWidth="2"
              pathLength="1"
            />
            <path
              d="M70 590 V530 Q70 505 95 505 H520 Q545 505 545 480 V40"
              stroke="#4C9CC3"
              strokeOpacity=".25"
            />
            <circle cx="20" cy="95" r="5" fill="#FB923C" />
            <circle cx="545" cy="40" r="4" fill="#4C9CC3" />
          </svg>
          <div className="hero-console relative rounded-[1.75rem] border border-[#83B4CF]/35 bg-[#0B2A3E]/95 p-4 shadow-[0_32px_100px_-30px_#000] sm:p-6">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/15 pb-5">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Image
                    src="/logo-clyclick.png"
                    alt=""
                    width={32}
                    height={32}
                  />
                </span>
                <span className="font-display text-lg font-bold">
                  Tu negocio. Tu solución.
                </span>
              </div>
              <Layers3
                className="hidden h-5 w-5 shrink-0 text-sky-200 sm:block"
                aria-hidden="true"
              />
            </div>
            <p
              id="hero-choices-title"
              className="mb-3 text-sm font-semibold text-slate-200"
            >
              Elige tu actividad
            </p>
            <div
              role="group"
              aria-labelledby="hero-choices-title"
              className="grid grid-cols-2 gap-3"
            >
              {choices.map((item, index) => {
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={active === index}
                    aria-controls="hero-product-detail"
                    className={`hero-choice flex min-h-20 items-center gap-3 rounded-xl border p-3 text-left transition-colors sm:p-4 ${active === index ? "border-[#FB923C] bg-[#FB923C] text-[#17212B]" : "border-white/20 bg-[#12374E] text-white hover:border-[#FB923C]/70"}`}
                  >
                    <ItemIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="text-sm font-semibold leading-snug">
                      {item.activity}
                    </span>
                  </button>
                );
              })}
            </div>
            <div
              id="hero-product-detail"
              className="hero-product-panel mt-4 flex min-h-[370px] flex-col rounded-2xl bg-[#FAFAF7] p-5 text-[#17212B] sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0" aria-live="polite" aria-atomic="true">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Para {choice.activity.toLowerCase()}
                  </p>
                  <h2 className="mt-2 break-words font-display text-2xl font-bold text-brand sm:text-3xl">
                    {product.name}
                  </h2>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              {choice.slug === "mishkitap" ? (
                <Link
                  href="/mishkitap#capturas"
                  className="mt-4 block rounded-lg"
                  aria-label="Ver las capturas de Mishkitap"
                >
                  <Image
                    src="/projects/mishkitap-menu.webp"
                    alt="Captura real publicada por Mishkitap: gestión del menú y sus categorías."
                    width={1899}
                    height={866}
                    sizes="(min-width:1024px) 500px, 90vw"
                    className="max-h-40 w-full rounded-lg border border-slate-200 bg-white object-contain"
                  />
                  <span className="mt-2 block text-xs font-semibold text-primary">
                    Gestión del menú · ampliar captura →
                  </span>
                </Link>
              ) : (
                <ul className="mt-5 grid flex-1 content-center gap-2">
                  {choice.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">
                <p className="max-w-[15rem] text-sm font-semibold">
                  {product.price}
                </p>
                <Link
                  href={`/${product.slug}`}
                  aria-label={`Ver ${product.name}`}
                  className="hero-product-link inline-flex min-h-12 items-center gap-2 rounded-lg text-sm font-bold text-primary"
                >
                  Ver producto{" "}
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
