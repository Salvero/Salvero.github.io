import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // Base path for GitHub Pages (username.github.io)
  // Leave empty for root domain
  basePath: "",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
