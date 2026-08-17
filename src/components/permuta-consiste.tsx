"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Link from "next/link";
import { Pill, BRAND } from "@/components/sections";
import { Reveal } from "@/components/reveal";
import { CalendlyPopupLink } from "@/components/calendly-popup-link";
import { wa } from "@/lib/site";

const WA_PERMUTA = wa(
  "Hola, vengo de la web de Clyclick (*PERMUTA*). Quiero más información sobre el Programa de Permuta."
);

const TERMINOS = [
  "Tu producto o servicio debe equivaler a la misma relación monetaria con un producto Clyclick que desees adquirir.",
  "Debes tener un objetivo concreto (Ejemplo: Tengo un consultorio dental y quiero ser más rápido atendiendo mis consultas).",
  "Buscamos socios a largo plazo, por lo que firmaremos un contrato de hasta 6 meses de permuta.",
  "Buscamos casos de éxito con nuestros productos ya probados, por lo que deberás cumplir con un uso mínimo: así mejoras tu operación y nosotros logramos clientes satisfechos.",
];

type Step = {
  id: number;
  label: string;
  title: string;
  content: React.ReactNode;
};

const STEPS: Step[] = [
  {
    id: 1,
    label: "Elige un producto",
    title: "Elige un producto.",
    content: (
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        Conoce nuestro catálogo y elige el software que mejor encaja con tu
        negocio.{" "}
        <Link href="/#productos" className="link-inline">
          Ver productos
        </Link>
      </p>
    ),
  },
  {
    id: 2,
    label: "Piensa qué intercambiar",
    title: "Piensa en tu producto/servicio que podrías intercambiar.",
    content: (
      <>
        <p
          className="mt-3 text-sm font-semibold uppercase tracking-wider"
          style={{ color: BRAND }}
        >
          Términos
        </p>
        <ul className="mt-2 flex flex-col gap-3">
          {TERMINOS.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span
                className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full"
                style={{ background: BRAND }}
                aria-hidden="true"
              />
              {t}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: 3,
    label: "Llena el formulario",
    title: "Llena el formulario o escríbenos a nuestro WhatsApp.",
    content: (
      <>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          WhatsApp:{" "}
          <a
            href={WA_PERMUTA}
            target="_blank"
            rel="noopener noreferrer"
            className="link-inline"
          >
            0963 186 252
          </a>
        </p>
        <div className="mt-4">
          <a
            href="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=EGf41-EBHUaFmXWN5FQuKxFPZFlsQ8FHjuHX4ZWk2-RUQ1ZCRUxZT0ZZRlAzODBDM0dTSkFNTEgxTS4u"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
          >
            Llenar formulario
          </a>
        </div>
      </>
    ),
  },
  {
    id: 4,
    label: "Te respondemos",
    title: "Te responderemos a la brevedad posible.",
    content: (
      <div className="mt-4">
        <CalendlyPopupLink
          className="inline-block bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
        >
          Tengo más dudas
        </CalendlyPopupLink>
      </div>
    ),
  },
];

export function PermutaConsiste() {
  const [selected, setSelected] = useState<number | null>(1);
  const selectedItem = STEPS.find((s) => s.id === selected) ?? null;
  const rest = STEPS.filter((s) => s.id !== selected);

  return (
    <section
      aria-labelledby="consiste-title"
      className="bg-background py-20 sm:py-28 px-4 sm:px-6"
    >
      <Reveal className="text-center max-w-2xl mx-auto">
        <h2
          id="consiste-title"
          className="font-display text-3xl sm:text-4xl font-bold text-balance"
          style={{ color: BRAND }}
        >
          ¿En qué consiste?
        </h2>
      </Reveal>

      <div className="mt-10 mx-auto max-w-5xl rounded-[2.5rem] border border-border bg-background p-6 sm:p-10 shadow-sm">
        <LayoutGroup>
          {selectedItem && (
            <div className="mb-4">
              <Pill
                key={selectedItem.id}
                id={selectedItem.id}
                label={selectedItem.label}
                selected
                onClick={() => setSelected(null)}
              />
            </div>
          )}

          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <motion.div layout className="flex flex-col items-start gap-3">
              {rest.map((s) => (
                <Pill
                  key={s.id}
                  id={s.id}
                  label={s.label}
                  selected={false}
                  onClick={() => setSelected(s.id)}
                />
              ))}
            </motion.div>

            <AnimatePresence mode="wait">
              {selectedItem && (
                <motion.div
                  key={selectedItem.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="flex-1"
                >
                  <h3
                    className="font-display text-xl font-bold"
                    style={{ color: BRAND }}
                  >
                    {selectedItem.title}
                  </h3>
                  {selectedItem.content}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </LayoutGroup>
      </div>
    </section>
  );
}
