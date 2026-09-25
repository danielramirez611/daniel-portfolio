import type { Metadata } from "next";

import type { ReactNode } from "react";

import { JetBrains_Mono } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

import { TooltipProvider } from "@/components/ui/tooltip";

import { Analytics } from "@vercel/analytics/next";

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
  title: {
    default: "Daniel Ramirez | Software Developer",

    template: "%s | Daniel Ramirez",
  },

  description:
    "Software Developer especializado en backend, APIs, bases de datos y desarrollo de soluciones tecnológicas.",

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
        url: "/brand/marca-light.png",

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

    apple: "/brand/marca-light.png",
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
        <ThemeProvider>
          <TooltipProvider>
            <div className="min-h-screen w-full max-w-full min-w-0 overflow-x-hidden">
              {children}
            </div>
          </TooltipProvider>

          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
