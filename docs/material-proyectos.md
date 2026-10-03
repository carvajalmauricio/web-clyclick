# Material real de productos y proyectos

Ya se incorporaron dos capturas de Mishkitap publicadas en su propio sitio:

- Gestión de menú: `https://mishkitap.app/images/gestion-menu.webp`.
- Panel administrativo: `https://mishkitap.app/images/administrar.webp`.

Se descargaron el 3 de octubre de 2026 y se conservaron sin edición en `public/projects/`. No son interfaces generadas ni resultados de clientes inventados. Los números de la captura ilustran la pantalla; no se presentan como métricas de Clyclick ni como un caso de éxito. La galería permite ampliar y consultar la publicación original. Falta confirmar con el dueño si representan la versión que se desea promocionar actualmente.

## Qué preparar a continuación

Prioridad: demostraciones de Mishkitap, Odontoclick y Click IA. Después Ecommerce Click, Doctorclick y Click Peluquerías. Websites puede mostrar sitios publicados; Academy puede explicar una sesión concreta.

| Producto          | Capturas sugeridas                     | Recorrido sugerido para el video               |
| ----------------- | -------------------------------------- | ---------------------------------------------- |
| Mishkitap         | POS, pedido en cocina, menú QR         | Tomar un pedido y enviarlo a cocina            |
| Odontoclick       | Agenda, odontograma, presupuesto       | De una cita a un presupuesto                   |
| Ecommerce Click   | Catálogo, pedido, panel administrativo | Del catálogo a la revisión de un pedido        |
| Doctorclick       | Calendario, evolución, receta          | Registrar una consulta con datos ficticios     |
| Click Peluquerías | Agenda, estilistas, lealtad            | Registrar y revisar una cita                   |
| Click IA          | Conversación y personalización         | Una consulta y respuesta con datos del negocio |

Estos son guiones propuestos, no afirmaciones de que los videos existan ni nuevas funciones ofrecidas.

Para cada producto basta empezar con 2–3 capturas legibles y un video breve de 30–60 segundos. Usar un entorno de demostración con datos ficticios. Para casos de clientes, confirmar permiso para publicar nombre, logo, imágenes y resultados concretos. No mostrar datos personales, historiales clínicos, credenciales ni información comercial de terceros sin autorización.

## Formato y entrega

- Capturas originales: PNG, JPG o WebP, preferiblemente de 1600 px o más de ancho; sin comprimirlas mediante WhatsApp.
- Videos: MP4, encuadre horizontal, sin reproducción automática. Evitar grabaciones de una pantalla tomadas con otro celular.
- Cada pieza debe indicar producto, pantalla o tarea, versión/fecha si se conoce y una explicación breve.
- Si hay voz, incluir subtítulos en español y transcripción. La estructura admite un archivo VTT y un enlace a una transcripción legible.
- Grabar primero el flujo completo. Después elegir el tramo que demuestra mejor la tarea; no montar un resultado que el producto no pueda realizar.

`src/lib/project-media.ts` contiene las piezas revisadas. `ProjectShowcase` puede mostrar capturas o videos con controles nativos, poster, subtítulos y transcripción. Al recibir nuevas piezas se revisan, se añaden a `public/projects/` y se registran en esa lista. Por petición del usuario se muestran espacios de “En preparación” en las páginas de producto; la portada conserva únicamente material publicado. La galería utiliza una introducción correspondiente al producto.

El video de fondo de `mishkitap.app` muestra un restaurante; no es una demostración del software y no se reutilizó como si lo fuera.

## Diseño y comprobaciones

El hero de la portada integra una captura real de gestión de menú y un selector de cuatro actividades. La entrada del panel dura 1,1 segundos y el trazado decorativo termina a los 3,5 segundos; no hay movimiento automático continuo. Se mantiene el contenido visible desde el primer renderizado y se respeta `prefers-reduced-motion`.

Se recuperó el naranja `#FB923C` en superficies de acción, con texto oscuro `#17212B`. La etiqueta “Tecnología para negocios en Ecuador” se retiró. Los pequeños textos sobre fondos claros utilizan azul para mantener legibilidad.

