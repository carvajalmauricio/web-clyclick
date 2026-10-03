import Link from "next/link";
import { ArrowRight } from "lucide-react";
export function Hero() {
  return (
    <section data-hero className="bg-[#FAFAF7] text-[#17212B]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.5fr_1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Tecnología para negocios en Ecuador
          </p>
          <h1
            data-headline
            className="mt-5 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl"
          >
            Software y tecnología para hacer crecer tu negocio en Ecuador.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Encuentra una solución para tu actividad: restaurantes,
            consultorios, tiendas y peluquerías. También creamos sitios web y te
            ayudamos a aplicar tecnología a tu negocio.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link data-cta href="#productos" className="cta">
              Explorar productos{" "}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-12 items-center rounded-xl border border-primary px-6 py-3 font-semibold text-primary"
            >
              Consultar mi proyecto
            </Link>
          </div>
        </div>
        <aside className="hidden lg:block rounded-3xl border border-sky-200 bg-white p-8">
          <h2 className="font-display text-2xl font-bold text-brand">
            Empieza por lo que necesitas resolver
          </h2>
          <ul className="mt-6 space-y-4 text-slate-600">
            <li>Organizar la operación de tu negocio.</li>
            <li>Presentar tus servicios y recibir consultas.</li>
            <li>Responder con un agente de IA personalizado.</li>
            <li>Aprender tecnología con un objetivo concreto.</li>
          </ul>
          <p className="mt-6 border-t border-slate-200 pt-5 text-sm">
            Revisa funciones, precios y condiciones antes de solicitar una demo
            o propuesta.
          </p>
        </aside>
      </div>
    </section>
  );
}
