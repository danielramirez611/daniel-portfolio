import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://TU-DOMINIO.com";

  return [
    {
      url: base,
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: `${base}/projects/hub-programacion`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
