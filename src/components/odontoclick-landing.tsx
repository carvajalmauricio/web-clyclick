import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  Check,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  FileHeart,
  FileText,
  Headphones,
  MessageCircle,
  ReceiptText,
  Settings2,
  Stethoscope,
  UserRoundCheck,
  Users,
  WalletCards,
} from "lucide-react";
import { odontoclickWa } from "@/lib/odontoclick";

const trialHref = odontoclickWa();

const features = [
  {
    icon: CalendarDays,
    title: "Agenda del consultorio",
    copy: "Organiza las citas y el calendario de cada profesional desde un solo lugar.",
  },
  {
    icon: FileHeart,
    title: "Historia clínica y odontograma",
    copy: "Consulta el registro clínico, diagnósticos y tratamientos de cada paciente.",
  },
  {
    icon: MessageCircle,
    title: "Recordatorios por WhatsApp",
    copy: "Incluye hasta 100 recordatorios al mes para ayudar a reducir olvidos de citas.",
  },
  {
    icon: ReceiptText,
    title: "Facturación electrónica",
    copy: "Emite facturas electrónicas sin límite de documentos dentro del plan.",
  },
  {
    icon: WalletCards,
    title: "Presupuestos y abonos",
    copy: "Registra presupuestos, pagos parciales y el avance económico de los tratamientos.",
  },
  {
    icon: Settings2,
    title: "Servicios personalizables",
    copy: "Carga tus servicios, ajusta precios y configura la información de tu consultorio.",
  },
];

