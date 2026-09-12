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
};

export default nextConfig;
