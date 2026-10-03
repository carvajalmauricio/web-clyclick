# Auditoría SEO y preparación SEM de Clyclick

Fecha: 3 de octubre de 2026. Dominio revisado: https://clyclick.online. Repositorio: `carvajalmauricio/web-clyclick`, rama `main`.

## Conclusión

La base del sitio funciona: las 24 páginas revisadas responden 200, tienen un H1, contenido renderizado en HTML y enlaces a los productos. Las ofertas distinguen precios, adicionales, demos y pruebas. Sin embargo, el descubrimiento de varios servicios, la diferenciación de metadatos, la estabilidad visual móvil y la medición de consultas requieren trabajo antes de invertir de forma sostenida en Google Ads.

El favicon de Vercel se sustituyó por el símbolo original de Clyclick, sobre fondo azul para hacerlo visible. Se generaron ICO con tamaños 16/32/48/96/192, PNG de 192 y Apple Touch Icon de 180. El logo original no se modificó. Esta es la corrección de producto aplicada en esta auditoría; las demás acciones de este documento son recomendaciones pendientes.

No se consultaron cuentas de Search Console, Google Ads o GA4. Por tanto, no se conocen indexación real, consultas, posiciones, volumen de palabras clave, CPC, conversiones, CPA ni ROAS. Tampoco se certifica conformidad WCAG ni cumplimiento íntegro de políticas publicitarias. Una inspección HTTP no reproduce necesariamente las decisiones de Googlebot o AdsBot.

## Método y evidencia

- Rastreo del HTML público de 24 rutas, más robots, sitemap, ruta inexistente y variantes de URL.
- Inspección del código, metadatos, enlaces, recursos y cabeceras.
- Dos ejecuciones Lighthouse 13.5.0 sobre la portada publicada: móvil y escritorio, en Chromium, a través del proxy de esta sesión. Son mediciones de laboratorio, una por perfil; no representan el percentil 75 de usuarios reales.
- Consulta directa de documentación oficial de Google Search Central y Google Ads vigente durante esta revisión. Los documentos pueden cambiar.
- Iconos comprobados en el HTML exportado y en Chromium contra un servidor estático local: tres enlaces, respuesta 200 y bytes idénticos a los archivos de origen. Build, TypeScript y lint completos aprobados.

Los resultados de rastreo y los informes HTML/JSON de Lighthouse quedan en `/workspace/artifacts/clyclick-seo/`. No se incluyen páginas HTML ni recursos de terceros dentro del repositorio.

## Hallazgos y prioridades

