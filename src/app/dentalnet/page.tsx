import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, LockKeyhole, Stethoscope } from "lucide-react";
import { site, wa } from "@/lib/site";

export const metadata: Metadata = {
  title: "DentalNet | Gestión odontológica y agenda clínica",
  description:
    "DentalNet es la plataforma de Clyclick para administrar pacientes, historia clínica y agenda odontológica, con sincronización opcional con Google Calendar.",
};

const features = [
  {
    icon: Stethoscope,
    title: "Gestión clínica odontológica",
    description:
      "Organiza pacientes, historia clínica, diagnósticos, tratamientos, órdenes, recetas y documentos desde un solo espacio de trabajo.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda y Google Calendar",
    description:
      "Cada profesional puede conectar voluntariamente su propia cuenta, elegir un calendario y sincronizar sus citas para evitar cruces de horario.",
  },
  {
    icon: LockKeyhole,
    title: "Privacidad por diseño",
    description:
      "La integración con Google Calendar no envía diagnósticos, tratamientos ni notas clínicas. El acceso se puede desconectar y revocar en cualquier momento.",
  },
];

export default function DentalNetPage() {
  return (
    <>
      <section className="border-b border-border bg-gradient-to-br from-brand via-[#073a5d] to-primary py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#fbbf24]">Clyclick · Salud</p>
          <h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-6xl">
            DentalNet: gestión clínica que acompaña la atención odontológica.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Una plataforma para que los consultorios administren su información clínica, agenda y atención diaria con herramientas claras y seguras.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={wa("Hola, quiero conocer DentalNet y su integración con Google Calendar.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FB923C] px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Solicitar información
            </a>
            <Link
              href="/privacidad"
              className="border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Ver política de privacidad
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wider text-primary">Cómo funciona</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl">
            Tecnología al servicio de una atención organizada
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-display text-xl font-bold text-brand">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-bold text-brand">Integración opcional con Google Calendar</h2>
          <p className="mx-auto mt-5 max-w-3xl leading-relaxed text-muted-foreground">
            Cuando un profesional decide conectar su cuenta, DentalNet solicita permiso para consultar calendarios y eventos necesarios para la agenda, y para crear, actualizar o eliminar los eventos de sus citas. El profesional conserva el control: puede seleccionar el calendario, desactivar la sincronización o desconectarse desde su perfil.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Para más información sobre el tratamiento de datos, consulta nuestra <Link href="/privacidad" className="font-semibold text-primary underline underline-offset-4">Política de Privacidad</Link> o escríbenos a <a href={`mailto:${site.email}`} className="font-semibold text-primary underline underline-offset-4">{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
