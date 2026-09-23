import type { Project } from "../../domain/entities/project";

import type { ProjectRepository } from "../../domain/repositories/project.repository";

export class GetProjectBySlug {
  constructor(private readonly repository: ProjectRepository) {}

  async execute(slug: string): Promise<Project | null> {
    return this.repository.getBySlug(slug);
  }
}
