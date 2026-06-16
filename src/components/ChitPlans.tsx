import React, { useState } from 'react';
import { motion as framerMotion, AnimatePresence as FramerAnimatePresence } from 'framer-motion';
import { Check, Flame, Trophy, Gem, Sparkles, X, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PlanProps {
  name: string;
  monthly: string;
  duration: string;
  totalValue: string;
  commission: string;
  badge?: string;
  icon: React.ReactNode;
  benefits: string[];
  featured?: boolean;
}

interface PlanCardProps extends PlanProps {
  onSelect: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  name,
  monthly,
  duration,
  totalValue,
  commission,
  badge,
  icon,
  benefits,
  featured = false,
  onSelect,
}) => {
  return (
    <framerMotion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -12, transition: { duration: 0.2 } }}
      className={`rounded-2xl p-8 flex flex-col relative transition-all duration-300 ${
        featured
          ? 'bg-glass-gold border-gold-500/50 shadow-xl shadow-gold-500/10'
          : 'bg-glass border-black/10 dark:border-white/10 hover:border-black/20 dark:hover:border-white/20 shadow-lg'
      }`}
    >
      {/* Featured visual labels */}
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-gold text-luxury-dark text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest flex items-center space-x-1 shadow-md">
          <Flame className="w-3 h-3 fill-current" />
          <span>Most Popular Plan</span>
        </div>
      )}

      {badge && !featured && (
        <div className="absolute -top-3.5 left-6 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gold-600 dark:text-gold-400 text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {badge}
        </div>
      )}

      <div className="mb-6 flex justify-between items-start">
        <div>
          <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{name}</span>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-1">{totalValue}</h3>
          <p className="text-xs text-gray-500 mt-1">Chit Value Pool</p>
        </div>
        <div className={`p-3 rounded-xl ${featured ? 'bg-gold-500/10 text-gold-600 dark:text-gold-400' : 'bg-black/5 dark:bg-white/5 text-gray-700 dark:text-gray-300'}`}>
          {icon}
        </div>
      </div>

      <div className="h-[1px] bg-black/10 dark:bg-white/10 my-4" />

      {/* Plan Specific Numbers */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Monthly Share</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white mt-0.5">{monthly}</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Duration</p>
          <p className="text-lg font-bold text-gray-900 dark:text-white mt-0.5">{duration}</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Commission Fee</p>
          <p className="text-sm font-bold text-luxury-emerald mt-0.5">{commission}</p>
        </div>
        <div>
          <p className="text-[10px] text-gray-500 uppercase font-semibold">Max Members</p>
          <p className="text-sm font-bold text-gray-900 dark:text-white mt-0.5">{duration.split(' ')[0]} Members</p>
        </div>
      </div>

      <div className="h-[1px] bg-black/10 dark:bg-white/10 my-2" />

      {/* Benefits checklist */}
      <div className="space-y-3 mt-4 flex-grow">
        {benefits.map((benefit, idx) => (
          <div key={idx} className="flex items-start space-x-3 text-sm text-gray-700 dark:text-gray-300">
            <div className={`rounded-full p-0.5 shrink-0 mt-0.5 ${featured ? 'bg-gold-500/15 text-gold-600 dark:text-gold-400' : 'bg-emerald-500/10 text-luxury-emerald'}`}>
              <Check className="w-3.5 h-3.5" />
            </div>
            <span>{benefit}</span>
          </div>
        ))}
      </div>

      {/* CTA inside Plan */}
      <button
        onClick={onSelect}
        className={`w-full text-center py-3.5 rounded-xl font-bold text-sm transition-all duration-300 mt-8 cursor-pointer ${
          featured
            ? 'bg-gradient-gold text-luxury-dark shadow-lg hover:shadow-gold-500/20 hover:scale-[1.01]'
            : 'bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 text-gray-900 dark:text-white'
        }`}
      >
        {featured ? 'Subscribe Gold Scheme' : 'Join Scheme'}
      </button>
    </framerMotion.div>
  );
};

