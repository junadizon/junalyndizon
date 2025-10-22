import type { NextConfig } from "next";

const isGhPages = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages later
  // To activate, set basePath via NEXT_PUBLIC_BASE_PATH or edit directly
  output: "export",
  basePath: isGhPages || undefined,
  images: { unoptimized: true },
};

export default nextConfig;
