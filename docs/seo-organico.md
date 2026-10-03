# Primer paso de SEO orgánico

El objetivo es conseguir visitas desde búsquedas sin pagar anuncios. El diagnóstico del 3 de octubre se conserva en `seo-sem-audit-2026-10-03.md` como fotografía anterior a estas correcciones.

## Implementado

- Sitemap con las 23 páginas canónicas; excluye el duplicado `/capacitacion`, que mantiene canonical a Academy. No inventa fechas de modificación.
- Robots permite rastreo y señala el sitemap.
- Canonical propio en cada página; nunca se hereda el canonical de portada en todas las rutas.
- Títulos/descripciones propios en contacto, nosotros, permuta y FAQ; títulos de producto con contexto de uso.
- Enlaces de servicios presentes en el HTML inicial del menú. Los paneles cerrados permanecen ocultos y fuera del recorrido de teclado. Capacitación enlaza a Academy.
- Datos estructurados Organization en portada con nombre, URL, logo, email y perfiles ya existentes. Sin reseñas, valoraciones ni domicilios inventados.

## Siguiente paso: Google Search Console

No hace falta instalar un plugin SEO para estas funciones: Next.js ya las genera. Search Console es una herramienta gratuita de Google, externa al sitio.

1. Abrir https://search.google.com/search-console/ con la cuenta que administrará Clyclick.
2. Si no existe, añadir propiedad de **dominio** `clyclick.online` (incluye HTTPS y variantes). Google entregará un registro TXT de verificación.
3. Añadir el TXT exacto al DNS del dominio y verificar en Search Console. No sustituir registros existentes. Esto necesita acceso al proveedor DNS; todavía no se dispone de verificación ni de acceso a esa cuenta en esta sesión.
4. Confirmar en producción que `/sitemap.xml` responde 200 y enviarlo en “Sitemaps”. No enviarlo antes del despliegue.
5. Inspeccionar portada, Mishkitap y Odontoclick para revisar acceso, canonical e indexación; solicitar indexación si procede. Google decide cuándo rastrear y qué indexar.
6. Revisar páginas excluidas, impresiones, clics y consultas; comparar periodos y segmentar por producto/país. No extraer conclusiones de pocos datos.

El usuario mostró `clyclick.online` como **Propiedad de dominio** en Search Console. Se reutilizará esa propiedad; la captura no permite consultar sus informes ni demuestra por sí sola el estado de verificación actual. No hace falta crear otra ni solicitar un TXT nuevo si ya está verificada.

Si ya existe una propiedad verificada, reutilizarla. La propiedad de prefijo `https://clyclick.online/` también sirve; no exige migrar a dominio para comenzar.

## Después: contenido real que responda búsquedas

Priorizar Mishkitap y Odontoclick: demo real, capturas y explicaciones de tareas y condiciones confirmadas. Crear guías útiles conectadas con los productos, por ejemplo cómo organizar comandas y facturación de un restaurante o cómo gestionar una agenda y odontograma. Elegir temas definitivos con las consultas reales de Search Console; estos ejemplos no son palabras clave con volumen medido.

No publicar contenido repetido por ciudad ni promesas de primeras posiciones. Las capturas y vídeos deben ser reales y proteger datos de clientes/pacientes. Un informe o sitemap por sí solo no genera tráfico; las mejoras de contenido y la observación de búsquedas son trabajo continuo.

## Pendientes técnicos separados

Revisar el 522 de `www` en DNS/hosting, estabilidad de fuentes del hero, caché de archivos versionados y nombres accesibles. No se modificaron DNS, cuentas Google, analítica ni campañas publicitarias en este paso. El despliegue público y la indexación deben comprobarse por separado del commit de GitHub.
