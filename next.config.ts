import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // options
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
        protocol: "https",
      }
    ]
  }
};

export default nextConfig;
