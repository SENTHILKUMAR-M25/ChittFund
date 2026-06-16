import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Users, DollarSign, Wallet } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] glow-radial-gold opacity-60 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] glow-radial-emerald opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[400px] h-[400px] glow-radial-blue opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Content */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full px-4 py-1.5 w-fit mb-6 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-luxury-emerald animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-gray-700 dark:text-gray-300">Govt. Registered & Secure Scheme</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-tight mb-6"
          >
            Secure Your Financial Future with Trusted{' '}
            <span className="text-gradient-gold">Chit Fund Investments</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mb-8 leading-relaxed"
          >
            Save systematically, borrow borrow-free, and grow your wealth. Aureum Chits combines the age-old wisdom of mutual credit with next-gen digital transparency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8"
          >
            <button
              onClick={() => onNavigate('contact')}
              className="flex items-center justify-center space-x-2 text-base font-bold text-luxury-dark bg-gradient-gold px-8 py-4 rounded-xl shadow-lg hover:shadow-gold-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => onNavigate('plans')}
              className="flex items-center justify-center space-x-2 text-base font-semibold text-gray-900 dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/10 dark:hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Plans</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 gap-4 pt-4 border-t border-black/10 dark:border-white/5"
          >
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-luxury-emerald shrink-0" />
              <span>No Credit Score Required</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <CheckCircle2 className="w-4 h-4 text-luxury-emerald shrink-0" />
              <span>Smart Contract Transparency</span>
            </div>
          </motion.div>
        </div>

        {/* Right Dashboard Mockup / Floating Cards */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px]">

          {/* Main Dashboard Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full max-w-[420px] bg-glass rounded-2xl border border-black/10 dark:border-white/10 p-6 glow-gold relative"
          >
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/5 pb-4 mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="text-[10px] tracking-widest uppercase text-gray-500 pl-2">AUREUM PLATFORM v2.1</span>
              </div>
              <span className="text-xs text-luxury-emerald bg-luxury-emerald/10 px-2 py-0.5 rounded-full font-medium">Live Auction</span>
            </div>

            {/* Dashboard Mockup Content */}
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Total Account Balance</p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">₹4,85,250</h3>
                  <span className="text-xs text-luxury-emerald flex items-center font-medium">
                    <TrendingUp className="w-3. h-3 mr-0.5" /> +12.4%
                  </span>
                </div>
              </div>

              {/* Progress chart illustration */}
              <div className="bg-black/5 dark:bg-white/5 rounded-xl p-4 border border-black/5 dark:border-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Auction Bidding Activity</span>
                  <span className="text-xs text-gold-600 dark:text-gold-400">Next Auction: 2h 45m</span>
                </div>
                <div className="h-16 flex items-end space-x-2 pt-2">
                  {[30, 45, 35, 60, 50, 75, 90, 85].map((val, idx) => (
                    <div key={idx} className="flex-1 bg-gradient-to-t from-gold-600 to-gold-400 rounded-t" style={{ height: `${val}%` }} />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] text-gray-500 dark:text-gray-400 pt-2">
                  <span>Group A-101</span>
                  <span>Active Bid: ₹4,12,000</span>
                </div>
              </div>

              {/* Quick Details Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3 border border-black/5 dark:border-white/5">
                  <span className="text-[10px] text-gray-500 block">Dividend Earned</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">₹24,800</span>
                </div>
                <div className="bg-black/5 dark:bg-white/5 rounded-lg p-3 border border-black/5 dark:border-white/5">
                  <span className="text-[10px] text-gray-500 block">Chit Term</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">18 / 25 Mo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Card 1: Active Members */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -top-4 -right-2 sm:-right-4 bg-glass shadow-xl flex items-center space-x-2.5 max-w-[165px] hover:scale-105 transition-transform animate-float"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Users className="w-4 h-4 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 dark:text-gray-400 font-medium leading-tight">Active Members</p>
              <h4 className="text-[13px] font-extrabold text-gray-900 dark:text-white leading-tight">10,000+</h4>
              <p className="text-[8px] text-gray-500 leading-tight">Verified Investors</p>
            </div>
          </motion.div>

          {/* Floating Card 2: Total Funds Managed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 -left-3 sm:-left-8 bg-glass shadow-xl flex items-center space-x-2.5 max-w-[175px] hover:scale-105 transition-transform animate-float-delayed"
          >
            <div className="w-8 h-8 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0">
              <Wallet className="w-4 h-4 text-gold-600 dark:text-gold-400" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 dark:text-gray-400 font-medium leading-tight">Funds Managed</p>
              <h4 className="text-[13px] font-extrabold text-gradient-gold leading-tight">₹100 Cr+</h4>
              <p className="text-[8px] text-gray-500 leading-tight">Under Custodian Vault</p>
            </div>
          </motion.div>

          {/* Floating Card 3: Monthly Payouts */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute -bottom-5 right-0 sm:right-3 bg-glass shadow-xl flex items-center space-x-2.5 max-w-[170px] hover:scale-105 transition-transform"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <DollarSign className="w-4 h-4 text-luxury-emerald" />
            </div>
            <div>
              <p className="text-[9px] text-gray-500 dark:text-gray-400 font-medium leading-tight">Customer Support</p>
              <h4 className="text-[13px] font-extrabold text-gray-900 dark:text-white leading-tight">98% Satisfied</h4>
              <p className="text-[8px] text-gray-500 leading-tight">Instant Resolutions</p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
