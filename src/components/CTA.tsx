import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, HelpCircle, Shield, Award } from 'lucide-react';

interface CTAProps {
  onNavigate: (sectionId: string) => void;
}

export const CTA: React.FC<CTAProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 relative bg-luxury-dark overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] glow-radial-gold opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Banner Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-gradient-to-tr from-[#121218] via-[#102a1e] to-[#1a140d] border border-gold-500/25 rounded-3xl p-10 md:p-16 text-center shadow-2xl overflow-hidden glow-gold"
        >
          {/* Subtle ambient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-luxury-emerald/5 pointer-events-none" />

          {/* Floating graphic bubbles */}
          <div className="absolute -top-12 -left-12 w-28 h-28 rounded-full bg-gold-500/5 blur-xl pointer-events-none animate-pulse" />
          <div className="absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-luxury-emerald/5 blur-xl pointer-events-none animate-pulse" />

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md"
            >
              <Award className="w-4.5 h-4.5 text-gold-400" />
              <span className="text-xs font-bold tracking-wider uppercase text-gold-300">Start Wealth Building</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6"
            >
              Start Your Wealth Building <span className="text-gradient-gold">Journey Today</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed"
            >
              Join our government-regulated digital chit funds. Save systematically, earn competitive dividends, and secure immediate borrowing power with absolute transparency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-base font-bold text-luxury-dark bg-gradient-gold px-8 py-4 rounded-xl shadow-lg hover:shadow-gold-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 text-base font-semibold text-white bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 px-8 py-4 rounded-xl backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <HelpCircle className="w-5 h-5 text-gold-400" />
                <span>Contact Advisor</span>
              </button>
            </motion.div>

            {/* Platform assurances */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-xs text-gray-400 border-t border-white/5 pt-8">
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-luxury-emerald" />
                <span>Govt. Regulated Under Act 1982</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-500 hidden sm:block" />
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-luxury-emerald" />
                <span>Secure SSL gateway vault</span>
              </div>
              <div className="h-1 w-1 rounded-full bg-gray-500 hidden sm:block" />
              <div className="flex items-center space-x-1.5">
                <Shield className="w-4 h-4 text-luxury-emerald" />
                <span>Zero Interest Trap Guarantee</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
