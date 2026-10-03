import { test, expect } from "@playwright/test";

test("el catálogo muestra los ocho productos sin un recorrido orbital", async ({
  page,
}) => {
  await page.goto("/");
  const catalog = page.locator("#productos");
  await expect(
    catalog.getByRole("heading", {
      name: "Una solución para tu tipo de negocio",
    }),
  ).toBeVisible();
  await expect(catalog.getByRole("article")).toHaveCount(8);
  for (const name of [
    "Mishkitap",
    "Ecommerce Click",
    "Click IA",
    "Odontoclick",
    "Click Peluquerías",
    "Websites",
    "Clyclick Academy",
    "Doctorclick",
  ]) {
    await expect(
      catalog.getByRole("heading", { name, exact: true }),
    ).toBeVisible();
    await expect(
      catalog.getByRole("link", { name: `Conocer producto: ${name}`, exact: true }),
    ).toHaveAttribute("href", /^\/[a-z-]+$/);
  }
  expect(await catalog.evaluate((el) => getComputedStyle(el).position)).toBe(
    "static",
  );
});
