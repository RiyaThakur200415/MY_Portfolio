import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import dsaPreviewImg from '../assets/images/dsa_fundamentals_preview.png';
import { 
  Code2, 
  Terminal, 
  ExternalLink, 
  Maximize2,
  X,
  Zap,
  Brain,
  Target
} from 'lucide-react';

export const DsaFundamentals: React.FC = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const coreConcepts = [
    { 
      title: 'Data Structures & Algorithms', 
      desc: 'Trees, Graphs, Dynamic Programming, Heaps, Hash Tables, and Complexity Analysis.',
      shade: 'from-blue-600/10 via-cyan-500/5 to-transparent',
      border: 'border-blue-900/40 hover:border-cyan-500/60',
      dot: 'bg-cyan-400 shadow-cyan-400/40',
      titleColor: 'group-hover:text-cyan-300',
    },
    { 
      title: 'Object-Oriented Programming (OOP)', 
      desc: 'Encapsulation, Polymorphism, Inheritance, Abstraction, and SOLID Design Principles.',
      shade: 'from-indigo-600/10 via-blue-500/5 to-transparent',
      border: 'border-blue-900/40 hover:border-blue-500/60',
      dot: 'bg-blue-400 shadow-blue-400/40',
      titleColor: 'group-hover:text-blue-300',
    },
    { 
      title: 'Database Management Systems (DBMS)', 
      desc: 'Relational Schemas, Normalization, ACID Transactions, Indexing, and Query Optimization.',
      shade: 'from-emerald-600/10 via-teal-500/5 to-transparent',
      border: 'border-blue-900/40 hover:border-emerald-500/60',
      dot: 'bg-emerald-400 shadow-emerald-400/40',
      titleColor: 'group-hover:text-emerald-300',
    },
    { 
      title: 'Operating Systems', 
      desc: 'Process Scheduling, Concurrency, Deadlocks, Virtual Memory, and Thread Synchronization.',
      shade: 'from-purple-600/10 via-pink-500/5 to-transparent',
      border: 'border-blue-900/40 hover:border-purple-500/60',
      dot: 'bg-purple-400 shadow-purple-400/40',
      titleColor: 'group-hover:text-purple-300',
    },
    { 
      title: 'Computer Networks', 
      desc: 'OSI Model, TCP/IP, Socket Programming, DNS, HTTP/HTTPS Protocols, and Routing.',
      shade: 'from-cyan-600/10 via-blue-500/5 to-transparent',
      border: 'border-blue-900/40 hover:border-cyan-500/60',
      dot: 'bg-cyan-400 shadow-cyan-400/40',
      titleColor: 'group-hover:text-cyan-300',
    },
  ];

  return (
    <section className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[340px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[500px] h-[280px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-3">
            <span>Computer Science Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Strong fundamentals. Continuous improvement.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Writing efficient, robust code grounded in theoretical computer science and algorithmic problem solving.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Core Pillars - Sliding in from the left one by one */}
          <div className="lg:col-span-6 space-y-3.5">
            {coreConcepts.map((c, i) => (
              <TiltCard
                key={c.title}
                isFloating={true}
                staggerIndex={i}
                slideFrom="left"
                slideDistance={120}
                delay={i * 0.12}
                duration={0.8}
                tiltIntensity={5}
                className={`p-4 rounded-2xl bg-gradient-to-r ${c.shade} border ${c.border} transition-all shadow-xl group`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <span className={`w-2 h-2 rounded-full ${c.dot} group-hover:scale-125 transition-transform`} />
                  <h3 className={`text-sm font-semibold text-white ${c.titleColor} transition-colors`}>
                    {c.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-300/90 leading-relaxed pl-4.5">
                  {c.desc}
                </p>
              </TiltCard>
            ))}

            {/* Profile Links - sliding from left after the concept cards */}
            <TiltCard
              isFloating={false}
              slideFrom="left"
              slideDistance={120}
              delay={coreConcepts.length * 0.12}
              duration={0.8}
              className="p-0 bg-transparent border-0 shadow-none"
            >
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-all shadow-md shadow-blue-500/20 cursor-pointer"
                >
                  <Code2 className="w-3.5 h-3.5 text-white" />
                  <span>Visit LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3 text-white" />
                </a>

                <a
                  href={PERSONAL_INFO.dsaRepo || 'https://github.com/RiyaThakur200415/DSA'}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-200 text-xs font-medium transition-all shadow-md cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-slate-400" />
                  <span>Algorithms on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: LeetCode Image Card - Sliding in from the right side */}
          <div className="lg:col-span-6">
            <TiltCard
              isFloating={true}
              tiltIntensity={5}
              slideFrom="right"
              slideDistance={130}
              delay={0.25}
              duration={0.85}
              className="bg-[#0c1222]/90 border border-blue-900/40 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-4"
            >
              {/* Terminal Title Bar with 'Beyond Brute Force' Heading */}
              <div className="flex items-center justify-between pb-3 border-b border-blue-900/30">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <Terminal className="w-4 h-4 text-cyan-400 ml-1" />
                  <h3 className="text-sm font-bold tracking-tight text-white flex items-center gap-2">
                    Beyond Brute Force
                  </h3>
                </div>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[10px] font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-700/80 hover:border-cyan-500/50 transition-colors flex items-center gap-1"
                  title="Visit LeetCode profile"
                >
                  <span>LeetCode Profile</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              {/* Image Preview Container - directs to LeetCode profile */}
              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noreferrer"
                className="relative block rounded-2xl overflow-hidden border border-blue-900/40 hover:border-cyan-500/50 bg-[#060913] shadow-xl group cursor-pointer transition-colors"
                title="Open LeetCode Profile (https://leetcode.com/u/RiyaThakur200415)"
              >
                <img
                  src={dsaPreviewImg}
                  alt="Beyond Brute Force - DSA Fundamentals"
                  className="w-full h-auto object-cover rounded-xl transition-all duration-500 group-hover:scale-[1.02]"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/hRsJmzJX/3edb9154-5943-43b2-a11f-6af3a011f1e9.png';
                  }}
                />
                
                {/* Overlay hover effect directing to LeetCode */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-[#060913]/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                  <span className="text-xs font-mono text-white bg-blue-600/90 hover:bg-blue-500 px-3 py-1.5 rounded-lg border border-blue-400/40 backdrop-blur-md flex items-center gap-1.5 shadow-lg font-semibold">
                    <Code2 className="w-3.5 h-3.5 text-white" />
                    <span>Open LeetCode Profile</span>
                    <ExternalLink className="w-3 h-3 text-white" />
                  </span>

                  {/* Option to expand full diagram */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsLightboxOpen(true);
                    }}
                    className="p-2 rounded-lg bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700/80 shadow-lg backdrop-blur-md transition-colors"
                    title="Zoom Diagram"
                    aria-label="Expand Diagram"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </a>

              {/* Down Three Cards: Optimized Complexity, Logical Thinking, Consistent Practice */}
              <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-1 text-center">
                {/* 1. Optimized Complexity */}
                <div className="group/item p-3 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-blue-500/50 transition-all shadow-md">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5 text-blue-400 group-hover/item:scale-105 transition-transform">
                    <Zap className="w-3.5 h-3.5 text-blue-400" />
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-white">Optimized</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-400">Complexity</div>
                </div>

                {/* 2. Logical Thinking */}
                <div className="group/item p-3 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-cyan-500/50 transition-all shadow-md">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5 text-cyan-400 group-hover/item:scale-105 transition-transform">
                    <Brain className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-white">Logical</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-400">Thinking</div>
                </div>

                {/* 3. Consistent Practice */}
                <div className="group/item p-3 rounded-xl bg-slate-900/70 hover:bg-slate-800/80 border border-slate-800 hover:border-emerald-500/50 transition-all shadow-md">
                  <div className="flex items-center justify-center gap-1.5 mb-0.5 text-emerald-400 group-hover/item:scale-105 transition-transform">
                    <Target className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-white">Consistent</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono font-medium text-slate-400">Practice</div>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full Resolution Image */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#070f22] border border-cyan-500/40 rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-cyan-500/20">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-white">Beyond Brute Force — Algorithm Architecture</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="overflow-auto flex-1 rounded-xl bg-[#030611] p-2 flex items-center justify-center">
              <img
                src={dsaPreviewImg}
                alt="Beyond Brute Force - Algorithmic Architecture"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://i.ibb.co/hRsJmzJX/3edb9154-5943-43b2-a11f-6af3a011f1e9.png';
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
