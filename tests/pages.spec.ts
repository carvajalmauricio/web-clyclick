import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const routes = [
  "",
  "mishkitap",
  "odontoclick",
  "doctorclick",
  "click-ia",
  "ecommerce",
  "click-peluquerias",
  "websites",
  "academy",
  "faq",
  "capacitacion",
  "consultoria-ia",
  "desarrollo-ia",
  "power-bi",
  "transformacion-digital",
  "redes-telecomunicaciones",
  "cctv",
  "backups",
  "nosotros",
  "contacto",
  "permuta",
  "dentalnet",
  "privacidad",
  "terminos",
  "guias",
  "guias/como-elegir-pos-restaurante-ecuador",
  "guias/agenda-odontograma-consultorio",
  "guias/agente-ia-whatsapp-canales-costes",
];
for (const route of routes) {
  test(`estructura, enlaces, responsive y accesibilidad automática: /${route}`, async ({
    page,
    request,
  }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    const response = await page.goto(`/${route}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("main")).toHaveCount(1);
    await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
    await expect(page.getByRole("main")).not.toContainText(
      /Texto placeholder|PENDIENTE|Contenido próximamente/,
    );
    await expect(page.locator("html")).toHaveAttribute("lang", "es-EC");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
    const local = await page
      .locator('a[href^="/"]')
      .evaluateAll((elements) => [
        ...new Set(elements.map((el) => el.getAttribute("href")!)),
      ]);
    for (const href of local) {
      const [path, anchor] = href.split("#");
      expect((await request.get(path || "/")).status(), href).toBe(200);
      if (anchor && (path === `/${route}` || (path === "/" && route === "")))
        await expect(page.locator(`[id="${anchor}"]`)).toHaveCount(1);
    }
    const images = await page
      .locator("img")
      .evaluateAll((elements) =>
        elements
          .map((el) => el.getAttribute("src")!)
          .filter((src) => src.startsWith("/")),
      );
    for (const src of images)
      expect((await request.get(src)).status(), src).toBe(200);
    const a11y = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(
      a11y.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
    ).toEqual([]);
    expect(errors).toEqual([]);
    if (
      [
        "",
        "mishkitap",
        "odontoclick",
        "academy",
        "websites",
        "contacto",
        "consultoria-ia",
      ].includes(route)
    )
      await page.screenshot({
        path: testInfo.outputPath(
          `${route || "home"}-${testInfo.project.name}.png`,
        ),
        fullPage: true,
      });
  });
}
const checks: Record<
  string,
  { includes: string[]; excludes?: string[]; phone?: string }
> = {
  mishkitap: {
    includes: [
      "Esencial — $30/mes",
      "Profesional — $50/mes",
      "Premium — $70/mes",
      "Sin reservas ni Mishki IA.",
      "300 sesiones mensuales",
      "1.000 sesiones mensuales",
      "Mínimo 3 meses",
      "$90",
      "$150",
      "$210",
    ],
  },
  odontoclick: {
    includes: [
      "USD 324 al año",
      "Sin contratación mínima",
      "sin costo de instalación",
      "Probar gratis 7 días",
      "100 recordatorios por WhatsApp al mes",
      "proceso de aprobación",
    ],
    phone: "593963186252",
  },
  doctorclick: {
    includes: [
      "$700/año",
      "$10/hora",
      "prueba gratuita de 14 días",
      "Registro Civil",
      "Facturación electrónica",
    ],
    excludes: ["$12/hora"],
  },
  "click-ia": {
    includes: [
      "$30/mes por cada canal",
      "$60/mes",
      "$90/mes",
      "recargas",
      "Solicitar una demo",
    ],
    excludes: ["$20", "Probar gratis", "Solicitar prueba gratuita"],
  },
  ecommerce: {
    includes: [
      "$1.100/año",
      "$10/hora",
      "Pago Plux",
      "Payphone",
      "DataFast",
      "Conexión logística incluida",
      "fuera del precio base",
      "tarifa preferencial",
    ],
    excludes: ["Probar gratis", "Solicitar prueba gratuita"],
  },
  "click-peluquerias": {
    includes: [
      "$500/año",
      "soporte incluido",
      "Facturación electrónica",
      "Solicitar una demo",
    ],
    excludes: ["Probar gratis", "Solicitar prueba gratuita"],
  },
  websites: {
    includes: [
      "Desde $150",
      "tres páginas",
      "tres cambios",
      "$10/hora",
      ".com $15,65/año",
      ".com.ec $35/año",
      ".ec $35/año",
      "Alojamiento sin costo",
    ],
  },
  academy: {
    includes: [
      "$50 por persona y por sesión",
      "dos horas",
      "$100 total",
      "$150 total",
      "Equipos a cotizar",
      "DevOps",
      "Cloud computing",
    ],
    excludes: ["temas técnicos"],
  },
};
for (const [route, rules] of Object.entries(checks))
  test(`condiciones comerciales: /${route}`, async ({ page }) => {
    await page.goto(`/${route}`);
    const main = page.getByRole("main");
    for (const text of rules.includes) await expect(main).toContainText(text);
    for (const text of rules.excludes || [])
      await expect(main).not.toContainText(text);
    const cta = main.locator('a[href^="https://wa.me/"]').first();
    await expect(cta).toHaveAttribute(
      "href",
      new RegExp(`^https://wa.me/${rules.phone || "593978735190"}\\?text=.+`),
    );
  });


test("sin desplazamiento horizontal a 320 píxeles", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  for (const route of routes) {
    await page.goto(`/${route}`);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth), route).toBe(true);
  }
});
