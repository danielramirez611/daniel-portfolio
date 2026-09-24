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
    <main className="relative w-full max-w-full overflow-x-clip">
      {/* =================================================
          GLOW DECORATIVO
      ================================================= */}

      <div className="pointer-events-none absolute top-24 -left-28 h-[240px] w-[240px] rounded-full bg-cyan-400/[0.025] blur-[90px] sm:-left-40 sm:h-[340px] sm:w-[340px] sm:blur-[120px]" />

      <div className="pointer-events-none absolute top-40 -right-28 h-[240px] w-[240px] rounded-full bg-blue-500/[0.02] blur-[90px] sm:-right-40 sm:h-[340px] sm:w-[340px] sm:blur-[120px]" />

      {/* =================================================
          CONTENEDOR
      ================================================= */}

      <div className="relative mx-auto w-full max-w-5xl min-w-0 px-4 pt-24 pb-14 min-[380px]:px-5 sm:px-6 sm:pt-28 sm:pb-16 md:px-8 md:pt-32 md:pb-20 lg:px-10 lg:pt-36 xl:px-8 2xl:px-0 landscape:pt-24">
        {/* =================================================
            CABECERA DEL PROYECTO
        ================================================= */}

        <header className="w-full max-w-full min-w-0">
          {/* CATEGORÍA */}

          <div className="inline-flex max-w-full items-center gap-2 rounded-md border border-cyan-400/25 bg-cyan-400/[0.05] px-2.5 py-1.5 sm:px-3">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

            <span className="min-w-0 truncate font-mono text-[8px] font-bold tracking-[0.07em] text-cyan-300 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.1em]">
              {project.category}
            </span>
          </div>

          {/* TÍTULO */}

          <h1 className="mt-4 max-w-full text-[clamp(2.2rem,10vw,4rem)] leading-[1.02] font-extrabold tracking-[-0.045em] break-words text-white sm:mt-5">
            {project.title}
          </h1>

          {/* SUBTÍTULO */}

          {project.subtitle && (
            <p className="mt-3 max-w-3xl text-[15px] leading-6 font-medium break-words text-cyan-300 sm:text-[17px] sm:leading-7 md:text-lg">
              {project.subtitle}
            </p>
          )}

          {/* DESCRIPCIÓN */}

          <p className="mt-4 max-w-3xl text-[13px] leading-6 break-words text-slate-300 min-[360px]:text-[14px] sm:mt-5 sm:text-[15px] sm:leading-7 md:text-[17px]">
            {project.description}
          </p>

          {/* =================================================
              TECNOLOGÍAS
          ================================================= */}

          <div className="mt-6 flex w-full min-w-0 flex-wrap gap-1.5 sm:mt-8 sm:gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="inline-flex max-w-full min-w-0 items-center gap-1.5 rounded-md border border-cyan-400/20 bg-cyan-400/[0.04] px-2.5 py-1.5 font-mono text-[8px] font-bold tracking-[0.04em] text-cyan-300 sm:px-3 sm:text-[10px] sm:tracking-[0.06em]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />

                <span className="min-w-0 break-words">{technology}</span>
              </span>
            ))}
          </div>
        </header>

        {/* =================================================
            SEPARADOR
        ================================================= */}

        {Content && (
          <div className="my-8 h-px w-full bg-gradient-to-r from-cyan-400/20 via-white/[0.07] to-transparent sm:my-10 md:my-12" />
        )}

        {/* =================================================
            CONTENIDO DEL PROYECTO
        ================================================= */}

        {Content && (
          <article className="w-full max-w-full min-w-0 overflow-x-clip [&_*]:max-w-full [&_a]:break-all [&_code]:break-words [&_h1]:break-words [&_h2]:break-words [&_h3]:break-words [&_h4]:break-words [&_iframe]:max-w-full [&_img]:h-auto [&_img]:max-w-full [&_ol]:max-w-full [&_p]:break-words [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_table]:block [&_table]:w-full [&_table]:max-w-full [&_table]:overflow-x-auto [&_ul]:max-w-full [&_video]:h-auto [&_video]:max-w-full">
            <Content />
          </article>
        )}
      </div>
    </main>
  );
}
