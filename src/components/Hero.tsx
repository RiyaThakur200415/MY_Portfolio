import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  ArrowDown, 
  FileText, 
  Send, 
  Github, 
  Linkedin, 
  Mail, 
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isLooping, setIsLooping] = React.useState(false);
  const hasScrolledRef = React.useRef(false);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoEnded = () => {
    // Automatically scroll down to the next section once completed
    if (!hasScrolledRef.current) {
      hasScrolledRef.current = true;
      const nextSection = document.getElementById('about');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
      }
    }

    // Set to repeat in a continuous loop and restart playback
    setIsLooping(true);
    const video = videoRef.current;
    if (video) {
      video.loop = true;
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <section id="hero" className="relative min-h-[85vh] pt-32 pb-20 flex items-center overflow-hidden bg-[#060913]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          loop={isLooping}
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover object-center opacity-100 scale-100"
        >
          <source
            src="https://res.cloudinary.com/dzdjbm2d/video/upload/v1787913669/sooo_modify_my_video_the_backg.mp4"
            type="video/mp4"
          />
        </video>
        {/* Subtle bottom fade to blend smoothly into the dark sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-[#060913]" />
      </div>

      {/* Multi-shade cyan, cobalt & deep blue ambient lighting */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[700px] h-[400px] bg-blue-600/12 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[500px] h-[250px] bg-indigo-600/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/3 w-[380px] h-[300px] bg-sky-500/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="w-full px-6 sm:px-12 lg:px-16 xl:px-20 relative z-10">
        <div className="max-w-3xl lg:max-w-4xl space-y-7 text-left drop-shadow-md">
          
          {/* Top Metadata Lockup with pill */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-xs font-medium text-slate-200 shadow-lg shadow-black/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/80" />
              <span className="text-slate-300 font-mono">{PERSONAL_INFO.status}</span>
            </div>
          </div>

          {/* Main Heading with Blue & Cyan Gradient */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.06] text-balance">
            Building intelligent systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">beautiful digital experiences.</span>
          </h1>

          {/* Alternative visual statement */}
          <p className="text-xl sm:text-2xl text-slate-200 font-medium leading-snug">
            I build software that looks good, works intelligently, and solves real problems.
          </p>

          {/* Short Description */}
          <div className="relative pl-4 py-2 max-w-2xl bg-slate-900/40 backdrop-blur-sm rounded-r-xl border-l-2 border-cyan-400/70">
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Computer Science Engineering student at <strong className="text-white font-semibold">VIT-AP University</strong> with hands-on experience building full-stack applications, responsive web experiences, and AI-powered multi-agent systems.
            </p>
          </div>

          {/* Action Buttons (Flush Left) */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={scrollToProjects}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 hover:brightness-110 shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-900/80 hover:bg-slate-800 backdrop-blur-md border border-cyan-500/30 hover:border-cyan-400/60 shadow-md shadow-black/40 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </button>

            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900/50 hover:bg-slate-800/80 backdrop-blur-md border border-slate-700/60 hover:border-slate-500 transition-all cursor-pointer"
            >
              <span>Let's Connect</span>
              <Send className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </div>

          {/* Social Links Bar (Flush Left) */}
          <div className="pt-3 flex flex-wrap items-center gap-6 text-slate-400 text-sm">
            <span className="text-xs font-mono uppercase tracking-wider text-slate-500">Connect:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors group"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs font-mono">GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors group"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
              <span className="text-xs font-mono">LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors group"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4 text-slate-400 group-hover:text-amber-300 transition-colors" />
              <span className="text-xs font-mono">LeetCode</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors group"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span className="text-xs font-mono">Email</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
