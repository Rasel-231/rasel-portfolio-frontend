"use client";
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  badge: string;
  badgeType: 'saas' | '3d' | 'admin';
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  isHighlighted?: boolean;
}

const projectsData: Project[] = [
  {
    title: 'NexaDash',
    badge: 'SaaS',
    badgeType: 'saas',
    description: 'Full-stack SaaS dashboard with real-time analytics, auth, and PostgreSQL backend.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    githubUrl: '#',
    liveUrl: '#',
    isHighlighted: true, 
  },
  {
    title: 'Orbit3D Portfolio',
    badge: '3D',
    badgeType: '3d',
    description: 'Interactive 3D portfolio with React Three Fiber, GSAP animations, and WebGL shaders.',
    tags: ['Three.js', 'GSAP', 'R3F'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'AdminForge',
    badge: 'admin',
    badgeType: 'admin',
    description: 'Full-featured admin panel with JWT auth, CRUD operations, and real-time data.',
    tags: ['Express', 'React', 'JWT'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export default function SkillTabs() {
  return (
    <section className="min-h-screen relative text-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans  overflow-hidden">
      
      {/* 🌌 CSS-Based Galaxy Starfield Background (Synced with Previous Components) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Small Cosmic Stars */}
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '300px 300px' 
          }}
        />
        {/* Layer 2: Medium Color Stars */}
        <div 
          className="absolute inset-0 opacity-50 bg-repeat bg-center" 
          style={{ 
            backgroundImage: 'radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '400px 400px' 
          }}
        />
        {/* Deep Nebular Ambient Lighting Mesh */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-14">
          <span className="text-xs font-bold tracking-widest text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Featured Work
          </span>
          <h2 className="text-4xl font-extrabold text-white mt-4 mb-5 tracking-tight sm:text-5xl">
            Projects
          </h2>
          
          {/* Navigation/Filters Dashboard Style */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-400 font-medium bg-slate-900/60 border border-white/5 backdrop-blur-md w-fit px-4 py-2 rounded-xl">
            <span className="text-indigo-400 cursor-pointer hover:text-white transition">Full Stack</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Frontend</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Backend</span>
            <span className="text-slate-700">|</span>
            <span className="cursor-pointer hover:text-white transition">Animation</span>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`relative backdrop-blur-xl rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between group min-h-[440px] bg-slate-900/40 ${
                project.isHighlighted
                  ? 'border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/20'
                  : 'border-white/5 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]'
              } hover:-translate-y-1.5`}
            >
              
              {/* Highlight Pulse Core for Featured Cards */}
              {project.isHighlighted && (
                <div className="absolute top-0 right-12 w-24 h-[1px] bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" />
              )}

              <div>
                {/* Visual Badge/Illustration Container */}
                <div className="h-32 w-full flex items-center justify-center mb-6 relative overflow-hidden rounded-xl bg-slate-950/40 border border-white/5 shadow-inner">
                  
                  {/* SaaS Badge (NexaDash) */}
                  {project.badgeType === 'saas' && (
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-24 h-24 rounded-full border border-dashed border-indigo-500/30 animate-[spin_25s_linear_infinite]"></div>
                      <div className="w-20 h-20 rounded-full border border-indigo-500/30 bg-indigo-950/30 flex items-center justify-center backdrop-blur-sm shadow-xl">
                        <span className="text-xs font-semibold text-indigo-400 tracking-wider">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* 3D Badge (Orbit3D) */}
                  {project.badgeType === '3d' && (
                    <div className="w-full h-full flex items-center justify-center relative">
                      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-6"></div>
                      <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -rotate-3"></div>
                      <div className="border border-cyan-500/30 bg-cyan-950/30 px-5 py-2 rounded-xl backdrop-blur-sm z-10 shadow-xl">
                        <span className="text-xs font-bold text-cyan-400 tracking-widest">
                          {project.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Admin Badge (AdminForge) */}
                  {project.badgeType === 'admin' && (
                    <div className="border border-white/5 bg-slate-900/60 p-4 rounded-xl w-40 flex flex-col gap-2.5 shadow-xl">
                      <div className="bg-purple-950/40 border border-purple-500/20 rounded-lg py-1 px-3 text-center">
                        <span className="text-[10px] font-mono text-purple-400 block tracking-wider uppercase font-bold">
                          {project.badge}
                        </span>
                      </div>
                      <div className="flex gap-1.5 opacity-60">
                        <div className="h-2 w-10 bg-slate-700 rounded-sm"></div>
                        <div className="h-2 w-14 bg-slate-700 rounded-sm"></div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              {/* Bottom Section: Tags and Actions */}
              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-md bg-slate-950/60 border border-white/5 text-slate-300 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Glass Variant */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center gap-2 border border-white/5 bg-slate-950/40 hover:bg-slate-900/80 hover:border-white/10 text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md"
                  >
                    <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-slate-200" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 border border-white/5 bg-slate-950/40 hover:bg-slate-900/80 hover:border-white/10 text-slate-200 text-xs font-semibold py-2.5 px-4 rounded-xl transition-all duration-200 shadow-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-200" />
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}