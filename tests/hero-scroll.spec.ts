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
