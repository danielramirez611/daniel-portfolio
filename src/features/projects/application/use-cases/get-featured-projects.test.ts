import { describe, expect, it } from "vitest";

import { GetFeaturedProjects } from "./get-featured-projects";

import { LocalProjectRepository } from "../../infrastructure/repositories/local-project.repository";

describe("GetFeaturedProjects", () => {
  it("debe devolver proyectos destacados", async () => {
    const repository = new LocalProjectRepository();

    const useCase = new GetFeaturedProjects(repository);

    const projects = await useCase.execute();

    expect(projects.length).toBeGreaterThan(0);

    expect(projects.every((project) => project.featured)).toBe(true);
  });
});
