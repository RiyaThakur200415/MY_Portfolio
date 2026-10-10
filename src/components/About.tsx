import React from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { GraduationCap, BookOpen, CheckCircle } from 'lucide-react';

interface AboutProps {}

const coreDomains = [
  { label: 'Frontend & Responsive Web Systems', color: 'bg-sky-400', textHover: 'group-hover:text-sky-300' },
  { label: 'Full-Stack REST & Database Pipelines', color: 'bg-blue-500', textHover: 'group-hover:text-blue-300' },
  { label: 'Multi-Agent Swarms & LangGraph', color: 'bg-violet-400', textHover: 'group-hover:text-violet-300' },
  { label: 'RAG Pipelines & FAISS Vector Search', color: 'bg-cyan-400', textHover: 'group-hover:text-cyan-300' },
  { label: 'Local LLM Inference with Ollama', color: 'bg-emerald-400', textHover: 'group-hover:text-emerald-300' },
  { label: 'Data Structures & Algorithmic Foundations', color: 'bg-amber-400', textHover: 'group-hover:text-amber-300' },
];

const engineeringValues = [
  {
    num: '01',
    title: 'High Polish UI',
    desc: 'Zero tolerance for clunky interactions',
    gradient: 'from-[#0b1730] via-[#081226] to-[#060d1c]',
    border: 'border-sky-500/30 hover:border-sky-400/60',
    numColor: 'text-sky-400',
  },
  {
    num: '02',
    title: 'System Depth',
    desc: 'End-to-end data integrity & clean APIs',
    gradient: 'from-[#0d1d40] via-[#09152e] to-[#060e21]',
    border: 'border-blue-500/30 hover:border-blue-400/60',
    numColor: 'text-blue-400',
  },
  {
    num: '03',
    title: 'Continuous Growth',
    desc: 'Deep diving into Agentic AI & cloud scale',
    gradient: 'from-[#141640] via-[#0d102e] to-[#090b21]',
    border: 'border-violet-500/30 hover:border-violet-400/60',
    numColor: 'text-violet-400',
  },
];

export const About: React.FC<AboutProps> = () => {
  return (
    <section id="about" className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      {/* Background soft ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[350px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-cyan-600/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-3">
            <span>Background & Focus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            A little about me.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Narrative & Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              I am a Computer Science Engineering student at <strong className="text-white font-semibold">VIT-AP University</strong> with strong foundations in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, and Computer Networks.
            </p>

            <p className="text-base text-slate-400 leading-relaxed">
              I believe great software is built end-to-end. Rather than confining myself to a single layer of the stack, I find genuine excitement in taking an idea from raw architecture and database schema design, through robust backend APIs, all the way to intuitive, polished frontends and autonomous AI agents.
            </p>

            {/* Scope highlights as clean unboxed typographic list with slide-in from left */}
            <div className="pt-4 border-t border-slate-800/80">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Core Domains of Practice</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                {coreDomains.map((domain, index) => (
                  <motion.div
                    key={domain.label}
                    initial={{ opacity: 0, x: -70 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{
                      duration: 0.75,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-blue-500/40 hover:bg-slate-850/60 transition-all group cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0 shadow-sm shadow-cyan-400/50" />
                    <span className="transition-colors group-hover:text-white">{domain.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Engineering Values: Cards 01, 02, 03 appearing slowly */}
            <div className="pt-6 grid grid-cols-3 gap-4">
              {engineeringValues.map((val, idx) => (
                <motion.div
                  key={val.num}
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{
                    duration: 1.1,
                    delay: 0.25 + idx * 0.18,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="p-4 rounded-2xl bg-[#091224]/80 border border-blue-900/30 hover:border-cyan-500/40 shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-xl font-bold font-mono text-cyan-400 mb-1">{val.num}</div>
                  <div className="text-xs font-semibold text-white">{val.title}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">{val.desc}</div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Education & Academic Card sliding in from right in slow motion */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 110 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 1.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Main Education Card with 3D Tilt & Breathing */}
              <TiltCard
                isFloating={true}
                tiltIntensity={8}
                staggerIndex={1}
                className="bg-gradient-to-br from-[#0a1428] via-[#091124] to-[#070d1e] border border-blue-500/35 hover:border-cyan-400/60 rounded-3xl p-7 shadow-2xl shadow-blue-950/40 relative overflow-hidden transition-all duration-300"
              >
                <div className="absolute -top-20 -right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex items-start justify-between mb-5 relative z-10">
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center text-cyan-400 shadow-md shadow-blue-500/20">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono text-cyan-400 font-medium">Academic Standing</div>
                    <div className="text-2xl font-bold font-mono text-white tabular-nums drop-shadow-sm">
                      {EDUCATION_DATA.cgpa} <span className="text-xs font-normal text-slate-400">CGPA</span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <div className="text-sm font-medium text-slate-300">
                    {EDUCATION_DATA.degree}
                  </div>
                  <div className="text-xs font-mono text-cyan-400 mt-1">
                    {EDUCATION_DATA.duration} · On-Campus
                  </div>
                </div>

                {/* Coursework Checklist */}
                <div className="mt-6 pt-5 border-t border-blue-900/40 relative z-10">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Key Coursework & Foundations</span>
                  </div>
                  <div className="space-y-2">
                    {EDUCATION_DATA.coreSubjects.map((subject) => (
                      <div key={subject} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{subject}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote */}
                <div className="mt-6 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs text-slate-400 relative z-10">
                  <span>Location: Amaravati, India</span>
                  <span className="text-cyan-300 font-mono text-[11px] px-2 py-0.5 rounded bg-blue-950/60 border border-blue-800/40">B.Tech CSE</span>
                </div>
              </TiltCard>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};

