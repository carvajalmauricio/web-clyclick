import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import { projectMedia } from "@/lib/project-media";

export function ProjectShowcase({
  productSlug,
  id = "proyectos",
}: {
  productSlug?: string;
  id?: string;
}) {
  const media = projectMedia.filter(
    (item) => !productSlug || item.productSlug === productSlug,
  );
  if (!media.length) return null;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-y border-slate-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2
              id={`${id}-title`}
              className="font-display text-3xl font-bold text-brand sm:text-4xl"
            >
              El producto, por dentro.
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
              Estas pantallas de Mishkitap están publicadas en su sitio. Puedes
              ampliarlas y conocer la interfaz antes de solicitar una demo.
            </p>
          </div>
          <Link
            href="/mishkitap"
            className="inline-flex min-h-12 items-center gap-2 font-semibold text-primary"
          >
            Conocer Mishkitap{" "}
            <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
          </Link>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {media.map((item) => (
            <figure
              key={item.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAF7]"
            >
              {item.kind === "image" ? (
                <a
                  href={item.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ampliar captura: ${item.title} (abre en otra pestaña)`}
                  className="group relative block bg-slate-100 p-3 sm:p-5"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(min-width:1024px) 600px, 100vw"
                    className="aspect-[16/10] w-full rounded-lg border border-slate-200 bg-white object-contain"
                  />
                  <span className="absolute bottom-6 right-6 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white shadow-lg">
                    <Maximize2 aria-hidden="true" className="h-5 w-5" />
                  </span>
                </a>
              ) : (
                <div className="p-3 sm:p-5">
                  <video
                    controls
                    playsInline
                    preload="none"
                    poster={item.poster}
                    aria-label={item.title}
                    className="aspect-video w-full rounded-lg bg-brand"
                  >
                    <source src={item.src} type="video/mp4" />
                    <track
                      kind="captions"
                      src={item.captions}
                      srcLang="es"
                      label="Español"
                      default
                    />
                    Tu navegador no puede reproducir este video.{" "}
                    <a href={item.src}>Descargar video</a>
                  </video>
                  <a
                    href={item.transcript}
                    className="mt-3 inline-flex min-h-12 items-center font-semibold text-primary"
                  >
                    Leer transcripción
                  </a>
                </div>
              )}
              <figcaption className="border-t border-slate-200 p-6">
                <h3 className="font-display text-xl font-bold text-brand">
                  {item.title}
                </h3>
                <p className="mt-2 leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <a
                  href={item.sourceUrl}
                  className="mt-3 inline-flex min-h-12 items-center text-sm font-semibold text-primary"
                >
                  Ver publicación original →
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
