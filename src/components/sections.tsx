"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  LayoutGroup,
  useScroll,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Globe, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendlyPopupLink } from "@/components/calendly-popup-link";
import { Reveal } from "@/components/reveal";
import {
  ContainerScroll,
  CardsContainer,
  CardTransformed,
} from "@/components/ui/animated-cards-stack";
import { wa } from "@/lib/site";

// Azul de marca (más oscuro)
export const BRAND = "#023A5E";

const SOLUTIONS = [
  {
    id: 1,
    label: "Gastronomía",
    href: "/mishkitap",
    title: "Tu restaurante, ordenado",
    description:
      "Del menú y la comanda a la caja y la factura electrónica, todo en un solo sistema. [Texto placeholder — reemplázalo con el copy real.]",
  },
  {
    id: 2,
    label: "Salud",
    href: "/salud",
    title: "Tu consultorio al día con el MSP",
    description:
      "Historias clínicas, citas y cumplimiento normativo para consultorios odontológicos y médicos. [Texto placeholder.]",
  },
  {
    id: 3,
    label: "Atención al cliente",
    href: "/click-ia",
    title: "Un agente con IA en tus redes",
    description:
      "Responde, agenda y da soporte por WhatsApp, Instagram, Messenger y Telegram. [Texto placeholder.]",
  },
  {
    id: 4,
    label: "Ecommerce",
    href: "/ecommerce",
    title: "Vende en línea, ordenado",
    description:
      "Catálogo, pedidos, seguimiento y un dashboard de tu negocio. [Texto placeholder.]",
  },
  {
    id: 5,
    label: "Peluquerías y barberías",
    href: "/app-peluquerias",
    title: "Agenda, cobra y fideliza",
    description:
      "Citas en local y a domicilio, cobros con Payphone y recompensas, en una sola app. [Texto placeholder.]",
  },
  {
    id: 6,
    label: "Videos con IA",
    href: "/capacitacion-ia",
    title: "Videos con inteligencia artificial",
    description:
      "[PENDIENTE: descripción real de este servicio. Cuéntame de qué trata 'Videos con IA'.]",
  },
  {
    id: 7,
    label: "Consultorías",
    href: "/consultorias",
    title: "Acompañamiento en tecnología",
    description:
      "[PENDIENTE: descripción real de Consultorías. Pásame los temas/alcance.]",
  },
];

// Estrellas galácticas (misma semilla determinista que el hero)
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = mulberry32(20260619);
const STARS = Array.from({ length: 40 }, () => ({
  left: rand() * 100,
  top: rand() * 100,
  size: rand() < 0.8 ? 1 : 2,
  delay: rand() * 3,
}));

/* -------- Catálogo / Nuestras Soluciones -------- */