| Prioridad | Evidencia observada | Acción propuesta y motivo |
| --- | --- | --- |
| P1 | `/consultoria-ia`, `/desarrollo-ia`, `/power-bi`, `/transformacion-digital`, `/cctv` y `/backups` no reciben enlaces desde el HTML inicial de las 24 páginas rastreadas. El menú crea sus enlaces al abrirse. | Incluir enlaces `<a href>` renderizados desde el servidor y una sección visible que lleve a los servicios. Google no hace clic en menús para descubrir enlaces. Conservar el comportamiento accesible de apertura/cierre. |
| P1 | No se detecta Google tag, GA4 ni Google Ads en el código/HTML; sí existe Cloudflare Insights en producción. | Definir y verificar conversiones antes de pagar tráfico. Cloudflare Insights no demuestra que exista medición de leads de Google Ads. No añadir etiquetas ni enviar datos personales sin configurar su finalidad y privacidad. |
| P1 | CLS móvil 0,205 y escritorio 0,128. Lighthouse identifica la consola del hero y la carga de Syne/Jakarta como contribuyentes. | Estabilizar geometría y métricas de fuente de respaldo, conservar Syne y repetir pruebas con fuentes lentas. Evitar cambios de altura al cargar o cambiar categorías. |
| P1 | `https://www.clyclick.online/` respondió 522 en dos comprobaciones independientes. Sin `www` responde 200; HTTP redirige 301 a HTTPS. | Revisar DNS y dominio personalizado del hosting y redirigir permanentemente `www` al dominio elegido. No se ha diagnosticado la causa del 522 ni consultado la configuración del proveedor. |
| P2 | `/sitemap.xml` y `/robots.txt` responden 404. | Crear sitemap con URLs canónicas, publicar robots con referencia al sitemap y enviarlo a Search Console. Un robots 404 no bloquea por sí mismo el rastreo; un sitemap tampoco garantiza indexación. |
| P2 | Portada, contacto, nosotros y permuta comparten título/descripción general. FAQ hereda la descripción general. 15 de 24 rutas no tienen canonical explícito. | Metadatos propios por intención y canonical absoluto por página. No colocar canonical de portada en todas las páginas desde el layout. Los productos ya tienen canonical, y Google puede elegir otra URL según sus señales. |
| P2 | `/capacitacion` replica Academy y apunta correctamente a `/academy` mediante canonical; no recibe enlaces en el HTML inicial. `/academy/` y `/academy.html` redirigen 308 a `/academy`. | Mantener una URL principal y valorar redirección permanente de `/capacitacion` a `/academy` si no habrá oferta distinta. El duplicado no demuestra una penalización. |
| P2 | Fuente WOFF2 y captura propia verificadas en producción llevan `Cache-Control: no-store, no-cache, must-revalidate, max-age=0`; `_headers` aplica esta regla globalmente. | Caché larga para archivos versionados de `_next/static`; estrategia de actualización apropiada para imágenes no versionadas y HTML. No aplicar `immutable` a archivos que puedan cambiar sin cambiar URL. |
| P2 | Portada tiene dos capturas reales de Mishkitap; aún no hay vídeos ni demostraciones reales de los otros siete productos. | Añadir demostraciones reales por producto, con explicación, datos ficticios en las capturas y procedencia. Aumentan la capacidad del visitante para valorar la oferta; no garantizan mejores posiciones. |
| P2 | No se encuentra JSON-LD en las 24 páginas. | Añadir `Organization` con nombre, URL, logo y datos reales; valorar `SoftwareApplication` cuando sus campos y condiciones estén sustentados en la página. No inventar valoraciones, reseñas ni direcciones. |
| P2 | Varios títulos dicen únicamente “producto — Clyclick”. Odontoclick ya describe categoría y país. | Describir producto e intención: “Mishkitap: software para restaurantes en Ecuador — Clyclick”, por ejemplo. Es una propuesta editorial, no una regla de longitud. Google puede reescribir títulos y fragmentos. |
| P2 | Algunos `aria-label` sustituyen el texto visible: “Conocer producto” frente a “Conocer Mishkitap”, “Ver producto” frente a “Ver Mishkitap”. Lighthouse lo identifica fuera de su puntuación de accesibilidad. | Incluir el texto visible en el nombre accesible: “Conocer producto: Mishkitap”. Ayuda a control por voz y corresponde a WCAG 2.5.3; no se afirma que sea un factor directo de posicionamiento. |
| P3 | Calendly carga CSS y JavaScript globalmente, aunque no todas las páginas necesitan una agenda. Lighthouse observa una cookie de tercero. | Valorar carga bajo demanda y revisar su tratamiento en privacidad. La cookie observada no basta para declarar un incumplimiento legal. |

P1: resolver antes de escalar campañas; P2: mejoras de descubrimiento, contenido y experiencia; P3: optimización posterior. Son prioridades de este proyecto, no categorías oficiales de Google.

### Rendimiento medido

| Perfil | Rendimiento Lighthouse | SEO automatizado | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- |
| Móvil | 85/100 | 100/100 | 2,7 s | 0,205 | 90 ms |
| Escritorio | 95/100 | 100/100 | 0,7 s | 0,128 | 0 ms |

Google recomienda LCP ≤2,5 s, INP ≤200 ms y CLS ≤0,1 en el percentil 75 de visitas reales. Estas pruebas no midieron INP real; TBT no lo sustituye. El proxy, el hardware y la simulación afectan los tiempos. El salto de contenido aparece en ambos perfiles y merece corregirse. El SEO 100/100 de Lighthouse cubre un conjunto limitado de comprobaciones y no evalúa indexación, autoridad, relevancia comercial o posiciones. Accesibilidad automatizada fue 100/100, pero también apareció el aviso de nombres accesibles: no implica conformidad WCAG.

### Inventario de metadatos

- Canonical presente: `/mishkitap`, `/odontoclick`, `/doctorclick`, `/click-ia`, `/ecommerce`, `/click-peluquerias`, `/websites`, `/academy` y `/capacitacion` (a Academy).
- Canonical ausente: `/`, `/contacto`, `/nosotros`, `/permuta`, `/faq`, `/consultoria-ia`, `/desarrollo-ia`, `/power-bi`, `/transformacion-digital`, `/redes-telecomunicaciones`, `/cctv`, `/backups`, `/dentalnet`, `/privacidad` y `/terminos`.
- Todos los 24 documentos tienen un H1. Las páginas de error consultadas sí devuelven 404, sin falso 200.
- Hay metadatos de productos y servicios; faltan títulos/descripciones específicos en páginas de empresa. Conviene complementar las tarjetas sociales, aunque Open Graph no es un requisito de posicionamiento orgánico.