const faqs = [
  {
    question: "¿Qué incluye el plan de USD 30?",
    answer:
      "Incluye impuestos, acceso para hasta 2 doctores, agenda, pacientes, historia clínica, odontograma, diagnósticos, tratamientos, presupuestos, abonos, servicios, facturación electrónica ilimitada y hasta 100 recordatorios por WhatsApp al mes.",
  },
  {
    question: "¿Qué pasa si necesito más de 100 recordatorios?",
    answer:
      "Puedes solicitar una recarga de mensajes. Antes de activarla te indicaremos el alcance y el valor correspondiente.",
  },
  {
    question: "¿Puedo probarlo antes de pagar?",
    answer:
      "Sí. La prueba guiada dura 7 días. Te ayudamos a preparar el consultorio y te acompañamos para que puedas evaluar el flujo con claridad.",
  },
  {
    question: "¿Puedo usarlo con más de dos doctores?",
    answer:
      "Sí. El plan publicado incluye hasta 2 doctores. Si tienes un equipo más grande o varios consultorios, escríbenos para configurar una opción acorde a tu operación.",
  },
  {
    question: "¿Se integra con Google Calendar?",
    answer:
      "La integración está en proceso de aprobación y todavía no forma parte de la oferta activa. La agenda propia de Odontoclick sí está disponible.",
  },
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={trialHref}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-2 bg-[#FB923C] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2 ${className}`}
    >
      Probar 7 días
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-xl lg:mx-0">
      <div className="absolute -inset-10 -z-10 rounded-full bg-sky-400/15 blur-3xl" />
      <div className="overflow-hidden border border-white/15 bg-[#071d31] shadow-[0_35px_90px_-40px_rgba(2,132,199,0.75)]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center bg-sky-500 text-white">
              <Stethoscope className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white">Odontoclick</p>
              <p className="text-[11px] text-sky-100/60">Tu jornada, en orden</p>
            </div>
          </div>
          <span className="flex items-center gap-2 text-xs text-sky-100/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> En línea
          </span>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
          <div className="space-y-3">
            <div className="border border-white/10 bg-white/[0.06] p-4">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sky-200">Hoy</p>
              <p className="mt-1 text-3xl font-extrabold text-white">8 citas</p>
              <div className="mt-4 h-1.5 bg-white/10">
                <div className="h-full w-3/4 bg-[#FB923C]" />
              </div>
            </div>
            <div className="border border-white/10 bg-white/[0.06] p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white">Recordatorios</p>
                <BadgeCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
              </div>
              <p className="mt-2 text-sm text-sky-100/65">6 enviados por WhatsApp</p>
            </div>
          </div>

          <div className="border border-white/10 bg-white/[0.06] p-4">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-bold text-white">Próximas citas</p>
              <CalendarDays className="h-4 w-4 text-sky-300" aria-hidden="true" />
            </div>
            <div className="space-y-2.5">
              {[
                ["09:00", "Control general", "Confirmada"],
                ["10:30", "Limpieza", "Recordatorio enviado"],
                ["12:00", "Tratamiento", "Por confirmar"],
              ].map(([time, treatment, status], index) => (
                <div key={time} className="flex items-center gap-3 border border-white/10 bg-[#001528]/60 p-3">
                  <span className="text-xs font-extrabold text-sky-300">{time}</span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-bold text-white">{treatment}</p>
                    <p className={`mt-0.5 truncate text-[10px] ${index < 2 ? "text-emerald-300" : "text-sky-100/50"}`}>{status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="border-t border-white/10 px-5 py-3 text-[10px] text-sky-100/45">
          Vista ilustrativa del flujo de trabajo
        </p>
      </div>
    </div>
  );
}

export function OdontoclickLanding() {
  return (
    <div className="overflow-hidden bg-[#f8fafc]">
      <section className="relative isolate bg-[#001528] text-white">
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:linear-gradient(rgba(56,189,248,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.12)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 border border-sky-300/25 bg-sky-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-sky-200">
              <span className="h-2 w-2 rounded-full bg-[#FB923C]" />
              Software dental para Ecuador
            </div>
            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              Menos tiempo organizando. <span className="text-sky-300">Más control de tu consultorio.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
              Agenda, historia clínica, odontograma, tratamientos, cobros y facturación electrónica en un solo flujo para tu práctica odontológica.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton />
              <Link
                href="#recorrido"
                className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Ver cómo funciona <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm text-slate-200 sm:grid-cols-3">
              {["USD 30 al mes", "Hasta 2 doctores", "Impuestos incluidos"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" /> {item}
                </div>
              ))}
            </div>
          </div>
          <DashboardPreview />
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            [UserRoundCheck, "Acompañamiento cercano", "Hablas con el equipo que desarrolla el producto."],
            [Headphones, "Soporte directo", "Atención por WhatsApp de 08:00 a 19:00."],
            [BadgeCheck, "Creado con odontólogos", "Más de un año de uso y mejora continua."],
          ].map(([Icon, title, copy]) => {
            const FeatureIcon = Icon as typeof UserRoundCheck;
            return (
              <div key={title as string} className="flex gap-4 py-7 md:px-7 first:md:pl-0 last:md:pr-0">
                <FeatureIcon className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="font-bold text-navy">{title as string}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{copy as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section id="recorrido" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Un solo recorrido</p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">La información acompaña al paciente, de la cita al pago.</h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              Evita repartir la operación entre agendas, hojas sueltas y archivos aislados. Cada paso queda conectado dentro del consultorio.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {[
              ["01", "Agenda", "Organiza la cita y asigna al profesional."],
              ["02", "Atiende", "Registra historia, odontograma y diagnóstico."],
              ["03", "Planifica", "Prepara tratamientos y presupuestos."],
              ["04", "Cobra", "Registra abonos y emite la factura electrónica."],
            ].map(([number, title, copy]) => (
              <li key={number} className="bg-white p-7">
                <span className="text-xs font-extrabold tracking-[0.2em] text-[#FB923C]">{number}</span>
                <h3 className="mt-4 text-xl font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#eef2f7] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Lo esencial del consultorio</p>
            <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Todo lo que necesitas para trabajar con orden.</h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="border border-slate-200 bg-white p-7 transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-11 w-11 items-center justify-center bg-sky-100 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="bg-[#001528] p-8 text-white sm:p-10">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-300">Prueba guiada</p>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Siete días para verlo en tu operación.</h2>
            <p className="mt-5 leading-7 text-slate-300">
              Te acompañamos a preparar un entorno de prueba, revisar el flujo y resolver dudas. La decisión se toma después de usarlo, con información clara.
            </p>
            <WhatsAppButton className="mt-8" />
          </div>
          <div>
            <ol className="space-y-8">
              {[
                [MessageCircle, "Cuéntanos cómo trabajas", "Revisamos cuántos doctores atienden y qué necesitas organizar primero."],
                [ClipboardList, "Preparamos la prueba", "Configuramos el punto de partida y te mostramos el recorrido principal."],
                [Users, "Te acompañamos", "Durante 7 días tienes contacto directo para preguntas y seguimiento."],
              ].map(([Icon, title, copy], index) => {
                const StepIcon = Icon as typeof MessageCircle;
                return (
                  <li key={title as string} className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-sky-200 bg-sky-50 text-primary">
                      <StepIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#FB923C]">Paso {index + 1}</p>
                      <h3 className="mt-1 text-xl font-bold text-navy">{title as string}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{copy as string}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      <section id="precio" className="bg-sky-50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid overflow-hidden border border-sky-200 bg-white shadow-[0_30px_80px_-45px_rgba(3,105,161,0.45)] lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <CircleDollarSign className="h-7 w-7 text-primary" aria-hidden="true" />
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Plan inicial</p>
              </div>
              <div className="mt-7 flex items-end gap-2">
                <span className="text-5xl font-extrabold text-navy">USD 30</span>
                <span className="pb-1 text-slate-500">/ mes</span>
              </div>
              <p className="mt-3 text-sm font-semibold text-slate-600">Impuestos incluidos · hasta 2 doctores</p>
              <p className="mt-5 text-sm leading-6 text-slate-600">
                Pago anual con 10% de descuento: <strong className="text-navy">USD 324 al año</strong> en lugar de USD 360.
              </p>
              <WhatsAppButton className="mt-8 w-full sm:w-auto" />
            </div>
            <div className="bg-[#001528] p-8 text-white sm:p-10 lg:p-12">
              <p className="text-sm font-bold">Incluye:</p>
              <ul className="mt-5 space-y-3 text-sm text-slate-200">
                {[
                  "Hasta 2 perfiles de doctor",
                  "Agenda y gestión de pacientes",
                  "Historia clínica y odontograma",
                  "Facturación electrónica ilimitada",
                  "Hasta 100 recordatorios por WhatsApp",
                  "Soporte y acompañamiento directo",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Preguntas frecuentes</p>
          <h2 className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">Antes de empezar</h2>
        </div>
        <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(({ question, answer }) => (
            <details key={question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                {question}
                <span className="text-xl text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-3xl pt-4 text-sm leading-7 text-slate-600">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-[#001528] px-4 py-20 text-center text-white sm:px-6">
        <div className="mx-auto max-w-3xl">
          <FileText className="mx-auto h-9 w-9 text-sky-300" aria-hidden="true" />
          <h2 className="mt-5 text-3xl font-extrabold sm:text-5xl">Tu consultorio puede empezar a ordenarse esta semana.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Escríbenos y agenda una presentación breve. Si el flujo encaja contigo, activamos la prueba guiada de 7 días.
          </p>
          <WhatsAppButton className="mt-8" />
        </div>
      </section>
    </div>
  );
}
