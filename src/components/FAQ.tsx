import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<{
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border-b border-black/10 dark:border-white/5 last:border-0 py-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-2 font-bold text-gray-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors focus:outline-none cursor-pointer"
      >
        <span className="text-base sm:text-lg flex items-center pr-4">
          <HelpCircle className="w-5 h-5 text-gold-600 dark:text-gold-500 mr-3 shrink-0" />
          {item.question}
        </span>
        <span className="shrink-0 text-gray-400 dark:text-gray-500">
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed pt-2 pb-4 pl-8">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'What is a Chit Fund and how does it operate?',
      answer:
        'A chit fund is a traditional savings and credit instrument regulated by law. A group of members contributes a fixed amount monthly. Each month, a digital auction is held, and the member willing to accept the highest discount wins the lump sum pool. The discount bid is distributed back to all remaining group members as monthly dividends, which lowers their effective contribution.',
    },
    {
      question: 'How do I pay my monthly installments?',
      answer:
        'Aureum Chits supports completely automated digital payments. You can set up UPI AutoPay, e-mandates (NACH), or pay manually using credit/debit cards, UPI, or net banking directly from your member dashboard. Instant receipts and ledger updates are generated immediately.',
    },
    {
      question: 'How are the monthly auctions conducted?',
      answer:
        'Auctions occur online on specific dates listed in your group itinerary. Members can bid in real-time from the dashboard, or set automated parameters using our Smart bidding tool. The bidding begins at the maximum pool value and drops by increments until the final bidder accepts.',
    },
    {
      question: 'Are my funds secure and legally registered?',
      answer:
        'Absolutely. Aureum Chits is fully registered under the Chit Funds Act, 1982, and operates under strict guidelines supervised by the State Registrar of Chits. Before starting any group, we deposit a 100% bank guarantee collateral with the government to ensure full member protection.',
    },
    {
      question: 'What is the process for receiving the winning bid amount?',
      answer:
        'If you win the auction, you must upload basic documentation (like address proof or co-signer guarantees, depending on the scheme tier). Once verified, the prize money is disbursed directly to your registered bank account within 24 working hours.',
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-luxury-dark overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[150px] h-[150px] sm:w-[350px] sm:h-[350px] glow-radial-emerald opacity-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-gold-500/10 border border-gold-500/20 rounded-full px-4 py-1 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gold-600 dark:text-gold-400">Common Enquiries</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </div>

        {/* FAQ Accordion container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-glass border border-black/10 dark:border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl"
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};
