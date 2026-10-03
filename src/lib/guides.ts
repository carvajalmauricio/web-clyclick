export type Guide = {
  slug: string;
  title: string;
  description: string;
  productSlug: string;
  productName: string;
  sections: { title: string; paragraphs: string[]; checklist?: string[] }[];
};

export const guides: Guide[] = [
  {
    slug: "como-elegir-pos-restaurante-ecuador",
    title: "Cómo elegir un sistema POS para tu restaurante en Ecuador",
    description:
      "Qué revisar en pedidos, cocina, caja, menú QR y facturación, y cómo probar un POS con un recorrido real antes de contratar.",
    productSlug: "mishkitap",
    productName: "Mishkitap",
    sections: [
      {
        title: "Empieza por el recorrido de un pedido",
        paragraphs: [
          "Un POS registra la venta, pero elegir un sistema para un restaurante exige revisar cómo llega el pedido a cocina, cómo se cobra y qué información queda disponible al cerrar caja. Una interfaz bonita por sí sola no demuestra que ese recorrido funcione para tu operación.",
          "Antes de pedir una demo, describe un día habitual: mesas que atiendes, personas que usan caja, tamaño del menú y forma de enviar comandas. Si trabajas con recetas, reservas o más de una sucursal, inclúyelo desde el principio; puede cambiar el plan o la propuesta que necesitas.",
        ],
      },
      {
        title: "Menú QR: consulta y pedido son tareas distintas",
        paragraphs: [
          "Un código QR puede llevar a una carta o permitir que el cliente haga un pedido. Comprueba qué ocurre después de elegir los productos: dónde se recibe la comanda, cómo se identifica la mesa y quién revisa el pedido. No des por hecho que cualquier menú QR hace todo ese recorrido.",
          "En Mishkitap, el menú muestra fotos, precios y descripciones, y permite pedidos desde la mesa y envío a cocina. La captura publicada de gestión de menú ayuda a ver la administración; para comprobar el flujo completo, solicita una demo con un pedido de ejemplo.",
        ],
      },
      {
        title: "Una demo que puedas comprobar",
        paragraphs: [
          "Propón un escenario sencillo con datos ficticios: una mesa pide dos platos y una bebida, cocina recibe la comanda y caja registra el cobro. Después revisa qué puedes consultar sobre esa venta. Pide que te muestren las pantallas del producto, no solo diapositivas.",
          "Si necesitas inventario por recetas o FIFO, pide otro recorrido específico. Estas funciones pertenecen a los planes superiores de Mishkitap; el inventario básico del plan Esencial no debe presentarse como equivalente.",
        ],
        checklist: [
          "Ver el pedido y la mesa en el sistema.",
          "Comprobar el envío a cocina y quién utiliza ese rol.",
          "Revisar caja, formas de pago, cortes y propinas.",
          "Mostrar la facturación electrónica y una nota de crédito con datos de prueba.",
          "Consultar el reporte disponible en el plan propuesto.",
        ],
      },
      {
        title: "Compara el alcance, además del precio mensual",
        paragraphs: [
          "Anota cuántas mesas, productos, usuarios y meses de reportes cubre cada plan. Un restaurante puede necesitar reservas, mientras otro necesita más usuarios o recetas. Compara el plan que resuelve tus tareas, no únicamente el precio de entrada.",
          "Mishkitap tiene planes Esencial, Profesional y Premium y contratación mínima de tres meses. Reservas, recetas, FIFO y Mishki IA cambian según el plan. La opción multisucursal se consulta por separado. En la página del producto están los precios, límites y condiciones actuales.",
          "La facturación electrónica es una función del software; antes de operar, revisa también los requisitos vigentes del SRI aplicables a tu negocio. No confundas registrar un cobro con emitir un comprobante electrónico.",
        ],
      },
      {
        title: "Prepara los datos para elegir y empezar",
        paragraphs: [
          "Reúne el menú con sus precios, las mesas o zonas, los usuarios que necesitas y las tareas prioritarias. Lleva una lista corta de problemas actuales: comandas perdidas, dificultad para cerrar caja o falta de visibilidad del inventario, por ejemplo. Son ejemplos de necesidades, no resultados garantizados del software.",
          "Con esa información puedes pedir una demo de Mishkitap y revisar el plan que corresponde a tu restaurante. Acordar el alcance antes de contratar evita esperar funciones o límites que no forman parte de la oferta elegida.",
        ],
      },
    ],
  },
  {
    slug: "agenda-odontograma-consultorio",
    title: "Agenda y odontograma digital: qué revisar para tu consultorio",
    description:
      "Un recorrido práctico para evaluar citas, historia clínica, odontograma, presupuestos y pagos en un software odontológico.",
    productSlug: "odontoclick",
    productName: "Odontoclick",
    sections: [
      {
        title: "La agenda es el comienzo del recorrido",
        paragraphs: [
          "Al evaluar software odontológico, comprueba qué pasa después de reservar una cita. La agenda, el paciente, la atención y los cobros deben revisarse como tareas conectadas. Tener un calendario digital no demuestra por sí solo que puedas organizar la historia o seguir un presupuesto.",
          "Describe cuántos doctores atienden y quién registra las citas y los abonos. Odontoclick incluye hasta dos doctores. Si tu equipo es mayor, consulta el alcance antes de dar por hecho que el plan publicado lo cubre.",
        ],
      },
      {
        title: "Prueba la historia y el odontograma con un caso ficticio",
        paragraphs: [
          "Solicita un entorno de demostración y crea un paciente ficticio. Revisa cómo se consultan la historia clínica, el odontograma, los diagnósticos y los tratamientos. Pide que te muestren cómo queda el registro después de guardarlo y cómo lo vuelves a encontrar.",
          "El objetivo de la prueba es evaluar la herramienta de trabajo; el diagnóstico y las decisiones clínicas corresponden al profesional. Una demostración pública debe utilizar datos ficticios, sin cédulas, nombres o información de pacientes reales.",
        ],
        checklist: [
          "Registrar una cita y localizar al paciente de prueba.",
          "Abrir historia clínica y odontograma.",
          "Revisar diagnósticos y tratamientos registrados.",
          "Preparar un presupuesto con servicios del consultorio.",
          "Registrar un abono y comprobar lo que queda por cobrar.",
        ],
      },
      {
        title: "Presupuesto y abono no son la misma tarea",
        paragraphs: [
          "Un presupuesto presenta el tratamiento y su coste; los abonos permiten registrar los pagos. En la prueba, utiliza un importe de ejemplo y comprueba dónde se consulta cada registro. Esa distinción ayuda a evaluar si la herramienta encaja con tu forma de trabajar.",
          "Odontoclick incluye presupuestos, abonos, servicios personalizables y facturación electrónica. Revisa cada función con un ejemplo, además del resumen comercial de la página.",
        ],
      },
      {
        title: "Recordatorios y calendarios: revisa el alcance activo",
        paragraphs: [
          "El plan publicado incluye hasta 100 recordatorios de WhatsApp al mes. Anota cuántos necesitas y consulta las condiciones para casos que excedan ese número; no se ha publicado una tarifa de recarga en esta oferta.",
          "La integración de Google Calendar está en aprobación y no forma parte de la oferta activa de Odontoclick. No elijas el producto contando con esa integración hasta que su disponibilidad se confirme expresamente.",
        ],
      },
      {
        title: "Utiliza los siete días de prueba para comprobar tus tareas",
        paragraphs: [
          "Odontoclick ofrece una prueba gratuita de siete días, sin coste de instalación ni contratación mínima. Elige antes de empezar las tareas que quieres comprobar; así podrás valorar el producto con tu propio recorrido y no solo con una impresión de la interfaz.",
          "Consulta en la página del producto los precios y condiciones vigentes. Si necesitas importar información, atender con más doctores o definir un proceso especial, pregunta por ese alcance: no lo presupongas incluido por tratarse de un software para consultorios.",
        ],
      },
    ],
  },
  {
    slug: "agente-ia-whatsapp-canales-costes",
    title: "Agente de IA para WhatsApp y otros canales: alcance y costes",
    description:
      "Cómo definir respuestas, elegir canales y distinguir la mensualidad del consumo antes de contratar un agente de IA para tu negocio.",
    productSlug: "click-ia",
    productName: "Click IA",
    sections: [
      {
        title: "Define primero qué necesita responder tu negocio",
        paragraphs: [
          "Un agente personalizado debe responder con la información acordada para el negocio. Antes de elegir un modelo o sumar canales, reúne las preguntas habituales: horarios, servicios, precios publicados y condiciones de contratación. Define también qué consultas necesitan revisión de una persona.",
          "Prepara ejemplos de preguntas claras, incompletas y fuera del alcance. En una demo, observa cómo responde el agente cuando falta un dato o cuando el cliente pide algo que no está confirmado. Una conversación convincente no demuestra que todas las respuestas serán correctas.",
        ],
      },
      {
        title: "Varios canales requieren una decisión de alcance",
        paragraphs: [
          "Click IA utiliza WhatsApp como canal predeterminado. Telegram, TikTok, Facebook Messenger e Instagram son canales opcionales. Elige según dónde recibes consultas y qué conversación quieres demostrar; no necesitas sumar todos para empezar.",
          "La propuesta debe definir los canales, la información que usa el agente y las condiciones aplicables de sus proveedores. La oferta multicanal no implica por sí sola una bandeja de entrada unificada, memoria compartida entre redes o todas las funciones de cada plataforma.",
        ],
      },
      {
        title: "Mensualidad por canal y consumo son costes distintos",
        paragraphs: [
          "Click IA cuesta $30 mensuales por cada canal. WhatsApp solo suma $30 al mes; WhatsApp y un canal adicional suman $60; con dos canales adicionales suman $90. Los mensajes y la generación de IA se pagan aparte mediante las recargas del negocio.",
          "Para revisar el coste total, separa la mensualidad de los canales y el consumo. El uso depende del saldo y de las condiciones de los proveedores. Una tarifa mensual por canal no equivale a conversaciones o generación ilimitadas.",
          "Solicita que la propuesta aclare cómo se consulta o gestiona el consumo en tu caso y qué condiciones tiene cada proveedor. No hay un coste único por conversación publicado en esta oferta; no sería correcto inventarlo para estimar tu gasto.",
        ],
      },
      {
        title: "Qué comprobar en una demostración",
        paragraphs: [
          "Lleva una lista breve de preguntas y la información que debería sustentar cada respuesta. Comprueba una consulta habitual, otra con información incompleta y otra que necesite atención humana. Define cómo se tratarán esas situaciones dentro del alcance del proyecto.",
          "OpenAI, Gemini y Claude son modelos posibles. La elección se acuerda según el caso y las condiciones de consumo; el nombre del modelo no sustituye la revisión de las respuestas y del flujo que necesitas.",
        ],
        checklist: [
          "Indicar los canales que quieres usar y la finalidad de cada uno.",
          "Reunir la información vigente de tu negocio.",
          "Preparar preguntas y respuestas esperadas para revisar la demo.",
          "Acordar cómo tratar consultas fuera de alcance o que requieren una persona.",
          "Separar el precio por canal y las recargas de consumo.",
        ],
      },
      {
        title: "Respuestas, agenda y ventas tienen alcances diferentes",
        paragraphs: [
          "Responder preguntas no significa que el agente registre reservas, cobre pedidos o cierre ventas automáticamente. Si necesitas esos procesos, descríbelos para definir qué debe incluir la propuesta. No forman parte de la oferta por el solo hecho de conectar un canal.",
          "Click IA ofrece demo, no prueba gratuita. Puedes solicitar una demostración con las preguntas de tu negocio y acordar el alcance antes de contratar. Las capturas o vídeos de ejemplo deben identificarse como demostraciones y no presentar resultados ficticios como casos reales.",
        ],
      },
    ],
  },
];
