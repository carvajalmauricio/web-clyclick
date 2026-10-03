import { MapPin, Monitor, Handshake } from "lucide-react";
export function AboutImageCarousel() {
  return (
    <div className="grid content-center gap-8 rounded-3xl border border-sky-200 bg-sky-50 p-8 sm:p-12">
      <Monitor className="h-12 w-12 text-primary" aria-hidden="true" />
      <h2 className="font-display text-3xl font-bold text-brand">
        Tecnología con un objetivo concreto
      </h2>
      <p className="leading-relaxed text-slate-600">
        Productos especializados y proyectos a medida para negocios
        ecuatorianos.
      </p>
      <p className="flex gap-3 text-brand">
        <MapPin className="h-6 w-6 shrink-0" aria-hidden="true" />
        Riobamba y Quito
      </p>
      <p className="flex gap-3 text-brand">
        <Handshake className="h-6 w-6 shrink-0" aria-hidden="true" />
        Relaciones a largo plazo
      </p>
    </div>
  );
}
