"use client";

import { useState } from "react";

type Category =
  "all" | "frontend" | "backend" | "database" | "devops" | "other";

interface StackGroup {
  title: string;
  category: Exclude<Category, "all">;
  technologies: string[];
}

const groups: StackGroup[] = [
  {
    title: "Frontend",
    category: "frontend",
    technologies: ["React", "Vue.js", "TypeScript", "JavaScript"],
  },
  {
    title: "Backend",
    category: "backend",
    technologies: ["Node.js", "Express", ".NET", "Laravel", "Django"],
  },
  {
    title: "Lenguajes",
    category: "backend",
    technologies: ["Python", "Java", "Kotlin", "Swift"],
  },
  {
    title: "Bases de Datos",
    category: "database",
    technologies: ["MySQL", "MariaDB", "SQL Server", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    category: "devops",
    technologies: ["Docker", "Git", "Postman", "PM2", "Figma"],
  },
  {
    title: "Hardware & Enterprise",
    category: "other",
    technologies: ["Arduino", "Power BI", "SAP"],
  },
];

const filters: {
  id: Category;
  label: string;
}[] = [
  { id: "all", label: "Todos" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "database", label: "Databases" },
  { id: "devops", label: "DevOps" },
  { id: "other", label: "Otros" },
];

export function SkillsSection() {
  const [active, setActive] = useState<Category>("all");

  const visible =
    active === "all"
      ? groups
      : groups.filter((group) => group.category === active);

  return (
    <section id="stack" className="border-t border-white/10 py-20">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
            02 // HERRAMIENTAS & LENGUAJES
          </span>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Stack Tecnológico
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActive(filter.id)}
              className={`rounded-lg px-3 py-2 font-mono text-xs uppercase transition ${
                active === filter.id
                  ? "bg-cyan-400 text-slate-950"
                  : "border border-white/10 bg-white/5 text-slate-400 hover:text-white"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((group) => (
          <article
            key={group.title}
            className="rounded-2xl border border-white/10 bg-[#121829]/70 p-6"
          >
            <h3 className="mb-5 text-lg font-semibold text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-cyan-400/20 bg-cyan-400/5 px-3 py-1.5 font-mono text-xs text-slate-200"
                >
                  {technology}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
