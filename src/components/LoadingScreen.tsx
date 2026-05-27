import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing server components...');

  const texts = [
    'Initializing backend container...',
    'Spinning up Spring Boot application context...',
    'Connecting to PostgreSQL database pools...',
    'Establishing secure Redis cache channels...',
    'Loading Ritik Gulati Interactive Portfolio v2.0...'
  ];

  useEffect(() => {
    const textInterval = setInterval(() => {
      const randomIdx = Math.floor(Math.random() * texts.length);
      setLoadingText(texts[randomIdx]);
    }, 450);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + step, 100);
      });
    }, 85);

    return () => {
      clearInterval(textInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-bg-deep z-50 flex flex-col items-center justify-center font-mono select-none">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-accent-blue/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent-purple/10 rounded-full blur-[100px] animate-pulse" />

      <div className="w-full max-w-sm px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block px-4 py-1 rounded-full text-xs font-mono border border-accent-blue/30 text-accent-blue bg-accent-blue/5 mb-3 tracking-widest uppercase">
            SYSTEM BOOTSTRAP
          </div>
          <h1 className="text-3xl font-display font-bold tracking-tight text-white">
            RG<span className="text-accent-blue">.</span>GULATI
          </h1>
        </motion.div>

        {/* Loading Bar Container */}
        <div className="w-full h-[3px] bg-gray-900 rounded-full overflow-hidden mb-4 relative border border-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress Metrics & Console Output */}
        <div className="flex justify-between items-center text-xs text-gray-500 mb-6 font-mono">
          <span className="text-accent-blue font-bold">{progress}%</span>
          <span>COMPILING SERVICES</span>
        </div>

        <motion.div
          key={loadingText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-xs text-text-sec truncate font-mono text-center min-h-[1.5rem]"
        >
          <span className="text-accent-purple mr-1.5">$</span> {loadingText}
        </motion.div>
      </div>

      <div className="absolute bottom-8 text-[10px] text-gray-600 tracking-wider">
        RITIK GULATI PORTFOLIO &copy; 2026 | ALL SYSTEMS OPERATIONAL
      </div>
    </div>
  );
}
