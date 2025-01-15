import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingIncludes: {
    "/app": ["src/locales/**/*"],
  },
};

export default nextConfig;
