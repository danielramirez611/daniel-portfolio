"use client";

import { Wifi } from "lucide-react";
import { motion } from "motion/react";

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
    return "border-cyan-400/25 bg-cyan-400/[0.06] text-cyan-300";
  }

  if (
    value.includes("express") ||
    value.includes("mariadb") ||
    value.includes("mysql")
  ) {
    return "border-sky-400/25 bg-sky-400/[0.06] text-sky-300";
  }

  if (value.includes("typescript") || value.includes(".net")) {
    return "border-blue-400/25 bg-blue-400/[0.06] text-blue-300";
  }

  if (value.includes("laravel") || value.includes("java")) {
    return "border-red-400/25 bg-red-400/[0.06] text-red-300";
  }

  if (value.includes("kotlin") || value.includes("arduino")) {
    return "border-violet-400/25 bg-violet-400/[0.06] text-violet-300";
  }

  if (value.includes("figma") || value.includes("php")) {
    return "border-white/10 bg-white/[0.06] text-slate-100";
  }

  if (value.includes("docker") || value.includes("pm2")) {
    return "border-indigo-400/25 bg-indigo-400/[0.06] text-indigo-300";
  }

  if (value.includes("sql server") || value.includes("database")) {
    return "border-blue-300/25 bg-blue-300/[0.06] text-blue-200";
  }

  return "border-white/[0.06] bg-white/[0.05] text-slate-400";
}

/* =========================================================
   HUB DE PROGRAMACIÓN
========================================================= */

