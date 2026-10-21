import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4 py-16">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono uppercase tracking-wider mb-6">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
        HTTP 404 &bull; Resource Not Found
      </div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
        Page Not Found
      </h1>
      
      <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto mb-8 font-sans">
        The requested endpoint or architecture document does not exist or has been relocated.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Return to Portfolio
        </Link>
        <Link
          href="/#projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white font-medium text-sm transition-all"
        >
          Explore Projects
        </Link>
      </div>
    </div>
  );
}
