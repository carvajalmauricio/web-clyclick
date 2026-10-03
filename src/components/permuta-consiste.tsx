import Link from "next/link";
import { wa } from "@/lib/site";
const TERMINOS = [
  "Tu producto o servicio debe equivaler a la misma relación monetaria con un producto Clyclick que desees adquirir.",
  "Debes tener un objetivo concreto (Ejemplo: Tengo un consultorio dental y quiero ser más rápido atendiendo mis consultas).",
  "Buscamos socios a largo plazo, por lo que firmaremos un contrato de hasta 6 meses de permuta.",
  "Buscamos casos de éxito con nuestros productos ya probados, por lo que deberás cumplir con un uso mínimo: así mejoras tu operación y nosotros logramos clientes satisfechos.",
];

export function PermutaConsiste() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="font-display text-3xl font-bold text-brand">
        ¿En qué consiste la permuta?
      </h2>
      <ol className="mt-8 grid gap-6 md:grid-cols-3">
        <li className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-display text-xl font-bold">
            1. Elige un producto
          </h3>
          <p className="mt-4 text-slate-600">
            Identifica el software que corresponde a tu negocio.
          </p>
          <Link
            className="mt-4 inline-flex min-h-12 items-center font-semibold text-primary"
            href="/#productos"
          >
            Ver productos →
          </Link>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-display text-xl font-bold">
            2. Propón qué intercambiar
          </h3>
          <p className="mt-4 text-slate-600">
            Cuéntanos qué producto o servicio puedes ofrecer y qué objetivo
            quieres alcanzar.
          </p>
        </li>
        <li className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="font-display text-xl font-bold">3. Escríbenos</h3>
          <p className="mt-4 text-slate-600">
            Revisamos tu propuesta y acordamos las condiciones.
          </p>
          <a
            className="cta mt-4"
            href={wa("Hola, quiero información sobre el Programa de Permuta.")}
          >
            Consultar permuta
          </a>
        </li>
      </ol>
      <h3 className="mt-10 font-display text-2xl font-bold">
        Condiciones del programa
      </h3>
      <ul className="mt-5 list-disc space-y-3 pl-5 text-slate-600">
        {TERMINOS.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
