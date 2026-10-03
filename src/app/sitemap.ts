import type { MetadataRoute } from "next";

export const dynamic = "force-static";

// Only canonical pages; no invented last-modified dates.
const paths = [
  "/",
  "/academy",
  "/backups",
  "/cctv",
  "/click-ia",
  "/click-peluquerias",
  "/consultoria-ia",
  "/contacto",
  "/dentalnet",
  "/desarrollo-ia",
  "/doctorclick",
  "/ecommerce",
  "/faq",
  "/mishkitap",
  "/nosotros",
  "/odontoclick",
  "/permuta",
  "/power-bi",
  "/privacidad",
  "/redes-telecomunicaciones",
  "/terminos",
  "/transformacion-digital",
  "/websites"
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: `https://clyclick.online${path}` }));
}
