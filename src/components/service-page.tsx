import Link from "next/link";
import { wa } from "@/lib/site";
export function ServicePage({
  title,
  description,
  needs,
  inputs,
}: {
  title: string;
  description: string;
  needs: string[];
  inputs: string[];
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        Servicios · propuesta a medida
      </p>
      <h1 className="mt-4 break-words font-display text-4xl font-bold text-brand sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
        {description}
      </p>
      <a
        href={wa(`Hola, quiero consultar un proyecto de ${title}.`)}
        className="cta mt-8"
      >
        Consultar mi proyecto
      </a>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="font-display text-2xl font-bold">
            ¿Qué necesitas resolver?
          </h2>
          <p className="mt-4 text-slate-600">
            Estos son ejemplos de necesidades que puedes plantearnos:
          </p>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-600">
            {needs.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="font-display text-2xl font-bold">
            Qué contarnos para empezar
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-600">
            {inputs.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-8 rounded-2xl border border-sky-200 bg-sky-50 p-8">
        <h2 className="font-display text-2xl font-bold">
          Alcance y condiciones en una propuesta
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
          Antes de contratar acordamos qué se hará, los entregables, el precio,
          los plazos y el soporte. Las herramientas, licencias, equipos o
          servicios externos que requiera el proyecto deben especificarse en la
          propuesta.
        </p>
      </section>
      <Link
        href="/#soluciones"
        className="mt-8 inline-flex min-h-12 items-center font-semibold text-primary"
      >
        ← Volver a los servicios
      </Link>
    </div>
  );
}
