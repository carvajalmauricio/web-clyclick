import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const slug of [
  "mishkitap",
  "odontoclick",
  "click-ia",
  "doctorclick",
  "ecommerce",
  "click-peluquerias",
  "academy",
]) {
  test(`${slug}: espacios de material sin archivos ni controles ficticios`, async ({
    page,
  }) => {
    await page.goto(`/${slug}#capturas`);
    const gallery = page.locator("#capturas");
    await expect(gallery).toBeVisible();
    await expect(gallery.locator("figure, article")).toHaveCount(3);
    await expect(gallery.locator('[data-media-kind="video"]')).toHaveCount(1);
    await expect(gallery.locator("video, button")).toHaveCount(0);
    const images = gallery.locator("img");
    await expect(images).toHaveCount(slug === "mishkitap" ? 2 : 0);
    for (const img of await images.all()) {
      await img.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          img.evaluate(
            (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    const results = await new AxeBuilder({ page })
      .include("#capturas")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(results.violations).toEqual([]);
  });
}

test("Websites reserva proyectos y marcas sin inventar clientes o enlaces", async ({
  page,
}) => {
  await page.goto("/websites#proyectos-web");
  const portfolio = page.locator("#proyectos-web");
  await expect(portfolio.locator("[data-website-slot]")).toHaveCount(3);
  await expect(portfolio.locator("img, a, button")).toHaveCount(0);
  await expect(portfolio).toContainText("marca");
  const results = await new AxeBuilder({ page })
    .include("#proyectos-web")
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(results.violations).toEqual([]);
});

test("Click IA explica canales y conserva precios y consumo aparte", async ({
  page,
}) => {
  await page.goto("/click-ia");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Tu agente de IA, en los canales de tu negocio.",
  );
  for (const channel of [
    "WhatsApp",
    "Telegram",
    "TikTok",
    "Facebook Messenger",
    "Instagram",
  ])
    await expect(page.locator("main")).toContainText(channel);
  await expect(page.locator("main")).toContainText(
    "WhatsApp + 2 canales: $90/mes.",
  );
  await expect(page.locator("main")).toContainText("Consumo y recargas aparte");
});
