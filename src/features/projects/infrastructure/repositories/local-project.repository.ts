import type { Project } from "../../domain/entities/project";

import type { ProjectRepository } from "../../domain/repositories/project.repository";

import { messageKeys } from "@/i18n/message-keys";

/* =========================================================
   PROYECTOS LOCALES

   IMPORTANTE:

   Aquí NO utilizamos:

   useI18n()
   $t()

   porque este archivo pertenece a la capa de datos.

   Guardamos solamente las claves de traducción y la UI
   será responsable de resolverlas mediante:

   $t(project.title)
========================================================= */

const projects: Project[] = [
  /* =======================================================
     HUB DE PROGRAMACIÓN
  ======================================================= */

  {
    slug: "hub-programacion",

    title: messageKeys.PROJECTS.ITEMS.HUB.TITLE,

    subtitle: messageKeys.PROJECTS.ITEMS.HUB.SUBTITLE,

    description: messageKeys.PROJECTS.ITEMS.HUB.DESCRIPTION,

    category: messageKeys.PROJECTS.CATEGORIES.HARDWARE_WEB,

    technologies: [
      "Node.js",
      "Express",
      "MariaDB",
      "React",
      "TypeScript",
      "Arduino",
      "Docker",
    ],

    featured: true,
  },

  /* =======================================================
     XOXO
  ======================================================= */

  {
    slug: "xoxo",

    title: messageKeys.PROJECTS.ITEMS.XOXO.TITLE,

    subtitle: messageKeys.PROJECTS.ITEMS.XOXO.SUBTITLE,

    description: messageKeys.PROJECTS.ITEMS.XOXO.DESCRIPTION,

    category: messageKeys.PROJECTS.CATEGORIES.MOBILE,

    technologies: ["Kotlin", "Figma"],

    featured: true,
  },

  /* =======================================================
     MESSAGESTEC
  ======================================================= */

  {
    slug: "messages-tec",

    title: messageKeys.PROJECTS.ITEMS.MESSAGES_TEC.TITLE,

    subtitle: messageKeys.PROJECTS.ITEMS.MESSAGES_TEC.SUBTITLE,

    description: messageKeys.PROJECTS.ITEMS.MESSAGES_TEC.DESCRIPTION,

    category: messageKeys.PROJECTS.CATEGORIES.WEB,

    technologies: ["Laravel", "PHP"],

    featured: true,
  },

  /* =======================================================
     BARAK
  ======================================================= */

  {
    slug: "barak",

    title: messageKeys.PROJECTS.ITEMS.BARAK.TITLE,

    subtitle: messageKeys.PROJECTS.ITEMS.BARAK.SUBTITLE,

    description: messageKeys.PROJECTS.ITEMS.BARAK.DESCRIPTION,

    category: messageKeys.PROJECTS.CATEGORIES.WEB,

    technologies: ["MySQL", "Figma"],

    featured: true,
  },

  /* =======================================================
     CEFOPROH
  ======================================================= */

  {
    slug: "cefoproh",

    title: messageKeys.PROJECTS.ITEMS.CEFOPROH.TITLE,

    subtitle: messageKeys.PROJECTS.ITEMS.CEFOPROH.SUBTITLE,

    description: messageKeys.PROJECTS.ITEMS.CEFOPROH.DESCRIPTION,

    category: messageKeys.PROJECTS.CATEGORIES.WEB,

    technologies: ["WordPress", "Figma"],

    featured: true,
  },
];

/* =========================================================
   LOCAL PROJECT REPOSITORY
========================================================= */

export class LocalProjectRepository implements ProjectRepository {
  /* =======================================================
     GET ALL
  ======================================================= */

  async getAll(): Promise<Project[]> {
    return projects;
  }

  /* =======================================================
     GET FEATURED
  ======================================================= */

  async getFeatured(): Promise<Project[]> {
    return projects.filter((project) => project.featured);
  }

  /* =======================================================
     GET BY SLUG
  ======================================================= */

  async getBySlug(slug: string): Promise<Project | null> {
    return projects.find((project) => project.slug === slug) ?? null;
  }
}
