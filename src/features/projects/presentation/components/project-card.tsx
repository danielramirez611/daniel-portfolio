import type { ReactNode } from "react";

import { Wifi } from "lucide-react";

import type { Project } from "../../domain/entities/project";

interface ProjectCardProps {
  project: Project;
}

/* =========================================================
   ESTILOS DE TECNOLOGÍAS
========================================================= */

function getTechnologyClass(technology: string) {
  const value = technology.toLowerCase();

  if (
    value.includes("node") ||
    value.includes("react") ||
    value.includes("backend")
  ) {
    return `
      border-cyan-200
      bg-cyan-50
      text-cyan-700

      dark:border-cyan-400/25
      dark:bg-cyan-400/[0.06]
      dark:text-cyan-300
    `;
  }

  if (
    value.includes("express") ||
    value.includes("mariadb") ||
    value.includes("mysql")
  ) {
    return `
      border-sky-200
      bg-sky-50
      text-sky-700

      dark:border-sky-400/25
      dark:bg-sky-400/[0.06]
      dark:text-sky-300
    `;
  }

  if (value.includes("typescript") || value.includes(".net")) {
    return `
      border-blue-200
      bg-blue-50
      text-blue-700

      dark:border-blue-400/25
      dark:bg-blue-400/[0.06]
      dark:text-blue-300
    `;
  }

  if (value.includes("laravel") || value.includes("java")) {
    return `
      border-red-200
      bg-red-50
      text-red-700

      dark:border-red-400/25
      dark:bg-red-400/[0.06]
      dark:text-red-300
    `;
  }

  if (value.includes("kotlin") || value.includes("arduino")) {
    return `
      border-violet-200
      bg-violet-50
      text-violet-700

      dark:border-violet-400/25
      dark:bg-violet-400/[0.06]
      dark:text-violet-300
    `;
  }

  if (value.includes("figma") || value.includes("php")) {
    return `
      border-slate-200
      bg-slate-50
      text-slate-700

      dark:border-white/10
      dark:bg-white/[0.06]
      dark:text-slate-100
    `;
  }

  if (value.includes("docker") || value.includes("pm2")) {
    return `
      border-indigo-200
      bg-indigo-50
      text-indigo-700

      dark:border-indigo-400/25
      dark:bg-indigo-400/[0.06]
      dark:text-indigo-300
    `;
  }

  if (value.includes("sql server") || value.includes("database")) {
    return `
      border-blue-200
      bg-blue-50
      text-blue-700

      dark:border-blue-300/25
      dark:bg-blue-300/[0.06]
      dark:text-blue-200
    `;
  }

  return `
    border-slate-200
    bg-slate-50
    text-slate-600

    dark:border-white/[0.06]
    dark:bg-white/[0.05]
    dark:text-slate-400
  `;
}

/* =========================================================
   HUB DE PROGRAMACIÓN
========================================================= */

