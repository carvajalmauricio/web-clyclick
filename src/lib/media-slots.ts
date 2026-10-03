export type MediaSlot = {
  id: string;
  kind: "image" | "video";
  title: string;
  description: string;
};

export const productMediaSlots: Record<
  string,
  { name: string; slots: MediaSlot[] }
> = {
  mishkitap: {
    name: "Mishkitap",
    slots: [
      {
        id: "mishkitap-demo",
        kind: "video",
        title: "Del pedido a la factura",
        description: "Vídeo de demostración del recorrido en el restaurante.",
      },
      {
        id: "mishkitap-menu",
        kind: "image",
        title: "Gestión del menú",
        description: "Categorías y productos del restaurante.",
      },
      {
        id: "mishkitap-dashboard",
        kind: "image",
        title: "Panel administrativo",
        description: "Indicadores y ventas en la interfaz.",
      },
    ],
  },
  odontoclick: {
    name: "Odontoclick",
    slots: [
      {
        id: "odontoclick-demo",
        kind: "video",
        title: "Una visita al consultorio",
        description: "Vídeo de demostración de agenda, atención y presupuesto.",
      },
      {
        id: "odontoclick-agenda",
        kind: "image",
        title: "Agenda de citas",
        description: "Captura de la organización de citas del consultorio.",
      },
      {
        id: "odontoclick-odontograma",
        kind: "image",
        title: "Historia y odontograma",
        description: "Captura de la atención con datos de demostración.",
      },
    ],
  },
  "click-ia": {
    name: "Click IA",
    slots: [
      {
        id: "click-ia-demo",
        kind: "video",
        title: "El agente en tus canales",
        description: "Vídeo de una conversación con el agente personalizado.",
      },
      {
        id: "click-ia-conversation",
        kind: "image",
        title: "Respuestas según el negocio",
        description: "Captura de una conversación de demostración.",
      },
      {
        id: "click-ia-channels",
        kind: "image",
        title: "Canales de atención",
        description:
          "Capturas del agente en los canales que se incluyan en la demostración.",
      },
    ],
  },
  doctorclick: {
    name: "Doctorclick",
    slots: [
      {
        id: "doctorclick-demo",
        kind: "video",
        title: "El recorrido de una consulta",
        description: "Vídeo de atención con datos ficticios.",
      },
      {
        id: "doctorclick-calendar",
        kind: "image",
        title: "Calendario",
        description: "Captura de la agenda del consultorio.",
      },
      {
        id: "doctorclick-record",
        kind: "image",
        title: "Evoluciones y recetas",
        description: "Captura del registro clínico con datos de demostración.",
      },
    ],
  },
  ecommerce: {
    name: "Ecommerce Click",
    slots: [
      {
        id: "ecommerce-demo",
        kind: "video",
        title: "Del catálogo al pedido",
        description: "Vídeo de una tienda y su gestión administrativa.",
      },
      {
        id: "ecommerce-store",
        kind: "image",
        title: "Catálogo de la tienda",
        description: "Captura del catálogo de un proyecto autorizado.",
      },
      {
        id: "ecommerce-orders",
        kind: "image",
        title: "Gestión de pedidos",
        description:
          "Captura del panel administrativo con datos de demostración.",
      },
    ],
  },
  "click-peluquerias": {
    name: "Click Peluquerías",
    slots: [
      {
        id: "click-peluquerias-demo",
        kind: "video",
        title: "Organizar una cita",
        description: "Vídeo de demostración del flujo de citas.",
      },
      {
        id: "click-peluquerias-agenda",
        kind: "image",
        title: "Agenda y estilistas",
        description: "Captura de la organización del trabajo.",
      },
      {
        id: "click-peluquerias-loyalty",
        kind: "image",
        title: "Programa de lealtad",
        description:
          "Captura de la función de lealtad con datos de demostración.",
      },
    ],
  },
  academy: {
    name: "Clyclick Academy",
    slots: [
      {
        id: "academy-demo",
        kind: "video",
        title: "Una sesión práctica",
        description: "Vídeo de presentación de una sesión y su tema.",
      },
      {
        id: "academy-session",
        kind: "image",
        title: "Aprender haciendo",
        description: "Imagen de una sesión cuya publicación esté autorizada.",
      },
      {
        id: "academy-exercise",
        kind: "image",
        title: "Un ejercicio concreto",
        description: "Imagen de un ejemplo trabajado durante una sesión.",
      },
    ],
  },
};

export type WebsiteProject = {
  id: string;
  name: string;
  description: string;
  url: string;
  screenshot: string;
  alt: string;
  width: number;
  height: number;
  logo?: { src: string; width: number; height: number };
  video?: { src: string; poster: string; captions: string; transcript: string };
};

// Add only actual projects with permission to publish their brand and images.
export const websiteProjects: WebsiteProject[] = [];
export const websiteProjectSlots = [
  "web-project-1",
  "web-project-2",
  "web-project-3",
];
