import type { NextConfig } from "next";

import createMDX from "@next/mdx";

import { withSentryConfig } from "@sentry/nextjs/config";

/* =========================================================
   NEXT CONFIG
========================================================= */

const nextConfig: NextConfig = {
  /* =======================================================
     EXTENSIONES
  ======================================================= */

  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  /* =======================================================
     IMÁGENES
  ======================================================= */

  images: {
    /* =====================================================
       IMÁGENES REMOTAS
    ===================================================== */

    remotePatterns: [
      {
        protocol: "https",

        hostname: "res.cloudinary.com",
      },
    ],

    /* =====================================================
       TAMAÑOS PARA IMÁGENES RESPONSIVE

       Añadimos resoluciones pequeñas/intermedias para que
       Next.js no tenga que entregar una imagen de 640 px
       cuando visualmente necesitamos ~425 / 448 px.
    ===================================================== */

    imageSizes: [32, 48, 64, 96, 128, 256, 384, 448],

    /* =====================================================
       CALIDADES PERMITIDAS

       Hero utiliza quality={65}.
       Conservamos 75 para las imágenes que utilizan la
       calidad predeterminada.
    ===================================================== */

    qualities: [60, 65, 75],
  },
};

/* =========================================================
   MDX
========================================================= */

const withMDX = createMDX({});

const configWithMDX = withMDX(nextConfig);

/* =========================================================
   SENTRY
========================================================= */

export default withSentryConfig(configWithMDX, {
  /* =====================================================
       ORGANIZACIÓN
    ===================================================== */

  org: "portfolio-g6",

  /* =====================================================
       PROYECTO
    ===================================================== */

  project: "javascript-nextjs",

  /* =====================================================
       LOGS
    ===================================================== */

  silent: !process.env.CI,

  /* =====================================================
       SOURCEMAPS
    ===================================================== */

  widenClientFileUpload: true,

  /* =====================================================
       WEBPACK / SENTRY
    ===================================================== */

  webpack: {
    /* ===================================================
         VERCEL MONITORS
      =================================================== */

    automaticVercelMonitors: true,

    /* ===================================================
         TREE SHAKING

         Elimina logs de depuración de Sentry del bundle.
      =================================================== */

    treeshake: {
      removeDebugLogging: true,
    },
  },
});
