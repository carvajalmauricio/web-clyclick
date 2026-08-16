import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidad | Clyclick y DentalNet",
  description: "Política de privacidad de CLYCLICK S.A.S. para sus plataformas, incluido DentalNet y su integración opcional con Google Calendar.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-10">
    <h2 className="font-display text-2xl font-bold text-brand">{title}</h2>
    <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

export default function PrivacidadPage() {
  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-bold uppercase tracking-wider text-primary">Información legal</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-brand sm:text-5xl">Política de Privacidad</h1>
      <p className="mt-5 text-muted-foreground">Última actualización: 16 de agosto de 2026</p>

      <Section title="1. Responsable del tratamiento">
        <p>
          CLYCLICK S.A.S., RUC {site.ruc}, con operación en Ecuador, es responsable del tratamiento de los datos personales conforme a esta política. Para consultas de privacidad o ejercicio de derechos, escríbenos a <a className="font-semibold text-primary underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </Section>

      <Section title="2. Información que tratamos">
        <p>
          Tratamos la información necesaria para prestar nuestras plataformas y servicios: datos de cuentas de usuario, datos de contacto, configuración del consultorio, información de agenda y, cuando corresponda a la plataforma contratada, información ingresada por los usuarios para operar su atención profesional.
        </p>
        <p>
          Cada profesional o consultorio es responsable de contar con la base legal, autorizaciones y avisos necesarios para ingresar y gestionar la información de sus pacientes dentro de DentalNet.
        </p>
      </Section>

      <Section title="3. Integración con Google Calendar">
        <p>
          La conexión con Google Calendar es opcional y se inicia únicamente cuando el profesional selecciona “Conectar con Google Calendar” dentro de DentalNet. Para prestar esa función, solicitamos permisos para identificar la cuenta conectada, listar los calendarios disponibles, consultar eventos necesarios para detectar horarios ocupados y crear, modificar o eliminar eventos de las citas sincronizadas.
        </p>
        <p>
          DentalNet no envía a Google Calendar diagnósticos, tratamientos, recetas, órdenes ni notas clínicas. El título del evento puede incluir el nombre del paciente solo si el profesional activa expresamente esa preferencia. Los tokens de acceso se almacenan cifrados y el profesional puede desactivar la sincronización o desconectar su cuenta en cualquier momento.
        </p>
        <p>
          El uso y la transferencia de la información recibida de las APIs de Google se ajustan a la <a className="font-semibold text-primary underline underline-offset-4" href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, incluidos los requisitos de uso limitado.
        </p>
      </Section>

      <Section title="4. Finalidades y conservación">
        <p>
          Usamos la información para autenticar usuarios, operar las funcionalidades contratadas, brindar soporte, proteger la seguridad del servicio y cumplir obligaciones legales aplicables. Conservamos los datos mientras la cuenta o relación contractual permanezca activa y durante el tiempo necesario para atender obligaciones, reclamaciones o exigencias normativas.
        </p>
      </Section>

      <Section title="5. Proveedores y seguridad">
        <p>
          Podemos utilizar proveedores tecnológicos para alojamiento, almacenamiento, comunicaciones y autenticación, incluidos Cloudflare, Google Cloud, Supabase y Google Calendar cuando el usuario activa esa integración. Aplicamos medidas razonables de seguridad técnica y organizativa, como control de acceso y cifrado de credenciales de integración. Ningún sistema es completamente invulnerable; si detectamos un incidente relevante, actuaremos conforme a la normativa aplicable.
        </p>
      </Section>

      <Section title="6. Derechos y cambios">
        <p>
          Puedes solicitar acceso, actualización, rectificación, eliminación u oposición al tratamiento de tus datos, conforme a la ley aplicable, escribiendo a nuestro correo de privacidad. Podremos actualizar esta política cuando cambien nuestras funcionalidades o requisitos legales; publicaremos la versión vigente en esta página.
        </p>
      </Section>

      <div className="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
        <Link href="/dentalnet" className="font-semibold text-primary underline underline-offset-4">Conoce DentalNet</Link>
        <span className="mx-2">·</span>
        <Link href="/terminos" className="font-semibold text-primary underline underline-offset-4">Términos del Servicio</Link>
      </div>
    </article>
  );
}
