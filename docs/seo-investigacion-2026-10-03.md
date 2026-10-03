# Investigación inicial de búsquedas y herramientas gratuitas

Fecha: 3 de octubre de 2026. Objetivo: tráfico orgánico para Clyclick, sin campañas de pago.

## Trabajo realizado y límites

Se consultaron 13 frases semilla en el servicio público de sugerencias de Google, con idioma español y parámetro de país Ecuador. Las 13 respondieron 200. Los resultados reproducibles están en [el archivo de datos](data/seo-suggestions-2026-10-03.json); `scripts/seo-keywords.mjs` permite repetir consultas. El script utiliza Playwright, que ya está instalado; no añade dependencias al sitio.

Autocomplete sirve para descubrir expresiones; no permite calcular búsquedas mensuales, dificultad, posición del sitio ni probabilidad de llegar al top 3. El parámetro Ecuador tampoco garantiza que las sugerencias sean exclusivamente ecuatorianas: aparecieron términos de otros países. No deben usarse como una medición geográfica de demanda. Cuando no hay sugerencias, no se concluye que no haya búsquedas.

Google Search devolvió una comprobación de tráfico automatizado; no se intentó sortearla. DuckDuckGo también solicitó una comprobación. Bing dio una respuesta vacía y otra con resultados ajenos al producto, descartadas como evidencia para comparar competidores. Por tanto, **no hay una comparación válida de los primeros resultados ni posiciones orgánicas de Clyclick en este estudio**.

No se accedió todavía a Search Console, Google Ads, Keyword Planner ni métricas privadas. No se publican volúmenes, CPC, CTR o posiciones inventados. El sitemap ya se comprobó públicamente: 200 y 23 páginas; no significa que Google haya indexado las 23.

## Decisiones provisionales basadas en términos observados

La prioridad siguiente combina intención interpretada y ajuste con funciones reales del producto. No es una clasificación por volumen o dificultad; se revisará al obtener datos propios.

| Término observado en Google | Lectura provisional de intención | Página/acción | Prioridad por ajuste |
| --- | --- | --- | --- |
| software para restaurantes ecuador | Evaluar un proveedor local | Mishkitap: mantener contexto ecuatoriano, POS, pedidos y condiciones de contratación | Primera |
| sistema pos para restaurantes precio | Comparar coste | Mishkitap: hacer visibles planes y total mínimo; ya están publicados, sin añadir otra página de precios duplicada | Primera |
| sistema pos para restaurantes como funciona | Entender el funcionamiento antes de elegir | Guía/demostración del recorrido mesa → cocina → caja → factura, conectada a Mishkitap | Primera |
| software odontologico ecuador | Evaluar software para clínica | Odontoclick: agenda, historia, odontograma, facturación y prueba de 7 días | Primera |
| agenda odontologica online / agenda odontologica digital | Organizar citas; también puede tener otras intenciones | Sección práctica en Odontoclick y posterior guía de agenda de consultorio | Primera |
| odontograma digital online | Buscar herramienta o explicación | Demostración de odontograma en Odontoclick; no anunciar una herramienta gratuita ilimitada | Segunda |
| menu digital para restaurantes qr / menu qr para restaurantes | Crear o contratar menú digital | Mishkitap: explicar diferencia entre ver el menú y enviar pedidos desde la mesa; mostrar captura real | Segunda |
| agente ia whatsapp business | Investigar agentes o funciones de WhatsApp; intención mixta | Click IA: explicar agente personalizado, canales y consumo; no atribuir a Clyclick funciones oficiales de Meta | Posterior |

También aparecen “gratis”, “gratis descargar”, otros países y “full crack”. No se mezclan con una oferta de software de pago. Una prueba de 7 días puede explicarse como tal, sin cambiarla por “software gratuito”. Para “agenda odontológica”, “agenda tu cita odontológica” parece orientada al paciente y no necesariamente al comprador del software; no perseguir todas las variantes indistintamente.

Las consultas “facturacion electronica restaurante ecuador”, “software peluqueria ecuador” y “pagina web negocio ecuador” no produjeron sugerencias en esta muestra. Eso **no permite descartarlas**; se contrastarán con impresiones propias y fuentes de volumen cuando haya acceso.

## Conexión a Search Console

Se buscó en el catálogo de integraciones y se encontró:

