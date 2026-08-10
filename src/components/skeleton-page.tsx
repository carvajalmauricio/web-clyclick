import Link from "next/link";
import { wa } from "@/lib/site";

interface SkeletonPageProps {
  title: string;
  tag?: string;
  description?: string;
  cta?: string;
  waKeyword?: string;
}

export function SkeletonPage({
  title,
  tag,
  description = "Contenido próximamente. Mientras tanto, escríbenos y te contamos todo.",
  cta = "Más información",
  waKeyword = "CLYCLICK",
}: SkeletonPageProps) {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      {tag && (
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          {tag}
        </span>
      )}
      <h1 className="mt-3 font-display text-4xl font-bold text-balance text-brand sm:text-5xl">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
        {description}
      </p>
      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href={wa(`Hola, vengo de la web de Clyclick (*${waKeyword}*). Quiero saber más sobre ${title}.`)}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#FB923C] px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
        >
          {cta}
        </a>
        <Link
          href="/"
          className="px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-primary transition-colors duration-200 hover:text-primary/70"
        >
          ← Volver al inicio
        </Link>
      </div>
    </main>
  );
}
