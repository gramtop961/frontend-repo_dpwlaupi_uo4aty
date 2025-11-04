import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'Free trial',
    features: [
      '500 contacts included',
      '1 AI agent (SMS or Email)',
      'Basic templates',
      'Shared number',
    ],
    cta: 'Start free',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$249',
    cadence: 'per month',
    features: [
      '10,000 contacts',
      '3 AI agents (SMS, Email, Voice)',
      'A/B testing & analytics',
      'Dedicated numbers',
      'CRM integrations',
    ],
    cta: 'Choose Growth',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: 'Custom',
    cadence: 'enterprise',
    features: [
      'Unlimited contacts',
      'Agent fine-tuning',
      'SLA & SSO',
      'Compliance controls',
      'Priority support',
    ],
    cta: 'Talk to sales',
    highlighted: false,
  },
];

const PricingCard = ({ name, price, cadence, features, cta, highlighted, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border p-6 backdrop-blur-md transition-all ${
        highlighted
          ? 'border-violet-500/40 bg-gradient-to-br from-violet-600/15 to-fuchsia-500/10 shadow-2xl shadow-violet-800/30'
          : 'border-white/10 bg-white/5 hover:bg-white/10'
      }`}
    >
      {highlighted && (
        <span className="absolute right-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white shadow">Popular</span>
      )}
      <h3 className="text-lg font-semibold text-white">{name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-sm text-slate-300">{cadence}</span>
      </div>
      <ul className="mt-6 space-y-2 text-slate-300">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-violet-400" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className={`mt-8 inline-flex items-center justify-center rounded-xl px-4 py-2 font-medium transition ${
          highlighted
            ? 'bg-gradient-to-tr from-violet-600 to-fuchsia-500 text-white hover:brightness-110'
            : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
        }`}
      >
        {cta}
      </a>

      {/* Glow ring */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="pointer-events-none absolute -inset-px rounded-2xl border border-violet-400/20"
      />
    </motion.div>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-slate-950 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-60 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.18),transparent_60%)] blur-3xl" />
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
            Pricing that scales with you
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-slate-300"
          >
            Start free. Upgrade when you're ready to automate at scale.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
          {tiers.map((t, i) => (
            <PricingCard key={t.name} {...t} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
