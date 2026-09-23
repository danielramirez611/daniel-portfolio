export interface Project {
  id: string;
  slug: string;

  title: string;
  subtitle: string;
  description: string;

  category: string;

  technologies: string[];

  image?: string;

  githubUrl?: string;
  demoUrl?: string;

  featured: boolean;

  createdAt?: Date;
}
