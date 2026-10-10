import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { 
  Rocket, 
  X, 
  Maximize2, 
  Radio,
  ArrowUpRight
} from 'lucide-react';

import beyondImg1 from '../assets/images/beyond_project_1.png';
import beyondImg2 from '../assets/images/beyond_project_2.png';
import beyondImg4 from '../assets/images/beyond_project_4.png';

interface PhotoItem {
  id: string;
  name: string;
  image: string;
  fallbackImage: string;
}

// 1 Poster photo (one larger box)
const POSTER_PHOTO: PhotoItem = {
  id: 'poster-1',
  name: 'Technical Symposium & Expo 2024',
  image: beyondImg4,
  fallbackImage: 'https://i.ibb.co/JwZ4tK8W/0da6e22f-d856-4d08-a968-3ee7aaae4f5c.png',
};

// 2 Hall photos (two smaller boxes)
const HALL_PHOTOS: PhotoItem[] = [
  {
    id: 'hackathon-arena',
    name: 'Hackathon Sprint Arena',
    image: beyondImg1,
    fallbackImage: 'https://i.ibb.co/21JQhyR0/45dd5a4d-4911-4d7e-93c0-902f31517827.png',
  },
  {
    id: 'workshop-auditorium',
    name: 'Technical Workshop Hall',
    image: beyondImg2,
    fallbackImage: 'https://i.ibb.co/YBGw0KdF/8b88d88c-4512-4058-9a34-ee8dba573072.png',
  },
];

