import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "*.alicdn.com" },
      { protocol: "https", hostname: "s.alicdn.com" },
      { protocol: "https", hostname: "sc01.alicdn.com" },
      { protocol: "https", hostname: "sc02.alicdn.com" },
      { protocol: "https", hostname: "sc04.alicdn.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "taihuang-site.vercel.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<host>.+\\.vercel\\.app)" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
