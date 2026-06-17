import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import logo from '../assets/jod.png'; 
interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Plans', id: 'plans' },
    { name: 'Features', id: 'features' },
    { name: 'About', id: 'about' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      className={`fixed w-screen top-0 left-0  z-50 transition-all duration-350 ${isScrolled
        ? 'bg-luxury-card/75 backdrop-blur-xl border-b border-luxury-border/30 py-4 shadow-lg'
        : 'bg-transparent py-6 border-b border-transparent'
        }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleLinkClick('home')}>
          <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-tr from-gold-600 via-gold-500 to-luxury-emerald glow-gold">
            <img src={logo} alt="Logo" className="" /> 
          </div>
          <span className="text-base sm:text-xl font-bold tracking-wider text-gradient-gold">
            JOD<span className="text-luxury-text text-[10px] sm:text-xs block font-light tracking-[0.25em] -mt-1">CHITS</span>
          </span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-xs sm:text-sm font-medium text-luxury-text/80 hover:text-gold-500 transition-colors cursor-pointer relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gold-500 hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* CTA & Theme Buttons */}
        <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-gold-500/30 text-luxury-text transition-all cursor-pointer"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-yellow-400 fill-yellow-400/10" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 fill-indigo-600/10" />
            )}
          </button>

          <button className="text-xs sm:text-sm font-semibold text-luxury-text/80 hover:text-luxury-text px-3 sm:px-4 py-1.5 sm:py-2 hover:bg-white/5 rounded-lg transition-all cursor-pointer">
            Login
          </button>
          <button
            onClick={() => handleLinkClick('contact')}
            className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-black bg-gradient-gold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg shadow-lg hover:shadow-gold-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <span>Join Now</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {/* Mobile Hamburger & Theme Toggle Menu */}
        <div className="flex lg:hidden items-center space-x-2 sm:space-x-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 sm:p-2 rounded-lg bg-white/5 border border-black/10 dark:border-white/10 text-luxury-text"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-yellow-400" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-luxury-text hover:text-gold-500 focus:outline-none cursor-pointer p-1"
          >
            {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-luxury-dark/95 backdrop-blur-xl border-b border-luxury-border/30">
          <div className=" mx-auto px-4 sm:px-6 lg:px-12 flex flex-col space-y-3 sm:space-y-4 py-4 sm:py-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-sm sm:text-base font-semibold text-luxury-text/90 hover:text-gold-500 transition-colors py-1"
              >
                {link.name}
              </button>
            ))}
            <div className="h-[1px] bg-black/10 dark:bg-white/10 my-1 sm:my-2" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <button className="text-center font-semibold text-luxury-text/80 hover:text-luxury-text py-2 sm:py-2.5 border border-black/10 dark:border-white/10 rounded-lg hover:bg-white/5 text-xs sm:text-sm">
                Login
              </button>
              <button
                onClick={() => handleLinkClick('contact')}
                className="text-center font-bold text-luxury-dark bg-gradient-gold py-2 sm:py-2.5 rounded-lg shadow-md text-xs sm:text-sm"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
