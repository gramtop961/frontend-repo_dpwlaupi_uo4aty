import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Bot } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Animated Aurora + Orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-10%,rgba(124,58,237,0.25),transparent),radial-gradient(700px_300px_at_80%_20%,rgba(236,72,153,0.18),transparent),radial-gradient(600px_260px_at_10%_70%,rgba(6,182,212,0.18),transparent)]"
        />
        <motion.div
          aria-hidden
          className="absolute left-[10%] top-[25%] h-48 w-48 rounded-full bg-violet-500/20 blur-3xl"
          animate={{ y: [0, -20, 0], opacity: [0.8, 1, 0.8] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[12%] top-[40%] h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={{ y: [0, 24, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 pt-20 md:min-h-[84vh] md:flex-row md:pt-28">
        {/* Copy */}
        <div className="relative z-10 w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-7"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur-md"
            >
              <Bot className="h-3.5 w-3.5 text-violet-300" />
              AI-powered SMS • Email • Voice
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl"
            >
              Autonomous agents that turn intent into booked revenue
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="max-w-xl text-lg leading-relaxed text-slate-300"
            >
              Pulse coordinates SMS, email, and voice agents that prospect, qualify, and follow up—continuously. You set goals. They find meetings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-5 py-3 font-medium text-white shadow-lg shadow-violet-700/30 transition hover:brightness-110"
              >
                <Rocket className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Start free trial
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
              >
                See how it works
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-400"
            >
              <span>No code required</span>
              <span>•</span>
              <span>SOC2-ready infrastructure</span>
              <span>•</span>
              <span>Cancel anytime</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Spline Scene */}
        <div className="relative z-0 h-[460px] w-full md:h-[640px] md:w-1/2">
          <motion.div
            aria-hidden
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 shadow-[0_20px_120px_-20px_rgba(124,58,237,0.45)] backdrop-blur-md"
          />
          <Spline
            scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>

      {/* Flowing bottom divider */}
      <div className="pointer-events-none relative h-24 w-full">
        <motion.div
          aria-hidden
          className="absolute inset-x-0 top-10 h-24 bg-[radial-gradient(60%_100%_at_50%_10%,rgba(124,58,237,0.25),transparent)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;
