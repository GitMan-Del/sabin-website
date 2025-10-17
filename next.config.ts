import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    // @ts-expect-error - not yet typed in Next.js 15
    browsersListForSwc: true
  }
} satisfies NextConfig;

export default nextConfig;