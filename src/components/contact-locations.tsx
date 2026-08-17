"use client";

import { useState } from "react";
import { Clock3, ExternalLink, MapPin, Navigation, Phone } from "lucide-react";
import { site } from "@/lib/site";

const LOCATIONS = [
  {
    city: "Ambato",
    phone: "099 823 9782",
    phoneHref: "tel:+593998239782",
    mapUrl: "https://maps.app.goo.gl/mn5GThj3tC362AJS8",
  },
  {
    city: "Quito",
    phone: "097 873 5190",
    phoneHref: "tel:+593978735190",
    mapUrl: "https://maps.app.goo.gl/GmiBebzUu1v5VhHk6",
  },
  {
    city: "Riobamba",
    phone: "098 262 0805",
    phoneHref: "tel:+593982620805",
    mapUrl: "https://maps.app.goo.gl/7NNeyF8Mx1Ls5VQv6",
  },
];

export function ContactLocations() {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = LOCATIONS[activeIndex];

  return (
    <section aria-labelledby="sedes-title" className="bg-secondary/60 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Atención presencial</p>
          <h2 id="sedes-title" className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">Encuentra la sede más cercana</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Selecciona una ciudad para ver su contacto y abrir la ubicación en Google Maps.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {LOCATIONS.map((item, index) => {
              const active = index === activeIndex;
              return (
                <button
                  key={item.city}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={active}
                  className={`min-w-36 rounded-2xl border p-5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${active ? "border-brand bg-brand text-white shadow-lg" : "border-border bg-background text-brand hover:border-primary/40"}`}
                >
                  <span className="flex items-center gap-2 font-display text-xl font-bold"><MapPin className={`h-5 w-5 ${active ? "text-sky-200" : "text-teal"}`} aria-hidden="true" />{item.city}</span>
                  <span className={`mt-2 block text-sm ${active ? "text-white/70" : "text-muted-foreground"}`}>Ver sede y ruta</span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-brand p-7 text-white sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,rgba(14,165,233,0.38),transparent_28%),radial-gradient(circle_at_15%_88%,rgba(15,118,110,0.42),transparent_34%)]" />
            <div className="relative flex min-h-72 flex-col justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-200">Sede {location.city}</p>
                <h3 className="mt-3 font-display text-4xl font-bold">Clyclick {location.city}</h3>
                <a href={location.phoneHref} className="mt-6 inline-flex items-center gap-3 text-lg font-semibold text-white hover:text-sky-200">
                  <Phone className="h-5 w-5 text-[#FB923C]" aria-hidden="true" />
                  {location.phone}
                </a>
                <p className="mt-4 flex items-start gap-3 text-sm leading-relaxed text-white/70">
                  <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-sky-200" aria-hidden="true" />
                  <span>Horario de atención: {site.hours}</span>
                </p>
              </div>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-[#FB923C] px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-brand">
                  <Navigation className="h-4 w-4" aria-hidden="true" />Cómo llegar
                </a>
                <a href={location.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/40 px-6 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />Ver en Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
