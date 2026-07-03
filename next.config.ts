import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "referrer-policy", value: "origin-when-cross-origin" },
          { key: "strict-transport-security", value: "max-age=31536000; includeSubDomains; preload" },
          { key: "x-content-type-options", value: "nosniff" },
          { key: "x-dns-prefetch-control", value: "on" },
          { key: "x-frame-options", value: "DENY" },
          { key: "permissions-policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