- **Windsor.ai**: su ficha indica conexión a Google Search Console y plan gratuito sin tarjeta. Se sugirió como vía para leer la cuenta; **no se ha confirmado instalación ni conexión**. Los límites efectivos del plan se comprobarán durante la conexión y no se contratará un plan de pago para este trabajo.
- **GSC Wizard**: integración específica para análisis de Search Console, también disponible. No se pudo confirmar gratuidad en su ficha; no se eligió por la restricción de coste.
- Semrush, Ubersuggest y Ahrefs: disponibles en el catálogo, pero no se ha confirmado acceso gratuito suficiente; no se sugirieron para iniciar el trabajo.

La propiedad del usuario es `sc-domain:clyclick.online` según la captura. Que Search Console esté verificado en su navegador no autoriza automáticamente a una integración nueva. La autorización debe completarse en Google; no enviar contraseñas ni tokens en el chat.

La conexión debería permitir leer propiedades, consultas, páginas, clics, impresiones, CTR y posición. El trabajo solicitado es de lectura y análisis: no lanzar anuncios ni cambiar presupuestos. Si no hay una vía gratuita suficiente con el conector, la API oficial de Google es la alternativa gratuita, pero necesita una identidad OAuth o cuenta de servicio autorizada. No se ha creado ni configurado esa identidad.

## Proyectos de GitHub revisados

| Proyecto | Estado observado | Decisión |
| --- | --- | --- |
| [googleapis/google-api-python-client](https://github.com/googleapis/google-api-python-client) | Cliente oficial, Apache-2.0, activo; último push 30/09/2026 | Opción preferida si hay que crear una integración propia; no elimina la necesidad de permisos OAuth |
| [joshcarty/google-searchconsole](https://github.com/joshcarty/google-searchconsole) | Wrapper MIT, no archivado, último push 15/11/2025; README describe OAuth y exportación a pandas | Alternativa de conveniencia, pero el cliente oficial evita otra capa si solo necesitamos consultas de lectura |
| [GeneralMills/pytrends](https://github.com/GeneralMills/pytrends) | Archivado; última actividad de código observada 10/08/2024; API no oficial | No instalarlo como base del seguimiento; no da volúmenes absolutos y puede fallar ante cambios del servicio |

Se inspeccionaron metadatos y documentación; no se ejecutó código de esos repositorios ni se instalaron dependencias innecesarias. Lighthouse y Playwright ya se usaron para el sitio. Instalar bibliotecas por sí solo no aporta datos de cuenta.

## Análisis que se hará con los datos propios

1. Consultar 90 días y 28 días de datos completos, con país Ecuador, búsqueda web y separación de marca/no marca. Comparar los últimos 28 días con los 28 anteriores; distinguir datos previos al despliegue.
2. Separar informes por consulta y por página. La combinación consulta-página puede omitir más consultas de bajo volumen/anónimas; no exigir que sus totales coincidan con el total de la propiedad.
3. Priorizar consultas relevantes con impresiones y posición media aproximadamente 4–20, si existen. Ese rango es un filtro exploratorio, no una predicción de subida. Revisar también consultas ya altas con poco CTR, por dispositivo e intención.
4. Identificar si una consulta aparece con páginas distintas: revisar intención y canonical antes de etiquetarlo como canibalización perjudicial. Search Console muestra posición media, no una posición fija para todo Ecuador.
5. Convertir oportunidades observadas en tareas concretas: demo, explicación, título o enlace interno. No publicar guías repetidas sin aportar contenido práctico.
6. Comparar periodos después de suficiente exposición, anotando fecha de cambios y rastreo. Medir impresiones/clics y, cuando exista seguimiento, consultas comerciales. La correlación temporal no demuestra causalidad.

`mishkitap.app` también aparece en las propiedades del usuario. Más adelante conviene analizar su función junto con Clyclick para evitar competir con contenido duplicado entre ambos sitios; no se ha cambiado ningún canonical entre dominios.

## Próximo trabajo editorial

Preparar primero una demostración real de cómo funciona el POS del restaurante y una explicación de agenda/odontograma para consultorios. El material debe describir el producto que existe, mantener precios y límites confirmados y ocultar datos de clientes. La prioridad definitiva dependerá de las consultas propias; todavía no se ha escrito ni publicado contenido nuevo de estas guías.