function HubProgrammingPreview() {
  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-[0_15px_50px_rgba(15,23,42,0.08)] sm:rounded-[15px] dark:border-white/10 dark:bg-[#090d17] dark:shadow-[0_15px_50px_rgba(0,0,0,0.25)]">
      {/* BARRA SUPERIOR */}

      <div className="flex h-9 min-w-0 items-center gap-2 overflow-hidden border-b border-slate-200 bg-slate-100 px-2.5 sm:h-10 sm:px-4 dark:border-white/[0.07] dark:bg-[#1b202d]">
        <div className="flex shrink-0 gap-1.5 sm:gap-2">
          <span className="h-2 w-2 rounded-full bg-red-400/80 sm:h-3 sm:w-3 dark:bg-red-300/80" />

          <span className="h-2 w-2 rounded-full bg-cyan-500 sm:h-3 sm:w-3 dark:bg-cyan-400" />

          <span className="h-2 w-2 rounded-full bg-sky-500 sm:h-3 sm:w-3 dark:bg-sky-400" />
        </div>

        <span className="min-w-0 flex-1 truncate font-mono text-[7px] text-slate-500 min-[360px]:text-[8px] sm:ml-1 sm:text-[10px]">
          arduino_telemetry_hub.cc
        </span>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-500 sm:h-2 sm:w-2 dark:bg-cyan-400" />

          <span className="font-mono text-[7px] font-bold whitespace-nowrap text-cyan-700 min-[360px]:text-[8px] sm:text-[10px] dark:text-cyan-300">
            <span className="hidden min-[380px]:inline">COM3 </span>
            ONLINE
          </span>
        </div>
      </div>

      {/* CÓDIGO */}

      <div className="min-w-0 space-y-1.5 overflow-hidden p-3 font-mono text-[7px] leading-4 min-[360px]:text-[8px] sm:space-y-2 sm:p-4 sm:text-[9px] md:p-5 md:text-[10px] xl:text-[11px]">
        <CodeLine number="01">
          <span className="text-blue-600 dark:text-blue-300">#include</span>{" "}
          <span className="break-all text-violet-600 dark:text-violet-300">
            &lt;ArduinoIoT_Cloud.h&gt;
          </span>
        </CodeLine>

        <CodeLine number="02">
          <span className="font-bold break-all text-cyan-700 dark:text-cyan-300">
            void setupRemoteCompiler()
          </span>{" "}
          <span className="text-slate-900 dark:text-white">{"{"}</span>
        </CodeLine>

        <CodeLine number="03">
          <span className="break-words text-slate-500 dark:text-slate-400">
            {"// Inicia handshake seguro con broker Node.js"}
          </span>
        </CodeLine>

        <CodeLine number="04">
          <span className="text-slate-900 dark:text-white">Serial.</span>

          <span className="text-blue-600 dark:text-blue-300">begin</span>

          <span className="text-slate-900 dark:text-white">(115200);</span>
        </CodeLine>

        <CodeLine number="05">
          <span className="text-slate-900 dark:text-white">Bridge.</span>

          <span className="text-cyan-700 dark:text-cyan-300">
            connectTunnel
          </span>

          <span className="break-all text-violet-600 dark:text-violet-300">
            (&quot;wss://hub.io/v1/stream&quot;);
          </span>
        </CodeLine>

        <CodeLine number="06">
          <span className="text-slate-900 dark:text-white">{"}"}</span>
        </CodeLine>
      </div>

      {/* TERMINAL */}

      <div className="mx-2.5 mb-2.5 min-w-0 overflow-hidden rounded-lg border border-cyan-200 bg-slate-100 px-3 py-2.5 font-mono text-[7px] leading-4 min-[360px]:text-[8px] sm:mx-4 sm:mb-4 sm:px-4 sm:py-3 sm:text-[9px] lg:text-[10px] dark:border-cyan-400/10 dark:bg-[#181d29]">
        <p className="break-words text-cyan-700 dark:text-cyan-300">
          &gt; [OK] Sketch compiled cleanly
        </p>

        <p className="mt-1 break-words text-slate-500">
          &gt; Telemetry ping: 12ms · Remote socket verified.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   CODE LINE
========================================================= */

function CodeLine({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <p className="flex min-w-0 items-start">
      <span className="mr-2 shrink-0 text-slate-400 min-[360px]:mr-3 sm:mr-4 md:mr-5 dark:text-slate-600">
        {number}
      </span>

      <span className="min-w-0 flex-1 break-words">{children}</span>
    </p>
  );
}

/* =========================================================
   XOXO
========================================================= */

function XoxoPreview() {
  const actions = ["Pagar", "Cobrar", "Transferir"];

  return (
    <div className="mx-auto w-full max-w-[255px] min-w-0 rounded-[22px] border border-slate-200 bg-slate-100 p-2.5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] sm:rounded-[28px] sm:p-3 dark:border-white/10 dark:bg-[#252a38] dark:shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
      <div className="mx-auto mb-2.5 h-2.5 w-16 rounded-full bg-slate-300 sm:mb-3 sm:h-3 sm:w-20 dark:bg-white/[0.06]" />

      <div className="min-w-0 rounded-[15px] border border-slate-200 bg-white p-2.5 sm:rounded-[18px] sm:p-3 dark:border-white/[0.05] dark:bg-[#090d17]">
        <div className="flex min-w-0 items-center justify-between gap-2">
          <span className="truncate text-[10px] font-bold text-slate-950 sm:text-xs dark:text-white">
            XOXO Pay
          </span>

          <Wifi
            size={14}
            className="shrink-0 text-cyan-600 dark:text-cyan-400"
          />
        </div>

        <div className="mt-3 rounded-xl border border-cyan-200 bg-gradient-to-br from-sky-100 to-blue-100 p-3 sm:mt-4 sm:p-4 dark:border-cyan-400/30 dark:from-sky-500/25 dark:to-blue-500/30">
          <span className="font-mono text-[7px] text-slate-500 sm:text-[9px] dark:text-slate-400">
            Balance Total
          </span>

          <strong className="mt-1 block text-xl break-words text-slate-950 sm:text-2xl dark:text-white">
            $2,840.50
          </strong>
        </div>

        <div className="mt-2.5 grid grid-cols-3 gap-1.5 sm:mt-3 sm:gap-2">
          {actions.map((item) => (
            <div
              key={item}
              className="min-w-0 rounded-md border border-slate-200 bg-slate-50 px-1 py-2.5 text-center text-[7px] break-words text-cyan-700 sm:px-2 sm:py-3 sm:text-[9px] dark:border-transparent dark:bg-[#1c2230] dark:text-cyan-300"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MESSAGESTEC
========================================================= */

function MessagesPreview() {
  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-[0_15px_45px_rgba(15,23,42,0.07)] sm:p-4 dark:border-white/[0.08] dark:bg-[#090d17] dark:shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
      <div className="flex min-w-0 flex-col gap-2 border-b border-slate-200 pb-3 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between dark:border-white/[0.07]">
        <span className="min-w-0 font-mono text-[8px] font-bold break-all text-cyan-700 sm:text-[11px] dark:text-cyan-300">
          #departamento-sistemas
        </span>

        <span className="flex shrink-0 items-center gap-2 font-mono text-[7px] text-slate-500 sm:text-[9px]">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 dark:bg-green-400" />
          34 online
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="rounded-md bg-slate-100 px-2.5 py-2 text-[9px] leading-5 break-words text-slate-700 sm:px-3 sm:text-[11px] dark:bg-[#292d3b] dark:text-slate-200">
          <span className="text-blue-600 dark:text-blue-300">@daniel:</span>{" "}
          Migración de esquema completada con éxito sin downtime.
        </div>

        <div className="ml-2 rounded-md border border-cyan-200 bg-cyan-50 px-2.5 py-2 text-[9px] leading-5 break-words text-slate-800 sm:ml-4 sm:px-3 sm:text-[11px] dark:border-cyan-400/20 dark:bg-cyan-400/10 dark:text-white">
          <span className="text-cyan-700 dark:text-cyan-300">@lead:</span>{" "}
          Aprobado merge en staging. Excelente latencia.
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   BARAK
========================================================= */

function BarakPreview() {
  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-[0_15px_45px_rgba(15,23,42,0.07)] sm:p-4 dark:border-white/[0.08] dark:bg-[#090d17] dark:shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
      <div className="mb-3 flex min-w-0 flex-col gap-1.5 min-[400px]:flex-row min-[400px]:items-center min-[400px]:justify-between">
        <span className="min-w-0 text-[9px] font-bold break-words text-slate-950 sm:text-[11px] dark:text-white">
          Agenda Clínica · Odontología
        </span>

        <span className="shrink-0 font-mono text-[7px] text-cyan-700 sm:text-[9px] dark:text-cyan-300">
          8 citas hoy
        </span>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-2 min-[400px]:grid-cols-2">
        <div className="min-w-0 rounded-r-md border-l-2 border-cyan-500 bg-slate-100 px-2.5 py-2 sm:px-3 dark:border-cyan-400 dark:bg-[#292d3b]">
          <strong className="block text-[8px] break-words text-slate-950 sm:text-[10px] dark:text-white">
            09:00 · Endodoncia
          </strong>

          <span className="mt-1 block text-[7px] break-words text-slate-500 sm:text-[9px]">
            Paciente: M. Flores
          </span>
        </div>

        <div className="min-w-0 rounded-r-md border-l-2 border-blue-500 bg-slate-100 px-2.5 py-2 sm:px-3 dark:border-blue-300 dark:bg-[#292d3b]">
          <strong className="block text-[8px] break-words text-slate-950 sm:text-[10px] dark:text-white">
            10:30 · Ortodoncia
          </strong>

          <span className="mt-1 block text-[7px] break-words text-slate-500 sm:text-[9px]">
            Paciente: J. Ramos
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CEFOPROH
========================================================= */

function CefoprohPreview() {
  const items = [
    ["Cursos", "12 Disponibles"],
    ["Matrícula", "100% Online"],
    ["Certificados", "Verificación QR"],
  ];

  return (
    <div className="w-full max-w-full min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white p-3 shadow-[0_15px_45px_rgba(15,23,42,0.07)] sm:p-4 dark:border-white/[0.08] dark:bg-[#090d17] dark:shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
      <div className="mb-3 flex min-w-0 flex-col gap-1.5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
        <span className="min-w-0 text-[9px] font-bold break-words text-slate-950 sm:text-[11px] dark:text-white">
          Portal Académico CEFOPROH
        </span>

        <span className="shrink-0 font-mono text-[7px] text-cyan-700 sm:text-[9px] dark:text-cyan-300">
          99/100 Core Web Vitals
        </span>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-2 min-[360px]:grid-cols-3">
        {items.map(([title, value]) => (
          <div
            key={title}
            className="min-w-0 rounded-md border border-slate-200 bg-slate-100 px-1.5 py-3 text-center sm:px-2 sm:py-4 dark:border-white/[0.04] dark:bg-[#292d3b]"
          >
            <strong className="block text-[8px] break-words text-cyan-700 sm:text-[10px] dark:text-cyan-300">
              {title}
            </strong>

            <span className="mt-1 block text-[6px] leading-3 break-words text-slate-500 sm:text-[8px] sm:leading-4 dark:text-slate-400">
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   DEFAULT
========================================================= */

function DefaultPreview() {
  return (
    <div className="flex min-h-[120px] w-full max-w-full min-w-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] sm:min-h-[150px] dark:border-white/[0.08] dark:bg-[#090d17] dark:shadow-none">
      <div className="min-w-0 text-center">
        <span className="mx-auto mb-3 block h-2 w-2 animate-pulse rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.45)] dark:bg-cyan-400 dark:shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

        <span className="font-mono text-[8px] tracking-[0.1em] break-words text-cyan-700 sm:text-[10px] sm:tracking-[0.14em] dark:text-cyan-300">
          SYSTEM READY
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   SELECTOR PREVIEW
========================================================= */

function ProjectPreview({ project }: { project: Project }) {
  const value = `${project.slug} ${project.title}`.toLowerCase();

  if (
    value.includes("hub") ||
    value.includes("programacion") ||
    value.includes("programación")
  ) {
    return <HubProgrammingPreview />;
  }

  if (value.includes("xoxo")) {
    return <XoxoPreview />;
  }

  if (value.includes("message") || value.includes("chat")) {
    return <MessagesPreview />;
  }

  if (value.includes("barak")) {
    return <BarakPreview />;
  }

  if (value.includes("cefoproh")) {
    return <CefoprohPreview />;
  }

  return <DefaultPreview />;
}

/* =========================================================
   PROJECT CARD
========================================================= */

export function ProjectCard({ project }: ProjectCardProps) {
  const isFeatured = project.slug === "hub-programacion";

  return (
    <article
      className={`group relative w-full max-w-full min-w-0 overflow-hidden rounded-[16px] border transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1 sm:rounded-[20px] lg:rounded-[22px] ${
        isFeatured
          ? `border-cyan-300 bg-white shadow-[0_20px_70px_rgba(6,182,212,0.08)] lg:col-span-2 landscape:min-[900px]:col-span-2 dark:border-cyan-400/45 dark:bg-[#141923] dark:shadow-[0_20px_70px_rgba(0,0,0,0.18)]`
          : `border-slate-200 bg-white shadow-[0_10px_35px_rgba(15,23,42,0.05)] hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(6,182,212,0.08)] dark:border-white/[0.09] dark:bg-[#151923] dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]`
      } `}
    >
      {/* =================================================
          GLOW
      ================================================= */}

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute rounded-full blur-[90px] sm:blur-[120px] ${
          isFeatured
            ? `-top-20 -right-20 h-[240px] w-[240px] bg-cyan-400/[0.10] sm:-top-28 sm:-right-24 sm:h-[330px] sm:w-[330px] dark:bg-cyan-400/[0.055]`
            : `-top-20 -right-20 h-[200px] w-[200px] bg-cyan-400/[0.07] sm:-top-24 sm:-right-24 sm:h-[250px] sm:w-[250px] dark:bg-cyan-400/[0.025]`
        } `}
      />

      {/* =================================================
          LUZ SUPERIOR
      ================================================= */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-cyan-50/70 to-transparent sm:h-28 dark:from-white/[0.018]"
      />

      {isFeatured ? (
        <FeaturedProject project={project} />
      ) : (
        <StandardProject project={project} />
      )}

      {/* =================================================
          LÍNEA INFERIOR OPTIMIZADA

          Ya no cambia width.
          Ahora usa transform/scale.
      ================================================= */}

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-transform duration-700 group-hover:scale-x-100"
      />
    </article>
  );
}

/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="relative grid w-full min-w-0 grid-cols-1 gap-6 p-4 min-[360px]:p-5 sm:gap-8 sm:p-6 md:p-7 xl:min-h-[355px] xl:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] xl:gap-10 xl:p-9">
      {/* INFORMACIÓN */}

      <div className="flex min-w-0 flex-col justify-center">
        <ProjectHeader project={project} />

        <h3 className="mt-4 max-w-full text-[22px] leading-tight font-bold tracking-[-0.04em] break-words text-slate-950 min-[360px]:text-[24px] sm:mt-5 sm:text-[27px] md:text-[30px] dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 max-w-[490px] text-[12px] leading-6 break-words text-slate-600 min-[360px]:text-[13px] sm:mt-4 sm:text-[14px] sm:leading-7 md:text-[15px] dark:text-slate-300">
          {project.description}
        </p>

        <TechnologyList technologies={project.technologies} />

        {/* ESTADO */}

        <div className="mt-5 flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 font-mono text-[7px] tracking-[0.06em] text-slate-500 uppercase min-[360px]:text-[8px] sm:mt-7 sm:text-[9px] sm:tracking-[0.12em]">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)] dark:bg-cyan-400 dark:shadow-[0_0_8px_rgba(34,211,238,0.8)]" />

          <span>Arquitectura estable</span>

          <span className="text-slate-300 dark:text-slate-700">/</span>

          <span className="text-cyan-700 dark:text-cyan-400">
            Production Ready
          </span>
        </div>
      </div>

      {/* PREVIEW */}

      <div className="relative flex min-w-0 items-center">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-4 rounded-[24px] bg-cyan-400/[0.07] blur-2xl sm:inset-6 sm:rounded-[30px] sm:blur-3xl dark:bg-cyan-400/[0.025]"
        />

        <div className="relative w-full max-w-full min-w-0 transition-transform duration-300 ease-out hover:scale-[1.01]">
          <ProjectPreview project={project} />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   STANDARD PROJECT
========================================================= */

function StandardProject({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full min-w-0 flex-col p-4 min-[360px]:p-5 sm:min-h-[470px] sm:p-6 md:p-7 lg:min-h-[500px] xl:min-h-[510px] xl:p-8">
      <ProjectHeader project={project} />

      <h3 className="mt-4 max-w-full text-[20px] leading-tight font-bold tracking-[-0.04em] break-words text-slate-950 min-[360px]:text-[22px] sm:mt-5 sm:text-[25px] dark:text-white">
        {project.title}
      </h3>

      <p className="mt-3 max-w-full text-[12px] leading-6 break-words text-slate-600 min-[360px]:text-[13px] sm:mt-4 sm:text-[14px] sm:leading-7 dark:text-slate-300">
        {project.description}
      </p>

      <TechnologyList technologies={project.technologies} />

      {/* PREVIEW */}

      <div className="relative my-5 flex min-w-0 flex-1 items-center justify-center sm:my-6 lg:my-7">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-5 rounded-[30px] bg-cyan-400/[0.06] blur-2xl sm:inset-10 sm:rounded-[40px] sm:blur-3xl dark:bg-cyan-400/[0.02]"
        />

        <div className="relative w-full max-w-full min-w-0 transition-transform duration-300 ease-out hover:scale-[1.012]">
          <ProjectPreview project={project} />
        </div>
      </div>

      {/* FOOTER */}

      <div className="flex min-w-0 items-center border-t border-slate-200 pt-3 font-mono text-[7px] tracking-[0.07em] uppercase sm:pt-4 sm:text-[9px] sm:tracking-[0.1em] dark:border-white/[0.06]">
        <span className="flex min-w-0 items-center gap-2 break-words text-cyan-700 dark:text-cyan-400">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-cyan-400" />
          System Ready
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   PROJECT HEADER
========================================================= */

function ProjectHeader({ project }: { project: Project }) {
  return (
    <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 font-mono">
      <span className="max-w-full text-[8px] font-bold tracking-[0.08em] break-words text-cyan-700 uppercase min-[360px]:text-[9px] sm:text-[10px] sm:tracking-[0.13em] dark:text-cyan-300">
        {project.category}
      </span>

      {project.subtitle && (
        <>
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 shadow-[0_0_7px_rgba(6,182,212,0.45)] dark:bg-cyan-400 dark:shadow-[0_0_7px_rgba(34,211,238,0.8)]" />

          <span className="min-w-0 text-[7px] leading-4 tracking-[0.06em] break-words text-slate-500 min-[360px]:text-[8px] sm:text-[9px] sm:tracking-[0.12em]">
            {project.subtitle}
          </span>
        </>
      )}
    </div>
  );
}

/* =========================================================
   TECHNOLOGIES
========================================================= */

function TechnologyList({ technologies }: { technologies: string[] }) {
  return (
    <div className="mt-4 flex min-w-0 flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className={`inline-flex max-w-full min-w-0 items-center rounded-md border px-2 py-1.5 font-mono text-[7px] font-bold tracking-[0.04em] break-words transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_14px_rgba(6,182,212,0.08)] min-[360px]:text-[8px] sm:px-3 sm:text-[9px] sm:tracking-[0.075em] dark:hover:shadow-[0_0_14px_rgba(34,211,238,0.07)] ${getTechnologyClass(
            technology,
          )} `}
        >
          {technology}
        </span>
      ))}
    </div>
  );
}
