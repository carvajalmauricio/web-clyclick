"use client";

import { wa } from "@/lib/site";
import { usePathname } from "next/navigation";
import { odontoclickWa } from "@/lib/odontoclick";

export function FloatingWhatsApp() {
  const pathname = usePathname();
  const isOdontoclick =
    pathname.startsWith("/odontoclick") || pathname.startsWith("/dentalclick");
  const href = isOdontoclick
    ? odontoclickWa()
    : wa("Hola, vengo de la web de Clyclick (CLYCLICK). Quiero más información.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={isOdontoclick ? "Probar Odontoclick por WhatsApp" : "Escríbenos por WhatsApp"}
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-transform hover:scale-110 active:scale-95"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.13 6.74 3.05 9.38L1.05 31.36l6.18-1.976A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.31 22.6c-.386 1.09-1.92 1.994-3.142 2.258-.836.178-1.928.32-5.604-1.204-4.7-1.948-7.726-6.724-7.962-7.034-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.424 1.636-3.904.386-.394.84-.572 1.32-.572.155 0 .295.008.42.014.378.016.568.038.818.636.31.748 1.07 2.602 1.16 2.79.092.188.184.444.058.7-.118.262-.222.378-.41.59-.188.21-.366.372-.554.598-.172.196-.366.408-.15.78.216.366.96 1.582 2.06 2.562 1.42 1.264 2.6 1.656 3.01 1.83.31.13.69.1.92-.146.292-.314.652-.834 1.018-1.348.26-.366.59-.412.94-.282.356.124 2.244 1.058 2.628 1.25.384.19.638.282.732.44.092.158.092.91-.294 2z"/>
      </svg>
    </a>
  );
}
