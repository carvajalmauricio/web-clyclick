import { test, expect } from "@playwright/test";

const TITLES = [
  "Productos probados en entornos reales",
  "Aliados a largo plazo",
  "+30 proyectos realizados",
  "Pensado para el mercado ecuatoriano",
];

test("sección ¿Por qué elegirnos? muestra título, 4 cards y CTA", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));

  await page.goto("/", { waitUntil: "domcontentloaded" });
  const why = page.locator("[data-why]");
  await why.scrollIntoViewIfNeeded();

  await expect(why.getByRole("heading", { name: "¿Por qué elegirnos?" })).toBeVisible();

  for (const t of TITLES) {
    await expect(why.getByRole("heading", { name: t })).toBeAttached();
  }

  const nosotros = why.getByRole("link", { name: "Nosotros" });
  const contacto = why.getByRole("link", { name: "Contacto" });
  await expect(nosotros).toBeVisible();
  await expect(nosotros).toHaveAttribute("href", "/nosotros");
  await expect(contacto).toBeVisible();
  await expect(contacto).toHaveAttribute("href", "/contacto");

  expect(errors, "sin errores de página").toEqual([]);
});

test("las cards se mueven SOLO con el scroll (sin click)", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const why = page.locator("[data-why]");
  const top = await why.evaluate(
    (el) => el.getBoundingClientRect().top + window.scrollY
  );

  const card = why.getByRole("heading", { name: "Productos probados en entornos reales" });

  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + 200));
  await page.waitForTimeout(450);
  const y1 = (await card.boundingBox())?.y ?? null;

  await page.evaluate(
    (args) => window.scrollTo(0, args.top + args.vh * 1.6),
    { top, vh: page.viewportSize()?.height ?? 800 }
  );
  await page.waitForTimeout(450);
  const y2 = (await card.boundingBox())?.y ?? null;

  expect(y1).not.toBeNull();
  expect(y2).not.toBeNull();
  expect(Math.abs((y2 as number) - (y1 as number))).toBeGreaterThan(20);
});

test("la sección se queda FIJA (pin) mientras se hace scroll", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const why = page.locator("[data-why]");
  const sticky = page.locator("[data-sticky]");
  const top = await why.evaluate(
    (el) => el.getBoundingClientRect().top + window.scrollY
  );
  const vh = page.viewportSize()?.height ?? 800;

  // Dos posiciones distintas dentro del recorrido de la sección.
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + vh * 0.6));
  await page.waitForTimeout(350);
  const a = (await sticky.boundingBox())?.y ?? null;

  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + vh * 1.4));
  await page.waitForTimeout(350);
  const b = (await sticky.boundingBox())?.y ?? null;

  // El contenedor fijo se mantiene en su sitio (pinned) pese al scroll.
  expect(a).not.toBeNull();
  expect(b).not.toBeNull();
  expect(Math.abs((b as number) - (a as number))).toBeLessThan(10);
});

test("título y CTA quedan dentro de la vista mientras la sección está fija", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const why = page.locator("[data-why]");
  const top = await why.evaluate(
    (el) => el.getBoundingClientRect().top + window.scrollY
  );
  const vh = page.viewportSize()?.height ?? 800;

  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + vh));
  await page.waitForTimeout(400);

  const title = why.getByRole("heading", { name: "¿Por qué elegirnos?" });
  const cta = why.getByRole("link", { name: "Contacto" });

  const tBox = await title.boundingBox();
  const cBox = await cta.boundingBox();
  expect(tBox).not.toBeNull();
  expect(cBox).not.toBeNull();

  expect((tBox as { y: number }).y).toBeGreaterThanOrEqual(-2);
  expect((tBox as { y: number }).y).toBeLessThan(vh);
  const cBottom =
    (cBox as { y: number; height: number }).y + (cBox as { height: number }).height;
  expect(cBottom).toBeGreaterThan(0);
  expect(cBottom).toBeLessThanOrEqual(vh + 2);
});

test("las cards son cuadradas", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const why = page.locator("[data-why]");
  await why.scrollIntoViewIfNeeded();
  const box = await page.locator("[data-cards]").boundingBox();
  expect(box).not.toBeNull();
  const ratio = (box as { width: number; height: number }).width /
    (box as { width: number; height: number }).height;
  expect(ratio).toBeGreaterThan(0.9);
  expect(ratio).toBeLessThan(1.1);
});
