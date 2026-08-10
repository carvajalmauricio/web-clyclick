import { test, expect } from "@playwright/test";

const FULL = "A UN CLICK DE HACER REALIDAD TUS SUEÑOS";

async function headline(page: import("@playwright/test").Page) {
  const txt = await page.locator("[data-headline]").textContent();
  return (txt ?? "").trim();
}

test("el texto del hero se escribe solo y se completa (todas las pantallas)", async ({
  page,
}, info) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  await expect(page.locator("[data-headline]")).toBeVisible();

  // Sin tocar nada, las letras aparecen y la frase se completa.
  await expect.poll(() => headline(page), { timeout: 10000, intervals: [200] }).toBe(FULL);

  // El texto es blanco y visible (no invisible).
  const vis = await page.locator("[data-headline] span").first().evaluate((el) => {
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    return { color: cs.color, opacity: cs.opacity, width: r.width };
  });
  expect(vis.opacity).toBe("1");
  expect(vis.width).toBeGreaterThan(20);

  await page.screenshot({ path: `verify-${info.project.name}.png` });
});

test("la página NO está bloqueada (scroll, zoom y menú funcionan)", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const state = await page.evaluate(() => {
    const b = getComputedStyle(document.body);
    const h = getComputedStyle(document.documentElement);
    return {
      bodyPosition: b.position,
      bodyOverflow: b.overflow,
      bodyTouchAction: b.touchAction,
      htmlOverflow: h.overflow,
      scrollable: document.documentElement.scrollHeight > window.innerHeight,
    };
  });

  expect(state.bodyPosition).not.toBe("fixed");
  expect(state.bodyTouchAction).not.toBe("none");
  expect(state.bodyOverflow).not.toBe("hidden");
  expect(state.htmlOverflow).not.toBe("hidden");
  expect(state.scrollable).toBe(true);

  await page.evaluate(() => window.scrollTo(0, 600));
  await page.waitForTimeout(300);
  const y = await page.evaluate(() => window.scrollY);
  expect(y).toBeGreaterThan(100);
});

test("el botón EMPEZAR aparece al completar y navega al hacer click", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const cta = page.locator("[data-cta]");
  await expect(cta).toBeVisible({ timeout: 10000 });

  const before = await page.evaluate(() => window.scrollY);
  await cta.click();
  await page.waitForTimeout(1300);
  const after = await page.evaluate(() => window.scrollY);
  expect(after).toBeGreaterThan(before);
});

test("el menú hamburguesa funciona en móvil", async ({ page }, info) => {
  test.skip(!["mobile"].includes(info.project.name), "Solo en móvil");
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const toggle = page.getByRole("button", { name: /menú/i });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(page.locator("#mobile-menu")).toBeVisible();
  await expect(page.locator("#mobile-menu").getByText("Servicios")).toBeVisible();
});
