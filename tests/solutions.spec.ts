import { test, expect } from "@playwright/test";

test("seleccionar una solución la expande y muestra descripción + botón", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });

  const section = page.locator("#soluciones");
  await section.scrollIntoViewIfNeeded();
  await expect(section.getByRole("heading", { name: "Nuestras Soluciones" })).toBeVisible();

  const salud = section.getByRole("button", { name: /Salud/ });
  await expect(salud).toBeVisible();

  const widthBefore = (await salud.boundingBox())?.width ?? 0;

  await salud.click();

  // Aparece la descripción y el botón Elegir.
  await expect(section.getByText("Tu consultorio al día con el MSP")).toBeVisible();
  const elegir = section.getByRole("link", { name: "Elegir" });
  await expect(elegir).toBeVisible();

  // La píldora seleccionada se expandió (más ancha que antes).
  await page.waitForTimeout(600);
  const widthAfter = (await salud.boundingBox())?.width ?? 0;
  expect(widthAfter).toBeGreaterThan(widthBefore + 50);

  // aria-pressed refleja la selección.
  await expect(salud).toHaveAttribute("aria-pressed", "true");

  // Toggle: click de nuevo la deselecciona y oculta la descripción.
  await salud.click();
  await expect(section.getByText("Tu consultorio al día con el MSP")).toBeHidden();
});

test("CADA una de las 7 soluciones se selecciona y queda visible (no desaparece)", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const section = page.locator("#soluciones");
  await section.scrollIntoViewIfNeeded();

  const labels = [
    "Gastronomía",
    "Salud",
    "Atención al cliente",
    "Ecommerce",
    "Peluquerías y barberías",
    "Videos con IA",
    "Consultorías",
  ];

  for (const label of labels) {
    const btn = section.getByRole("button", { name: new RegExp(label) });
    await btn.click();
    await page.waitForTimeout(700);

    await expect(btn, `"${label}" debe seguir visible al seleccionar`).toBeVisible();
    await expect(btn).toHaveAttribute("aria-pressed", "true");

    const box = await btn.boundingBox();
    expect(box, `"${label}" debe tener caja`).not.toBeNull();
    expect(box!.width, `"${label}" debe expandirse`).toBeGreaterThan(300);
  }
});

test("solo una solución activa a la vez", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const section = page.locator("#soluciones");
  await section.scrollIntoViewIfNeeded();

  await section.getByRole("button", { name: /Gastronom/ }).click();
  await expect(section.getByText("Tu restaurante, ordenado")).toBeVisible();

  await section.getByRole("button", { name: /Ecommerce/ }).click();
  await expect(section.getByText("Vende en línea, ordenado")).toBeVisible();
  // La anterior descripción ya no está.
  await expect(section.getByText("Tu restaurante, ordenado")).toBeHidden();
});
