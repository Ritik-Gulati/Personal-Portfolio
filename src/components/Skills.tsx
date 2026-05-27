import { motion } from 'motion/react';
import { Terminal, Cpu, Layout, Database, Cloud, Settings, Code } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Languages',
    icon: Terminal,
    desc: 'Core languages for backend architectures & system algorithms',
    skills: ['Java', 'Python', 'SQL', 'C++'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  },
  {
    title: 'Web & Integration Technologies',
    icon: Layout,
    desc: 'Protocols & markups for robust data transfer & design',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'JSON', 'REST APIs'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  },
  {
    title: 'Frameworks',
    icon: Cpu,
    desc: 'Enterprise security, rendering, and MVC frameworks',
    skills: ['Spring Boot', 'Spring MVC', 'Spring Security', 'Hibernate', 'React', 'Next.js'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  },
  {
    title: 'Databases',
    icon: Database,
    desc: 'Relational, document, and transactional databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  },
  {
    title: 'Software Development',
    icon: Code,
    desc: 'Key architectural styles, patterns & design strategies',
    skills: ['REST APIs', 'Microservices', 'Test-Driven Development (TDD)', 'Object-Oriented Programming (OOP)'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  },
  {
    title: 'Cloud and DevOps',
    icon: Cloud,
    desc: 'Automated environments, container pipelines & cloud tools',
    skills: ['AWS (EC2, Lambda, RDS, S3)', 'Docker', 'Azure', 'Kubernetes', 'Jenkins', 'CI/CD', 'SonarQube'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  },
  {
    title: 'Testing and Tools',
    icon: Settings,
    desc: 'Unit testing, API clients, testing suites & versioning compilers',
    skills: ['JUnit', 'Rest Assured', 'Postman', 'JIRA', 'Git', 'Maven', 'Gradle', 'SVN'],
    colorClass: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Subtle background red decor */}
      <div className="absolute top-10 right-10 w-[400px] h-[400px] rounded-full bg-accent-blue/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-accent-blue/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2">
            02 // TECHNICAL STACK
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Technical <span className="text-accent-blue">Competencies</span>
          </h2>
          <p className="font-sans text-xs text-text-sec tracking-wide uppercase mt-2">
            4+ YEARS OF ENTERPRISE KNOWLEDGE ACROSS CORE ECOSYSTEMS
          </p>
          <div className="w-12 h-[3px] bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Categories Grid - Adjusted layour or columns for 7 categories nicely */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((cat, catIdx) => {
            const Icon = cat.icon;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
                className="p-6 rounded-2xl bg-[#111111] border border-white/5 relative group hover:border-white/10 hover:shadow-[0_15px_30px_rgba(192,57,43,0.1)] transition-all flex flex-col justify-between"
              >
                {/* Horizontal hover red neon bar */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple group-hover:w-full transition-all duration-500" />

                {/* Card Header information */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl border border-white/5 flex items-center justify-center ${cat.colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white tracking-tight leading-none">
                        {cat.title}
                      </h3>
                      <span className="font-mono text-[9px] text-gray-500 tracking-wider">
                        {cat.skills.length} EXPERT MODULES
                      </span>
                    </div>
                  </div>
                  <p className="font-sans text-xs text-text-sec mb-6 leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Animated Pills Badges list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ 
                        scale: 1.05, 
                        borderColor: '#C0392B',
                        backgroundColor: 'rgba(192, 57, 43, 0.1)'
                      }}
                      className="px-3 py-1.5 rounded-xl bg-[#0A0A0A] border border-white/5 text-xs font-mono font-medium text-white/90 shadow-sm transition-all flex items-center gap-2 select-none cursor-pointer"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue animate-pulse" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
