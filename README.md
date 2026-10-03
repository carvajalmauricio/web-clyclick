# Clyclick

Sitio informativo en Next.js 16.2.9, React 19.2.4, TypeScript y Tailwind CSS 4. Usa exportación estática (`output: "export"`) e imágenes sin optimizador. Tipografías: Syne y Plus Jakarta Sans.

## Desarrollo

Entorno verificado: Node 24.19.0 y npm 11.9.0.

```bash
npm ci
npm run dev -- --hostname 0.0.0.0
```

Antes de modificar código, lee `AGENTS.md` y las guías relevantes incluidas en `node_modules/next/dist/docs/`.

## Producción local

```bash
npm run build
npm start
```

`npm start` sirve `out/` en el puerto 3210 y admite rutas como `/mishkitap` con su archivo `.html`. El servidor incluido es para comprobaciones locales. El alojamiento de producción debe servir los archivos de `out/` con esa misma resolución de rutas. `next start` no sirve esta exportación.

La compilación descarga las fuentes desde Google Fonts. Necesita acceso a `fonts.googleapis.com` y `fonts.gstatic.com`. Calendly tiene un enlace directo como alternativa al popup si su script no está disponible.

## Validación

```bash
npx tsc --noEmit
npm run lint
npx playwright install chromium webkit
# Si el sistema necesita bibliotecas y tienes permisos:
npx playwright install-deps chromium webkit
npm run test:e2e -- --project=desktop --project=mobile --project=tablet --workers=2
# Con dependencias de WebKit disponibles:
npm run test:e2e -- --project=safari --workers=2
```

Playwright compila y sirve la exportación estática. El puerto 3210 debe estar libre para evitar comprobar una versión anterior. Las pruebas incluyen estructura, rutas, imágenes, condiciones comerciales, navegación por teclado, movimiento reducido, contenido sin JavaScript y comprobaciones automáticas con axe. Las capturas se guardan en `test-results/`.

Las comprobaciones automáticas no constituyen certificación WCAG ni estudio de seguimiento ocular.

## Contenido comercial

Los precios y resúmenes del catálogo están en `src/lib/site.ts`; los detalles en las páginas de `src/app/`. Las páginas de servicios invitan a definir una propuesta. El documento [propuesta de servicios](docs/propuesta-servicios.md) contiene alcances sugeridos para desarrollar la oferta, todavía sin precios ni compromisos comerciales.
