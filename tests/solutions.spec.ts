import { test, expect } from "@playwright/test";
test("servicios separados del catálogo con destinos reales", async ({
  page,
  request,
}) => {
  await page.goto("/");
  const section = page.locator("#soluciones");
  await expect(section.getByRole("article")).toHaveCount(3);
  const destinations = await section
    .locator("a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
  for (const href of destinations)
    expect((await request.get(href)).status()).toBe(200);
});

test("menú accesible con teclado, Escape y cierre al navegar", async ({
  page,
}) => {
  await page.goto("/");
  if ((page.viewportSize()?.width ?? 0) < 1024) {
    const toggle = page.locator('button[aria-controls="mobile-menu"]');
    await toggle.focus();
    await page.keyboard.press("Enter");
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    const nav = page.getByRole("navigation", { name: "Navegación móvil" });
    await expect(
      nav.getByRole("link", { name: "Mishkitap", exact: true }),
    ).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(toggle).toBeFocused();
    await expect(toggle).toHaveAttribute("aria-expanded", "false");
    await toggle.click();
    await nav.getByRole("link", { name: "Mishkitap", exact: true }).click();
    await expect(page).toHaveURL(/\/mishkitap$/);
    await expect(nav).toHaveCount(0);
  } else {
    const nav = page.getByRole("navigation", { name: "Navegación principal" });
    const trigger = nav.getByRole("button", { name: "Servicios" });
    await trigger.focus();
    await page.keyboard.press("Enter");
    await expect(trigger).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Tab");
    await expect(
      nav.getByRole("link", { name: "Software", exact: true }),
    ).toBeFocused();
    await page.keyboard.press("Escape");
    await expect(trigger).toBeFocused();
    await expect(trigger).toHaveAttribute("aria-expanded", "false");
    await trigger.click();
    await nav.getByRole("link", { name: "Mishkitap", exact: true }).click();
    await expect(page).toHaveURL(/\/mishkitap$/);
    await expect(
      nav.getByRole("button", { name: "Servicios" }),
    ).toHaveAttribute("aria-expanded", "false");
  }
});
