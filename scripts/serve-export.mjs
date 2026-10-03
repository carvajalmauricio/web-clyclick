import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".txt": "text/plain",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};
const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(
      new URL(request.url, "http://localhost").pathname,
    );
    const file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403).end();
      return;
    }
    const candidates = [file, file + ".html", resolve(file, "index.html")];
    for (const candidate of candidates) {
      try {
        if (!(await stat(candidate)).isFile()) continue;
        const body = await readFile(candidate);
        response.writeHead(200, {
          "Content-Type":
            mime[extname(candidate)] || "application/octet-stream",
        });
        response.end(request.method === "HEAD" ? undefined : body);
        return;
      } catch {
        /* Try the next static export path. */
      }
    }
    response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    response.end(await readFile(resolve(root, "404.html")));
  } catch {
    response.writeHead(400).end("Bad request");
  }
});
server.listen(Number(process.env.PORT || 3210), "0.0.0.0");
for (const signal of ["SIGTERM", "SIGINT"])
  process.on(signal, () => server.close());
