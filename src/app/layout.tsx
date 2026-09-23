import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";

import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

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

  openGraph: {
    title: "Daniel Ramirez | Software Developer",
    description: "Backend, APIs, bases de datos y soluciones tecnológicas.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <TooltipProvider>{children}</TooltipProvider>

        <Analytics />
      </body>
    </html>
  );
}
