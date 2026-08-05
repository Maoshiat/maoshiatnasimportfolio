import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ??
  (isGitHubPages ? "/maoshiatnasimportfolio" : "");

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: isGitHubPages,
  },
  output: isGitHubPages ? "export" : undefined,
  trailingSlash: isGitHubPages,
  typescript: {
    // The Pages export does not use the Cloudflare-only database scaffolding.
    ignoreBuildErrors: isGitHubPages,
  },
};

export default nextConfig;
