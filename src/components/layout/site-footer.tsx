export function SiteFooter() {
  return (
    <footer className="w-full max-w-full overflow-x-clip border-t border-white/10 py-6 sm:py-7 md:py-8">
      <div className="mx-auto flex w-full max-w-7xl min-w-0 flex-col gap-3 px-4 text-[11px] text-slate-500 min-[380px]:px-5 sm:px-6 sm:text-xs md:flex-row md:items-center md:justify-between md:px-8 md:text-sm lg:px-8 xl:px-10 2xl:px-0">
        <span className="max-w-full text-center break-words md:text-left">
          © {new Date().getFullYear()} Daniel Ramirez
        </span>

        <span className="max-w-full text-center font-mono text-[9px] leading-5 tracking-[0.04em] break-words sm:text-[10px] md:text-right md:text-[11px] lg:text-xs">
          Next.js · TypeScript · Clean Architecture
        </span>
      </div>
    </footer>
  );
}
