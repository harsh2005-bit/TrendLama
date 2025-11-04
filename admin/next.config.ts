// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ this skips ESLint in production builds
  },
};

export default nextConfig;
