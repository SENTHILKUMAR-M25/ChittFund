import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, ShieldCheck, Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'gold',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', plan: 'gold', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 relative bg-luxury-dark overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-10 w-[400px] h-[400px] glow-radial-gold opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[400px] h-[400px] glow-radial-emerald opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Inquiry Desk</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Connect With a <span className="text-gradient-gold">Chit Fund Advisor</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-glass rounded-2xl p-8 border border-black/10 dark:border-white/10 flex-grow flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-luxury-emerald uppercase tracking-widest block mb-1">Direct Assistance</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Let Us Design Your Savings Plan</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-medium">
                    Have questions about auction processes, dividends, or need assistance selecting the right pool? Contact our advisors directly.
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-semibold uppercase">Call Helpline</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">+91 80 4952 8200</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-semibold uppercase">Email Support</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">advisor@aureumchits.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-lg bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-gold-600 dark:text-gold-400">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-500 font-semibold uppercase">Business Hours</p>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">Mon &ndash; Sat, 9:00 AM &ndash; 6:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 dark:border-white/5 flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-lg bg-luxury-emerald/10 border border-luxury-emerald/20 flex items-center justify-center text-luxury-emerald shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">Secured Regulatory Escrow</h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5 font-medium">Registration Number: KA-REG/CHIT/839/2026</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interaction Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-glass rounded-2xl p-8 border border-black/10 dark:border-white/10 shadow-2xl h-full relative overflow-hidden"
            >
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center text-gold-500 dark:text-gold-400 mb-6 glow-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Request Submitted Successfully</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 max-w-sm leading-relaxed mb-6">
                    Thank you! One of our wealth management advisors will review your portfolio goals and contact you within the next 2 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-bold text-gold-600 dark:text-gold-400 hover:text-gray-900 dark:hover:text-white underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="Amit Kumar"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="+91 99000 XXXXX"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors placeholder-gray-400 dark:placeholder-gray-500"
                        placeholder="amit.kumar@example.com"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="plan" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Target Chit Scheme</label>
                      <select
                        id="plan"
                        value={formData.plan}
                        onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors [&>option]:bg-white dark:[&>option]:bg-luxury-card"
                      >
                        <option value="silver">Silver Scheme &mdash; ₹2.5L pool</option>
                        <option value="gold">Gold Scheme &mdash; ₹10.0L pool</option>
                        <option value="platinum">Platinum Scheme &mdash; ₹25.0L pool</option>
                        <option value="other">Not Sure &mdash; Need Advisor Advice</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">Your Goal / Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white focus:outline-none focus:border-gold-500/50 transition-colors resize-none placeholder-gray-400 dark:placeholder-gray-500"
                      placeholder="Specify your investment targets or questions..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 text-sm font-bold text-luxury-dark bg-gradient-gold py-4 rounded-xl shadow-lg hover:shadow-gold-500/25 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex h-5 w-5 border-2 border-luxury-dark border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Request Callback</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
