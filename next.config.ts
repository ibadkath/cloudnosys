import type { NextConfig } from "next";

// Strapi's local upload provider serves media at http://localhost:1337/uploads/*.
// Proxying that path through Next.js means the browser always requests it
// same-origin (whatever host/IP was used to load the page), and Next.js
// forwards it server-side to Strapi over localhost — so this never breaks
// when the dev machine's LAN IP changes or when viewed from another device.
const STRAPI_URL = process.env.STRAPI_URL ?? "http://localhost:1337";

const nextConfig: NextConfig = {
  // Wildcard-matched per octet (same mechanism as images.remotePatterns), so
  // this covers the entire private LAN address space once and for all —
  // no need to update it every time the dev machine's IP changes.
  allowedDevOrigins: ["192.168.*.*", "10.*.*.*", "172.*.*.*"],
  async rewrites() {
    return [
      {
        source: "/uploads/:path*",
        destination: `${STRAPI_URL}/uploads/:path*`,
      },
    ];
  },
};

export default nextConfig;
