const certifications = [
  {
    name: "Responsive Web Design",
    organization: "freeCodeCamp",
    year: "2024",
  },
  {
    name: "Scientific Computing with Python",
    organization: "freeCodeCamp",
    year: "2024",
  },
  {
    name: "Data Analytics Essentials",
    organization: "Cisco Networking Academy",
    year: "2025",
  },
  {
    name: "Gestión Ágil y Lean",
    organization: "Fundación Telefónica",
    year: "2025",
  },
  {
    name: "Data Engineers en Azure",
    organization: "NTT DATA",
    year: "2025",
  },
];

export function CertificationsSection() {
  return (
    <section id="certificaciones" className="border-t border-white/10 py-20">
      <span className="font-mono text-xs tracking-widest text-cyan-400 uppercase">
        06 // FORMACIÓN
      </span>

      <h2 className="mt-3 text-3xl font-bold text-white">Certificaciones</h2>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map((certificate) => (
          <article
            key={certificate.name}
            className="rounded-2xl border border-white/10 bg-[#121829]/70 p-6 transition hover:border-cyan-400/30"
          >
            <span className="font-mono text-xs text-cyan-400">
              {certificate.year}
            </span>

            <h3 className="mt-3 text-lg font-semibold text-white">
              {certificate.name}
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              {certificate.organization}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
