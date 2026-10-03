import { test, expect } from "@playwright/test";

test("Calendly carga al solicitar la agenda, con estilos y estado de carga", async ({
  page,
}) => {
  let resources = 0;
  await page.route("https://assets.calendly.com/**", async (route) => {
    resources++;
    if (route.request().url().endsWith(".css"))
      await route.fulfill({
        contentType: "text/css",
        body: "body { --calendly-ready: 1; }",
      });
    else
      await route.fulfill({
        contentType: "application/javascript",
        body: 'window.Calendly = { initPopupWidget: function() { document.body.dataset.agendaOpened = "true"; } };',
      });
  });
  await page.goto("/contacto");
  expect(resources).toBe(0);
  const link = page
    .getByRole("link", { name: "Agendar una reunión", exact: true })
    .first();
  await link.click();
  await expect(page.locator("body")).toHaveAttribute(
    "data-agenda-opened",
    "true",
  );
  await expect(link).toHaveAttribute("aria-busy", "false");
  expect(resources).toBe(2);
});

test("la agenda conserva un destino funcional si falla el widget", async ({
  page,
}) => {
  await page.route("https://assets.calendly.com/**", (route) => route.abort());
  await page.route("https://calendly.com/**", (route) =>
    route.fulfill({ contentType: "text/html", body: "<h1>Agenda</h1>" }),
  );
  await page.goto("/contacto");
  await page
    .getByRole("link", { name: "Agendar una reunión", exact: true })
    .first()
    .click();
  await expect(page).toHaveURL("https://calendly.com/arielvela8910/30min");
});

test("fuentes lentas no desplazan el hero después del primer renderizado", async ({
  page,
}) => {
  await page.route("**/*.woff2", async (route) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    await route.continue();
  });
  await page.addInitScript(() => {
    const state = window as typeof window & { layoutShifts: number[] };
    state.layoutShifts = [];
    new PerformanceObserver((list) => {
      for (const item of list.getEntries()) {
        const shift = item as PerformanceEntry & {
          hadRecentInput: boolean;
          value: number;
        };
        if (!shift.hadRecentInput) state.layoutShifts.push(shift.value);
      }
    }).observe({ type: "layout-shift", buffered: true });
  });
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const shifts = await page.evaluate(
    () => (window as typeof window & { layoutShifts: number[] }).layoutShifts,
  );
  expect(shifts.reduce((a, b) => a + b, 0)).toBeLessThanOrEqual(0.1);
});
