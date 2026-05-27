import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Github, Code, FileText } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Decorative blurred backgrounds */}
      <div className="absolute top-1/4 left-1/10 w-[450px] h-[440px] rounded-full bg-accent-blue/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2">
            05 // COMPILED REPOSITORIES
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Personal <span className="text-accent-blue">Projects</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full animate-pulse" />
        </div>

        {/* Project Card Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="group p-6 rounded-3xl bg-bg-card border border-white/5 relative overflow-hidden flex flex-col justify-between hover:border-white/10 hover:shadow-[0_15px_30px_rgba(192,57,43,0.08)] transition-all h-full"
            >
              {/* Accent top gradient lines */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-blue/40 to-accent-purple/40 opacity-50 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Category + Icon Tag */}
                <div className="flex justify-between items-center mb-5">
                  <span className="px-2.5 py-1 rounded bg-[#000000] text-[9px] font-mono font-bold tracking-widest text-accent-blue border border-accent-blue/15 uppercase">
                    {project.category}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/5 text-gray-500 group-hover:text-accent-blue group-hover:border-accent-blue/20 transition-all">
                    {project.category === 'Research' ? <FileText className="w-4 h-4" /> : <Code className="w-4 h-4 text-accent-blue" />}
                  </div>
                </div>

                {/* Title & description */}
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-xs text-text-sec mb-5 leading-relaxed">
                  {project.description}
                </p>

                <p className="font-sans text-xs text-gray-400 mb-6 leading-relaxed bg-[#000000]/50 p-3 rounded-xl border border-white/5 italic">
                  {project.detailedDescription}
                </p>
              </div>

              {/* Sub components: skills tags + actionable buttons */}
              <div>
                {/* Tech stack badge lists */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-bg-deep border border-white/5 text-[10px] font-mono font-medium text-text-sec"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Repository buttons bar */}
                {project.id !== 'alzheimers-prediction' ? (
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-4 py-2 bg-white/5 rounded-xl border border-white/5 text-xs text-white hover:border-accent-blue/30 hover:bg-white/10 flex items-center justify-center gap-1.5 transition-all cursor-pointer font-sans font-medium"
                    >
                      <Github className="w-3.5 h-3.5 text-accent-blue" />
                      <span>Source Code</span>
                    </a>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-white/5" />
                )}
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
