import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldAlert, Cpu, Database, Landmark, Cloud } from 'lucide-react';

interface StatItemProps {
  finalVal: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

function CounterStat({ finalVal, suffix, label, icon }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // ms
    const stepTime = Math.max(Math.floor(duration / finalVal), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(finalVal / 60); // Increment increment steps
      if (start >= finalVal) {
        clearInterval(timer);
        setCount(finalVal);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [finalVal]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(192, 57, 43, 0.15)' }}
      className="p-6 rounded-2xl glass-panel relative overflow-hidden group flex flex-col items-center text-center border border-white/5"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:bg-accent-blue/20 group-hover:scale-110 transition-all">
        {icon}
      </div>
      <h3 className="font-display text-3xl font-extrabold text-white mb-2 tracking-tight">
        {count.toLocaleString()}
        <span className="text-accent-blue">{suffix}</span>
      </h3>
      <p className="font-sans text-xs uppercase tracking-wider text-text-sec font-medium leading-normal">
        {label}
      </p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-bg-deep">
      {/* Absolute decorative backdrops */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-accent-blue tracking-widest uppercase mb-2">
            01 // PROFILE BACKGROUND
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-accent-blue">Me</span>
          </h2>
          <div className="w-12 h-[3px] bg-gradient-to-r from-accent-blue to-accent-purple mt-4 rounded-full" />
        </div>

        {/* Narrative columns layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Main profile writeup */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl font-bold text-white tracking-tight">
              Building Scalable Java & Spring Boot Applications
            </h3>
            <p className="font-sans text-text-sec leading-relaxed text-base">
              My name is <strong className="text-white hover:text-accent-blue transition-colors">Ritik Gulati</strong>. I am a passionate Software Engineer with a Master’s in Applied Computer Science from Concordia University in Montreal, Canada. With over four years of hands-on professional experiences building enterprise architectures, I specialize in crafting ultra-high performance microservices and secure RestAPIs.
            </p>
            <p className="font-sans text-text-sec leading-relaxed text-base">
              My core background resides in fintech frameworks and distributed system reliability. While at Fig Financial, I directly optimized backend pipelines to evaluate and process thousands of daily loan transactions autonomously. I am intensely passionate about writing clean, dry code that performs flawlessly under heavy concurrent volumes.
            </p>

            {/* Highlighted special focus modules */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-blue/20 transition-all flex items-start gap-3">
                <Landmark className="w-5 h-5 text-accent-blue mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display text-sm font-semibold text-white">Fintech Systems</h4>
                  <p className="font-sans text-xs text-text-sec mt-1">Loan processing engines, API gateways, cache mechanisms, transaction integrity.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent-purple/20 transition-all flex items-start gap-3">
                <Cpu className="w-5 h-5 text-accent-purple mt-0.5 shrink-0" />
                <div>
                  <h4 className="font-display text-sm font-semibold text-white">Microservices & APIs</h4>
                  <p className="font-sans text-xs text-text-sec mt-1">Java, Spring Boot, REST APIs, microservice design patterns, robust error handling.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Concordia Academic Card details */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-2xl bg-gradient-to-tr from-bg-card to-bg-deep border border-white/10 relative overflow-hidden group shadow-xl">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/5 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-purple/10 flex items-center justify-center text-accent-purple">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-accent-purple tracking-wider uppercase block">CURRENT ACADEMIC ALUMNI</span>
                  <h4 className="font-display text-lg font-bold text-white">Concordia University</h4>
                </div>
              </div>

              <div className="space-y-4 font-sans text-sm">
                <div className="border-l-2 border-accent-blue/40 pl-4 py-1">
                  <span className="text-xs text-text-sec block font-mono">DEGREE</span>
                  <p className="text-white font-medium">Master of Science in Applied Computer Science</p>
                </div>
                <div className="border-l-2 border-accent-blue/40 pl-4 py-1">
                  <span className="text-xs text-text-sec block font-mono">GRADUATED</span>
                  <p className="text-white font-medium">May 2025 // Montreal, Canada</p>
                </div>
                <div className="border-l-2 border-accent-blue/40 pl-4 py-1">
                  <span className="text-xs text-text-sec block font-mono">CORE ACADEMIC FOCUS</span>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {['Data Structures', 'Algorithms', 'Problem Solving', 'Software Requirements', 'Backend Systems'].map((item) => (
                      <span key={item} className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono font-medium text-white/80">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic numerical counter statistic cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/5">
          <CounterStat
            finalVal={4}
            suffix="+"
            label="Years Experience"
            icon={<Award className="w-5 h-5" />}
          />
          <CounterStat
            finalVal={1500}
            suffix="+"
            label="Daily Loans Evaluated"
            icon={<Landmark className="w-5 h-5" />}
          />
          <CounterStat
            finalVal={8}
            suffix="+"
            label="Core Services Built"
            icon={<Cpu className="w-5 h-5" />}
          />
          <CounterStat
            finalVal={3}
            suffix="+"
            label="Cloud Environments Maintained"
            icon={<Cloud className="w-5 h-5" />}
          />
        </div>
      </div>
    </section>
  );
}