// Píldora reutilizable (estado recogido y seleccionado comparten estructura).
export function Pill({
  id,
  label,
  selected,
  onClick,
}: {
  id: number;
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      layoutId={`pill-${id}`}
      onClick={onClick}
      aria-pressed={selected}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex items-center gap-3 overflow-hidden rounded-full px-4 sm:px-5 py-2.5 sm:py-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        selected ? "w-full" : "w-60 sm:w-80"
      }`}
      style={{
        border: `3px solid ${BRAND}`,
        background: selected ? BRAND : "transparent",
      }}
    >
      {/* Estrellas galácticas (solo seleccionado) */}
      {selected && (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0">
          {STARS.map((st, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.45] }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.01 }}
              className="cly-twinkle absolute rounded-full bg-white"
              style={{
                left: `${st.left}%`,
                top: `${st.top}%`,
                width: `${st.size}px`,
                height: `${st.size}px`,
                animationDelay: `${st.delay}s`,
              }}
            />
          ))}
        </span>
      )}

      {/* Número en círculo (más grande que el texto) */}
      <span
        className="relative z-10 flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full text-base sm:text-xl font-bold"
        style={{
          border: `3px solid ${selected ? "#ffffff" : BRAND}`,
          background: selected ? "#ffffff" : "transparent",
          color: BRAND,
        }}
      >
        {id}
      </span>

      {/* Nombre del sector */}
      <span
        className="relative z-10 whitespace-nowrap font-display text-sm sm:text-lg font-semibold"
        style={{ color: selected ? "#ffffff" : BRAND }}
      >
        {label}
      </span>
    </motion.button>
  );
}

export function ProductGrid() {
  const [selected, setSelected] = useState<number | null>(1);
  const [mobileDetailId, setMobileDetailId] = useState<number | null>(null);
  const selectedItem = SOLUTIONS.find((s) => s.id === selected) ?? null;
  const mobileDetail = SOLUTIONS.find((s) => s.id === mobileDetailId) ?? null;
  const rest = SOLUTIONS.filter((s) => s.id !== selected);

  const selectSolution = (id: number) => {
    setSelected(id);
    if (window.matchMedia("(max-width: 767px)").matches) {
      setMobileDetailId(id);
    }
  };

  const handleSelectedPill = () => {
    if (selectedItem && window.matchMedia("(max-width: 767px)").matches) {
      setMobileDetailId(selectedItem.id);
      return;
    }
    setSelected(null);
  };

  const changeMobileDetail = (direction: -1 | 1) => {
    if (mobileDetailId === null) return;
    const currentIndex = SOLUTIONS.findIndex((solution) => solution.id === mobileDetailId);
    const nextIndex = (currentIndex + direction + SOLUTIONS.length) % SOLUTIONS.length;
    const nextId = SOLUTIONS[nextIndex].id;

    setSelected(nextId);
    setMobileDetailId(nextId);
  };

  return (
    <section
      id="soluciones"
      aria-labelledby="soluciones-title"
      className="bg-background py-20 sm:py-28 px-4 sm:px-6"
    >
      <Reveal className="text-center max-w-2xl mx-auto">
        <h2
          id="soluciones-title"
          className="font-display text-3xl sm:text-4xl font-bold text-balance"
          style={{ color: BRAND }}
        >
          Nuestras Soluciones
        </h2>
      </Reveal>

      {/* Contenedor principal ancho con bordes muy redondeados */}
      <div className="mt-10 mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-background p-6 sm:p-10 shadow-sm">
        <LayoutGroup>
          {/* Píldora seleccionada: sube arriba y ocupa todo el ancho */}
          {selectedItem && (
            <div className="mb-4">
              <Pill
                key={selectedItem.id}
                id={selectedItem.id}
                label={selectedItem.label}
                selected
                onClick={handleSelectedPill}
              />
            </div>
          )}

          {/* Zona inferior: píldoras recogidas (izq) + descripción (der) */}
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <motion.div layout className="flex flex-col items-start gap-3">
              {rest.map((s) => (
                <Pill
                  key={s.id}
                  id={s.id}
                  label={s.label}
                  selected={false}
                  onClick={() => selectSolution(s.id)}
                />
              ))}
            </motion.div>

            {/* Descripción del seleccionado, a la derecha de las recogidas */}
            <AnimatePresence mode="wait">
              {selectedItem && (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="hidden flex-1 md:block"
                >
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: BRAND }}
                  >
                    {selectedItem.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {selectedItem.description}
                  </p>
                  <a
                    href={selectedItem.href}
                    className="mt-6 inline-block bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
                  >
                    Elegir
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>

      {/* Pie de sección: enlace al Programa de Permuta */}
      <AnimatePresence>
        {mobileDetail && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center bg-[#001528]/70 p-4 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileDetailId(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="solution-detail-title"
              className="relative max-h-[calc(100svh-2rem)] w-full overflow-y-auto rounded-3xl border border-white/20 bg-brand p-6 text-white shadow-2xl"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 32 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-teal/20" />
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setMobileDetailId(null)}
                  aria-label="Cerrar detalle de la solución"
                  className="absolute right-0 top-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
                <p className="pr-12 text-sm font-semibold uppercase tracking-[0.16em] text-sky-200">
                  {mobileDetail.label}
                </p>
                <h3 id="solution-detail-title" className="mt-3 font-display text-2xl font-bold leading-tight">
                  {mobileDetail.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/75">
                  {mobileDetail.description}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => changeMobileDetail(-1)}
                    aria-label="Ver solución anterior"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <span className="text-sm font-semibold tabular-nums text-white/70">
                    {mobileDetail.id} de {SOLUTIONS.length}
                  </span>
                  <button
                    type="button"
                    onClick={() => changeMobileDetail(1)}
                    aria-label="Ver siguiente solución"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-5 flex justify-center">
                  <a
                    href={mobileDetail.href}
                    className="inline-block bg-[#FB923C] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#001528]"
                  >
                    Elegir
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="mt-6 text-center text-sm font-medium" style={{ color: BRAND }}>
        ¿Tienes productos o servicios intercambiables?{" "}
        <Link
          href="/permuta"
          className="link-inline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded"
        >
          Programa Permuta
        </Link>
      </p>
    </section>
  );
}


/* ---------------- ¿Por qué elegirnos? (cards apiladas por scroll) ---------------- */
const REASONS = [
  {
    id: 1,
    title: "Productos probados en entornos reales",
    desc: "No son maquetas: nuestro software ya funciona hoy en negocios reales.",
  },
  {
    id: 2,
    title: "Aliados a largo plazo",
    desc: "Buscamos activamente aliados a largo plazo, no clientes de una sola vez.",
  },
  {
    id: 3,
    title: "+30 proyectos realizados",
    desc: "Hemos automatizado, mejorado la vida de cada cliente y aumentado su productividad hasta +70%.",
  },
  {
    id: 4,
    title: "Pensado para el mercado ecuatoriano",
    desc: "Cada producto está hecho pensando en cómo operan los negocios en Ecuador.",
  },
];

const CARD_BG =
  "radial-gradient(ellipse at 50% 30%, #0a3157 0%, #001528 70%, #00080f 100%)";

export function WhyClyclick() {
  return (
    <section
      aria-labelledby="why-title"
      data-why
      className="relative isolate text-white"
      style={{
        background:
          "radial-gradient(ellipse at 50% 20%, #0a3157 0%, #001528 55%, #00080f 100%)",
      }}
    >
      {/* Estrellas del fondo de sección */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {STARS.map((s, i) => (
          <span
            key={i}
            className="cly-twinkle absolute rounded-full bg-white"
            style={{
              left: `${s.left}%`,
              top: `${s.top}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <ContainerScroll className="h-[240vh] sm:h-[320vh]">
          <div
            data-sticky
            className="sticky top-0 flex h-svh w-full flex-col items-center justify-center gap-6 px-4 py-6"
          >
            <h2
              id="why-title"
              className="relative z-30 text-center font-display text-2xl font-bold text-balance text-white sm:text-3xl lg:text-4xl"
            >
              ¿Por qué elegirnos?
            </h2>
            <CardsContainer
              data-cards
              className="aspect-square w-[min(78vw,52vh,380px)]"
            >
              {REASONS.map((r, i) => (
                <CardTransformed
                  key={r.id}
                  index={i + 2}
                  arrayLength={REASONS.length}
                  incrementRotation={i % 2 === 0 ? -6 : 6}
                  role="article"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 5 + i * 0.4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }}
                    className="relative flex size-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[1.75rem] border border-white/40 p-8 text-center shadow-[0_0_60px_-5px_rgba(255,255,255,0.35)]"
                    style={{ background: CARD_BG }}
                  >
                    {/* estrellas dentro de la card */}
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0">
                      {STARS.map((s, j) => (
                        <span
                          key={j}
                          className="cly-twinkle absolute rounded-full bg-white"
                          style={{
                            left: `${s.left}%`,
                            top: `${s.top}%`,
                            width: `${s.size}px`,
                            height: `${s.size}px`,
                            animationDelay: `${s.delay}s`,
                          }}
                        />
                      ))}
                    </span>
                    <h3 className="relative z-10 font-display text-2xl font-bold text-white sm:text-3xl text-balance">
                      {r.title}
                    </h3>
                    <p className="relative z-10 max-w-xs leading-relaxed text-white/80">
                      {r.desc}
                    </p>
                  </motion.div>
                </CardTransformed>
              ))}
            </CardsContainer>

            {/* CTAs */}
            <div className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/nosotros"
                className="bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#00080f]"
              >
                Nosotros
              </Link>
              <Link
                href="/contacto"
                className="bg-[rgb(22,171,57)] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[rgb(18,148,49)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(22,171,57)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#00080f]"
              >
                Contacto
              </Link>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}

