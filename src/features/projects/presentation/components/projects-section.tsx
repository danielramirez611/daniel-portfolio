import type { Project } from "../../domain/entities/project";
import { ProjectCard } from "./project-card";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="proyectos"
      className="relative border-t border-white/[0.07] py-20"
    >
      {/* Glow decorativo */}
      <div className="pointer-events-none absolute top-24 right-0 h-[350px] w-[350px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="relative">
        {/* CABECERA */}
        <div className="mb-10">
          <div className="inline-flex items-center rounded-[4px] border border-cyan-300/25 bg-[#1b2330]/80 px-3 py-1.5">
            <span className="font-mono text-[10px] font-bold tracking-[0.1em] text-cyan-300 uppercase">
              Proyectos seleccionados
            </span>
          </div>

          <h2 className="mt-3 max-w-4xl text-3xl font-extrabold tracking-[-0.035em] text-white md:text-[2.4rem]">
            Soluciones diseñadas con arquitectura robusta
          </h2>

          <p className="mt-3 max-w-[740px] text-[15px] leading-7 text-slate-300 md:text-[17px]">
            Sistemas completos con alta interacción, interfaces modernas y
            experiencia de usuario fluida respaldada por un backend confiable.
          </p>
        </div>

        {/* PROYECTOS */}
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
