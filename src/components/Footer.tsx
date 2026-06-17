import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import logo from '../assets/jod.png';
interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: string) => {
    onNavigate(id);
  };

  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Visual top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        
        {/* Column 1: Brand details */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
            <div className="relative flex items-center justify-center w-8 h-8 rounded bg-gradient-to-tr from-gold-600 to-gold-400">
              <img src={logo} alt="Logo" className="" />
            </div>
            <span className="text-lg font-bold tracking-wider text-gradient-gold">
              JOD<span className="text-white text-[10px] block font-light tracking-[0.25em] -mt-1">CHITS</span>
            </span>
          </div>
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Next-generation financial platform introducing transparency and security to mutual credit chit investments. Registered under the central Chit Funds Act, 1982.
          </p>
          <div className="flex space-x-3.5 pt-2">
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/35 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/35 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/35 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:border-gold-500/35 flex items-center justify-center text-gray-400 hover:text-gold-400 transition-all">
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation Quicklinks */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5">
            {['Home', 'Plans', 'Features', 'About', 'FAQ', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleLinkClick(item.toLowerCase())}
                  className="text-xs text-gray-400 hover:text-gold-400 flex items-center transition-colors cursor-pointer group"
                >
                  <ChevronRight className="w-3 h-3 text-gold-500/50 opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200 mr-1.5" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Chit plans */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Chit Schemes</h4>
          <ul className="space-y-2.5">
            {[
              { name: 'Silver Standard (₹2.5L)', id: 'plans' },
              { name: 'Gold Wealth Booster (₹10L)', id: 'plans' },
              { name: 'Platinum Corporate Elite (₹25L)', id: 'plans' },
            ].map((plan, idx) => (
              <li key={idx}>
                <button
                  onClick={() => handleLinkClick(plan.id)}
                  className="text-xs text-gray-400 hover:text-gold-400 text-left transition-colors cursor-pointer"
                >
                  {plan.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact and Address Details */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">Get In Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <span>Aureum Fintech Chambers, Plot 142, Sector 5, HSR Layout, Bengaluru, KA - 560102</span>
            </li>
            <li className="flex items-center space-x-3 text-xs text-gray-400">
              <Phone className="w-4 h-4 text-gold-500 shrink-0" />
              <span>+91 80 4952 8200 / +91 99000 88200</span>
            </li>
            <li className="flex items-center space-x-3 text-xs text-gray-400">
              <Mail className="w-4 h-4 text-gold-500 shrink-0" />
              <span>support@aureumchits.com</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="h-[1px] bg-white/5 my-8" />
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-[11px] text-gray-500 space-y-4 md:space-y-0">
          <div className="space-y-1">
            <p>&copy; {currentYear} Aureum Chit Funds Private Limited. All rights reserved.</p>
            <p className="text-gray-600">
              Disclaimer: Chit Funds are financial saving-cum-borrowing systems. Member bidding choices determine dividend outcomes. Read terms before subscribing.
            </p>
          </div>
          <div className="flex space-x-4 shrink-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
            <span>&bull;</span>
            <a href="#" className="hover:text-gold-400 transition-colors">Regulatory Filings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
