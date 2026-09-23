export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-sm text-slate-500 md:flex-row">
        <span>© {new Date().getFullYear()} Daniel Ramirez</span>

        <span className="font-mono">
          Next.js · TypeScript · Clean Architecture
        </span>
      </div>
    </footer>
  );
}
