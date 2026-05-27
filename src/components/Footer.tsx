import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-bg-deep relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Left section credits */}
        <div className="text-center md:text-left">
          <p className="text-xs text-text-sec">
            Designed &amp; Developed key architectures by{' '}
            <span className="text-white font-semibold hover:text-accent-blue transition-colors">
              Ritik Gulati
            </span>
          </p>
          <span className="font-mono text-[9px] text-gray-500 tracking-wider block mt-1 uppercase">
            Built using React 19, Tailwind CSS v4, and Framer Motion // &copy; 2026
          </span>
        </div>

        {/* Right Section social profiles & back-to-top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Ritik-Gulati"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-blue hover:scale-110 transition-all"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/ritik-gulati-9755601a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-blue hover:scale-110 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:ritikgulati8447@gmail.com"
              className="text-gray-500 hover:text-accent-blue hover:scale-110 transition-all"
              title="Send Mail"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#home"
            onClick={handleScrollToTop}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/5 hover:border-accent-blue/30 text-text-sec hover:text-white flex items-center justify-center transition-all group"
            title="Return to top of screen"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </footer>
  );
}
