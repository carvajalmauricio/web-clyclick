import Link from "next/link";
import Image from "next/image";
import { products, site, wa } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-display font-bold text-lg text-white">
              <Image
                src="/logo-clyclick.png"
                alt="Clyclick"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              Clyclick
            </div>
            <p className="mt-3 text-sm text-white/60 max-w-xs">
              Software probado para hacer crecer tu negocio en Ecuador. Contrátalo
              o págalo con lo que tu negocio produce.
            </p>
            <div className="mt-4 flex gap-3 text-sm">
              <a href={site.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white">TikTok</a>
              <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-3">Soluciones</h4>
            <ul className="space-y-2 text-sm">
              {products.map((p) => (
                <li key={p.slug}>
                  <Link href={`/${p.slug}`} className="hover:text-white">{p.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-3">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/permuta" className="hover:text-white">Programa de Permuta</Link></li>
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/faq" className="hover:text-white">Preguntas frecuentes</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/dentalnet" className="hover:text-white">DentalNet</Link></li>
              <li><Link href="/privacidad" className="hover:text-white">Política de Privacidad</Link></li>
              <li><Link href="/terminos" className="hover:text-white">Términos del Servicio</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={wa("Hola, vengo de la web de Clyclick (CLYCLICK).")} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  WhatsApp +593 97 873 5190
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-white break-all">{site.email}</a>
              </li>
              <li>{site.cities}</li>
              <li className="text-white/60">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>{site.legalName} · RUC {site.ruc}</span>
          <span>© {new Date().getFullYear()} Clyclick. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  );
}
