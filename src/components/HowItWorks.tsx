import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, FolderPlus, CreditCard, Gavel, HandCoins } from 'lucide-react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowItWorks: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      number: 1,
      title: 'Register Account',
      description: 'Sign up securely on our platform, verify your KYC, and create your premium member profile in minutes.',
      icon: <UserCheck className="w-6 h-6" />,
    },
    {
      number: 2,
      title: 'Join Chit Group',
      description: 'Choose a chit fund scheme that matches your savings goal (e.g. Gold, Silver, or Platinum) and pool size.',
      icon: <FolderPlus className="w-6 h-6" />,
    },
    {
      number: 3,
      title: 'Pay Monthly Installments',
      description: 'Contribute your monthly share easily via automated online payment methods. Get instant digital receipts.',
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      number: 4,
      title: 'Participate in Auction',
      description: 'Bid in the monthly transparent digital auction. Borrow funds when you need them or earn dividends if you save.',
      icon: <Gavel className="w-6 h-6" />,
    },
    {
      number: 5,
      title: 'Receive Chit Amount',
      description: 'Get the winning bid amount deposited directly to your bank account within 24 hours of auction finalization.',
      icon: <HandCoins className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-luxury-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] glow-radial-emerald opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] glow-radial-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Step-By-Step Process</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            How Does a <span className="text-gradient-gold">Chit Fund Work?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            A perfect combination of systematic savings and credit facilities designed to give you maximum financial control.
          </motion.p>
        </div>

        {/* Timeline Desktop Structure */}
        <div className="relative hidden md:block">

          {/* Vertical Center Track Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold-500 via-luxury-emerald to-blue-500 opacity-35" />

          {/* Steps Loop */}
          <div className="space-y-16">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="flex items-center justify-between w-full">

                  {/* Left Column (Left Side Card or Empty) */}
                  <div className="w-[45%] flex justify-end">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="bg-glass rounded-2xl p-6 border border-black/10 dark:border-white/10 text-right hover:border-gold-500/20 hover:scale-[1.02] transition-all max-w-[450px]"
                      >
                        <span className="text-sm font-bold text-gold-600 dark:text-gold-400">Step 0{step.number}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                      </motion.div>
                    ) : null}
                  </div>

                  {/* Timeline Badge (Center Indicator) */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-luxury-dark border-4 border-gold-600 flex items-center justify-center text-gold-600 dark:text-gold-400 z-10 glow-gold"
                  >
                    {step.icon}
                  </motion.div>

                  {/* Right Column (Right Side Card or Empty) */}
                  <div className="w-[45%] flex justify-start">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                        className="bg-glass rounded-2xl p-6 border border-black/10 dark:border-white/10 text-left hover:border-gold-500/20 hover:scale-[1.02] transition-all max-w-[450px]"
                      >
                        <span className="text-sm font-bold text-gold-600 dark:text-gold-400">Step 0{step.number}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1 mb-2">{step.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
                      </motion.div>
                    ) : null}
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Mobile Structure */}
        <div className="md:hidden space-y-8 relative">
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold-500 to-blue-500 opacity-20" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex space-x-4 pl-2"
            >
              <div className="w-10 h-10 rounded-full bg-luxury-dark border-2 border-gold-600 flex items-center justify-center text-gold-600 dark:text-gold-400 shrink-0 z-10 shadow-lg shadow-gold-500/10">
                {step.icon}
              </div>
              <div className="bg-glass rounded-2xl p-5 border border-black/10 dark:border-white/10 hover:border-gold-500/10 w-full">
                <span className="text-xs font-bold text-gold-600 dark:text-gold-400">Step 0{step.number}</span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-0.5 mb-1.5">{step.title}</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
