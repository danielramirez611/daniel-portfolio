import type { NextConfig } from "next";

import createMDX from "@next/mdx";

import { withSentryConfig } from "@sentry/nextjs/config";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

const withMDX = createMDX({});

const configWithMDX = withMDX(nextConfig);

export default withSentryConfig(configWithMDX, {
  org: "portfolio-g6",

  project: "javascript-nextjs",

  silent: !process.env.CI,

  widenClientFileUpload: true,

  webpack: {
    automaticVercelMonitors: true,

    treeshake: {
      removeDebugLogging: true,
    },
  },
});
