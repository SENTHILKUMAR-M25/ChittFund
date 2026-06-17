import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  avatarBg: string;
  text: string;
  rating: number;
  badge: string;
}

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Amit Sharma',
      role: 'Founding Director',
      company: 'Vibrant Textiles Ltd.',
      avatar: 'AS',
      avatarBg: 'from-[#bf953f] to-[#b38728]',
      text: 'I needed ₹5,00,000 urgently to restock raw material inventory before the festival season. By participating in our Gold Chit group auction, I obtained the entire fund pool within 24 hours at a borrowing rate far below personal bank loans. Highly recommended!',
      rating: 5,
      badge: 'Business Member',
    },
    {
      name: 'Priya Nair',
      role: 'Principal Software Engineer',
      company: 'TechNovus Solutions',
      avatar: 'PN',
      avatarBg: 'from-emerald-400 to-teal-600',
      text: 'Aureum Chits has helped me establish a disciplined savings schedule. Since I do not need immediate liquidity, my monthly dividends keep rolling over, which effectively boosts my overall yield to 11% annually. It completely outperforms traditional fixed deposits.',
      rating: 5,
      badge: 'Savings Member',
    },
    {
      name: 'Vikram Seth',
      role: 'Co-Founder & CEO',
      company: 'Seth Realty Partners',
      avatar: 'VS',
      avatarBg: 'from-blue-500 to-indigo-600',
      text: 'Absolutely seamless operations. Onboarding and KYC verification were completed digitally in 10 minutes. The automated dashboard makes monitoring auctions, dividend distribution sheets, and monthly deadlines extremely simple. Outstanding SaaS execution.',
      rating: 5,
      badge: 'Platinum Corporate Member',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 relative bg-luxury-dark overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[250px] h-[250px] sm:w-[850px] sm:h-[300px] glow-radial-gold opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Client Reviews</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Trusted by Thousands of <span className="text-gradient-gold">Savers & Businesses</span>
          </h2>
        </div>

        {/* Carousel Content */}
        <div className="relative min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="w-full bg-glass border border-black/10 dark:border-white/10 rounded-2xl p-8 sm:p-12 shadow-2xl relative"
            >
              <Quote className="absolute right-8 top-8 w-16 h-16 text-black/5 dark:text-white/5 pointer-events-none" />

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">

                {/* User Initials Avatar */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${testimonials[activeIndex].avatarBg} flex items-center justify-center text-luxury-dark font-extrabold text-2xl shadow-lg shrink-0`}>
                  {testimonials[activeIndex].avatar}
                </div>

                {/* Review Text */}
                <div className="flex-grow text-center sm:text-left">
                  {/* Stars */}
                  <div className="flex items-center justify-center sm:justify-start space-x-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 text-gold-600 dark:text-gold-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed mb-6">
                    "{testimonials[activeIndex].text}"
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div>
                      <h4 className="text-md font-bold text-gray-900 dark:text-white">{testimonials[activeIndex].name}</h4>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">
                        {testimonials[activeIndex].role} &mdash; <span className="text-gray-600 dark:text-gray-400">{testimonials[activeIndex].company}</span>
                      </p>
                    </div>
                    <span className="inline-flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider text-luxury-emerald bg-luxury-emerald/10 border border-luxury-emerald/20 px-3 py-1 rounded-full w-fit mx-auto sm:mx-0">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{testimonials[activeIndex].badge}</span>
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Actions Navigation */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex space-x-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-350 cursor-pointer ${i === activeIndex ? 'w-8 bg-gradient-gold' : 'w-2.5 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20'
                  }`}
              />
            ))}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
