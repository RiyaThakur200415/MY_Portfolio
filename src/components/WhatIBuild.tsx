import React, { useState, useEffect, useRef } from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Layout, Database, Cpu, CodeXml, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const iconMap = {
  layout: Layout,
  database: Database,
  cpu: Cpu,
  'code-xml': CodeXml,
};

const TOTAL_CARDS = CAPABILITIES.length; // 4 cards

// Triplicate list for continuous circular wrapping
const extendedCards = [...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES];

// Card color themes mapped by id
const cardThemes: Record<string, {
  bg: string;
  border: string;
  hoverBorder: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  badge: string;
  titleHover: string;
  dotColor: string;
}> = {
  frontend: {
    bg: 'bg-gradient-to-br from-[#0c1a36] via-[#09152b] to-[#070e1e]',
    border: 'border-blue-500/25',
    hoverBorder: 'hover:border-cyan-400/60',
    iconBg: 'bg-blue-500/15',
    iconBorder: 'border-blue-400/30',
    iconColor: 'text-cyan-400',
    badge: 'bg-blue-500/15 text-cyan-300 border-blue-400/30',
    titleHover: 'group-hover:text-cyan-300',
    dotColor: 'bg-cyan-400',
  },
  fullstack: {
    bg: 'bg-gradient-to-br from-[#111936] via-[#0d142b] to-[#080d1e]',
    border: 'border-indigo-500/25',
    hoverBorder: 'hover:border-indigo-400/60',
    iconBg: 'bg-indigo-500/15',
    iconBorder: 'border-indigo-400/30',
    iconColor: 'text-indigo-400',
    badge: 'bg-indigo-500/15 text-indigo-300 border-indigo-400/30',
    titleHover: 'group-hover:text-indigo-300',
    dotColor: 'bg-indigo-400',
  },
  'ai-agents': {
    bg: 'bg-gradient-to-br from-[#1a1336] via-[#130f2b] to-[#0d091e]',
    border: 'border-purple-500/25',
    hoverBorder: 'hover:border-purple-400/60',
    iconBg: 'bg-purple-500/15',
    iconBorder: 'border-purple-400/30',
    iconColor: 'text-purple-400',
    badge: 'bg-purple-500/15 text-purple-300 border-purple-400/30',
    titleHover: 'group-hover:text-purple-300',
    dotColor: 'bg-purple-400',
  },
  'core-eng': {
    bg: 'bg-gradient-to-br from-[#0c1f2b] via-[#081822] to-[#051017]',
    border: 'border-teal-500/25',
    hoverBorder: 'hover:border-teal-400/60',
    iconBg: 'bg-teal-500/15',
    iconBorder: 'border-teal-400/30',
    iconColor: 'text-teal-400',
    badge: 'bg-teal-500/15 text-teal-300 border-teal-400/30',
    titleHover: 'group-hover:text-teal-300',
    dotColor: 'bg-teal-400',
  },
};