/* ---------------- Bloque: Desarrollo a medida ---------------- */
export function CustomDevBlock() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-14 sm:px-14">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-teal/15" />
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white text-balance">
                ¿Necesitas un desarrollo a medida?
              </h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                Construimos el software que tu operación necesita: automatizamos tus
                procesos y lo armamos a tu medida.
              </p>
            </div>
            <CalendlyPopupLink
              className="shrink-0 bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
            >
              Hablemos
            </CalendlyPopupLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- ¿Con cuál te identificas? (arco de productos) ---------------- */
type ArcProduct = {
  name: string;
  desc: string;
  price: string;
  href: string;
  logo?: string;
  site?: string; // sitio propio (solo Mishkitap)
  websiteIcon?: boolean; // sin logo/nombre (Websites)
};

const ARC_PRODUCTS: ArcProduct[] = [
  { name: "Mishkitap", desc: "Administración de restaurantes", price: "Desde $30/mes", href: "/mishkitap", logo: "/logos/MISHKI.png", site: "https://mishkitap.app" },
  { name: "Ecommerce Click", desc: "Plataforma para vender en línea", price: "$1,100/año", href: "/ecommerce", logo: "/logos/ecommerceclick.png" },
  { name: "Click IA", desc: "Agente con IA que atiende en tus redes", price: "$30/mes por canal", href: "/click-ia", logo: "/logos/clickIA.png" },
  { name: "DentalClick", desc: "Software odontológico que cumple el MSP", price: "$350/año", href: "/dentalclick", logo: "/logos/DentalClick.png" },
  { name: "Click Peluquerías", desc: "Citas y cobros para peluquerías y barberías", price: "$500/año", href: "/peluquerias", logo: "/logos/clickpeluquerias.png" },
  { name: "Websites", desc: "Páginas y sitios web a medida", price: "Desde $150", href: "/websites", websiteIcon: true },
  { name: "Clyclick Academy", desc: "Capacitación y consultoría en IA y tecnología", price: "Desde $50/sesión", href: "/academy", logo: "/logos/clyclick-academy.png" },
  { name: "Doctorclick", desc: "Plataforma para consultorios multiespecialidad", price: "$700/año", href: "/doctorclick", logo: "/logos/doctorclick.png" },
];

