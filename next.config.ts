import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages
  output: "export",

  // Base path for GitHub Pages
  // For username.github.io (user site) - leave empty
  // For username.github.io/repo-name (project site) - set to "/repo-name"
  basePath: "",

  // Asset prefix (same as basePath for GitHub Pages)
  assetPrefix: "",

  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