export const Experience: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<PhotoItem | null>(null);
  const exp = EXPERIENCE_DATA[0];

  return (
    <section id="journey" className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      
      {/* Background ambient blue & cyan glow */}
      <div className="absolute top-1/4 left-1/4 w-[650px] h-[350px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[320px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
            <span>Engineering Leadership & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Beyond the Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl leading-relaxed">
            Technical leadership, event infrastructure, and space-tech community building at SEDS VIT-AP.
          </p>
        </div>

        {/* ============================================================ */}
        {/* MAIN LAYOUT: SKETCH ARRANGEMENT                              */}
        {/* Left Column: Technical Co-Lead (Top) + 2 Halls (Bottom)      */}
        {/* Right Column: 1 Poster (One Larger Box)                      */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LEFT COLUMN: Content Card + 2 Smaller Hall Photo Boxes */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* CARD 1: INFORMATION & CONTENT (Technical Co-Lead) */}
            <TiltCard
              staggerIndex={0}
              slideFrom="left"
              tiltIntensity={4}
              isFloating={false}
              className="bg-[#0c1222]/90 border border-blue-900/40 hover:border-blue-700/60 rounded-3xl p-6 sm:p-7 shadow-2xl relative overflow-hidden flex flex-col justify-between transition-all duration-300"
            >
              <div className="absolute -top-24 -left-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-5 relative z-10">
                {/* Header Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-cyan-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
                    <span>Active Leadership</span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-xl border border-slate-800">
                    {exp.period || '2024 — Present'}
                  </span>
                </div>

                {/* Role & Organization */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-cyan-400 shadow-md shrink-0 mt-0.5">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Technical Co-Lead
                    </h3>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      SEDS VIT-AP
                    </div>
                    <div className="text-xs text-slate-400 font-mono mt-0.5">
                      Students for the Exploration & Development of Space
                    </div>
                  </div>
                </div>

                {/* Reduced concise content */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  Spearheading technical web platforms and digital infrastructure for SEDS VIT-AP. Architected registration systems, telemetry dashboards, and event portals powering flagship space hackathons and CTF challenges.
                </p>

                {/* 3 Metric Highlights */}
                <div className="grid grid-cols-3 gap-3 pt-1">
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg sm:text-xl font-bold text-white tracking-tight">100%</div>
                    <div className="text-[11px] text-cyan-400 font-medium mt-0.5">Site Uptime</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg sm:text-xl font-bold text-white tracking-tight">500+</div>
                    <div className="text-[11px] text-blue-400 font-medium mt-0.5">Participants</div>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-900/60 border border-slate-800 text-center">
                    <div className="text-lg sm:text-xl font-bold text-white tracking-tight">Flagship</div>
                    <div className="text-[11px] text-indigo-400 font-medium mt-0.5">Portals & CTF</div>
                  </div>
                </div>
              </div>

              {/* Core Competency Badges */}
              <div className="pt-5 border-t border-slate-800/80 mt-5 relative z-10">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {['Web Infrastructure', 'Hackathon Architecture', 'Event Portals', 'Cross-Device UI'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono text-slate-300 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>

            {/* TWO SMALLER BOXES: THE 2 HALL PHOTOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {HALL_PHOTOS.map((hall, idx) => (
                <TiltCard
                  key={hall.id}
                  staggerIndex={idx + 1}
                  slideFrom={idx === 0 ? "left" : "bottom"}
                  tiltIntensity={6}
                  isFloating={true}
                  onClick={() => setActivePhoto(hall)}
                  className={`group relative h-48 sm:h-52 bg-slate-900 border border-slate-800 hover:border-blue-500/60 rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300`}
                >
                  {/* Photo Display */}
                  <img
                    src={hall.image}
                    alt={hall.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      if (e.currentTarget.src !== hall.fallbackImage) {
                        e.currentTarget.src = hall.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  />

                  {/* Gradient Overlay for Crisp Text Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:via-black/20 transition-all" />

                  {/* Top-Right Maximize Icon on Hover */}
                  <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-lg bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all opacity-80 group-hover:opacity-100 shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>

                  {/* Only Picture Name (No Clutter) */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight drop-shadow group-hover:text-cyan-200 transition-colors">
                      {hall.name}
                    </h4>
                  </div>
                </TiltCard>
              ))}
            </div>

          </div>

          {/* RIGHT COLUMN: 1 POSTER PHOTO (One Larger Box - Just its name) */}
          <div className="lg:col-span-5 flex flex-col">
            <TiltCard
              staggerIndex={2}
              slideFrom="right"
              wrapperClassName="h-full flex flex-col"
              tiltIntensity={5}
              isFloating={true}
              onClick={() => setActivePhoto(POSTER_PHOTO)}
              className="group relative h-full min-h-[380px] sm:min-h-[460px] bg-slate-900 border border-slate-800 hover:border-blue-500/60 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 flex flex-col justify-end"
            >
              {/* Large Poster Photo */}
              <img
                src={POSTER_PHOTO.image}
                alt={POSTER_PHOTO.name}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (e.currentTarget.src !== POSTER_PHOTO.fallbackImage) {
                    e.currentTarget.src = POSTER_PHOTO.fallbackImage;
                  }
                }}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Scrim for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/95 via-[#060913]/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />

              {/* Top-Right Maximize Button */}
              <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 group-hover:text-white group-hover:bg-blue-600 transition-all shadow-lg">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Top Badge: Poster indicator with blue gradient */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1 rounded-xl bg-blue-600/90 backdrop-blur-md text-xs font-semibold text-white uppercase tracking-wider shadow-lg shadow-blue-500/25">
                  Featured Poster
                </span>
              </div>

              {/* Only Picture Name (No Heavy Descriptions) */}
              <div className="relative z-10 p-6 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight drop-shadow group-hover:text-cyan-300 transition-colors">
                    {POSTER_PHOTO.name}
                  </h4>
                  <span className="flex items-center gap-1 text-xs text-cyan-400 font-mono font-semibold shrink-0 group-hover:translate-x-0.5 transition-transform">
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* FULL-RESOLUTION LIGHTBOX MODAL                               */}
      {/* ============================================================ */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#090e1a] border border-blue-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 hover:bg-red-600/90 border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Full Uncropped Photo Display */}
              <div className="bg-black flex items-center justify-center p-2 min-h-[300px] max-h-[75vh]">
                <img
                  src={activePhoto.image}
                  alt={activePhoto.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    if (e.currentTarget.src !== activePhoto.fallbackImage) {
                      e.currentTarget.src = activePhoto.fallbackImage;
                    }
                  }}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>

              {/* Bottom Caption Bar: Clean, just name */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-t border-slate-800 bg-[#0c1220]">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  {activePhoto.name}
                </h3>
                <button
                  type="button"
                  onClick={() => setActivePhoto(null)}
                  className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