const ARC_SPREAD = 0.62; // radianes por paso entre productos

function ArcCircle({
  index,
  focusIndex,
  radius,
  size,
  product,
}: {
  index: number;
  focusIndex: MotionValue<number>;
  radius: number;
  size: number;
  product: ArcProduct;
}) {
  const theta = (f: number) =>
    Math.max(-1.3, Math.min(1.3, (index - f) * ARC_SPREAD));
  // x negativo para próximos productos → entran por la IZQUIERDA y van a la derecha
  const x = useTransform(focusIndex, (f) => -radius * Math.sin(theta(f)));
  const y = useTransform(focusIndex, (f) => radius * (1 - Math.cos(theta(f))));
  const scale = useTransform(focusIndex, (f) =>
    Math.max(0.5, 1.12 - Math.abs(index - f) * 0.26)
  );
  const opacity = useTransform(focusIndex, (f) =>
    Math.max(0, 1 - Math.abs(index - f) * 0.34)
  );
  const zIndex = useTransform(focusIndex, (f) =>
    Math.round(100 - Math.abs(index - f) * 10)
  );

  return (
    <motion.div
      aria-hidden="true"
      className="absolute left-1/2 top-0 flex items-center justify-center rounded-full border-2 border-white bg-transparent shadow-[0_0_30px_-2px_rgba(255,255,255,0.85)]"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        x,
        y,
        scale,
        opacity,
        zIndex,
      }}
    >
      {product.websiteIcon ? (
        <Globe className="h-1/2 w-1/2 text-white" />
      ) : (
        <Image
          src={product.logo as string}
          alt=""
          width={120}
          height={120}
          className="h-[66%] w-[66%] object-contain"
        />
      )}
    </motion.div>
  );
}

