"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav } from "@/lib/site";
import { CalendlyPopupLink } from "@/components/calendly-popup-link";
import { odontoclickWa } from "@/lib/odontoclick";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isOdontoclick = pathname.startsWith("/odontoclick");

  const odontoclickHref = odontoclickWa();

  return (
    <header className="sticky top-0 z-50 w-full bg-brand text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-display font-bold text-lg text-white">
          <Image
            src="/logo-clyclick.png"
            alt="Clyclick"
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span>Clyclick</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => {
            // Mega-menú (Servicios): columnas con sub-navegación
            if (item.columns) {
              return (
                <div key={item.href} className="group static">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <div className="invisible absolute left-1/2 top-full z-50 w-[min(56rem,calc(100vw-2rem))] -translate-x-1/2 translate-y-1 rounded-2xl border border-border bg-card p-6 opacity-0 shadow-2xl transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <div className="grid grid-cols-3 gap-6">
                      {item.columns.map((col) => (
                        <div key={col.href}>
                          <Link
                            href={col.href}
                            className="text-sm font-semibold text-brand hover:text-primary transition-colors"
                          >
                            {col.label}
                          </Link>
                          <div className="mt-3 flex flex-col gap-1">
                            {col.links.map((link) => (
                              <Link
                                key={link.href}
                                href={link.href}
                                className="rounded-lg px-3 py-1.5 text-sm text-foreground/70 hover:bg-secondary hover:text-primary transition-colors"
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // Submenú simple (Programas)
            if (item.children) {
              return (
                <div key={item.href} className="group relative">
                  <button
                    type="button"
                    aria-haspopup="menu"
                    className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                  <div className="invisible absolute left-0 top-full w-64 translate-y-1 rounded-xl border border-border bg-card p-2 opacity-0 shadow-xl transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // Enlace plano
            return (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          {isOdontoclick ? (
            <a
              href={odontoclickHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-[#FB923C] text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
            >
              Probar 7 días
            </a>
          ) : (
            <CalendlyPopupLink
              className="inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-widest px-5 py-2.5 bg-[#FB923C] text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
            >
              Agendar una reunión
            </CalendlyPopupLink>
          )}
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 text-[#FB923C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C]/60"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden max-h-[calc(100vh-4rem)] overflow-y-auto bg-brand px-4 py-4">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <div key={item.href}>
                {item.columns || item.children ? (
                  <button
                    type="button"
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega-menú → columnas apiladas */}
                {item.columns && (
                  <div className="ml-3 flex flex-col gap-3 border-l border-white/10 pl-3 pb-2">
                    {item.columns.map((col) => (
                      <div key={col.href}>
                        <Link
                          href={col.href}
                          onClick={() => setOpen(false)}
                          className="block px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-light"
                        >
                          {col.label}
                        </Link>
                        {col.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}

                {/* Submenú simple */}
                {item.children && (
                  <div className="ml-3 flex flex-col gap-1 border-l border-white/10 pl-3 pb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-lg px-3 py-2 text-sm text-white/70 hover:text-white"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {isOdontoclick ? (
              <a
                href={odontoclickHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-3 w-full inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-widest px-8 py-3.5 bg-[#FB923C] text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
              >
                Probar 7 días
              </a>
            ) : (
              <CalendlyPopupLink
                className="mt-3 w-full inline-flex items-center justify-center whitespace-nowrap text-xs font-bold uppercase tracking-widest px-8 py-3.5 bg-[#FB923C] text-white transition-colors duration-200 hover:bg-[#f97316] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB923C] focus-visible:ring-offset-2"
              >
                Agendar una reunión
              </CalendlyPopupLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
