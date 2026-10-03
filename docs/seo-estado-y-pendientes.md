# Estado del SEO orgánico y trabajo pendiente

Actualización: 3 de octubre de 2026. Objetivo: captar búsquedas relevantes de potenciales clientes de Ecuador, sin campañas pagadas. El sitio no puede considerarse “terminado para SEO” por publicar un sitemap o aprobar Lighthouse.

## Cambios de esta etapa

- Tres guías originales vinculadas con productos: elección de un POS para restaurantes, agenda/odontograma de consultorio y agente de IA multicanal. Incluyen recorridos de evaluación, límites de la oferta y preguntas concretas de contratación. No atribuyen resultados a clientes ni anuncian funciones nuevas.
- Centro `/guias`, enlaces desde el footer y desde las páginas relacionadas; canonical y metadatos propios en las guías, datos estructurados Article con autoría de Clyclick. No se añadió marcado de reseñas ni FAQ rich results.
- Sitemap ampliado a 27 URLs canónicas. El duplicado `/capacitacion` continúa apuntando a Academy y no se incluye.
- Recursos versionados de `_next/static/` con caché de un año e `immutable`. Se retiró la regla global que impedía almacenar todo el sitio. No se aplica caché inmutable a imágenes o HTML sin nombre versionado.
- Calendly descarga su CSS y JavaScript cuando se solicita la agenda; espera ambos recursos, indica carga y conserva el destino directo si el widget falla. La página también funciona con JavaScript desactivado. Las pruebas de popup usan respuestas controladas, sin reservar citas reales.
- Los nombres accesibles de los enlaces del hero y las tarjetas ahora incluyen su texto visible. Esto mejora la navegación por voz; no se presenta como factor directo de ranking.
- Syne y Plus Jakarta Sans siguen configuradas y precargadas. `font-display: optional` evita cambiar de fuente tardíamente: en una primera visita con descarga lenta puede mantenerse la alternativa de esa visita; con fuente disponible se conserva la identidad tipográfica. No se oculta el mensaje ni se retrasa la acción del hero para esperar fuentes.

## Qué falta para competir mejor

### 1. Evidencia real del producto y de los proyectos

Los espacios de material no sustituyen las demostraciones. Prioridad: vídeo de Mishkitap, agenda/odontograma de Odontoclick y conversación multicanal de Click IA, con subtítulos y transcripción. Para Websites, publicar marcas, capturas y enlaces reales autorizados. Para Ecommerce, mostrar una tienda y un pedido con datos de prueba. Revisar que las capturas existentes de Mishkitap representen la versión que se quiere promocionar.

Consultar `material-proyectos.md` para los campos y archivos. No se inventarán proyectos o testimonios para llenar las tarjetas. Solo se añaden resultados comerciales si hay evidencia y permiso de publicación.

### 2. Datos de búsqueda propios

Search Console está registrado en la cuenta del usuario, pero la sesión todavía no tiene una conexión autorizada que lea sus datos. Se investigó Windsor.ai, cuyo catálogo anuncia un plan gratuito; no se ha confirmado instalación ni autenticación. Tampoco hay credenciales para la API oficial. La propiedad a consultar es `sc-domain:clyclick.online`.

La investigación pública de 13 frases semilla aporta ideas, no volúmenes ni posiciones. Google presentó una comprobación de tráfico al consultar resultados, por lo que no se afirma haber medido la competencia del top 10. Ver `seo-investigacion-2026-10-03.md` y sus datos reproducibles.

Al obtener acceso: revisar consultas y páginas de los últimos 90 días; comparar periodos de 28 días y segmentar Ecuador, dispositivos y marca/no marca. Diferenciar fechas anteriores al despliegue. Priorizar términos relevantes con impresiones existentes y posibilidades de mejorar su respuesta. Posición media no es una posición fija ni una probabilidad de llegar al primer lugar.

### 3. Dominio con www

`https://www.clyclick.online/` sigue respondiendo 522. Se debe revisar el dominio personalizado y DNS de Cloudflare Pages y redirigir permanentemente a `https://clyclick.online/`. No se cambió DNS ni se diagnosticó una causa exacta sin consultar la cuenta. El catálogo de plugins consultado no devolvió una integración Cloudflare que permita hacerlo desde esta sesión.

### 4. Reputación y seguimiento comercial

Publicar quién hace el trabajo, proyectos comprobables y perfiles de empresa coherentes. Obtener menciones y enlaces cuando exista una relación real con los proyectos, marcas o comunidades correspondientes; no se ha contactado a nadie ni se han comprado enlaces. La propia página y una guía no crean automáticamente reputación externa.

Comprobar qué consultas orgánicas acaban en solicitudes reales y contrataciones. Cloudflare Insights no proporciona por sí mismo atribución de leads. Un clic a WhatsApp no equivale a una consulta enviada. Definir una medición respetuosa de los datos del cliente antes de atribuir ventas al SEO.

### 5. Iteración con datos actuales

Después de que Google vuelva a rastrear, revisar canonical elegido, cobertura/indexación, consultas, clics y páginas. Evaluar las guías y ampliar lo que resuelva necesidades reales. Si un título atrae una intención distinta al producto, corregirlo en lugar de añadir palabras repetidas. Mantener precios, canales y condiciones actualizados.

Las mediciones de laboratorio no prueban Core Web Vitals de usuarios reales. Para estos últimos se necesita el percentil 75 de LCP, INP y CLS, con muestra suficiente. No se certifica conformidad WCAG a partir de pruebas automáticas. WebKit sigue pendiente por bibliotecas del sistema.

## Criterio de éxito

Aumentar visibilidad para consultas comerciales apropiadas, clics útiles y solicitudes calificadas. Se puede evaluar la competencia y mejorar las páginas; ninguna herramienta ni implementación garantiza el primer lugar. El estado de este trabajo es una base técnica y editorial mejorada, con la fase de datos privados, pruebas reales y seguimiento pendiente.

## Validación de esta etapa

- TypeScript, lint completo y compilación/exportación de producción: aprobados; 27 URLs canónicas en sitemap.
- Suite de 180 comprobaciones en Chromium para escritorio, móvil y tablet: 176 aprobadas inicialmente. Cuatro pruebas nuevas buscaban el enlace de agenda de escritorio en vistas donde está oculto; se corrigieron para usar Contacto. Las nueve comprobaciones de carga, fallback de agenda y fuentes lentas se repitieron y aprobaron en los tres perfiles. No quedó un fallo sin resolver. No se afirma que las 180 aprobaran en una única ejecución posterior.
- Las 28 páginas revisadas (incluido el duplicado de capacitación) y sus enlaces internos respondieron correctamente en la exportación local. Las guías mantienen un H1, un main, enlaces internos y revisión automática de accesibilidad.
- La prueba con fuentes retrasadas 1,2 segundos no superó 0,1 de desplazamiento acumulado en sus tres perfiles. Es una prueba de laboratorio controlada, no el percentil 75 de usuarios reales ni una certificación.
