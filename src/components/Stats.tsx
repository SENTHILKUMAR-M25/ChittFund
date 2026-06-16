import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const StatCounter: React.FC<StatItemProps> = ({ icon, value, suffix, label, description }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = Math.max(Math.floor(duration / end), 20);

      const timer = setInterval(() => {
        start += Math.ceil(end / (duration / incrementTime));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  const formatNumber = (num: number) => num.toLocaleString('en-IN');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="rounded-2xl p-6 border border-black/10 dark:border-white/10 hover:border-gold-500/40 transition-all duration-300 relative group overflow-hidden bg-glass"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      <div className="absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-black/5 dark:bg-white/10 opacity-[0.03] dark:opacity-[0.03] group-hover:scale-150 transition-transform duration-500" />

      <div className="flex items-center justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:bg-gold-500/10 group-hover:text-gold-500 transition-colors duration-300">
          {icon}
        </div>
        <span className="text-[11px] text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">Live Metric</span>
      </div>

      <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 flex items-baseline">
        <span className="text-gradient-gold">{formatNumber(count)}</span>
        <span className="text-gold-600 dark:text-gold-400 ml-1">{suffix}</span>
      </h3>

      <h4 className="text-md font-bold text-gray-800 dark:text-gray-100 mb-1">{label}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export const Stats: React.FC = () => {
  const statsData: StatItemProps[] = [
    {
      icon: <Users className="w-6 h-6" />,
      value: 10000,
      suffix: '+',
      label: 'Active Members',
      description: 'Trusted by verified savers & borrowers nationwide.',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: 100,
      suffix: ' Cr+',
      label: 'Managed Funds',
      description: 'Capital securely rotating through Chit auctions.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      value: 500,
      suffix: '+',
      label: 'Active Chit Groups',
      description: 'Fully regulated groups running concurrently.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      value: 98,
      suffix: '%',
      label: 'Satisfaction Rate',
      description: 'Customers praising our transparency & payout speed.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-luxury-dark">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-75 bg-linear-to-r from-gold-500/5 to-luxury-emerald/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