export const ChitPlans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanProps | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const plansData: PlanProps[] = [
    {
      name: 'Silver Standard',
      monthly: '₹10,000 / mo',
      duration: '25 Months',
      totalValue: '₹2,50,000',
      commission: '3.0% Commission',
      badge: 'Starter Savings',
      icon: <Sparkles className="w-6 h-6" />,
      benefits: [
        'Best for individual budget savers',
        'Transparent monthly online biddings',
        '24-Hour verification & approval',
        'Full digital statements & summaries',
        'Guaranteed minimum dividend rotation',
      ],
    },
    {
      name: 'Gold Wealth',
      monthly: '₹25,000 / mo',
      duration: '40 Months',
      totalValue: '₹10,00,000',
      commission: '2.5% Commission',
      icon: <Trophy className="w-6 h-6" />,
      featured: true,
      benefits: [
        'Perfect for business setups & goals',
        'Highly optimized dividend ratios',
        'Instant auction access from day 1',
        'Flexible custom security deposit values',
        'Priority withdrawal processing vault',
        'Dedicated customer support hotline',
      ],
    },
    {
      name: 'Platinum Premium',
      monthly: '₹50,000 / mo',
      duration: '50 Months',
      totalValue: '₹25,00,000',
      commission: '2.0% Commission',
      badge: 'HNW Elite Saver',
      icon: <Gem className="w-6 h-6" />,
      benefits: [
        'Tailored for large corporate investments',
        'Zero bidding cycle constraints',
        'Dedicated portfolio relationship manager',
        'Custom dividend payout schedule',
        'Collateralized credit eligibility booster',
      ],
    },
  ];

  const handleOpenModal = (plan: PlanProps) => {
    setSelectedPlan(plan);
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="plans" className="py-24 relative bg-luxury-dark">
      {/* Background radial glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[700px] glow-radial-gold opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <framerMotion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Tailored Schemes</span>
          </framerMotion.div>
          
          <framerMotion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            Choose Your <span className="text-gradient-gold">Chit Investment Plan</span>
          </framerMotion.h2>
          
          <framerMotion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg"
          >
            Find a structured mutual credit scheme matching your monthly budget and long-term liquidity requirements.
          </framerMotion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plansData.map((plan, index) => (
            <PlanCard
              key={index}
              {...plan}
              onSelect={() => handleOpenModal(plan)}
            />
          ))}
        </div>
      </div>

      {/* Popup Modal for Plan Subscription */}
      <FramerAnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <framerMotion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />

            {/* Modal Card */}
            <framerMotion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-glass rounded-2xl border border-black/10 dark:border-white/10 p-6 sm:p-8 max-w-[480px] w-full shadow-2xl relative z-10 overflow-hidden"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4.5 h-4.5" />
              </button>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 dark:text-gold-400 mb-6 glow-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Registration Complete!</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[320px] leading-relaxed mb-6">
                    You have successfully applied for the <strong className="text-gold-600 dark:text-gold-400">{selectedPlan.name}</strong> pool ({selectedPlan.totalValue}). An advisor will email you documentation steps shortly.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="flex items-center justify-center space-x-2 text-sm font-bold text-luxury-dark bg-gradient-gold px-6 py-2.5 rounded-lg shadow"
                  >
                    <span>Done</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-gold-600 dark:text-gold-400 uppercase tracking-widest">Selected Subscription</span>
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mt-0.5">{selectedPlan.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Pool: <strong className="text-gray-700 dark:text-gray-300">{selectedPlan.totalValue}</strong> &bull; Share: <strong className="text-gray-700 dark:text-gray-300">{selectedPlan.monthly}</strong> &bull; Term: <strong className="text-gray-700 dark:text-gray-300">{selectedPlan.duration}</strong>
                    </p>
                  </div>

                  <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1" />

                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase">Your Full Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Amit Kumar"
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
                      placeholder="+91 99000 XXXXX"
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
                      placeholder="amit.kumar@example.com"
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2.5 text-xs text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex text-black items-center justify-center space-x-2 text-xs font-bold  bg-gradient-gold py-3.5 rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span className="flex h-4 w-4 border-2 border-luxury-dark  border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <span className="">Submit Subscription</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  <div className="flex items-center space-x-2 pt-3 border-t border-black/10 dark:border-white/5 text-[9px] text-gray-500">
                    <Shield className="w-3.5 h-3.5 text-luxury-emerald shrink-0" />
                    <span>Registered under Central Act 1982. 100% Secure.</span>
                  </div>
                </form>
              )}
            </framerMotion.div>
          </div>
        )}
      </FramerAnimatePresence>
    </section>
  );
};
