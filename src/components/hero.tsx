"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UtensilsCrossed,
  Stethoscope,
  Bot,
  ShoppingCart,
  Scissors,
  Lightbulb,
  ChevronDown,
  type LucideIcon,
} from "lucide-react";

const HEADLINE = "A UN CLICK DE HACER REALIDAD TUS SUEÑOS";

// 6 planetas = 6 sectores/productos (solo íconos, sin texto)
const PLANETS: LucideIcon[] = [
  UtensilsCrossed,
  Stethoscope,
  Bot,
  ShoppingCart,
  Scissors,
  Lightbulb,
];

// PRNG determinista (mulberry32) → mismas estrellas en servidor y cliente, sin hydration mismatch
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = { left: number; top: number; size: number; delay: number };

// Scroll suave propio (con easing) — fiable y consistente en iOS/Android/PC.
function smoothScrollTo(targetY: number, duration = 1000) {
  const html = document.documentElement;
  const prevBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | undefined;
  const ease = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const step = (ts: number) => {
    if (startTime === undefined) startTime = ts;
    const p = Math.min(1, (ts - startTime) / duration);
    window.scrollTo(0, startY + diff * ease(p));
    if (p < 1) requestAnimationFrame(step);
    else html.style.scrollBehavior = prevBehavior;
  };
  requestAnimationFrame(step);
}

function scrollToSoluciones(duration = 1000) {
  const el = document.getElementById("soluciones");
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY;
  smoothScrollTo(y, duration);
}

function useStars(count: number): Star[] {
  return useMemo(() => {
    const rand = mulberry32(20260618);
    return Array.from({ length: count }, () => ({
      left: rand() * 100,
      top: rand() * 100,
      size: rand() < 0.85 ? 1 : 2,
      delay: rand() * 4,
    }));
  }, [count]);
}

// Typing automático (timer). Las letras aparecen solas al cargar, en todos los dispositivos.
function useTypewriter(text: string, speed = 80) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setCount(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return { typed: text.slice(0, count), done: count >= text.length };
}

export function Hero() {
  const stars = useStars(60);
  const { typed, done } = useTypewriter(HEADLINE, 80);

  const handleStart = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToSoluciones(1000);
  };

  return (
    <section
      data-hero
      className="relative isolate overflow-hidden text-white"
      style={{
        background:
          "linear-gradient(to bottom, #001528 0%, rgba(0,21,40,0) 32%), radial-gradient(ellipse 92% 68% at 50% 54%, #0a3157 0%, #001528 52%, #00080f 100%)",
      }}
    >
      {/* Campo de estrellas */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {stars.map((s, i) => (
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col items-center px-4 py-8 sm:px-6">
        {/* Ecosistema orbital (centrado en el espacio disponible) */}
        <div className="flex flex-1 items-center justify-center">
          <div className="relative aspect-square w-[min(86vw,62vh,540px)]">
            {/* Anillo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-full border border-white/25"
            />

            {/* Planetas girando (CSS) */}
            <div className="cly-orbit absolute inset-0" aria-hidden="true">
              {PLANETS.map((Icon, i) => {
                const angle = (360 / PLANETS.length) * i;
                return (
                  <div
                    key={i}
                    className="absolute inset-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                      <div style={{ transform: `rotate(${-angle}deg)` }}>
                        <div className="cly-orbit-rev">
                          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/5 text-sky-200 shadow-[0_0_24px_-6px_rgba(125,211,252,0.6)] backdrop-blur-sm sm:h-16 sm:w-16">
                            <Icon className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={1.8} />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Texto central (typing automático) */}
            <div className="absolute inset-0 flex items-center justify-center px-[16%] text-center">
              <h1
                data-headline
                className="font-headline text-balance text-2xl font-semibold uppercase leading-tight tracking-wide text-white sm:text-3xl lg:text-4xl"
              >
                <span suppressHydrationWarning>{typed}</span>
                <span
                  className={`cly-caret ml-0.5 inline-block w-[2px] -translate-y-[0.05em] self-center bg-white align-middle ${done ? "opacity-0" : ""}`}
                  style={{ height: "0.95em" }}
                  aria-hidden="true"
                />
              </h1>
            </div>
          </div>
        </div>

        {/* CTA — aparece al completar la frase */}
        <div className="flex h-16 items-center justify-center">
          <AnimatePresence>
            {done && (
              <motion.a
                data-cta
                href="#soluciones"
                onClick={handleStart}
                aria-label="Empezar: ir a las soluciones"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center gap-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#00080f]"
              >
                <motion.span
                  className="font-headline text-sm font-bold uppercase tracking-[0.28em]"
                  style={{ color: "#FB923C" }}
                  animate={{
                    textShadow: [
                      "0 0 2px rgba(249,115,22,0.25)",
                      "0 0 16px rgba(249,115,22,0.85)",
                      "0 0 2px rgba(249,115,22,0.25)",
                    ],
                  }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  Empezar
                </motion.span>
                <motion.span
                  aria-hidden="true"
                  className="inline-flex"
                  style={{ color: "#FB923C" }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 1px rgba(249,115,22,0.3))",
                      "drop-shadow(0 0 10px rgba(249,115,22,0.85))",
                      "drop-shadow(0 0 1px rgba(249,115,22,0.3))",
                    ],
                  }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-6 w-6" strokeWidth={2.4} />
                </motion.span>
              </motion.a>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
