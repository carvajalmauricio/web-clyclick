export type ProjectMedia = {
  id: string;
  productSlug: string;
  title: string;
  description: string;
  sourceUrl: string;
} & (
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | {
      kind: "video";
      src: string;
      poster: string;
      captions: string;
      transcript: string;
    }
);

// Only include existing, reviewed assets. Videos need a poster, Spanish captions
// and a readable transcript before being added here.
export const projectMedia: ProjectMedia[] = [
  {
    id: "mishkitap-menu",
    productSlug: "mishkitap",
    title: "Mishkitap · Gestión del menú",
    description: "Categorías y productos en la administración del restaurante.",
    sourceUrl: "https://mishkitap.app/images/gestion-menu.webp",
    kind: "image",
    src: "/projects/mishkitap-menu.webp",
    alt: "Pantalla de Mishkitap con categorías del menú, búsqueda de productos y controles para crear productos y categorías.",
    width: 1899,
    height: 866,
  },
  {
    id: "mishkitap-dashboard",
    productSlug: "mishkitap",
    title: "Mishkitap · Panel administrativo",
    description: "Indicadores y ventas en el panel administrativo.",
    sourceUrl: "https://mishkitap.app/images/administrar.webp",
    kind: "image",
    src: "/projects/mishkitap-dashboard.webp",
    alt: "Panel administrativo de Mishkitap con indicadores de ventas, ticket promedio y gráfico de ventas de la semana.",
    width: 1897,
    height: 1077,
  },
];
