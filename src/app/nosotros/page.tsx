import Link from "next/link";
import { CheckCircle2, MapPin } from "lucide-react";
import { AboutImageCarousel } from "@/components/about-image-carousel";
import { CalendlyPopupLink } from "@/components/calendly-popup-link";
import { site } from "@/lib/site";

const VALUES = [
  "Cercanía con cada negocio y sus desafíos reales.",
  "Soluciones claras, útiles y pensadas para operar mejor.",
  "Compromiso con resultados y relaciones a largo plazo.",
];

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand py-14 sm:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-teal/20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="max-w-5xl font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Tecnología cercana para negocios que quieren avanzar.
          </h1>
          <p className="mt-5 max-w-5xl text-left text-lg leading-relaxed text-white/75 sm:text-justify">
            Todo empieza con un click.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch lg:py-28">
        <AboutImageCarousel />

        <div className="grid content-center gap-8">
          <div>
            <h2 className="font-display text-3xl font-bold text-brand">Misión</h2>
            <p className="mt-3 text-left text-lg leading-relaxed text-muted-foreground sm:text-justify">Impulsar el crecimiento de los negocios ecuatorianos mediante tecnología accesible, software probado y acompañamiento que simplifique su operación.</p>
          </div>
          <div className="border-t border-border pt-8">
            <h2 className="font-display text-3xl font-bold text-brand">Visión</h2>
            <p className="mt-3 text-left text-lg leading-relaxed text-muted-foreground sm:text-justify">Ser un aliado tecnológico de referencia para las empresas que buscan digitalizarse, innovar y construir operaciones más competitivas.</p>
          </div>
          <div className="border-t border-border pt-8">
            <h2 className="font-display text-3xl font-bold text-brand">Valores</h2>
            <ul className="mt-4 space-y-3">
              {VALUES.map((value) => (
                <li key={value} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="text-center font-display text-3xl font-bold text-brand sm:text-4xl">Impulsado por Clyclick S.A.S.</h2>
          <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative min-h-80 overflow-hidden rounded-3xl border border-sky-100 bg-sky-100 sm:min-h-96">
              {/* Reemplaza este contenedor por:
              <Image src="/nosotros/equipo-clyclick.jpg" alt="Equipo de Clyclick" fill className="object-cover" />
              */}
            </div>
            <div>
              <p className="text-left text-lg leading-relaxed text-muted-foreground sm:text-justify">Somos una empresa ecuatoriana que diseña, implementa y acompaña soluciones digitales. Nuestro enfoque combina productos especializados con servicios a medida para resolver problemas reales de operación.</p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium text-brand">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2"><MapPin className="h-4 w-4 text-teal" aria-hidden="true" />{site.cities}</span>
                <span className="rounded-full border border-border bg-background px-4 py-2">RUC {site.ruc}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-brand px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-teal/25" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">¿Quieres conocer más?</h2>
            <p className="mt-4 text-left text-lg leading-relaxed text-white/75 sm:text-justify">Conversemos sobre cómo la tecnología puede ayudar a que tu negocio avance.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CalendlyPopupLink className="inline-flex items-center justify-center border border-white/50 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Agendar una reunión
              </CalendlyPopupLink>
              <Link href="/contacto" className="inline-flex items-center justify-center bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-brand transition-colors hover:bg-sky-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
