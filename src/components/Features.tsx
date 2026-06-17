import React from 'react';
import { motion } from 'framer-motion';
import {
  CreditCard,
  FileCheck,
  Gavel,
  LayoutDashboard,
  CalendarDays,
  BellRing,
  Fingerprint,
  LineChart,
} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  glowClass: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ title, description, icon, glowClass }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.01 }}
      className="bg-glass rounded-2xl p-5 sm:p-6 border border-black/10 dark:border-white/10 hover:border-gold-500/20 transition-all duration-300 relative group overflow-hidden"
    >
      {/* Decorative radial glows on hover */}
      <div className={`absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${glowClass}`} />

      <div className="relative z-10">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400 group-hover:bg-gradient-gold group-hover:text-luxury-dark transition-all duration-300 mb-4 sm:mb-6 shadow-inner">
          {icon}
        </div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2.5 group-hover:text-gold-700 dark:group-hover:text-gold-100 transition-colors duration-300">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-300 transition-colors duration-300">{description}</p>
      </div>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  const featuresData: FeatureProps[] = [
    {
      title: 'Secure Online Payments',
      description: 'Deposit monthly installments instantly through UPI, net banking, or debit/credit cards with bank-grade encryption.',
      icon: <CreditCard className="w-6 h-6" />,
      glowClass: 'glow-radial-gold',
    },
    {
      title: 'Digital Receipts',
      description: 'Receive instant digital receipts and secure statement links directly in your app ledger for maximum tax safety.',
      icon: <FileCheck className="w-6 h-6" />,
      glowClass: 'glow-radial-emerald',
    },
    {
      title: 'Live Auction System',
      description: 'Participate in secure monthly biddings online. Set auto-bids and follow results in real-time from anywhere.',
      icon: <Gavel className="w-6 h-6" />,
      glowClass: 'glow-radial-blue',
    },
    {
      title: 'Member Dashboard',
      description: 'Track your returns, outstanding durations, bid wins, and dividends earned through a visual, comprehensive dashboard.',
      icon: <LayoutDashboard className="w-6 h-6" />,
      glowClass: 'glow-radial-gold',
    },
    {
      title: 'Automated Reminders',
      description: 'Never miss an installment. Get smart customizable reminders via WhatsApp, email, and mobile push notifications.',
      icon: <CalendarDays className="w-6 h-6" />,
      glowClass: 'glow-radial-emerald',
    },
    {
      title: 'Real-Time Notifications',
      description: 'Stay updated with live SMS/push alerts for auction triggers, winning bid payouts, and group dividend declarations.',
      icon: <BellRing className="w-6 h-6" />,
      glowClass: 'glow-radial-blue',
    },
    {
      title: 'KYC Verification',
      description: 'Complete onboarding with quick, paperless automated KYC, secure Aadhaar e-verification, and digital agreements.',
      icon: <Fingerprint className="w-6 h-6" />,
      glowClass: 'glow-radial-gold',
    },
    {
      title: 'Analytics & Reports',
      description: 'Download detailed yearly dividend performance sheets, tax statements, and yield percentage tracking tables.',
      icon: <LineChart className="w-6 h-6" />,
      glowClass: 'glow-radial-emerald',
    },
  ];

  return (
    <section id="features" className="py-24 relative bg-luxury-dark overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[200px] sm:w-[800px] sm:h-[500px] bg-gradient-to-r from-gold-500/5 via-blue-500/5 to-luxury-emerald/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Platform Features</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            A SaaS Experience for <span className="text-gradient-gold">Smart Saving</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Enjoy next-generation tools designed to keep your chit investments secure, transparent, and completely effortless.
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
