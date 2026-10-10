import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TECH_GROUPS } from '../data/portfolioData';
import { 
  Code2, 
  Layout, 
  Database, 
  Cpu, 
  Wrench, 
  Layers, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const groupIcons: Record<string, any> = {
  Languages: Code2,
  Frontend: Layout,
  'Backend & APIs': Layers,
  Databases: Database,
  'AI & Multi-Agent': Cpu,
  'Developer Tools': Wrench,
};

const categoryDescriptions: Record<string, string> = {
  Languages: 'Core programming languages powering algorithmic problem solving, clean OOP architecture, and scalable backends.',
  Frontend: 'Modern web standards and reactive component libraries crafted for high-polish, pixel-perfect user experiences.',
  'Backend & APIs': 'Performant server-side runtimes and RESTful services engineered for low latency and data integrity.',
  Databases: 'Document models, relational databases, and local persistence engines with ACID compliance and indexing.',
  'AI & Multi-Agent': 'Cyclical multi-agent orchestration frameworks, FAISS vector search, and local Ollama inference pipelines.',
  'Developer Tools': 'Industry-standard version control, API inspection suites, and collaborative developer environments.',
};

export const TechStack: React.FC = () => {
  // Default selected category is "Languages"
  const [selectedCategory, setSelectedCategory] = useState<string>('Languages');

  const selectedGroupIndex = TECH_GROUPS.findIndex(g => g.category === selectedCategory);
  const currentGroup = TECH_GROUPS[selectedGroupIndex >= 0 ? selectedGroupIndex : 0];
  const Icon = groupIcons[currentGroup.category] || Code2;

  // Cycle to previous / next category from navigation
  const handlePrevCategory = () => {
    const prevIndex = (selectedGroupIndex - 1 + TECH_GROUPS.length) % TECH_GROUPS.length;
    setSelectedCategory(TECH_GROUPS[prevIndex].category);
  };

  const handleNextCategory = () => {
    const nextIndex = (selectedGroupIndex + 1) % TECH_GROUPS.length;
    setSelectedCategory(TECH_GROUPS[nextIndex].category);
  };

  return (
    <section id="stack" className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      
      {/* Subtle blue & cyan ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          {/* Tech Ecosystem Accent Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 shadow-md mb-3">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-blue-400" />
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
            </div>
            <span className="text-[11px] font-mono font-semibold uppercase tracking-widest text-cyan-300">
              Technology Ecosystem
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Tools I work with
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Select any category from the navigation bar below to view production tools and engineering domains.
          </p>
        </div>

        {/* Section Navigation Bar: Single Horizontal Line Centered on Page */}
        <div className="flex justify-center w-full mb-12 px-2">
          <div className="inline-flex flex-nowrap items-center gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-[#0c1222]/90 border border-blue-900/40 shadow-xl overflow-x-auto max-w-full">
            {TECH_GROUPS.map((g) => {
              const isSelected = selectedCategory === g.category;
              const TabIcon = groupIcons[g.category] || Code2;

              return (
                <button
                  key={g.category}
                  onClick={() => setSelectedCategory(g.category)}
                  className={`whitespace-nowrap shrink-0 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/25 scale-[1.02]'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  <span>{g.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Centered Horizontal Card Display with Alternating Left/Right Motion */}
        <div className="w-full max-w-[1220px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup.category}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-[#0c1222]/90 border border-blue-900/40 shadow-2xl p-5 sm:p-6 lg:py-6 lg:px-8 relative overflow-hidden"
            >
              {/* Subtle blue corner accent light */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                
                {/* Left Column of Horizontal Layout: Category Meta & Info */}
                <div className="lg:col-span-4 space-y-4 lg:border-r lg:border-blue-900/30 lg:pr-6">
                  
                  {/* Top Header Row with Icon & Indicator */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-md">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Color Indicator */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span className="text-[10px] font-mono text-slate-300 pl-1 font-semibold">
                        Stack
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-0.5">
                      Domain Spotlight
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                      {currentGroup.category}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-1.5">
                      {categoryDescriptions[currentGroup.category]}
                    </p>
                  </div>

                  {/* Tool Count Badge & Cycler in one compact footer */}
                  <div className="pt-2 flex items-center justify-between border-t border-blue-900/30">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{currentGroup.items.length} Technologies</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={handlePrevCategory}
                        aria-label="Previous category"
                        className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={handleNextCategory}
                        aria-label="Next category"
                        className="w-7 h-7 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>

                {/* Right Column of Horizontal Layout: 2-column wide grid */}
                <div className="lg:col-span-8 overflow-hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentGroup.items.map((item, idx) => {
                      const comesFromLeft = idx % 2 === 0;

                      return (
                        <motion.div
                          key={item.name}
                          initial={{
                            opacity: 0,
                            x: comesFromLeft ? -80 : 80,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.55,
                            delay: 0.08 + idx * 0.07,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="p-3 sm:p-3.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-center justify-between shadow-md group"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-cyan-400" />
                            <div className="min-w-0">
                              <div className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                                {item.name}
                              </div>
                              <div className="text-[10px] text-slate-400 font-mono mt-0.5 truncate">
                                {item.category}
                              </div>
                            </div>
                          </div>

                          {item.context && (
                            <div className="text-right pl-2 shrink-0">
                              <span className="text-[11px] font-mono text-slate-300 bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800 group-hover:border-cyan-500/40 transition-colors">
                                {item.context}
                              </span>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
