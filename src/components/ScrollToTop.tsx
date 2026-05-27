import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle button visibility based on vertical offset threshold
      setIsVisible(window.scrollY > 400);

      // Map progress percentages relative to entire body height bounds
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((window.scrollY / docHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTopAction = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Absolute high-contrast horizontal scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-white/5 z-50 pointer-events-none leading-none">
        <div
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple shadow-[0_0_8px_rgba(0,194,255,0.5)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Back to top floating actionable circle */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={handleScrollTopAction}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-xl bg-[#111827] border border-white/10 hover:border-accent-blue/40 text-accent-blue hover:text-white hover:bg-accent-blue/10 hover:shadow-[0_0_20px_rgba(0,194,255,0.30)] transition-all select-none cursor-pointer"
            type="button"
            title="Back to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
