import type { Project } from "../../domain/entities/project";
import { ProjectCard } from "./project-card";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="proyectos" className="border-t border-white/10 py-20">
      <div className="mb-10">
        <span className="text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          04 // PROYECTOS SELECCIONADOS
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Soluciones diseñadas con arquitectura robusta
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
