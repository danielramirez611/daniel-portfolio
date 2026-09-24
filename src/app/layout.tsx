import type { Metadata } from "next";

import { Inter, JetBrains_Mono, Manrope } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Analytics } from "@vercel/analytics/next";

/* =========================================================
   FUENTES
========================================================= */

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
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
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className="w-full max-w-full overflow-x-hidden"
    >
      <body
        className={` ${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} bg-background text-foreground min-h-screen w-full max-w-full overflow-x-hidden overscroll-x-none antialiased transition-colors duration-300`}
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
