import type { Metadata } from "next";
import type { ReactNode } from "react";

import { JetBrains_Mono } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { I18nProvider } from "@/i18n/i18n-provider";

import "./globals.css";

/* =========================================================
   FUENTE PRINCIPAL

   Se mantiene únicamente JetBrains Mono porque el diseño
   del portafolio utiliza una estética técnica / monoespaciada.

   Esto evita precargar fuentes adicionales que aumentaban
   las solicitudes iniciales.
========================================================= */

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],

  variable: "--font-mono",

  display: "swap",

  preload: true,

  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});

/* =========================================================
   METADATA
========================================================= */

export const metadata: Metadata = {
  /* =======================================================
     TITLE
  ======================================================= */

  title: {
    default: "Daniel Ramirez | Software Developer",

    template: "%s | Daniel Ramirez",
  },

  /* =======================================================
     DESCRIPTION
  ======================================================= */

  description:
    "Software Developer especializado en backend, APIs, bases de datos y desarrollo de soluciones tecnológicas.",

  /* =======================================================
     KEYWORDS
  ======================================================= */

  keywords: [
    "Daniel Ramirez",
    "Software Developer",
    "FullStack Developer",
    "Node.js",
    "TypeScript",
    "React",
    "Laravel",
    ".NET",
  ],

  /* =======================================================
     AUTHOR
  ======================================================= */

  authors: [
    {
      name: "Daniel Ramirez",
    },
  ],

  creator: "Daniel Ramirez",

  /* =======================================================
     ICONOS
  ======================================================= */

  icons: {
    icon: [
      {
        url: "/brand/marca-dark.png",

        type: "image/png",

        media: "(prefers-color-scheme: light)",
      },

      {
        url: "/brand/marca-dark.png",

        type: "image/png",

        media: "(prefers-color-scheme: dark)",
      },
    ],

    shortcut: "/brand/marca-dark.png",

    apple: "/brand/marca-dark.png",
  },

  /* =======================================================
     OPEN GRAPH
  ======================================================= */

  openGraph: {
    title: "Daniel Ramirez | Software Developer",

    description: "Backend, APIs, bases de datos y soluciones tecnológicas.",

    type: "website",

    locale: "es_PE",

    siteName: "Daniel Ramirez",
  },
};

/* =========================================================
   ROOT LAYOUT
========================================================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="w-full max-w-full overflow-x-hidden"
    >
      <body
        className={` ${jetbrainsMono.variable} bg-background text-foreground min-h-screen w-full max-w-full overflow-x-hidden overscroll-x-none antialiased`}
      >
        {/* =================================================
            THEME PROVIDER
        ================================================= */}

        <ThemeProvider>
          {/* =================================================
              INTERNATIONALIZATION PROVIDER

              Permite usar:

              const { $t } = useI18n();

              $t(messageKeys.HEADER.HOME)
          ================================================= */}

          <I18nProvider>
            {/* =================================================
                TOOLTIP PROVIDER
            ================================================= */}

            <TooltipProvider>
              {/* =================================================
                  APP
              ================================================= */}

              <div className="min-h-screen w-full max-w-full min-w-0 overflow-x-hidden">
                {children}
              </div>
            </TooltipProvider>

            {/* =================================================
                VERCEL ANALYTICS
            ================================================= */}

            <Analytics />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
