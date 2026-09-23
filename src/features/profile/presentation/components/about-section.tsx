import { Braces, Cloud, Code2, Database } from "lucide-react";

const areas = [
  {
    icon: Code2,
    title: "Software Development",
    text: "Soluciones web, backend y aplicaciones con código modular y mantenible.",
    footer: "SOLID · Clean",
  },
  {
    icon: Braces,
    title: "Backend & APIs",
    text: "APIs REST, autenticación, integración de servicios y arquitectura backend.",
    footer: "REST · JWT",
  },
  {
    icon: Database,
    title: "Databases",
    text: "Modelado relacional, consultas SQL, integridad y administración de datos.",
    footer: "SQL · NoSQL",
  },
  {
    icon: Cloud,
    title: "Cloud & Deployment",
    text: "Docker, PM2, CI/CD y despliegue automatizado de aplicaciones.",
    footer: "Docker · CI/CD",
  },
];

export function AboutSection() {
  return (
    <section id="sobre-mi" className="border-t border-white/10 py-20">
      <div className="mb-10">
        <span className="font-mono text-xs font-semibold tracking-widest text-cyan-400 uppercase">
          01 // TRAYECTORIA
        </span>

        <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
          Sobre Mí
        </h2>

        <p className="mt-3 max-w-3xl text-slate-400">
          Titulado en Diseño y Desarrollo de Software por Tecsup, perteneciente
          al décimo superior y beneficiario de Beca 18. Apasionado por construir
          soluciones web, backend, móviles y tecnológicas.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {areas.map((area) => {
          const Icon = area.icon;

          return (
            <article
              key={area.title}
              className="group rounded-2xl border border-white/10 bg-[#121829]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400">
                <Icon size={21} />
              </div>

              <h3 className="text-lg font-semibold text-white">{area.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                {area.text}
              </p>

              <div className="mt-5 border-t border-white/10 pt-4 font-mono text-xs text-cyan-400">
                {area.footer}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
