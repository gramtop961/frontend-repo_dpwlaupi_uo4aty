import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Mail, Phone, Zap, Shield, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Conversational SMS',
    desc: 'Two-way texting that books meetings, qualifies leads, and nurtures at scale with human-like tone.'
  },
  {
    icon: Mail,
    title: 'Smart Email Sequences',
    desc: 'Adaptive campaigns that rewrite subject lines and body copy based on intent and reply signals.'
  },
  {
    icon: Phone,
    title: 'Voice Agents',
    desc: 'Natural-sounding calls that handle inbound/outbound, answer questions, and schedule in your CRM.'
  },
  {
    icon: Zap,
    title: 'Auto Orchestration',
    desc: 'Rules and routing across channels—let the AI choose the best time, channel, and message.'
  },
  {
    icon: Shield,
    title: 'Compliance Guardrails',
    desc: 'Built-in opt-outs, quiet hours, and audit trails help you stay compliant across regions.'
  },
  {
    icon: BarChart3,
    title: 'Attribution & Insights',
    desc: 'See which channels, messages, and agents drive meetings and revenue with clear attribution.'
  }
];

const MotionCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.55, delay }}
  >
    {children}
  </motion.div>
);

const FeatureCard = ({ icon: Icon, title, desc, i }) => (
  <MotionCard delay={i * 0.05}>
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-colors hover:bg-white/10">
      <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-tr from-violet-600/20 to-fuchsia-500/20 blur-2xl transition-opacity group-hover:opacity-100" />
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600/25 to-fuchsia-500/25 text-violet-200 ring-1 ring-inset ring-white/10">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-slate-300">{desc}</p>
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mt-4 h-px origin-left bg-gradient-to-r from-violet-500/60 via-fuchsia-500/60 to-transparent"
      />
    </div>
  </MotionCard>
);

const Features = () => {
  return (
    <section id="features" className="relative bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.25),transparent_60%)] blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-semibold sm:text-4xl"
          >
            Orchestrate every touchpoint with AI
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-slate-300"
          >
            Multi-channel agents collaborate to reach, qualify, and convert leads—automatically.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