## Contenido y confianza

Las páginas deben responder qué resuelve el producto, para quién, cómo funciona, qué incluye, qué se cobra aparte y cómo solicitar demo/prueba. Las condiciones conocidas ya permiten hacerlo sin promesas genéricas.

Priorizar una demostración de Mishkitap y Odontoclick, seguida de Doctorclick, Ecommerce y Peluquerías. Cada pieza debería mostrar una tarea completa, explicar límites y llevar a su página correspondiente. Para Click IA, mostrar una conversación de ejemplo identificada como demostración, sin presentar respuestas o resultados simulados como un cliente real.

Google recomienda contenido útil y fiable, no un número fijo de palabras ni una densidad de palabras clave. Evitar publicar artículos automáticos repetitivos para cada ciudad. Usar datos comerciales consistentes entre sitio, perfiles y documentación; solo crear o actualizar Google Business Profile si el negocio cumple sus criterios de elegibilidad. No inventar oficinas, premios, clientes o testimonios.

Los servicios nuevos todavía explican necesidades y alcances posibles. Antes de anunciarlos como ofertas cerradas, convertirlos en propuestas reales con entregables, límites y forma de contratación definidos. No publicar precios ni tiempos que no se hayan acordado.

Para vídeos: título y descripción propios, miniatura estable, vídeo accesible y transcripción/subtítulos. Si se busca aparecer como resultado de vídeo, considerar una página donde verlo sea el propósito principal; un vídeo decorativo del hero no cumple ese objetivo. Implementar `VideoObject` solo cuando exista el vídeo y coincida con el contenido visible.

**Actualización de Google relevante:** las FAQ siguen siendo útiles para los visitantes, pero Google dejó de mostrar resultados enriquecidos FAQ desde el 7 de mayo de 2026 y retiró su documentación. No se propone FAQ schema como promesa de obtener esos resultados.

## SEM: propuesta de estructura, sin lanzar campañas

Conviene empezar con campañas de búsqueda para ofertas existentes y verificables, separadas por intención. No enviar todos los anuncios a la portada. Los ejemplos de términos siguientes no tienen estimación de búsquedas ni CPC; deben validarse en Keyword Planner y con datos reales.

| Grupo inicial | Intención de búsqueda propuesta | Destino | Oferta que el anuncio puede afirmar |
| --- | --- | --- | --- |
| Restaurantes | software para restaurantes Ecuador; sistema POS restaurante; menú QR restaurante | `/mishkitap` | Planes desde $30/mes; contratación mínima 3 meses. Mostrar el mínimo cerca del precio. Solicitar demo. |
| Consultorios dentales | software odontológico Ecuador; agenda odontológica; odontograma digital | `/odontoclick` | $30/mes; prueba 7 días; sin instalación ni contratación mínima. $324/año si se anuncia pago anual. |
| Consultorios médicos | software para consultorio médico Ecuador | `/doctorclick` | $700/año; prueba 14 días; soporte $10/hora aparte. |
| Peluquerías | software de citas peluquería; gestión de estilistas | `/click-peluquerias` | $500/año; soporte incluido; demo. |
| Ecommerce | tienda online con facturación electrónica Ecuador | `/ecommerce` | $1.100/año; soporte $10/hora aparte; demo. Logística incluida significa conexión, no envíos gratuitos. |
| Agentes IA | agente IA WhatsApp para negocios Ecuador | `/click-ia` | $30/mes por canal; recargas/consumo aparte; demo, sin prueba gratuita. |

Websites y Academy pueden probarse después con sus propios destinos y presupuestos. Los nuevos servicios de alcance aún abierto no deberían competir por presupuesto inicialmente. La priorización de inversión entre productos necesita margen, capacidad de atención y tasa de cierre; no se deduce del código del sitio.

