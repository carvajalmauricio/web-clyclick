import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Maximize2, Film, ImageIcon } from "lucide-react";
import { projectMedia } from "@/lib/project-media";
import { productMediaSlots } from "@/lib/media-slots";

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
  const config = productSlug ? productMediaSlots[productSlug] : undefined;
  const pending =
    config?.slots.filter(
      (slot) => !media.some((item) => item.id === slot.id),
    ) ?? [];
  if (!media.length && !pending.length) return null;
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <h2
              id={`${id}-title`}
              className="font-display text-3xl font-bold text-brand sm:text-4xl"
            >
              {config
                ? `${config.name}, por dentro.`
                : "El producto, por dentro."}
            </h2>
            <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
              {config
                ? "Capturas y vídeos para conocer el producto. El material que todavía no está publicado aparece como en preparación."
                : "Estas pantallas de Mishkitap están publicadas en su sitio. Puedes ampliarlas y conocer la interfaz antes de solicitar una demo."}
            </p>
          </div>
          {!productSlug && (
            <Link
              href="/mishkitap"
              className="inline-flex min-h-12 items-center gap-2 font-semibold text-primary"
            >
              Conocer Mishkitap{" "}
              <ArrowUpRight aria-hidden="true" className="h-5 w-5" />
            </Link>
          )}
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
                {item.sourceUrl && (
                  <a
                    href={item.sourceUrl}
                    className="mt-3 inline-flex min-h-12 items-center text-sm font-semibold text-primary"
                  >
                    Ver publicación original →
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
          {pending.map((slot) => {
            const Icon = slot.kind === "video" ? Film : ImageIcon;
            return (
              <article
                key={slot.id}
                data-media-slot={slot.id}
                data-media-kind={slot.kind}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAF7]"
              >
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0B203B] to-[#023A5E] px-6 text-center text-white">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl font-bold">
                    {slot.kind === "video"
                      ? "Vídeo de demostración"
                      : "Captura del producto"}
                  </p>
                  <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#17212B]">
                    En preparación
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand">
                    {slot.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    {slot.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
