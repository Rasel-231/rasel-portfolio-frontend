"use client";
import React from 'react';

interface Skill {
  name: string;
  progressWidth: string; // e.g., 'w-[90%]', 'w-[85%]'
  colorType: 'purple' | 'cyan'; // নিচের প্রোগ্রেস বার ও গ্লো লাইনের থিম কালার
  icon: React.ReactNode;
}

const skillsData: Skill[] = [
  {
    name: 'React',
    progressWidth: 'w-[90%]',
    colorType: 'purple',
    icon: (
      <svg className="w-6 h-6 text-indigo-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(0 12 12)" />
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" />
        <ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" className="fill-current" />
      </svg>
    ),
  },
  {
    name: 'Next.js',
    progressWidth: 'w-[85%]',
    colorType: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 17V7l5 10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    progressWidth: 'w-[80%]',
    colorType: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400 fill-current" viewBox="0 0 24 24">
        <path d="M2 2h20v20H2V2zm11.517 11.233c0-.85-.367-1.467-1.134-1.85-.433-.217-1.116-.45-2.05-.7-1-.266-1.683-.616-2.033-1.05-.333-.417-.5-1-.5-1.717 0-.766.317-1.383.95-1.85.65-.483 1.516-.716 2.616-.716 1.084 0 1.917.25 2.517.75.6.484.933 1.15.983 1.984h-2.1c-.05-.434-.234-.784-.55-1.05-.317-.25-.8-.384-1.433-.384-.584 0-1.017.117-1.3.35-.267.217-.4.534-.4.934 0 .383.15.683.45.9.3.216.983.45 2.05.7 1.05.25 1.767.6 2.15 1.05.4.433.6 1.016.6 1.75 0 .9-.367 1.6-1.1 2.083-.733.484-1.75.717-3.05.717-1.25 0-2.234-.283-2.95-.85-.7-.55-1.067-1.333-1.1-2.316h2.15c.033.55.233.983.6 1.3.367.316.917.483 1.65.483.633 0 1.1-.117 1.4-.35.3-.233.45-.583.45-1.05zm6.483-6.95h-2.967v11.45H15V6.283h-2.967V4.25H20v2.033z" />
      </svg>
    ),
  },
  {
    name: 'Three.js',
    progressWidth: 'w-[70%]',
    colorType: 'purple',
    icon: (
      <svg className="w-6 h-6 text-indigo-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    name: 'Node.js',
    progressWidth: 'w-[85%]',
    colorType: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" height="6" width="18" y="5" rx="2" />
        <rect x="3" height="6" width="18" y="13" rx="2" />
        <line x1="7" y1="8" x2="7.01" y2="8" />
        <line x1="7" y1="16" x2="7.01" y2="16" />
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    progressWidth: 'w-[75%]',
    colorType: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: 'Prisma',
    progressWidth: 'w-[80%]',
    colorType: 'purple',
    icon: (
      <svg className="w-6 h-6 text-indigo-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 22h20L12 2z" />
        <path d="M12 2v20" />
      </svg>
    ),
  },
  {
    name: 'Docker',
    progressWidth: 'w-[65%]',
    colorType: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400 fill-current" viewBox="0 0 24 24">
        <path d="M13.983 11.078h2.119c.102 0 .186-.083.186-.185V8.774c0-.102-.084-.186-.186-.186h-2.119c-.103 0-.186.084-.186.186v2.119c0 .101.083.185.186.185zM11.261 11.078h2.119c.102 0 .185-.083.185-.185V8.774c0-.102-.083-.186-.185-.186h-2.119c-.102 0-.185.084-.185.186v2.119c0 .101.083.185.185.185zM11.261 8.356h2.119c.102 0 .185-.083.185-.185V6.052c0-.102-.083-.186-.185-.186h-2.119c-.102 0-.185.084-.185.186v2.119c0 .102.083.185.185.185zM8.539 11.078h2.119c.102 0 .185-.083.185-.185V8.774c0-.102-.083-.186-.185-.186H8.539c-.102 0-.185.084-.185.186v2.119c0 .101.083.185.185.185zM8.539 8.356h2.119c.102 0 .185-.083.185-.185V6.052c0-.102-.083-.186-.185-.186H8.539c-.102 0-.185.084-.185.186v2.119c0 .102.083.185.185.185zM5.816 11.078h2.119c.102 0 .185-.083.185-.185V8.774c0-.102-.083-.186-.185-.186H5.816c-.102 0-.185.084-.185.186v2.119c0 .101.083.185.185.185zM2.111 12.533c-.431 0-.774.348-.774.779 0 5.51 4.125 9.997 9.205 9.997 4.16 0 7.72-3.013 8.84-7.143a5.55 5.55 0 00-.73.067c-.244.034-.51.05-.78.05-3.033 0-5.733-1.614-7.23-4.041l-.116-.21-.402-.822h-6.04v1.332l-.004-.009z" />
      </svg>
    ),
  },
  {
    name: 'GSAP',
    progressWidth: 'w-[75%]',
    colorType: 'cyan',
    icon: (
      <svg className="w-6 h-6 text-cyan-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
        <path d="M12 3v18M4 7.5l8 4.5 8-4.5" />
        <circle cx="12" cy="12" r="2" className="fill-cyan-400" />
      </svg>
    ),
  },
  {
    name: 'Git',
    progressWidth: 'w-[85%]',
    colorType: 'purple',
    icon: (
      <svg className="w-6 h-6 text-indigo-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="6" y1="9" x2="6" y2="15" />
        <path d="M9 18h3a3 3 0 0 0 3-3V9" />
      </svg>
    ),
  },
];

