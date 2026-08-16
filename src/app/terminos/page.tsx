import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Términos del Servicio | Clyclick y DentalNet",
  description: "Términos generales de uso de los servicios y plataformas de CLYCLICK S.A.S., incluido DentalNet.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-10">
    <h2 className="font-display text-2xl font-bold text-brand">{title}</h2>
    <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

export default function TerminosPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">Información legal</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-brand sm:text-5xl">Términos del Servicio</h1>
      <p className="mt-5 text-muted-foreground">Última actualización: 16 de agosto de 2026</p>

      <Section title="1. Alcance">
        <p>
          Estos términos regulan el uso de las plataformas, productos y servicios de CLYCLICK S.A.S. Al contratar, acceder o utilizar un servicio, el usuario acepta estos términos y las condiciones comerciales acordadas para su cuenta.
        </p>
      </Section>

      <Section title="2. Uso de DentalNet">
        <p>
          DentalNet es una herramienta de gestión administrativa y clínica para profesionales y consultorios odontológicos. No sustituye el criterio profesional, el diagnóstico, la atención médica u odontológica, ni las obligaciones legales o éticas del usuario frente a sus pacientes.
        </p>
        <p>
          El profesional o consultorio es responsable de la veracidad de la información que ingresa, de gestionar adecuadamente las cuentas de sus usuarios y de cumplir las normas aplicables sobre historia clínica, protección de datos y consentimiento de pacientes.
        </p>
      </Section>

      <Section title="3. Google Calendar">
        <p>
          La sincronización con Google Calendar es una función opcional. Al conectarla, el usuario autoriza el acceso indicado en la pantalla de consentimiento de Google para sincronizar su agenda. El usuario puede desactivar la sincronización o revocar el acceso desde DentalNet o desde su cuenta de Google. La disponibilidad de Google Calendar también depende de sus propios servicios y políticas.
        </p>
      </Section>

      <Section title="4. Seguridad y cuentas">
        <p>
          El usuario debe mantener confidenciales sus credenciales, utilizar contraseñas seguras y comunicar de inmediato cualquier acceso no autorizado. CLYCLICK puede suspender accesos cuando sea necesario para proteger la seguridad, cumplir la ley o atender incumplimientos de estos términos.
        </p>
      </Section>

      <Section title="5. Soporte, disponibilidad y cambios">
        <p>
          Brindamos soporte conforme al plan contratado y procuramos mantener la disponibilidad del servicio. Pueden existir mantenimientos, actualizaciones o interrupciones razonablemente necesarias. Cuando una modificación relevante afecte el uso del servicio, la comunicaremos por los canales disponibles.
        </p>
      </Section>

      <Section title="6. Contacto">
        <p>
          Para consultas sobre estos términos o los servicios, contáctanos en <a className="font-semibold text-primary underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Section>

      <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
        <Link href="/dentalnet" className="font-semibold text-primary underline underline-offset-4">Conoce DentalNet</Link>
        <span className="mx-2">·</span>
        <Link href="/privacidad" className="font-semibold text-primary underline underline-offset-4">Política de Privacidad</Link>
      </div>
    </article>
  );
}
