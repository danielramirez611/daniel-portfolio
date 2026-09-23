import { Award, GraduationCap, Languages, Trophy } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Décimo Superior",
    text: "Tecsup",
  },
  {
    icon: GraduationCap,
    title: "Beca 18",
    text: "PRONABEC",
  },
  {
    icon: Award,
    title: "CADE Universitario",
    text: "2025",
  },
  {
    icon: Languages,
    title: "Inglés B1",
    text: "Nivel intermedio",
  },
];

export function AchievementsSection() {
  return (
    <section id="logros" className="border-t border-white/10 py-20">
      <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
        05 // RECONOCIMIENTOS
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">
        Logros & Reconocimientos
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-[#121829]/70 p-5"
            >
              <Icon size={22} className="text-cyan-400" />

              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>

              <p className="mt-1 text-sm text-slate-400">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
