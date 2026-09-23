import type { Project } from "../entities/project";

export interface ProjectRepository {
  getAll(): Promise<Project[]>;

  getFeatured(): Promise<Project[]>;

  getBySlug(slug: string): Promise<Project | null>;
}
