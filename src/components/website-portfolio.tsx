import Image from "next/image";
import { Globe, ArrowUpRight } from "lucide-react";
import { websiteProjects, websiteProjectSlots } from "@/lib/media-slots";

export function WebsitePortfolio() {
  return (
    <section
      id="proyectos-web"
      aria-labelledby="proyectos-web-title"
      className="scroll-mt-24 border-y border-slate-200 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Portafolio
        </p>
        <h2
          id="proyectos-web-title"
          className="mt-3 font-display text-3xl font-bold text-brand sm:text-4xl"
        >
          Sitios que cuentan la historia de un negocio.
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-600">
          {websiteProjects.length
            ? "Conoce las marcas y negocios para los que hemos creado sitios web. Explora las capturas y visita sus proyectos públicos."
            : "Este espacio reunirá marcas, capturas y enlaces de nuestros proyectos web. Los proyectos aún no publicados aquí aparecen como en preparación."}
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {websiteProjects.map((project) => (
            <article
              key={project.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAF7]"
            >
              <Image
                src={project.screenshot}
                alt={project.alt}
                width={project.width}
                height={project.height}
                sizes="(min-width:1024px) 400px, (min-width:768px) 50vw, 100vw"
                className="aspect-[16/10] w-full bg-slate-100 object-contain"
              />
              <div className="p-6">
                {project.logo && (
                  <Image
                    src={project.logo.src}
                    alt={`Marca ${project.name}`}
                    width={project.logo.width}
                    height={project.logo.height}
                    className="mb-4 h-12 w-auto max-w-full object-contain"
                  />
                )}
                <h3 className="font-display text-xl font-bold text-brand">
                  {project.name}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {project.description}
                </p>
                {project.video && (
                  <div className="mt-5">
                    <video
                      controls
                      playsInline
                      preload="none"
                      poster={project.video.poster}
                      aria-label={`Vídeo del proyecto ${project.name}`}
                      className="aspect-video w-full rounded-lg bg-brand"
                    >
                      <source src={project.video.src} type="video/mp4" />
                      <track
                        kind="captions"
                        src={project.video.captions}
                        srcLang="es"
                        label="Español"
                        default
                      />
                      Tu navegador no puede reproducir este vídeo.{" "}
                      <a href={project.video.src}>Descargar vídeo</a>
                    </video>
                    <a
                      href={project.video.transcript}
                      className="mt-2 inline-flex min-h-12 items-center rounded-lg font-semibold text-primary"
                    >
                      Leer transcripción
                    </a>
                  </div>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-lg font-semibold text-primary"
                  aria-label={`Visitar sitio: ${project.name} (abre en otra pestaña)`}
                >
                  Visitar sitio{" "}
                  <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
          {websiteProjectSlots
            .filter(
              (id) => !websiteProjects.some((project) => project.id === id),
            )
            .map((id, index) => (
              <article
                key={id}
                data-website-slot={id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFAF7]"
              >
                <div className="flex aspect-[16/10] flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0B203B] to-[#023A5E] px-6 text-white">
                  <Globe className="h-10 w-10" aria-hidden="true" />
                  <p className="font-display text-xl font-bold">
                    Proyecto web {index + 1}
                  </p>
                  <span className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#17212B]">
                    En preparación
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-brand">
                    Un negocio, su sitio.
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    Aquí presentaremos la marca, una captura del proyecto y el
                    enlace a su sitio público.
                  </p>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
