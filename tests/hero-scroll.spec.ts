import { test, expect } from "@playwright/test";

test("mensaje y acción visibles desde el inicio incluso sin JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(baseURL!);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Software y tecnología para hacer crecer tu negocio en Ecuador.",
  );
  await expect(
    page.getByRole("link", { name: "Explorar productos" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Explorar productos" }).click();
  await expect(page).toHaveURL(/#productos$/);
  await expect(page.locator("#productos")).toBeInViewport();
  await context.close();
});

test("movimiento reducido conserva el contenido y la navegación", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.getByRole("link", { name: "Explorar productos" }).click();
  await expect(page.locator("#productos")).toBeInViewport();
  await expect
    .poll(() =>
      page.evaluate(
        () =>
          document.getAnimations().filter((a) => a.playState === "running")
            .length,
      ),
    )
    .toBe(0);
});

test("el enlace de salto lleva el foco al contenido principal", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("#main")).toBeFocused();
});

test("el selector del hero responde al teclado y enlaza cada producto", async ({
  page,
}) => {
  await page.goto("/");
  await page.setViewportSize({ width: 320, height: 800 });
  const hero = page.locator("[data-hero]");
  const choices = [
    ["Restaurantes", "Mishkitap", "/mishkitap"],
    ["Consultorios dentales", "Odontoclick", "/odontoclick"],
    ["Tiendas en línea", "Ecommerce Click", "/ecommerce"],
    ["Atención con IA", "Click IA", "/click-ia"],
  ];
  for (const [label, product, href] of choices) {
    const control = hero.getByRole("button", { name: label, exact: true });
    await control.focus();
    await page.keyboard.press("Enter");
    await expect(control).toHaveAttribute("aria-pressed", "true");
    await expect(hero.locator('button[aria-pressed="true"]')).toHaveCount(1);
    await expect(
      hero.getByRole("heading", { level: 2, name: product, exact: true }),
    ).toBeVisible();
    await expect(
      hero.getByRole("link", { name: `Ver producto: ${product}`, exact: true }),
    ).toHaveAttribute("href", href);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true);
  }
});

test("la entrada animada es breve y no retrasa las acciones", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Explorar productos" }),
  ).toBeVisible();
  const timing = await page
    .locator("[data-hero]")
    .evaluate((el) =>
      el
        .getAnimations({ subtree: true })
        .map((animation) => animation.effect?.getTiming()),
    );
  expect(timing.length).toBeGreaterThan(0);
  for (const animation of timing) {
    expect(animation?.iterations).toBe(1);
    expect(
      Number(animation?.duration) + Number(animation?.delay),
    ).toBeLessThanOrEqual(5000);
  }
});
