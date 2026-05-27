import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Linkedin, Github, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active tab trigger on scroll
      const scrollPos = window.scrollY + 100;
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementHeight = rect.height;
          if (scrollPos >= elementTop && scrollPos < elementTop + elementHeight) {
            setActiveItem(item.label);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, href: string) => {
    e.preventDefault();
    setActiveItem(label);
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'Home', '#home')}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-accent-blue to-accent-purple flex items-center justify-center p-[1px] shadow-lg group-hover:shadow-[0_0_15px_rgba(0,194,255,0.4)] transition-all">
              <div className="w-full h-full bg-bg-deep rounded-[7px] flex items-center justify-center">
                <Code className="w-5 h-5 text-accent-blue group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold tracking-tight text-white leading-none">
                Ritik <span className="text-accent-blue font-bold">Gulati</span>
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeItem === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.label, item.href)}
                  className={`relative px-4 py-2 font-display text-sm tracking-wide transition-all ${
                    isActive ? 'text-white font-medium' : 'text-text-sec hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/5 rounded-full border border-white/10"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Action Icons Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/Ritik-Gulati"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 hover:shadow-[0_0_10px_rgba(192,57,43,0.25)] transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-gulati-9755601a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 hover:shadow-[0_0_10px_rgba(192,57,43,0.25)] transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ritikgulati8447@gmail.com"
              className="p-2 bg-white/5 rounded-lg border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 hover:shadow-[0_0_10px_rgba(192,57,43,0.25)] transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Handburger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white focus:outline-none focus:ring-0"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[73px] z-30 glass-nav md:hidden border-b border-white/10 px-6 py-6 flex flex-col gap-4 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.label, item.href)}
                  className={`py-2 px-4 rounded-lg font-display text-base transition-colors ${
                    activeItem === item.label
                      ? 'bg-accent-blue/10 text-accent-blue border-l-2 border-accent-blue pl-3'
                      : 'text-text-sec hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <hr className="border-white/10 my-1" />

            <div className="flex justify-around py-2">
              <a
                href="https://github.com/Ritik-Gulati"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-text-sec hover:text-white"
              >
                <Github className="w-5 h-5 text-accent-blue" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-gulati-9755601a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-text-sec hover:text-white"
              >
                <Linkedin className="w-5 h-5 text-accent-purple" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:ritikgulati8447@gmail.com"
                className="flex items-center gap-2 px-3 py-2 text-sm text-text-sec hover:text-white"
              >
                <Mail className="w-5 h-5 text-accent-blue" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