export const WhatIBuild: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track responsive screen size for exact step translation
  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Move to next card in circular sequence
  const handleNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  // Move to previous card in circular sequence
  const handlePrev = () => {
    if (!isTransitioning) return;
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(TOTAL_CARDS);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setCurrentIndex(TOTAL_CARDS - 1);
        });
      });
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  // Automatic circular sliding timer (advances 1 card every 3.8s)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, isTransitioning]);

  // Seamless wrap-around reset when reaching clone boundary
  useEffect(() => {
    if (currentIndex >= TOTAL_CARDS) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 700); // 700ms matches the CSS transition duration
      return () => clearTimeout(timer);
    } else if (!isTransitioning) {
      const raf = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [currentIndex, isTransitioning]);

  // Calculate translateX:
  // Desktop: 2 cards visible with 24px gap -> step is (50% + 12px)
  // Mobile: 1 card visible with 24px gap -> step is (100% + 24px)
  const transformStyle = isMobile
    ? `translateX(calc(-${currentIndex} * (100% + 24px)))`
    : `translateX(calc(-${currentIndex} * (50% + 12px)))`;

  const activeCardIndex = currentIndex % TOTAL_CARDS;

  return (
    <section id="capabilities" className="relative bg-[#060913] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[300px] bg-cyan-600/8 rounded-full blur-[140px] pointer-events-none" />

      {/* 1) Clean Horizontal Line Divider between About Me and What I Build */}
      <div className="w-full relative">
        <div className="h-px bg-blue-950/40 w-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/40 via-blue-500/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-28 relative z-10">
        
        {/* Section Header with Carousel Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-3">
              <span>Capabilities & Focus Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              What I Build
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Bridging pixel-perfect visual design, resilient full-stack systems, and cutting-edge autonomous multi-agent intelligence.
            </p>
          </div>

          {/* Slider Controls: Auto-slide indicator & Next/Prev buttons */}
          <div className="flex items-center gap-3 self-start md:self-end">
            {/* Auto-sliding indicator badge */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/60 border border-slate-800 text-xs font-mono text-slate-400 shadow-sm">
              <span className={`w-2 h-2 rounded-full ${isPaused ? 'bg-amber-400 shadow-amber-400/50' : 'bg-cyan-400 shadow-cyan-400/50 animate-pulse'}`} />
              <span className="text-slate-300">{isPaused ? 'Paused on Hover' : 'Auto Sliding'}</span>
            </div>

            {/* Left Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous capability card"
              className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Button */}
            <button
              onClick={handleNext}
              aria-label="Next capability card"
              className="w-10 h-10 rounded-xl bg-slate-900/80 border border-slate-700/80 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* 2) Single Horizontal Line Carousel (2 cards visible at a time) */}
        <div
          className="relative overflow-hidden w-full pb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sliding Track */}
          <div
            className="flex gap-6 w-full"
            style={{
              transform: transformStyle,
              transition: isTransitioning
                ? 'transform 700ms cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
            }}
          >
            {extendedCards.map((cap, idx) => {
              const IconComponent = iconMap[cap.icon as keyof typeof iconMap] || CodeXml;
              const originalIndex = idx % TOTAL_CARDS;
              const theme = cardThemes[cap.id] || cardThemes.frontend;

              return (
                <div
                  key={`${cap.id}-${idx}`}
                  className="w-full sm:w-[calc(50%-12px)] shrink-0"
                >
                  <TiltCard
                    staggerIndex={0}
                    tiltIntensity={7}
                    isFloating={false}
                    className={`group relative ${theme.bg} border ${theme.border} ${theme.hoverBorder} rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between h-full min-h-[340px] shadow-xl`}
                  >
                    <div>
                      {/* Top Bar with Number & Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-11 h-11 rounded-xl ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.iconColor} shadow-md`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs font-mono px-2.5 py-1 rounded-lg border ${theme.badge}`}>
                            Card {originalIndex + 1} of {TOTAL_CARDS}
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className={`text-xl font-bold text-white mb-2.5 ${theme.titleHover} transition-colors`}>
                        {cap.title}
                      </h3>
                      <p className="text-sm text-slate-300/90 leading-relaxed mb-6">
                        {cap.description}
                      </p>
                    </div>

                    {/* Tech List — unboxed clean metadata with bullet separators */}
                    <div className="pt-4 border-t border-slate-800/80 mt-auto">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-300/80 mb-2">
                        Primary Stack & Tools
                      </div>
                      <div className="text-xs text-slate-300 font-mono leading-relaxed">
                        {cap.technologies.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className="hover:text-cyan-200 transition-colors">{tech}</span>
                            {i < cap.technologies.length - 1 && (
                              <span className="text-slate-600 mx-1.5" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {CAPABILITIES.map((cap, i) => (
            <button
              key={cap.id}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentIndex(i);
              }}
              aria-label={`Jump to ${cap.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCardIndex === i
                  ? 'w-8 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-md shadow-cyan-500/40'
                  : 'w-2 bg-slate-800 hover:bg-slate-700'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
