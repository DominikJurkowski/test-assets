import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  outputFileTracingIncludes: {
    "/app": ["locales/**/*"],
  },
};

export default nextConfig;
