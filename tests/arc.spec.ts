import { test, expect } from "@playwright/test";

async function topOf(page: import("@playwright/test").Page, sel: string) {
  return page
    .locator(sel)
    .evaluate((el) => el.getBoundingClientRect().top + window.scrollY);
}

test("el arco muestra título y enfoca Mishkitap al inicio", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const arc = page.locator("[data-arc]");
  const top = await topOf(page, "[data-arc]");
  await page.waitForTimeout(300);

  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + 4));
  await page.waitForTimeout(500);

  await expect(arc.getByRole("heading", { name: "¿Con cuál te identificas?" })).toBeVisible();
  await expect(arc.getByText("Administración de restaurantes")).toBeVisible();
  await expect(arc.getByText("Desde $30/mes")).toBeVisible();
  // Mishkitap tiene su link propio
  await expect(arc.getByRole("link", { name: "mishkitap.app" })).toBeVisible();
  // Botón Más información → página del producto
  await expect(arc.getByRole("link", { name: "Más información" })).toHaveAttribute(
    "href",
    "/mishkitap"
  );
});

test("al hacer scroll el foco cambia de producto (uno por uno)", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const arc = page.locator("[data-arc]");
  const top = await topOf(page, "[data-arc]");
  const vh = page.viewportSize()?.height ?? 800;

  // Final del recorrido → último producto (Doctorclick).
  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + vh * 2));
  await page.waitForTimeout(600);

  await expect(arc.getByText("Plataforma para consultorios multiespecialidad")).toBeVisible();
  await expect(arc.getByText("$700/año")).toBeVisible();
  await expect(arc.getByRole("link", { name: "Más información" })).toHaveAttribute(
    "href",
    "/doctorclick"
  );
  // Ya no se muestra el link propio de Mishkitap.
  await expect(arc.getByRole("link", { name: "mishkitap.app" })).toBeHidden();
});

test("el arco se queda FIJO (pin) mientras se hace scroll", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const top = await topOf(page, "[data-arc]");
  const vh = page.viewportSize()?.height ?? 800;
  const sticky = page.locator("[data-arc] > div").first();

  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + vh * 0.6));
  await page.waitForTimeout(350);
  const a = (await sticky.boundingBox())?.y ?? null;

  await page.evaluate((y) => window.scrollTo(0, y), Math.round(top + vh * 1.4));
  await page.waitForTimeout(350);
  const b = (await sticky.boundingBox())?.y ?? null;

  expect(a).not.toBeNull();
  expect(b).not.toBeNull();
  expect(Math.abs((b as number) - (a as number))).toBeLessThan(10);
});
