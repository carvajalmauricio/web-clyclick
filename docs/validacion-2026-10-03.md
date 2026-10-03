# Recuperación y validación de Clyclick — 3 de octubre de 2026

## Estado inicial y cambios

El entorno no contenía `/workspace/web-clyclick` ni un checkout previo recuperable. Se clonó `carvajalmauricio/web-clyclick`, rama `main`, desde `079b23fffe5182db31f86b26598ac226106905e7`. Esa versión mantenía el hero orbital, el catálogo animado y las páginas mínimas; se reconstruyeron el contenido y los ajustes a partir de las instrucciones proporcionadas.

Se completaron las páginas de ocho productos, el catálogo con público, descripción y precio, y las condiciones comerciales. Doctorclick a $700/año y la periodicidad anual de los dominios fueron confirmados en esta sesión. Los archivos originales de logos no se modificaron.

La portada muestra el mensaje y sus acciones desde el primer renderizado. El catálogo sigue inmediatamente al hero. Las razones para elegir Clyclick y el programa de permuta se presentan sin recorridos de animación. Se retiraron imágenes provisionales o inexistentes de Nosotros y Permuta. Se conservaron Syne y los iconos útiles.

Los servicios tienen páginas orientadas a consultar un proyecto, sin inventar paquetes, precios, plazos ni SLA. `/capacitacion` reutiliza Academy. La propuesta para definir la oferta está en `docs/propuesta-servicios.md`.

El menú usa controles de apertura con estado accesible, enlaces navegables con Tab, cierre con Escape, retorno del foco y cierre al salir o hacer clic fuera. Se corrigieron regiones principales anidadas, contraste, foco y enlaces. El servidor de pruebas sirve `out/` y resuelve rutas `.html`; ya no utiliza `next start`.

## Verificación ejecutada

Entorno: Node 24.19.0, npm 11.9.0, Next.js 16.2.9, React 19.2.4.

- `npm ci --cache /workspace/.npm`: satisfactorio.
- `npx tsc --noEmit`: satisfactorio.
- `npm run lint`: satisfactorio, sin errores ni advertencias.
- `npm run build`: satisfactorio. Se generó la exportación de todas las rutas. Google Fonts estuvo accesible en este entorno.
- Suite sobre producción: 117 pruebas satisfactorias en Chromium, con escritorio 1440×900, móvil 390×844 y tablet 820×1180. Incluye las 24 rutas públicas, una región principal y un H1, rutas e imágenes locales, contenido comercial, menús por teclado, salto al contenido, movimiento reducido, contenido inicial sin JavaScript y axe con reglas WCAG A/AA disponibles hasta 2.2.
- Comprobación adicional a 320 px: se encontró y corrigió el desbordamiento del título de Redes y telecomunicaciones. Las 6 comprobaciones dirigidas de reflow y esa página pasaron en los tres proyectos.
- Se revisaron capturas de portada móvil, catálogo de escritorio/tablet, Mishkitap móvil y Odontoclick de escritorio. Se generaron además capturas de Academy, Websites, Contacto y Consultoría de IA en los tres tamaños, disponibles en `/workspace/artifacts/clyclick/` durante esta sesión.
- `git diff --check`: satisfactorio.

## Límites de la verificación

WebKit se descargó, pero no pudo iniciarse por bibliotecas faltantes (`libgtk-4`, `libgraphene`, `libharfbuzz-icu`, `libmanette`, `libhyphen`, `libwoff2dec`, `libGLESv2`). `playwright install-deps` intentó elevar permisos y falló por autenticación. La prueba de lanzamiento de Safari quedó bloqueada por el entorno; no se aprobó la suite de Safari.

Axe y las pruebas ejecutadas no constituyen una certificación WCAG, una auditoría manual exhaustiva ni un estudio de seguimiento ocular. No se verificaron contratación, pagos, demos, provisión de pruebas de producto ni funcionamiento real de los servicios externos. El catálogo de servicios nuevos sigue requiriendo definición comercial conjunta.
