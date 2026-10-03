import { test, expect } from "@playwright/test";

test("el sitemap solo incluye páginas accesibles con canonical propio", async ({ request }) => {
  const robots = await request.get("/robots.txt");
  expect(robots.status()).toBe(200);
  expect(await robots.text()).toContain("Sitemap: https://clyclick.online/sitemap.xml");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.status()).toBe(200);
  const urls = [...(await sitemap.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  expect(urls.length).toBe(27);
  expect(new Set(urls).size).toBe(urls.length);
  expect(urls).not.toContain("https://clyclick.online/capacitacion");
  for (const url of urls) {
    const response = await request.get(new URL(url).pathname);
    expect(response.status(), url).toBe(200);
    const canonical = (await response.text()).match(/<link rel="canonical" href="([^"]+)"/);
    expect(canonical, url).not.toBeNull();
    expect(new URL(canonical![1]).href, url).toBe(new URL(url).href);
  }
});

test("servicios enlazados en HTML inicial y datos de empresa válidos", async ({ request, page }) => {
  const html = await (await request.get("/")).text();
  for (const path of ["consultoria-ia", "desarrollo-ia", "power-bi", "transformacion-digital", "cctv", "backups"])
    expect(html).toContain(`href="/${path}"`);
  await page.goto("/");
  const organization = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent() ?? "{}");
  expect(organization["@type"]).toBe("Organization");
  expect(organization.url).toBe("https://clyclick.online/");
  const response = await request.get(new URL(organization.logo).pathname);
  expect(response.status()).toBe(200);
  const desktopNav = page.getByRole("navigation", { name: "Navegación principal", includeHidden: true });
  await expect(desktopNav.locator("#nav-servicios")).toBeHidden();
});
