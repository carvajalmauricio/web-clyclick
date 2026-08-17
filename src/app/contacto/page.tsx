import { MessageCircle } from "lucide-react";
import { CalendlyPopupLink } from "@/components/calendly-popup-link";
import { ContactLocations } from "@/components/contact-locations";
import { wa } from "@/lib/site";

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand py-16 sm:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-teal/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-200">Hablemos</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl">Estamos listos para ayudarte.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/75">Cuéntanos qué necesita tu negocio. Te orientamos sobre el producto, servicio o solución que mejor encaje contigo.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CalendlyPopupLink className="inline-flex items-center justify-center bg-[#FB923C] px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 focus-visible:ring-offset-brand">Agendar una reunión</CalendlyPopupLink>
            <a href={wa("Hola, vengo de la web de Clyclick. Quiero más información.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"><MessageCircle className="h-4 w-4" aria-hidden="true" />Escribir por WhatsApp</a>
          </div>
        </div>
      </section>

      <ContactLocations />
    </>
  );
}
