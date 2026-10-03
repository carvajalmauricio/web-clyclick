export const WHATSAPP_NUMBER = "593978735190";

export function wa(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const site = {
  name: "Clyclick",
  legalName: "CLYCLICK S.A.S.",
  ruc: "0691786659001",
  email: "mauricio.carvajal@clyclick.online",
  domain: "clyclick.online",
  whatsapp: WHATSAPP_NUMBER,
  cities: "Riobamba (Chimborazo) y Quito (Pichincha)",
  hours: "Todos los días: 9:00–14:00 y 15:00–19:00",
  socials: {
    tiktok: "https://www.tiktok.com/@tecnologiaparanegocios",
    linkedin: "https://ec.linkedin.com/company/clyclick",
  },
};

export type NavLink = { label: string; href: string };
export type NavColumn = { label: string; href: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[]; // mega-menú (Servicios)
  children?: NavLink[]; // submenú simple (Programas)
};

export const nav: NavItem[] = [
  {
    label: "Servicios",
    href: "/#soluciones",
    columns: [
      {
        label: "Software",
        href: "/#productos",
        links: [
          { label: "Mishkitap", href: "/mishkitap" },
          { label: "Odontoclick", href: "/odontoclick" },
          { label: "Doctorclick", href: "/doctorclick" },
          { label: "Click IA", href: "/click-ia" },
          { label: "Ecommerce Click", href: "/ecommerce" },
          { label: "Click Peluquerías", href: "/click-peluquerias" },
          { label: "Websites", href: "/websites" },
          { label: "Clyclick Academy", href: "/academy" },
        ],
      },
      {
        label: "Redes y Telecomunicaciones",
        href: "/redes-telecomunicaciones",
        links: [
          { label: "Redes empresariales", href: "/redes-telecomunicaciones" },
          { label: "CCTV y seguridad", href: "/cctv" },
          { label: "Backups y recuperación", href: "/backups" },
        ],
      },
      {
        label: "Consultorías",
        href: "/contacto",
        links: [
          { label: "Capacitación", href: "/capacitacion" },
          { label: "Consultoría de IA", href: "/consultoria-ia" },
          { label: "Desarrollo con IA", href: "/desarrollo-ia" },
          { label: "Power BI / Business Intelligence", href: "/power-bi" },
          { label: "Transformación digital", href: "/transformacion-digital" },
        ],
      },
    ],
  },
  {
    label: "Programas",
    href: "/permuta",
    children: [{ label: "Programa de Permuta", href: "/permuta" }],
  },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
  { label: "FAQ", href: "/faq" },
];

export type Product = {
  slug: string;
  name: string;
  tag: string;
  benefit: string;
  price: string;
  icon: string; // lucide icon name key
  keyword: string;
};

export const products: Product[] = [
  {
    slug: "mishkitap",
    name: "Mishkitap",
    tag: "Restaurantes",
    benefit: "Ordena tu restaurante, de la comanda a la factura electrónica.",
    price: "Desde $30/mes · soporte incluido",
    icon: "UtensilsCrossed",
    keyword: "MISHKITAP",
  },
  {
    slug: "odontoclick",
    name: "Odontoclick",
    tag: "Odontología",
    benefit: "Historia clínica, odontograma, agenda, cobros y facturación.",
    price: "$30/mes · impuestos incluidos",
    icon: "Stethoscope",
    keyword: "ODONTOCLICK",
  },
  {
    slug: "doctorclick",
    name: "Doctorclick",
    tag: "Consultorios médicos",
    benefit: "Gestión multiespecialidad para consultorios médicos.",
    price: "$700/año · soporte $10/hora",
    icon: "Stethoscope",
    keyword: "SALUD",
  },
  {
    slug: "click-ia",
    name: "Click IA",
    tag: "Atención con IA",
    benefit:
      "Respuestas personalizadas para tu negocio, con WhatsApp y canales opcionales.",
    price: "$30/mes por canal · consumo aparte",
    icon: "Bot",
    keyword: "CLICK IA",
  },
  {
    slug: "ecommerce",
    name: "Ecommerce Click",
    tag: "Vender en línea",
    benefit: "Vende en línea con catálogo, pedidos y dashboard de tu negocio.",
    price: "$1.100/año · soporte $10/hora",
    icon: "ShoppingCart",
    keyword: "VENDER",
  },
  {
    slug: "click-peluquerias",
    name: "Click Peluquerías",
    tag: "Peluquerías y barberías",
    benefit: "Agenda, cobra con Payphone y fideliza, en una sola app.",
    price: "$500/año · soporte incluido",
    icon: "Scissors",
    keyword: "PELUQUERÍA",
  },
  {
    slug: "websites",
    name: "Websites",
    tag: "Páginas y sitios web",
    benefit:
      "Landing page o hasta tres páginas informativas para presentar tu negocio.",
    price: "Desde $150 · alojamiento sin costo, dominio aparte",
    icon: "Globe",
    keyword: "A MEDIDA",
  },
  {
    slug: "academy",
    name: "Clyclick Academy",
    tag: "Capacitación y IA",
    benefit:
      "Sesiones prácticas de IA, programación, servidores, APIs, DevOps y cloud computing.",
    price: "$50 por persona por sesión · equipos a cotizar",
    icon: "Lightbulb",
    keyword: "IA",
  },
];
