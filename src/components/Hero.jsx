import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Glow gradients */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.25),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 py-20 md:flex-row md:py-24 lg:py-28">
        {/* Copy */}
        <div className="relative z-10 w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
              <Bot className="h-3.5 w-3.5 text-violet-300" />
              <span className="text-slate-300">AI-powered SMS • Email • Voice</span>
            </div>
            <h1 className="text-balance font-semibold tracking-tight text-white drop-shadow-sm [text-wrap:balance] text-4xl sm:text-5xl md:text-6xl">
              Grow faster with autonomous AI agents for customer outreach
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-slate-300">
              goauto.ai/pulse orchestrates conversational SMS, email, and voice agents that prospect, qualify, and follow up automatically—so your pipeline stays warm 24/7.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-violet-600/30 transition hover:brightness-110"
              >
                <Rocket className="h-4 w-4" />
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <div className="mt-4 flex items-center gap-6 text-sm text-slate-400">
              <span>No code required</span>
              <span>•</span>
              <span>SOC2-ready infrastructure</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </div>
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="relative z-0 h-[420px] w-full md:h-[560px] md:w-1/2">
          <div className="absolute inset-0 rounded-2xl border border-white/10 bg-black/10 shadow-2xl shadow-violet-900/20 backdrop-blur-sm"></div>
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
