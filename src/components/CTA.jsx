import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.3),transparent_60%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold sm:text-4xl"
        >
          Launch your first AI-powered campaign in minutes
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-2xl text-lg text-slate-300"
        >
          Connect your CRM, pick a playbook, and let agents handle the outreach while you watch meetings roll in.
        </motion.p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <a
            href="#pricing"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg bg-gradient-to-tr from-violet-600 to-fuchsia-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-600/30 transition hover:brightness-110"
          >
            Get started free
          </a>
          <a
            href="#features"
            className="inline-flex min-w-[200px] items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            Explore features
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
