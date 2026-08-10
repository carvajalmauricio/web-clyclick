import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Evita que el navegador/túnel sirva mezclas de builds (HTML viejo + JS nuevo),
  // que rompen la hidratación de React y dejan la página sin interactividad.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, no-cache, must-revalidate, max-age=0",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