export default function AdvancedSkill() {
  return (
    <section className="min-h-screen relative text-slate-100 py-20 px-4 sm:px-6 lg:px-8 font-sans bg-slate-950 overflow-hidden">
      
      {/* 🌌 Synchronized Galactic Background Core Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Cosmic Dust Stars */}
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '300px 300px' 
          }}
        />
        {/* Layer 2: Colored Star Fields */}
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center" 
          style={{ 
            backgroundImage: 'radial-gradient(1.5px 1.5px at 60px 120px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 250px 90px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '360px 360px' 
          }}
        />
        {/* Deep Nebular Ambient Lighting Mesh */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-indigo-600/5 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit block mb-4">
            Tech Arsenal
          </span>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-5 sm:text-5xl">
            Skills
          </h2>
          
          {/* Navigation Sub-filters Container */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 font-medium bg-slate-900/60 border border-white/5 backdrop-blur-md w-fit px-4 py-2 rounded-xl">
            <span className="text-indigo-400 cursor-pointer hover:text-white transition">Frontend</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Backend</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Database</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Animation</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Tools</span>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-slate-900/40 border border-white/5 backdrop-blur-xl rounded-2xl p-6 flex flex-col items-center justify-between text-center min-h-[175px] relative overflow-hidden group hover:border-slate-700/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.05)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Inner ambient micro light on item hover */}
              <div className="absolute -inset-px bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Icon Container with fine border details */}
              <div className="w-12 h-12 rounded-xl bg-slate-950/60 flex items-center justify-center mb-3 border border-white/5 group-hover:border-indigo-500/30 transition-colors duration-300 shadow-inner">
                {skill.icon}
              </div>

              {/* Skill Name */}
              <span className="text-sm font-semibold text-slate-200 tracking-wide mb-8 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </span>

              {/* Progress Bar Layer - Shifted seamlessly towards the bottom spacing */}
              <div className="w-full h-[4px] bg-slate-950/80 rounded-full absolute bottom-5 left-0 px-6">
                <div className="w-full h-full bg-slate-800/40 rounded-full relative overflow-hidden">
                  <div
                    className={`h-full rounded-full absolute top-0 left-0 transition-all duration-500 ease-out ${
                      skill.colorType === 'purple'
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]'
                        : 'bg-gradient-to-r from-cyan-500 to-teal-400 shadow-[0_0_8px_rgba(6,182,212,0.6)]'
                    } ${skill.progressWidth}`}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}