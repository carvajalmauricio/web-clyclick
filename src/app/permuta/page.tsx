import { wa } from "@/lib/site";
import { PermutaConsiste } from "@/components/permuta-consiste";

const BRAND = "#023A5E";
const WA_PERMUTA = wa(
  "Hola, vengo de la web de Clyclick (*PERMUTA*). Quiero más información sobre el Programa de Permuta."
);

export default function Page() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="bg-[#f8fafc] py-20 sm:py-28 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

            {/* Izquierda */}
            <div>
              <h1
                className="font-display text-4xl font-bold text-balance sm:text-5xl lg:text-6xl"
                style={{ color: BRAND }}
              >
                Programa de Permuta
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-gray-800">
                Cambia tus productos/servicios por tecnología de calidad.
              </p>
              <div className="mt-8">
                <a
                  href={WA_PERMUTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
                >
                  Más información
                </a>
              </div>
            </div>

            {/* Derecha: placeholder imagen */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md rounded-2xl border-2 border-dashed border-gray-300 bg-gray-100 aspect-[4/3] flex items-center justify-center">
                <span className="text-sm font-medium text-gray-400">
                  Imagen próximamente
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ¿En qué consiste? ── */}
      <PermutaConsiste />
    </main>
  );
}