export function Niches() {
  const sectionRef = useRef<HTMLElement>(null);
  const arcRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const N = ARC_PRODUCTS.length;
  const focusIndex = useTransform(scrollYProgress, (v) =>
    Math.max(0, Math.min(1, v)) * (N - 1)
  );

  const [active, setActive] = useState(0);
  useMotionValueEvent(focusIndex, "change", (f) => {
    const i = Math.max(0, Math.min(N - 1, Math.round(f)));
    setActive((prev) => (prev === i ? prev : i));
  });

  const [dims, setDims] = useState({ w: 768, radius: 360, size: 116, height: 360 });
  useEffect(() => {
    const update = () => {
      const w = arcRef.current?.offsetWidth ?? 768;
      const radius = Math.max(190, Math.min(380, w * 0.5));
      const size = Math.max(70, Math.min(116, w * 0.19));
      setDims({ w, radius, size, height: radius * (1 - Math.cos(1.25)) + size });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const current = ARC_PRODUCTS[active];

  return (
    <section
      ref={sectionRef}
      id="productos"
      data-arc
      className="relative bg-[#00080f]"
      style={{ height: "300vh" }}
    >
      <div
        className="sticky top-0 isolate flex h-svh w-full flex-col items-center justify-center gap-4 overflow-hidden px-4 py-8 text-white"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, #0a3157 0%, #001528 60%, #00080f 100%)",
        }}
      >
        {/* estrellas */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          {STARS.map((s, i) => (
            <span
              key={i}
              className="cly-twinkle absolute rounded-full bg-white"
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDelay: `${s.delay}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <h2 className="font-display text-2xl font-bold text-balance text-white sm:text-3xl lg:text-4xl">
            ¿Con cuál te identificas?
          </h2>
        </div>

        {/* Arco de productos */}
        <div
          ref={arcRef}
          className="relative z-10 mx-auto w-full max-w-3xl"
          style={{ height: dims.height }}
        >
          {/* Línea del anillo (arco visible) */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <path
              d={`M ${dims.w / 2 - dims.radius * 0.949} ${dims.radius * 0.685} A ${dims.radius} ${dims.radius} 0 0 1 ${dims.w / 2 + dims.radius * 0.949} ${dims.radius * 0.685}`}
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth={2}
              strokeDasharray="2 11"
              strokeLinecap="round"
            />
          </svg>

          {ARC_PRODUCTS.map((p, i) => (
            <ArcCircle
              key={p.name}
              index={i}
              focusIndex={focusIndex}
              radius={dims.radius}
              size={dims.size}
              product={p}
            />
          ))}
        </div>

        {/* Descripción + precio + CTA del producto enfocado */}
        <div className="relative z-10 flex min-h-[180px] w-full max-w-md flex-col items-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center"
            >
              <h3 className="font-display text-xl font-bold text-white">{current.name}</h3>
              <p className="mt-2 text-white/80">{current.desc}</p>

              {/* Espacio de link propio (solo Mishkitap, arriba del precio) */}
              {current.site && (
                <a
                  href={current.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-sm font-semibold text-sky-300 underline underline-offset-4 hover:text-sky-200"
                >
                  mishkitap.app
                </a>
              )}

              <p className="mt-2 font-display text-lg font-bold text-white">{current.price}</p>

              <Link
                href={current.href}
                className="mt-4 bg-[#FB923C] px-7 py-2.5 text-xs font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#00080f]"
              >
                Más información
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Confianza (counters) ---------------- */
function Counter({ to, suffix = "", label }: { to: number; suffix?: string; label: string }) {
  return (
    <div className="text-center">
      <div className="flex items-baseline justify-center gap-2 text-primary">
        <span className="text-5xl font-extrabold leading-none tabular-nums sm:text-6xl">
          {to}
        </span>
        {suffix && (
          <span className="text-xl font-semibold leading-none sm:text-2xl">
            {suffix.trim()}
          </span>
        )}
      </div>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{label}</p>
    </div>
  );
}

export function Trust() {
  return (
    <section aria-label="Prueba de confianza" className="bg-secondary/60 border-y border-border">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20">
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <Counter to={2} suffix=" años" label="Desarrollando software para Ecuador" />
            <Counter to={6} label="Ciudades con cobertura presencial" />
            <Counter to={6} suffix="+" label="Productos en operación real" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}

/* ---------------- CTA final ---------------- */
export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-brand">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-teal/15" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 py-20 sm:py-24 text-center">
        <Reveal>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Agenda una demo y velo funcionando
          </h2>
          <p className="mt-4 text-white/70">
            La mejor forma de decidir es ver el producto trabajando con tu caso.{" "}
            Atendemos con capacidad limitada (alrededor de 6 a 10 clientes) para dar
            foco y soporte real.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4">
            <Button asChild size="lg" variant="outlineLight">
              <Link href="/contacto">Ir a Contacto</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
