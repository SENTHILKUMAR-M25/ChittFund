import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { ChitPlans } from './components/ChitPlans';
import { InvestmentPlanner } from './components/InvestmentPlanner';
import { Features } from './components/Features';
import { Benefits } from './components/Benefits';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark' || saved === 'light') return saved;
      return 'dark'; // Premium dark mode by default
    }
    return 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-luxury-dark text-luxury-text flex flex-col selection:bg-gold-500/30 selection:text-white transition-colors duration-350">
      {/* Dynamic top-level glowing lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[500px] bg-gradient-to-b from-gold-500/5 via-transparent to-transparent pointer-events-none blur-[120px]" />

      <Navbar onNavigate={handleNavigate} theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-grow">
        <Hero onNavigate={handleNavigate} />
        <Stats />
        <HowItWorks />
        <ChitPlans />
        <InvestmentPlanner />
        <Features />
        <Benefits />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <CTA onNavigate={handleNavigate} />
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
