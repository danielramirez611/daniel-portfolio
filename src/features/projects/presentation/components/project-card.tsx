import type { Project } from "../../domain/entities/project";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-[#121829]/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40">
      <div className="mb-4 text-xs font-semibold tracking-widest text-cyan-400 uppercase">
        {project.category}
      </div>

      <h3 className="mb-2 text-2xl font-bold text-white">{project.title}</h3>

      <p className="mb-4 text-sm text-slate-400">{project.description}</p>

      <div className="flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-cyan-400/20 bg-cyan-400/5 px-2 py-1 text-xs text-cyan-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
