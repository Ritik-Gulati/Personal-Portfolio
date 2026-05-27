import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCES } from '../data';
import { Briefcase, Calendar, MapPin, ChevronDown, ChevronUp, Cpu, Server } from 'lucide-react';

export default function Experience() {
  // Track which cards are expanded. Default all to expanded initially for immediate reading,
  // but let them be collapsible.
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({
    'fig-financial': true,
    'netcreativemind': true,
    'q2serves': true,
    'hcl': true
  });

  const toggleExpand = (id: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Absolute ambient light */}
      <div className="absolute top-1/4 left-1/10 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2">
            03 // COMMERCIAL TIMELINE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Work <span className="text-accent-blue">Experience</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-32 pl-6 md:pl-12 space-y-12">
          {EXPERIENCES.map((exp, index) => {
            const isExpanded = expandedCards[exp.id];

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Custom timeline bullet point representation */}
                <div className="absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full bg-bg-deep border-2 border-accent-blue ring-4 ring-accent-blue/10 flex items-center justify-center group-hover:border-accent-purple group-hover:scale-125 transition-all duration-300 z-10" />

                {/* Left Date flag (Visible only on medium screens and larger) */}
                <span className="hidden md:block absolute -left-56 top-1.5 w-40 text-right font-mono text-xs text-text-sec/60 font-medium group-hover:text-accent-blue transition-colors">
                  {exp.duration}
                </span>

                {/* Interactive Glass card */}
                <div className="rounded-2xl bg-bg-card border border-white/5 p-6 md:p-8 hover:border-white/10 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] transition-all">
                  
                  {/* Card head bar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Briefcase className="w-4 h-4 text-accent-blue" />
                        <h3 className="font-display text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                          {exp.role}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-text-sec">
                        <span className="font-medium text-white">{exp.company}</span>
                        {/* Mobile active date tag */}
                        <span className="md:hidden flex items-center gap-1 font-mono text-[11px] text-accent-purple">
                          <Calendar className="w-3 h-3" /> {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Toggle button and static timeline visual indicator */}
                    <button
                      onClick={() => toggleExpand(exp.id)}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:border-accent-blue/30 text-xs text-text-sec hover:text-white flex items-center gap-1 transition-all cursor-pointer select-none"
                    >
                      <span>{isExpanded ? 'Collapse' : 'Expand Achievements'}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Achievements Container */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mb-6"
                      >
                        <ul className="space-y-2.5 text-sm text-text-sec pl-1.5 border-l border-white/5 mt-4">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <span className="text-accent-purple font-mono text-xs mt-0.5 select-none">&gt;&gt;</span>
                              <p className="flex-1 text-gray-350 leading-relaxed font-sans">{achievement}</p>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tech layout tags footer */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded bg-bg-deep border border-white/5 text-[11px] font-mono font-medium text-accent-blue hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
