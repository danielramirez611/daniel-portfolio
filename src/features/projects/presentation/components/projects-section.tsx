import type { Project } from "../../domain/entities/project";
import { ProjectCard } from "./project-card";

interface ProjectsSectionProps {
  projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      id="proyectos"
      className="relative w-full max-w-full overflow-x-clip border-t border-slate-200/80 py-14 transition-colors duration-300 sm:py-16 md:py-20 landscape:py-12 dark:border-white/[0.07]"
    >
      {/* =================================================
          GLOW DECORATIVO
      ================================================= */}

      <div className="pointer-events-none absolute top-20 -right-28 h-[250px] w-[250px] rounded-full bg-cyan-400/[0.08] blur-[90px] sm:right-0 sm:h-[350px] sm:w-[350px] sm:blur-[120px] dark:bg-cyan-400/[0.025]" />

      {/* =================================================
          CONTENEDOR GENERAL
      ================================================= */}

      <div className="relative mx-auto w-full max-w-7xl min-w-0 px-4 min-[380px]:px-5 sm:px-6 md:px-8 lg:px-8 xl:px-10 2xl:px-0">
        {/* =================================================
            CABECERA
        ================================================= */}

        <div className="mb-7 min-w-0 sm:mb-9 lg:mb-10">
          {/* =================================================
              BADGE
          ================================================= */}

          <div className="inline-flex max-w-full items-center rounded-[4px] border border-cyan-200 bg-cyan-50 px-2.5 py-1.5 shadow-sm transition-colors duration-300 sm:px-3 dark:border-cyan-300/25 dark:bg-[#1b2330]/80 dark:shadow-none">
            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em] dark:text-cyan-300">
              Proyectos seleccionados
            </span>
          </div>

          {/* =================================================
              TÍTULO
          ================================================= */}

          <h2 className="mt-3 max-w-4xl text-[28px] leading-tight font-extrabold tracking-[-0.035em] break-words text-slate-950 min-[360px]:text-[30px] sm:text-3xl md:text-[2.4rem] dark:text-white">
            Soluciones diseñadas con arquitectura robusta
          </h2>

          {/* =================================================
              DESCRIPCIÓN
          ================================================= */}

          <p className="mt-3 max-w-[740px] text-[13px] leading-6 break-words text-slate-600 min-[360px]:text-[14px] sm:text-[15px] sm:leading-7 md:text-[17px] dark:text-slate-300">
            Sistemas completos con alta interacción, interfaces modernas y
            experiencia de usuario fluida respaldada por un backend confiable.
          </p>
        </div>

        {/* =================================================
            PROYECTOS
        ================================================= */}

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-2 lg:gap-6 landscape:min-[900px]:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} className="w-full max-w-full min-w-0">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
