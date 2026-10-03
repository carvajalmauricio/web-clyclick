// Public keyword discovery, without login or search-volume estimates.
// Run: node scripts/seo-keywords.mjs [output.json] [seed ...]
import { request } from "playwright";
import { writeFile } from "node:fs/promises";
const [output = "keywords-public.json", ...customSeeds] = process.argv.slice(2);
const seeds = customSeeds.length ? customSeeds : [
  "software para restaurantes ecuador", "sistema pos restaurantes",
  "software odontologico ecuador", "agenda odontologica",
  "odontograma digital", "menu qr restaurante",
];
const proxyServer = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
const context = await request.newContext({
  ...(proxyServer ? { proxy: { server: proxyServer } } : {}),
  timeout: 20000,
});
const results = [];
try {
  for (const seed of seeds) {
    const url = new URL("https://suggestqueries.google.com/complete/search");
    for (const [key, value] of Object.entries({ client: "firefox", hl: "es", gl: "ec", q: seed }))
      url.searchParams.set(key, value);
    const row = { seed, source: url.href };
    try {
      const response = await context.get(url.href);
      row.status = response.status();
      if (response.ok()) {
        const data = await response.json();
        if (!Array.isArray(data?.[1]) || !data[1].every((s) => typeof s === "string"))
          throw new Error("Unexpected suggestion response");
        row.suggestions = data[1];
      } else row.error = `HTTP ${row.status}`;
    } catch (error) {
      // Do not record proxy addresses, auth details or challenge tokens.
      row.error = error.message === "Unexpected suggestion response"
        ? error.message : "Request failed; check network access";
    }
    results.push(row);
  }
  await writeFile(output, JSON.stringify({
    collectedAt: new Date().toISOString(), language: "es", countryParameter: "ec",
    limitations: "Suggestions are not search volumes, ranking measurements or an Ecuador-only sample. Empty results do not prove lack of demand.",
    results,
  }, null, 2) + "\n");
  console.log(`Saved ${results.length} seed queries to ${output}`);
  if (results.every((r) => r.error)) process.exitCode = 1;
} finally {
  await context.dispose();
}
