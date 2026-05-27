import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, FileText, ArrowRight, Server, Download } from 'lucide-react';
// @ts-ignore
import avatarImg from '../assets/images/regenerated_image_1779894924873.jpg';

const TYPED_ROLES = [
  'Software Developer',
  'Spring Boot Engineer',
  'Backend Developer',
  'Microservices Engineer',
  'Full Stack Developer'
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  // Typing effect
  useEffect(() => {
    const currentRole = TYPED_ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full text
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % TYPED_ROLES.length);
    }

    setDisplayText(currentRole.substring(0, charIndex));

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Cinematic animated light fields */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[450px] rounded-full bg-accent-blue/10 blur-[130px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/10 w-[450px] h-[450px] rounded-full bg-accent-purple/10 blur-[130px] duration-[8000ms] animate-pulse" />

      {/* Floating terminal grids in background */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column info */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent-blue animate-ping" />
            <span className="font-mono text-xs text-accent-blue tracking-wide uppercase">
              your friendly neighborhood coder
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-2 leading-none">
              Hi, I’m <span className="text-[#C0392B] text-glow-blue">Ritik Gulati</span>
            </h1>
          </motion.div>

          {/* Typing titles */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-10 md:h-12 overflow-hidden mb-5 flex items-center"
          >
            <p className="font-sans text-xl sm:text-2xl md:text-3xl font-semibold tracking-wide text-white/90">
              <span className="text-accent-blue font-mono font-bold mr-1">&gt;</span>{' '}
              <span className="border-r-2 border-accent-blue pr-1 animate-pulse">{displayText}</span>
            </p>
          </motion.div>

          {/* Description summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-sans text-base sm:text-lg text-text-sec max-w-xl mb-8 leading-relaxed"
          >
            Java/Spring Boot developer with 4+ years of experience building scalable backend systems, secure REST APIs, cloud-native applications, and distributed microservices. Specializes in performance tuning, caching strategies, and resilient DevOps architectures.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <button
              onClick={() => handleScrollTo('#projects')}
              className="px-6 py-3.5 bg-accent-blue border border-accent-blue hover:border-accent-blue text-bg-deep font-sans font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-accent-blue/20 hover:shadow-accent-blue/40 duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-6 py-3.5 bg-white/5 border border-white/10 hover:border-accent-blue/30 text-white font-sans font-medium rounded-xl hover:bg-white/10 flex items-center gap-2 duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Contact Me
            </button>
            <a
              href="https://docs.google.com/document/d/1zqek5Pe2fdwN94o3GXrTfW5KBY3CYbIiIeLjJWQmT2o/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-transparent border border-white/15 hover:border-accent-purple/30 text-text-sec hover:text-white font-sans font-medium rounded-xl flex items-center gap-2 duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4 text-accent-purple" />
              <span>Resume PDF</span>
            </a>
          </motion.div>

          {/* Social Icons Header panel */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-4 py-2 border-t border-white/5 w-full max-w-md"
          >
            <span className="font-mono text-xs text-gray-500 tracking-wider">CONNECT //</span>
            <div className="flex gap-3">
              <a
                href="https://github.com/Ritik-Gulati"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 flex items-center justify-center hover:shadow-[0_0_15px_rgba(192,57,43,0.25)] hover:scale-105 transition-all"
                title="GitHub Link"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-gulati-9755601a1/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 flex items-center justify-center hover:shadow-[0_0_15px_rgba(192,57,43,0.25)] hover:scale-105 transition-all"
                title="LinkedIn Link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:ritikgulati8447@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-accent-blue hover:border-accent-blue/30 flex items-center justify-center hover:shadow-[0_0_15px_rgba(192,57,43,0.25)] hover:scale-105 transition-all"
                title="Email Me"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right column (Visual portrait + Orbiting Badges) */}
        <div className="lg:col-span-5 relative flex items-center justify-center py-6">
          <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-square flex items-center justify-center">
            {/* Ambient circular pulse behind avatar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue to-accent-purple opacity-20 blur-[50px] animate-pulse rounded-full" />

            {/* Glowing border ring with floating rotation animation */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[3px] rounded-[36px] bg-gradient-to-r from-accent-blue/80 via-transparent to-accent-purple/80 p-[1.5px] pointer-events-none"
            />

            {/* Image Box glass container framed beautifully */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-11/12 h-11/12 rounded-[32px] overflow-hidden glass-panel border border-white/10 glow-glow-blue flex items-center justify-center shadow-2xl"
            >
              <img
                src={avatarImg}
                alt="Ritik Gulati Avatar Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none scale-[1.05]"
                style={{ objectPosition: '50% 15%' }}
              />
              {/* Subtle dark vignette overlay to blend with dark aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-deep/80 via-transparent to-bg-deep/20 pointer-events-none" />
            </motion.div>

            {/* Orbiting / Floating Tech Badges around the image */}
            {/* Badge 1: Java */}
            <motion.div
              animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-3 -left-3 px-3 py-1.5 bg-bg-card border border-accent-blue/50 rounded-xl flex items-center gap-1.5 shadow-lg shadow-accent-blue/10 backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">Java</span>
            </motion.div>

            {/* Badge 2: Spring Boot */}
            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-2 top-10 px-3 py-1.5 bg-bg-card border border-accent-purple/50 rounded-xl flex items-center gap-1.5 shadow-lg shadow-accent-purple/10 backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-accent-purple" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">Spring Boot</span>
            </motion.div>

            {/* Badge 3: AWS */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute right-4 bottom-1/3 px-3 py-1.5 bg-bg-card border border-white/20 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">AWS</span>
            </motion.div>

            {/* Badge 4: Docker */}
            <motion.div
              animate={{ x: [0, -8, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
              className="absolute -left-6 bottom-16 px-3 py-1.5 bg-bg-card border border-[#00C2FF]/30 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#1d97e6]" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">Docker</span>
            </motion.div>

            {/* Badge 5: PostgreSQL */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute left-1/3 -bottom-4 px-3 py-1.5 bg-bg-card border border-emerald-500/30 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">PostgreSQL</span>
            </motion.div>

            {/* Badge 6: React */}
            <motion.div
              animate={{ scale: [1, 1.05, 1], y: [0, -6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-1/4 -top-5 px-3 py-1.5 bg-bg-card border border-cyan-400/30 rounded-xl flex items-center gap-1.5 shadow-lg backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="font-mono text-xs font-bold text-white tracking-wide">React</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