function HubProgrammingPreview() {
  return (
    <div className="overflow-hidden rounded-[15px] border border-white/10 bg-[#090d17] shadow-[0_15px_50px_rgba(0,0,0,0.25)]">
      {/* Barra superior */}
      <div className="flex h-10 items-center border-b border-white/[0.07] bg-[#1b202d] px-4">
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-300/80" />
          <span className="h-3 w-3 rounded-full bg-cyan-400" />
          <span className="h-3 w-3 rounded-full bg-sky-400" />
        </div>

        <span className="ml-4 font-mono text-[10px] text-slate-500">
          arduino_telemetry_hub.cc
        </span>

        <div className="ml-auto flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="font-mono text-[10px] font-bold text-cyan-300">
            COM3 ONLINE
          </span>
        </div>
      </div>

      {/* Código */}
      <div className="space-y-2 p-5 font-mono text-[10px] sm:text-[11px]">
        <p>
          <span className="mr-5 text-slate-600">01</span>
          <span className="text-blue-300">#include</span>{" "}
          <span className="text-violet-300">&lt;ArduinoIoT_Cloud.h&gt;</span>
        </p>

        <p>
          <span className="mr-5 text-slate-600">02</span>
          <span className="font-bold text-cyan-300">
            void setupRemoteCompiler()
          </span>{" "}
          <span className="text-white">{"{"}</span>
        </p>

        <p>
          <span className="mr-5 text-slate-600">03</span>

          <span className="text-slate-400">
            {"// Inicia handshake seguro con broker Node.js"}
          </span>
        </p>

        <p>
          <span className="mr-5 text-slate-600">04</span>

          <span className="text-white">Serial.</span>

          <span className="text-blue-300">begin</span>

          <span className="text-white">(115200);</span>
        </p>

        <p>
          <span className="mr-5 text-slate-600">05</span>

          <span className="text-white">Bridge.</span>

          <span className="text-cyan-300">connectTunnel</span>

          <span className="text-violet-300">
            (&quot;wss://hub.io/v1/stream&quot;);
          </span>
        </p>

        <p>
          <span className="mr-5 text-slate-600">06</span>

          <span className="text-white">{"}"}</span>
        </p>
      </div>

      {/* Terminal */}
      <div className="mx-4 mb-4 rounded-lg border border-cyan-400/10 bg-[#181d29] px-4 py-3 font-mono text-[10px]">
        <p className="text-cyan-300">&gt; [OK] Sketch compiled cleanly</p>

        <p className="mt-1 text-slate-500">
          &gt; Telemetry ping: 12ms · Remote socket verified.
        </p>
      </div>
    </div>
  );
}

/* =========================================================
   XOXO
========================================================= */

function XoxoPreview() {
  return (
    <div className="mx-auto w-[255px] rounded-[28px] border border-white/10 bg-[#252a38] p-3 shadow-[0_18px_50px_rgba(0,0,0,0.25)]">
      <div className="mx-auto mb-3 h-3 w-20 rounded-full bg-white/[0.06]" />

      <div className="rounded-[18px] border border-white/[0.05] bg-[#090d17] p-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-white">XOXO Pay</span>

          <Wifi size={15} className="text-cyan-400" />
        </div>

        <div className="mt-4 rounded-xl border border-cyan-400/30 bg-gradient-to-br from-sky-500/25 to-blue-500/30 p-4">
          <span className="font-mono text-[9px] text-slate-400">
            Balance Total
          </span>

          <strong className="mt-1 block text-2xl text-white">$2,840.50</strong>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2">
          {["Pagar", "Cobrar", "Transferir"].map((item) => (
            <div
              key={item}
              className="rounded-md bg-[#1c2230] px-2 py-3 text-center text-[9px] text-cyan-300"
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
    <div className="rounded-xl border border-white/[0.08] bg-[#090d17] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
      <div className="flex justify-between border-b border-white/[0.07] pb-3">
        <span className="font-mono text-[11px] font-bold text-cyan-300">
          #departamento-sistemas
        </span>

        <span className="flex items-center gap-2 font-mono text-[9px] text-slate-500">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          34 online
        </span>
      </div>

      <div className="mt-3 space-y-2">
        <div className="rounded-md bg-[#292d3b] px-3 py-2 text-[11px] text-slate-200">
          <span className="text-blue-300">@daniel:</span> Migración de esquema
          completada con éxito sin downtime.
        </div>

        <div className="ml-4 rounded-md border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[11px] text-white">
          <span className="text-cyan-300">@lead:</span> Aprobado merge en
          staging. Excelente latencia.
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
    <div className="rounded-xl border border-white/[0.08] bg-[#090d17] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-bold text-white">
          Agenda Clínica · Odontología
        </span>

        <span className="font-mono text-[9px] text-cyan-300">8 citas hoy</span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-r-md border-l-2 border-cyan-400 bg-[#292d3b] px-3 py-2">
          <strong className="block text-[10px] text-white">
            09:00 · Endodoncia
          </strong>

          <span className="text-[9px] text-slate-500">Paciente: M. Flores</span>
        </div>

        <div className="rounded-r-md border-l-2 border-blue-300 bg-[#292d3b] px-3 py-2">
          <strong className="block text-[10px] text-white">
            10:30 · Ortodoncia
          </strong>

          <span className="text-[9px] text-slate-500">Paciente: J. Ramos</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CEFOPROH
========================================================= */

function CefoprohPreview() {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#090d17] p-4 shadow-[0_15px_45px_rgba(0,0,0,0.2)]">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[11px] font-bold text-white">
          Portal Académico CEFOPROH
        </span>

        <span className="font-mono text-[9px] text-cyan-300">
          99/100 Core Web Vitals
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {[
          ["Cursos", "12 Disponibles"],
          ["Matrícula", "100% Online"],
          ["Certificados", "Verificación QR"],
        ].map(([title, value]) => (
          <div
            key={title}
            className="rounded-md border border-white/[0.04] bg-[#292d3b] px-2 py-4 text-center"
          >
            <strong className="block text-[10px] text-cyan-300">{title}</strong>

            <span className="mt-1 block text-[8px] text-slate-400">
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
    <div className="flex min-h-[150px] items-center justify-center rounded-xl border border-white/[0.08] bg-[#090d17]">
      <div className="text-center">
        <span className="mx-auto mb-3 block h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />

        <span className="font-mono text-[10px] tracking-[0.14em] text-cyan-300">
          SYSTEM READY
        </span>
      </div>
    </div>
  );
}

/* =========================================================
   SELECTOR DE PREVIEW
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
    <motion.article
      initial={{
        opacity: 0,
        y: 26,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.55,
        delay: 0.055,
        ease: "easeOut",
      }}
      whileHover={{
        y: -5,
      }}
      className={`group relative overflow-hidden rounded-[22px] border transition-all duration-500 ${
        isFeatured
          ? "border-cyan-400/45 bg-[#141923] shadow-[0_20px_70px_rgba(0,0,0,0.18)] lg:col-span-2"
          : "border-white/[0.09] bg-[#151923] hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.22)]"
      }`}
    >
      {/* Glow ambiental */}
      <div
        className={`pointer-events-none absolute rounded-full blur-[120px] ${
          isFeatured
            ? "-top-28 -right-24 h-[330px] w-[330px] bg-cyan-400/[0.055]"
            : "-top-24 -right-24 h-[250px] w-[250px] bg-cyan-400/[0.025]"
        }`}
      />

      {/* Luz superior */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white/[0.018] to-transparent" />

      {isFeatured ? (
        <FeaturedProject project={project} />
      ) : (
        <StandardProject project={project} />
      )}

      {/* Línea inferior */}
      <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent transition-all duration-700 group-hover:w-full" />
    </motion.article>
  );
}

/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="relative grid min-h-[355px] gap-10 p-7 md:p-8 lg:grid-cols-[0.82fr_1.18fr] lg:p-9">
      {/* Información */}
      <div className="flex min-w-0 flex-col justify-center">
        <ProjectHeader project={project} />

        <h3 className="mt-5 text-[27px] font-bold tracking-[-0.04em] text-white md:text-[30px]">
          {project.title}
        </h3>

        <p className="mt-4 max-w-[490px] text-[14px] leading-7 text-slate-300 md:text-[15px]">
          {project.description}
        </p>

        <TechnologyList technologies={project.technologies} />

        {/* Estado */}
        <div className="mt-7 flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-slate-500 uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          Arquitectura estable
          <span className="text-slate-700">/</span>
          <span className="text-cyan-400">Production Ready</span>
        </div>
      </div>

      {/* Preview */}
      <div className="relative flex items-center">
        <div className="absolute inset-6 rounded-[30px] bg-cyan-400/[0.025] blur-3xl" />

        <motion.div
          whileHover={{
            scale: 1.012,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative w-full"
        >
          <ProjectPreview project={project} />
        </motion.div>
      </div>
    </div>
  );
}

/* =========================================================
   STANDARD PROJECT
========================================================= */

function StandardProject({ project }: { project: Project }) {
  return (
    <div className="relative flex h-full min-h-[510px] flex-col p-7 md:p-8">
      <ProjectHeader project={project} />

      <h3 className="mt-5 text-[25px] font-bold tracking-[-0.04em] text-white">
        {project.title}
      </h3>

      <p className="mt-4 text-[14px] leading-7 text-slate-300">
        {project.description}
      </p>

      <TechnologyList technologies={project.technologies} />

      {/* Preview */}
      <div className="relative my-7 flex flex-1 items-center justify-center">
        <div className="absolute inset-10 rounded-[40px] bg-cyan-400/[0.02] blur-3xl" />

        <motion.div
          whileHover={{
            scale: 1.018,
          }}
          transition={{
            duration: 0.3,
          }}
          className="relative w-full"
        >
          <ProjectPreview project={project} />
        </motion.div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/[0.06] pt-4 font-mono text-[9px] tracking-[0.1em] uppercase">
        <span className="flex items-center gap-2 text-cyan-400">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
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
    <div className="flex flex-wrap items-center gap-2 font-mono">
      <span className="text-[10px] font-bold tracking-[0.13em] text-cyan-300 uppercase">
        {`${project.category}`}
      </span>

      {project.subtitle && (
        <>
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_7px_rgba(34,211,238,0.8)]" />

          <span className="text-[9px] tracking-[0.12em] text-slate-500">
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
    <div className="mt-5 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <motion.span
          key={technology}
          whileHover={{
            y: -2,
            scale: 1.04,
          }}
          transition={{
            duration: 0.18,
          }}
          className={`inline-flex items-center rounded-md border px-3 py-1.5 font-mono text-[9px] font-bold tracking-[0.075em] transition-shadow duration-300 hover:shadow-[0_0_14px_rgba(34,211,238,0.07)] ${getTechnologyClass(
            technology,
          )}`}
        >
          {technology}
        </motion.span>
      ))}
    </div>
  );
}
