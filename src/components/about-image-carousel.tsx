"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SLIDES = [
  { src: "/nosotros/mision-vision-01.jpg", alt: "Clyclick: misión y visión" },
  { src: "/nosotros/mision-vision-02.jpg", alt: "Equipo o proyectos de Clyclick" },
  { src: "/nosotros/mision-vision-03.jpg", alt: "Tecnología para negocios con Clyclick" },
];

export function AboutImageCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % SLIDES.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-96 overflow-hidden rounded-3xl bg-brand sm:min-h-[34rem]">
      {/* Coloca las tres imágenes en public/nosotros/ con los nombres definidos en SLIDES. */}
      {SLIDES.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 42vw, 100vw"
          className={`object-cover transition-opacity duration-700 ${index === active ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <div className="absolute inset-x-0 bottom-5 z-10 flex justify-center gap-2">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Ver imagen ${index + 1}`}
            aria-current={index === active}
            className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${index === active ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}