TypeScript, lint y exportación de producción pasaron. Las 126 pruebas en Chromium pasaron para escritorio, móvil y tablet, incluyendo contenido sin JavaScript, contraste automático, menú, selector por teclado, animación breve, movimiento reducido y reflow a 320 px. WebKit sigue pendiente por las bibliotecas del sistema faltantes documentadas en el informe anterior. Estas verificaciones no son una certificación WCAG.

## Espacios preparados (actualización)

Se prepararon espacios de vídeo y capturas para Mishkitap, Odontoclick, Click IA, Doctorclick, Ecommerce Click, Click Peluquerías y Academy. Mishkitap conserva sus dos capturas reales. La prioridad actual es Mishkitap, Odontoclick y Click IA. Las imágenes pendientes son tarjetas decorativas identificadas como “En preparación”: no se cargan archivos inexistentes ni hay botones de reproducción sin vídeo.

Websites tiene un portafolio propio con tres espacios iniciales para **proyectos y marcas reales**: captura del sitio, logo opcional, nombre, descripción y enlace al sitio público. Los espacios no identifican clientes ficticios. Se pueden añadir más proyectos sin cambiar el componente.

### Añadir una captura o vídeo de producto

1. Guardar los archivos en `public/projects/`. Se recomienda organizar cada producto en su carpeta.
2. Añadir una entrada en `src/lib/project-media.ts` usando el `id` del espacio de `src/lib/media-slots.ts`. La entrada real sustituye automáticamente la tarjeta pendiente. Ejemplo de estructura (reemplazar todos los datos con el material real antes de registrar):

```ts
{
  id: "click-ia-conversation",
  productSlug: "click-ia",
  title: "Título de la captura real",
  description: "Qué tarea muestra y en qué canal se tomó.",
  kind: "image",
  src: "/projects/click-ia/conversation.webp",
  alt: "Descripción de la pantalla real, sin repetir solo el nombre del producto.",
  width: 1600,
  height: 1000,
}
```

`width` y `height` deben coincidir con el archivo. `sourceUrl` es opcional: se utiliza cuando existe una publicación original que se desea enlazar. Las capturas pueden identificar un proyecto real en su título y enlazar su publicación, con permiso de la marca.

Para vídeo, usar el ID terminado en `-demo` correspondiente al producto y `kind: "video"`. Incluir `src` (MP4), `poster` (imagen), `captions` (VTT en español) y `transcript` (ruta a una página o archivo de texto legible), además de título y descripción. El reproductor se muestra únicamente al registrar material existente, con controles, sin autoplay y sin descargar el vídeo antes de que se solicite.

### Añadir proyectos web y marcas

Guardar las capturas y logos en `public/projects/websites/` y añadir entradas a `websiteProjects` en `src/lib/media-slots.ts`. Campos:

- `id`: `web-project-1`, `web-project-2` o `web-project-3` para sustituir uno de los espacios; nuevos IDs para ampliar el portafolio.
- `name`: nombre real del negocio o marca.
- `description`: trabajo realizado, sin resultados comerciales ni métricas que no estén sustentados.
- `url`: URL pública HTTPS del proyecto.
- `screenshot`, `alt`, `width`, `height`: archivo de la captura, descripción accesible y dimensiones reales.
- `logo`: opcional, con `src`, `width` y `height`.
- `video`: opcional para mostrar el recorrido del sitio, con `src`, `poster`, `captions` y `transcript`.

El visitante verá el botón “Visitar sitio” únicamente cuando haya un proyecto real registrado. Los enlaces abren en otra pestaña y lo indican en su nombre accesible. Antes de publicar, comprobar que el sitio sigue activo y que se puede mostrar su marca.

Después de incorporar archivos y datos, compilar, comprobar los enlaces y publicar un commit en `main`. Subir archivos sin registrarlos no cambia la galería. Esta preparación no incluye un panel de administración o un formulario de subida.

Validación de esta preparación: TypeScript, lint y exportación de producción aprobados. Las 33 pruebas específicas de galerías, condiciones de Click IA y SEO pasaron en Chromium para escritorio, móvil y tablet; las capturas revisadas no mostraron desbordamiento horizontal. No se han recibido todavía los vídeos ni los proyectos web reales.
