import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Award, Cloud, Cpu, CheckCircle } from 'lucide-react';

const certIcons: Record<string, any> = {
  'ibm-agentic-ai': Cpu,
  'aws-cloud-foundations': Cloud,
  'oracle-oci-ai': Award,
};

const certThemes: Record<string, {
  bg: string;
  border: string;
  iconBg: string;
  iconBorder: string;
  iconColor: string;
  issuerColor: string;
}> = {
  'ibm-agentic-ai': {
    bg: 'bg-[#0c1222]/90',
    border: 'border-blue-900/40 hover:border-blue-500/60',
    iconBg: 'bg-blue-950/60',
    iconBorder: 'border-blue-500/30',
    iconColor: 'text-cyan-400',
    issuerColor: 'text-cyan-300',
  },
  'aws-cloud-foundations': {
    bg: 'bg-[#0c1222]/90',
    border: 'border-blue-900/40 hover:border-amber-500/60',
    iconBg: 'bg-amber-950/40',
    iconBorder: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    issuerColor: 'text-amber-300',
  },
  'oracle-oci-ai': {
    bg: 'bg-[#0c1222]/90',
    border: 'border-blue-900/40 hover:border-emerald-500/60',
    iconBg: 'bg-emerald-950/40',
    iconBorder: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    issuerColor: 'text-emerald-300',
  },
};

export const Certifications: React.FC = () => {
  return (
    <section className="py-24 relative bg-[#060913] border-t border-blue-950/40 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[320px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 font-semibold mb-3">
            <span>Credentials & Verification</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Industry Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Specialized accreditations in Autonomous Agent Systems, Cloud Computing, and Enterprise AI.
          </p>
        </div>

        {/* 3 Certification Cards with 3D Tilt & Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS_DATA.map((cert, idx) => {
            const IconComponent = certIcons[cert.id] || Award;
            const theme = certThemes[cert.id] || certThemes['ibm-agentic-ai'];

            return (
              <TiltCard
                key={cert.id}
                staggerIndex={idx}
                tiltIntensity={10}
                isFloating={true}
                className={`${theme.bg} border ${theme.border} rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between shadow-2xl`}
              >
                <div>
                  {/* Top Bar with Icon & Date */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl ${theme.iconBg} border ${theme.iconBorder} flex items-center justify-center ${theme.iconColor} shadow-md`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      {cert.date}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-base font-bold text-white mb-1.5">
                    {cert.title}
                  </h3>
                  <div className={`text-xs font-semibold ${theme.issuerColor} mb-3`}>
                    {cert.issuer}
                  </div>

                  {/* Description */}
                  {cert.credentialInfo && (
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cert.credentialInfo}
                    </p>
                  )}
                </div>

                {/* Verified Footer */}
                <div className="pt-4 mt-6 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Verified Credential
                  </span>
                  <span className="text-slate-400">{cert.date.split(' ')[1]}</span>
                </div>
              </TiltCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};
