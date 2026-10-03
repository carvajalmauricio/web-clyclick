# Material real de productos y proyectos

Ya se incorporaron dos capturas de Mishkitap publicadas en su propio sitio:

- Gestión de menú: `https://mishkitap.app/images/gestion-menu.webp`.
- Panel administrativo: `https://mishkitap.app/images/administrar.webp`.

Se descargaron el 3 de octubre de 2026 y se conservaron sin edición en `public/projects/`. No son interfaces generadas ni resultados de clientes inventados. Los números de la captura ilustran la pantalla; no se presentan como métricas de Clyclick ni como un caso de éxito. La galería permite ampliar y consultar la publicación original. Falta confirmar con el dueño si representan la versión que se desea promocionar actualmente.

## Qué preparar a continuación

Prioridad: una demostración de Mishkitap y una de Odontoclick, porque permiten mostrar recorridos claros del negocio. Después Ecommerce Click, Doctorclick, Click Peluquerías y Click IA. Websites puede mostrar sitios publicados; Academy puede explicar una sesión concreta.

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

`src/lib/project-media.ts` contiene las piezas revisadas. `ProjectShowcase` puede mostrar capturas o videos con controles nativos, poster, subtítulos y transcripción. Al recibir nuevas piezas se revisan, se añaden a `public/projects/` y se registran en esa lista. No se muestran bloques vacíos de “próximamente”. El texto introductorio de la galería debe actualizarse cuando haya productos distintos de Mishkitap.

El video de fondo de `mishkitap.app` muestra un restaurante; no es una demostración del software y no se reutilizó como si lo fuera.

## Diseño y comprobaciones

El hero de la portada integra una captura real de gestión de menú y un selector de cuatro actividades. La entrada del panel dura 1,1 segundos y el trazado decorativo termina a los 3,5 segundos; no hay movimiento automático continuo. Se mantiene el contenido visible desde el primer renderizado y se respeta `prefers-reduced-motion`.

Se recuperó el naranja `#FB923C` en superficies de acción, con texto oscuro `#17212B`. La etiqueta “Tecnología para negocios en Ecuador” se retiró. Los pequeños textos sobre fondos claros utilizan azul para mantener legibilidad.

TypeScript, lint y exportación de producción pasaron. Las 126 pruebas en Chromium pasaron para escritorio, móvil y tablet, incluyendo contenido sin JavaScript, contraste automático, menú, selector por teclado, animación breve, movimiento reducido y reflow a 320 px. WebKit sigue pendiente por las bibliotecas del sistema faltantes documentadas en el informe anterior. Estas verificaciones no son una certificación WCAG.
