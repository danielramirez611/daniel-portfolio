import type { Project } from "../../domain/entities/project";
import type { ProjectRepository } from "../../domain/repositories/project.repository";

const projects: Project[] = [
  {
    slug: "hub-programacion",
    title: "Hub de Programación",
    subtitle: "Plataforma educativa y laboratorio remoto",
    description:
      "Plataforma educativa con laboratorio remoto e IDE para programación de Arduino.",
    category: "Hardware & Web",
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

  {
    slug: "xoxo",
    title: "XOXO",
    subtitle: "Aplicación móvil",
    description:
      "Aplicación móvil orientada a interfaces, navegación, autenticación y pagos.",
    category: "Mobile",
    technologies: ["Kotlin", "Figma"],
    featured: true,
  },

  {
    slug: "messages-tec",
    title: "MessagesTec",
    subtitle: "Chat institucional",
    description:
      "Sistema institucional de mensajería con autenticación y gestión de permisos.",
    category: "Web",
    technologies: ["Laravel", "PHP"],
    featured: true,
  },

  {
    slug: "barak",
    title: "Barak",
    subtitle: "Gestión de citas",
    description: "Sistema para la gestión de citas de una clínica dental.",
    category: "Web",
    technologies: ["MySQL", "Figma"],
    featured: true,
  },

  {
    slug: "cefoproh",
    title: "CEFOPROH",
    subtitle: "Web institucional",
    description: "Diseño y desarrollo de una plataforma web institucional.",
    category: "Web",
    technologies: ["WordPress", "Figma"],
    featured: true,
  },
];

export class LocalProjectRepository implements ProjectRepository {
  async getAll(): Promise<Project[]> {
    return projects;
  }

  async getFeatured(): Promise<Project[]> {
    return projects.filter((project) => project.featured);
  }

  async getBySlug(slug: string): Promise<Project | null> {
    return projects.find((project) => project.slug === slug) ?? null;
  }
}
