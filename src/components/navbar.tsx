"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { nav, type NavItem } from "@/lib/site";
import { CalendlyPopupLink } from "@/components/calendly-popup-link";
import { odontoclickWa } from "@/lib/odontoclick";
function NavDisclosure({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !container.current?.contains(event.target)
      )
        setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);
  const id = `nav-${item.label.toLowerCase()}`;
  return (
    <div
      ref={container}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.preventDefault();
          event.stopPropagation();
          setOpen(false);
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
        className="flex min-h-12 items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold"
      >
        {item.label}
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </button>
      {open && (
        <div
          id={id}
          className={`nav-disclosure-panel absolute top-full z-50 rounded-2xl border border-slate-200 bg-white p-5 text-[#17212B] shadow-xl ${item.columns ? "-left-12 grid w-[min(54rem,calc(100vw-2rem))] grid-cols-3 gap-6" : "left-0 w-64"}`}
        >
          {item.columns
            ? item.columns.map((col) => (
                <div key={col.label}>
                  <Link
                    href={col.href}
                    onClick={() => setOpen(false)}
                    className="inline-flex min-h-12 items-center font-bold text-primary"
                  >
                    {col.label}
                  </Link>
                  <ul className="mt-2 space-y-1">
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setOpen(false)}
                          className="block rounded-lg px-2 py-2 text-sm hover:bg-sky-50"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            : item.children?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm hover:bg-sky-50"
                >
                  {link.label}
                </Link>
              ))}
        </div>
      )}
    </div>
  );
}
export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const trial = pathname.startsWith("/odontoclick");
  return (
    <header
      className="sticky top-0 z-50 bg-brand text-white"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-display text-lg font-bold"
        >
          <Image
            src="/logo-clyclick.png"
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span>Clyclick</span>
        </Link>
        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {nav.map((item) =>
            item.columns || item.children ? (
              <NavDisclosure key={`${pathname}-${item.label}`} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className="inline-flex min-h-12 items-center rounded-lg px-3 text-sm font-semibold"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="hidden lg:block">
          {trial ? (
            <a href={odontoclickWa()} className="cta text-sm">
              Probar gratis 7 días
            </a>
          ) : (
            <CalendlyPopupLink className="cta text-sm">
              Agendar una reunión
            </CalendlyPopupLink>
          )}
        </div>
        <button
          ref={toggle}
          type="button"
          className="flex h-12 w-12 items-center justify-center rounded-lg lg:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/20 px-4 py-4 lg:hidden"
        >
          {nav.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-3 font-semibold"
              >
                {item.label}
              </Link>
              {item.columns?.map((col) => (
                <div
                  key={col.label}
                  className="ml-3 border-l border-white/30 pl-3"
                >
                  <Link
                    href={col.href}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 text-sm font-bold text-sky-200"
                  >
                    {col.label}
                  </Link>
                  {col.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ))}
              {item.children?.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="ml-3 block px-3 py-3 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
