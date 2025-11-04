import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import CTA from './components/CTA';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      {/* Top bar with subtle animated underline */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="relative flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-gradient-to-tr from-violet-600 to-fuchsia-500" />
            <span className="text-sm font-semibold tracking-tight">goauto.ai/pulse</span>
            <span aria-hidden className="pointer-events-none absolute -bottom-2 left-0 h-px w-full bg-gradient-to-r from-violet-500/60 via-fuchsia-500/60 to-transparent" />
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#pricing" className="transition hover:text-white">Pricing</a>
            <a href="#" className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 transition hover:bg-white/10">Sign in</a>
            <a href="#pricing" className="rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-3 py-1.5 font-medium text-white transition hover:brightness-110">Start free</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Pricing />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} goauto.ai/pulse. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Terms</a>
            <a href="#" className="transition hover:text-white">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
