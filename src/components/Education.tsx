import { motion } from 'motion/react';
import { EDUCATION_LIST } from '../data';
import { GraduationCap, Calendar, BookOpen, Award, Sparkles } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Decorative gradients */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2">
            04 // ACADEMIC PEDIGREE
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Education <span className="text-accent-blue">&amp; Credentials</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Academic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6, borderColor: 'rgba(192, 57, 43, 0.25)' }}
              className="p-6 md:p-8 rounded-3xl bg-bg-card border border-white/5 relative overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />
              
              {/* Dynamic top-edge color marker */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-accent-blue via-transparent to-accent-purple" />

              <div>
                {/* Header Row */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:bg-accent-blue/20 group-hover:scale-105 transition-all">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white group-hover:text-accent-blue transition-colors">
                        {edu.institution}
                      </h3>
                      <span className="font-mono text-[9px] text-accent-purple tracking-widest uppercase">
                        {edu.id === 'concordia' ? 'PREMIUM POSTGRADUATE' : 'GRADUATION HONORS'}
                      </span>
                    </div>
                  </div>
                  {/* Calendar year stamp info */}
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/5 font-mono text-xs text-text-sec shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue" />
                    <span>{edu.duration.split(' – ')[1] || edu.duration}</span>
                  </span>
                </div>

                {/* Degree Info */}
                <div className="mb-6">
                  <h4 className="font-sans text-base font-semibold text-white mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-accent-purple" />
                    {edu.degree}
                  </h4>
                  <p className="font-mono text-xs text-text-sec">
                    Timeline: <span className="text-white">{edu.duration}</span>
                  </p>
                </div>

                {/* Academic Highlights */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div className="space-y-3 pt-4 border-t border-white/5">
                    <span className="font-mono text-[10px] text-gray-500 tracking-wider flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-accent-blue animate-pulse" /> UNIQUE ACADEMIC FOCUS
                    </span>
                    <ul className="space-y-2">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2 text-xs text-text-sec font-sans leading-relaxed">
                          <span className="text-accent-blue mt-0.5">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Little detail block indicating validation status */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="font-mono text-[9px] text-gray-600 tracking-wider">
                  VERIFIED DEGREE SCHOLAR
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-accent-blue font-mono font-bold">
                  <Award className="w-3 h-3 animate-spin duration-[4000ms]" /> CREDENTIAL_OK
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
