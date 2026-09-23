import { notFound } from "next/navigation";

import { GetProjectBySlug } from "@/features/projects/application/use-cases/get-project-by-slug";

import { LocalProjectRepository } from "@/features/projects/infrastructure/repositories/local-project.repository";

import { projectContent } from "@/content/projects/registry";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const repository = new LocalProjectRepository();

  const useCase = new GetProjectBySlug(repository);

  const project = await useCase.execute(slug);

  if (!project) {
    notFound();
  }

  const loader = projectContent[slug as keyof typeof projectContent];

  const Content = loader ? (await loader()).default : null;

  return (
    <main className="mx-auto max-w-4xl px-5 py-24">
      <span className="font-mono text-sm text-cyan-400">
        {project.category}
      </span>

      <h1 className="mt-4 text-5xl font-bold text-white">{project.title}</h1>

      <p className="mt-5 text-lg text-slate-400">{project.description}</p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-cyan-400/20 px-3 py-1 font-mono text-xs text-cyan-300"
          >
            {technology}
          </span>
        ))}
      </div>

      {Content && (
        <article className="mt-16">
          <Content />
        </article>
      )}
    </main>
  );
}
