import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp,
  Target,
  Zap,
  Eye,
  ShieldAlert,
  Users2,
  TrendingDown,
  Info,
} from 'lucide-react';

interface BenefitProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

  const BenefitItem: React.FC<BenefitProps> = ({ title, description, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl hover:bg-black/5 dark:hover:bg-white/5 border border-transparent hover:border-black/5 dark:hover:border-white/5 transition-all duration-350"
    >
      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-sm sm:text-md font-bold text-gray-900 dark:text-white mb-0.5 sm:mb-1">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export const Benefits: React.FC = () => {
  const benefitsData: BenefitProps[] = [
    {
      title: 'Smart Savings',
      description: 'Systematically save and earn high dividend yields that outpace standard savings accounts.',
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: 'Financial Discipline',
      description: 'Monthly commitment keeps you focused on savings goals, helping you establish a strong financial net.',
      icon: <Target className="w-5 h-5" />,
    },
    {
      title: 'Quick Fund Access',
      description: 'Borrow from the chit pool immediately during emergencies without loans, interest traps, or collaterals.',
      icon: <Zap className="w-5 h-5" />,
    },
    {
      title: 'Transparent Process',
      description: 'Fully audited operations, state government registrations, and open ledger logs verify every transaction.',
      icon: <Eye className="w-5 h-5" />,
    },
    {
      title: 'Secure Transactions',
      description: 'Advanced encrypted escrows ensure that members monthly assets are safe and payouts are secure.',
      icon: <ShieldAlert className="w-5 h-5" />,
    },
    {
      title: 'Trusted Community',
      description: 'Join thousands of verified members and corporate entities operating under strict regulatory custody.',
      icon: <Users2 className="w-5 h-5" />,
    },
  ];

  return (
    <section className="py-24 relative bg-luxury-dark">
      {/* Radial Background Light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[200px] h-[200px] sm:w-[600px] sm:h-[600px] glow-radial-emerald opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        {/* Left Side: Text and Benefits List */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-luxury-emerald/10 border border-luxury-emerald/20 rounded-full px-4 py-1 mb-4 w-fit"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-luxury-emerald">Financial Advantages</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-6"
          >
            Why Choose Chit Funds Over <span className="text-gradient-gold">Traditional Banking?</span>
          </motion.h2>

          <div className="space-y-2 mt-4">
            {benefitsData.map((benefit, index) => (
              <BenefitItem key={index} {...benefit} />
            ))}
          </div>
        </div>

        {/* Right Side: Comparative Yield Infographic Card */}
        <div className="lg:col-span-6 relative flex items-center justify-center">

          {/* Main Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full max-w-[480px] bg-glass rounded-2xl border border-black/10 dark:border-white/10 p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-luxury-emerald/5 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-bold tracking-wider uppercase text-gray-500 dark:text-gray-400 flex items-center">
                <Info className="w-3.5 h-3.5 text-gold-600 dark:text-gold-500 mr-1.5" /> Performance Comparison
              </span>
              <span className="text-[10px] text-gray-500 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-2 py-0.5 rounded">Govt. Index 2026</span>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Savings Yield Efficiency</h3>

            {/* Performance Bar 1: Aureum Chits */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Aureum Chit Dividends</span>
                <span className="font-bold text-gold-600 dark:text-gold-400 flex items-center">
                  <TrendingUp className="w-3 h-3 text-gold-600 dark:text-gold-400 mr-0.5" /> 8.5% - 11.2% p.a.
                </span>
              </div>
              <div className="w-full h-3 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '92%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-gold rounded-full"
                />
              </div>
            </div>

            {/* Performance Bar 2: Mutual Funds */}
            <div className="space-y-2 mb-6">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Traditional Fixed Deposit</span>
                <span className="font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <TrendingDown className="w-3 h-3 text-red-500 mr-0.5" /> 6.0% - 7.5% p.a.
                </span>
              </div>
              <div className="w-full h-3 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '60%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-blue-500/60 rounded-full"
                />
              </div>
            </div>

            {/* Performance Bar 3: Savings Banks */}
            <div className="space-y-2 mb-8">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-gray-700 dark:text-gray-300">Normal Savings Accounts</span>
                <span className="font-bold text-gray-600 dark:text-gray-400 flex items-center">
                  <TrendingDown className="w-3 h-3 text-red-500 mr-0.5" /> 3.0% - 4.2% p.a.
                </span>
              </div>
              <div className="w-full h-3 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden border border-black/5 dark:border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '32%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="h-full bg-gray-400 rounded-full"
                />
              </div>
            </div>

            {/* Comparison takeaway */}
            <div className="bg-luxury-emerald/5 border border-luxury-emerald/20 rounded-xl p-4 flex items-start space-x-3">
              <div className="w-5 h-5 rounded-full bg-luxury-emerald/10 flex items-center justify-center text-luxury-emerald shrink-0 mt-0.5">
                <Zap className="w-3 h-3" />
              </div>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-gray-900 dark:text-white">Dual Benefit Advantage:</strong> Save systematically and borrow instantly at rates lower than commercial bank personal loans. Bypasses standard credit rating checks.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