- Empezar con conjuntos acotados de términos de intención comercial; concordancia exacta/de frase como hipótesis inicial, no garantía contra búsquedas irrelevantes. Revisar términos reales y ajustar negativas. “Gratis”, “empleo”, “curso” o “descargar” solo se excluirían donde no correspondan a la oferta; no excluir “curso” en Academy ni búsquedas de prueba gratuita dental sin analizar su intención.
- Configurar Ecuador y revisar la opción de presencia geográfica según cobertura comercial. Separar marca y búsquedas genéricas si el volumen lo justifica. No establecer un presupuesto ficticio.
- Alinear anuncio, palabra clave, H1 y página de destino. Confirmar funcionamiento móvil, acceso de AdsBot y destinos sin errores antes de enviar campañas a revisión. Evitar anuncios a la variante `www` mientras falle.
- Transparencia: precio y periodicidad, coste de soporte/consumo, requisitos de contratación y alcance visibles. No prometer “ventas garantizadas”, “IA ilimitada”, “aprobado por Google”, certificaciones o pruebas gratuitas que no existen.
- El nivel de calidad de Google Ads es diagnóstico: CTR esperado, relevancia del anuncio y experiencia de la página. No se puede asignar uno sin datos de la cuenta; el valor agregado no es una métrica de rendimiento ni factor directo de la subasta.
- Comprar anuncios no concede mejores posiciones orgánicas. SEO y SEM comparten páginas de destino, pero sus resultados se miden por separado.

### Medición recomendada

1. Documentar eventos: clic de WhatsApp, selección de producto, solicitud de demo, reserva confirmada y lead calificado. Un clic de WhatsApp no demuestra que se envió un mensaje ni que hubo una venta.
2. Usar clics y exploración como conversiones secundarias; elegir como principales solicitudes confirmadas o leads calificados, evitando duplicados. Calendly exige comprobar confirmación real, no solo apertura del popup.
3. Para WhatsApp, definir un proceso de seguimiento comercial que identifique origen de la consulta y permita contar leads calificados sin enviar textos de conversaciones, cédulas o datos clínicos a Analytics. La atribución no se resuelve automáticamente con un enlace UTM al dominio de WhatsApp.
4. Configurar Google tag/GA4 o Google Ads, revisar privacidad y consentimiento según tráfico/jurisdicción aplicable, y validar con Tag Assistant y herramientas de depuración. La presencia de una etiqueta no demuestra consentimiento ni medición correcta.
5. Vincular Ads con la medición elegida, probar atribución y deduplicación y evaluar leads, tasa de cierre y coste por cliente. Calcular coste por lead aceptable con margen y cierre reales, sin inventar CPA/ROAS objetivo.

## Secuencia recomendada

1. Corregir el dominio `www`, estabilizar fuentes/hero y exponer enlaces rastreables de servicios.
2. Publicar sitemap/robots, completar metadatos y canonicals, mejorar caché y nombres accesibles.
3. Verificar Search Console: cobertura/indexación, canonical elegido, sitemap y Core Web Vitals de usuarios reales si hay datos. Añadir Organization y capturas/demos auténticas.
4. Preparar y probar medición de consultas, con seguimiento comercial. Elegir producto inicial según margen y capacidad.
5. Probar campañas de búsqueda acotadas; ajustar con términos y leads reales. No estimar éxito con Lighthouse ni con visitas únicamente.

## Fuentes oficiales consultadas

- [Guía de SEO para principiantes](https://developers.google.com/search/docs/fundamentals/seo-starter-guide): rastreo, títulos, contenido, enlaces y relación entre publicidad y resultados orgánicos.
- [Favicon en Google Search](https://developers.google.com/search/docs/appearance/favicon-in-search): icono representativo, cuadrado y rastreable. La guía actual recomienda tamaño superior a 48 px; mostrarlo en resultados no está garantizado.
- [Crear un sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
- [Consolidación de URLs duplicadas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).
- [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization).
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).
- [Contenido útil y fiable](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).
- [SEO de vídeo](https://developers.google.com/search/docs/appearance/video).
- [Actualizaciones de documentación: retirada de FAQ rich results](https://developers.google.com/search/updates#removing-faq-rich-result). La antigua URL de FAQ redirige aquí.
- [Google Ads: requisitos del destino](https://support.google.com/adspolicy/answer/6368661?hl=es).
- [Google Ads: nivel de calidad](https://support.google.com/google-ads/answer/6167118?hl=es).
- [Google Ads: medición de conversiones](https://support.google.com/google-ads/answer/1722022?hl=es).
- [Google Ads: información engañosa](https://support.google.com/adspolicy/answer/6020955?hl=es).
