import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Sparkles, CheckCircle2, Shield, ArrowRight } from 'lucide-react';

export const InvestmentPlanner: React.FC = () => {
  const [monthlyContribution, setMonthlyContribution] = useState<number>(20000);
  const [duration, setDuration] = useState<number>(30);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Calculations
  const [totalPrincipal, setTotalPrincipal] = useState<number>(0);
  const [estimatedDividends, setEstimatedDividends] = useState<number>(0);
  const [maturityValue, setMaturityValue] = useState<number>(0);
  const [effectiveCost, setEffectiveCost] = useState<number>(0);

  useEffect(() => {
    const principal = monthlyContribution * duration;
    // Chit yield estimation: ~10% simple interest on average rotation duration
    const dividendRate = 0.098; 
    const dividends = Math.round(principal * dividendRate * (duration / 12) * 0.5);
    const maturity = principal + dividends;
    const effCost = Math.round((principal - dividends) / duration);

    setTotalPrincipal(principal);
    setEstimatedDividends(dividends);
    setMaturityValue(maturity);
    setEffectiveCost(effCost);
  }, [monthlyContribution, duration]);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const formatCurrency = (val: number) => {
    return '₹' + val.toLocaleString('en-IN');
  };

  return (
    <section id="planner" className="py-24 relative bg-luxury-dark overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[900px] sm:h-[450px] glow-radial-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <Calculator className="w-4 h-4 text-gold-600 dark:text-gold-400" />
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Interactive Planner</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Design Your Custom <span className="text-gradient-gold">Investment Plan</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            Use our calculator to customize your monthly goals and review estimated dividends prior to group allocation.
          </p>
        </div>

        {/* Calculator Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Interactive Calculator Sliders */}
          <div className="lg:col-span-7 bg-glass rounded-2xl p-5 sm:p-6 lg:p-8 border border-black/10 dark:border-white/10 flex flex-col justify-between">
            <div className="space-y-5 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-bold text-gray-800 dark:text-white uppercase tracking-wider flex items-center">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-500 mr-1.5 sm:mr-2" /> Live Yield Estimator
                </span>
                <span className="text-[10px] sm:text-xs text-luxury-emerald bg-luxury-emerald/10 border border-luxury-emerald/20 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold">
                  Avg. Yield: 9.8% p.a.
                </span>
              </div>

              {/* Slider 1: Monthly Contribution */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold">Monthly Savings Target</label>
                  <span className="text-lg sm:text-xl font-extrabold text-gradient-gold">{formatCurrency(monthlyContribution)}</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={monthlyContribution}
                  onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500">
                  <span>Min: ₹5,000</span>
                  <span>Max: ₹1,50,000</span>
                </div>
              </div>

              {/* Slider 2: Duration */}
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between items-baseline">
                  <label className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 font-semibold">Plan Duration</label>
                  <span className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-white">{duration} Months</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="50"
                  step="5"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-gray-500">
                  <span>Min: 20 Months</span>
                  <span>Max: 50 Months</span>
                </div>
              </div>
            </div>

            {/* Live Yield Calculated Dashboard details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-black/10 dark:border-white/5">
              <div className="bg-black/5 dark:bg-white/5 rounded-xl p-2 sm:p-3 border border-black/5 dark:border-white/5">
                <span className="text-[9px] sm:text-[10px] text-gray-500 block uppercase font-medium">Principal Invested</span>
                <span className="text-sm sm:text-md font-bold text-gray-900 dark:text-white mt-0.5 block">{formatCurrency(totalPrincipal)}</span>
              </div>
              <div className="bg-black/5 dark:bg-white/5 rounded-xl p-2 sm:p-3 border border-black/5 dark:border-white/5">
                <span className="text-[9px] sm:text-[10px] text-gray-500 block uppercase font-medium">Est. Dividends</span>
                <span className="text-sm sm:text-md font-bold text-luxury-emerald mt-0.5 block">+{formatCurrency(estimatedDividends)}</span>
              </div>
              <div className="bg-black/5 dark:bg-white/5 rounded-xl p-2 sm:p-3 border border-black/5 dark:border-white/5">
                <span className="text-[9px] sm:text-[10px] text-gray-500 block uppercase font-medium">Total Maturity</span>
                <span className="text-sm sm:text-md font-bold text-gradient-gold mt-0.5 block">{formatCurrency(maturityValue)}</span>
              </div>
              <div className="bg-black/5 dark:bg-white/5 rounded-xl p-2 sm:p-3 border border-black/5 dark:border-white/5">
                <span className="text-[9px] sm:text-[10px] text-gray-500 block uppercase font-medium">Net Monthly Cost</span>
                <span className="text-sm sm:text-md font-bold text-gray-900 dark:text-white mt-0.5 block">{formatCurrency(effectiveCost)}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dummy Application Form */}
          <div className="lg:col-span-5">
            <motion.div
              layout
              className="bg-glass rounded-2xl p-5 sm:p-6 lg:p-8 border border-black/10 dark:border-white/10 shadow-2xl h-full flex flex-col justify-between relative overflow-hidden"
            >
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center h-full text-center py-6 sm:py-8"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 dark:text-gold-400 mb-4 sm:mb-6 glow-gold">
                      <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1.5 sm:mb-2">Savings Blueprint Locked</h4>
                    <p className="text-[11px] sm:text-xs text-gray-600 dark:text-gray-400 max-w-[260px] sm:max-w-[280px] leading-relaxed mb-4 sm:mb-6">
                      Your calculations for a {duration}-month scheme at {formatCurrency(monthlyContribution)}/mo have been saved. An advisor will message you to proceed.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-[11px] sm:text-xs text-gold-600 dark:text-gold-400 font-bold hover:underline"
                    >
                      Reset planner configurations
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleApply}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-3 sm:space-y-4"
                  >
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">Subscribe & Lock Rates</h3>
                      <p className="text-[11px] sm:text-xs text-gray-500 dark:text-gray-400 mt-0.5 sm:mt-1">Submit this plan details to hold slots in the next upcoming group.</p>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Your Name</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.doe@example.com"
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Target Scheme</label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(Number(e.target.value))}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors [&>option]:bg-white dark:[&>option]:bg-luxury-card"
                      >
                        <option value="20">20 Months Scheme</option>
                        <option value="25">25 Months Scheme</option>
                        <option value="30">30 Months Scheme</option>
                        <option value="40">40 Months Scheme</option>
                        <option value="50">50 Months Scheme</option>
                      </select>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center space-x-2 text-xs font-bold text-luxury-dark bg-gradient-gold py-3.5 rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all cursor-pointer disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span className="flex h-4 w-4 border-2 border-luxury-dark border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <>
                            <span>Initialize Plan</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 pt-3 border-t border-black/10 dark:border-white/5 text-[10px] text-gray-500">
                      <Shield className="w-3.5 h-3.5 text-luxury-emerald shrink-0" />
                      <span>Rates are estimates under current RBI guidelines.</span>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
