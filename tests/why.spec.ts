import { test, expect } from "@playwright/test";
test("los argumentos aparecen en tarjetas estáticas y sin métricas nuevas", async ({
  page,
}) => {
  await page.goto("/");
  const section = page.locator("[data-why]");
  await expect(section.getByRole("article")).toHaveCount(4);
  await expect(
    section.getByRole("heading", { name: "Más de 30 proyectos realizados" }),
  ).toBeVisible();
  await expect(section).not.toContainText("70%");
  expect(
    await section.evaluate((el) => el.querySelectorAll("[data-sticky]").length),
  ).toBe(0);
});
