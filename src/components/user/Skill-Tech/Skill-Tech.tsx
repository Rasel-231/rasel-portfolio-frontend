"use client";
import React, { useEffect, useState, memo } from 'react';

// --- Type Definitions ---
type IconType = 'html' | 'css' | 'javascript' | 'typescript' | 'react' | 'nextjs' | 'tailwind' | 'shadcn';
type GlowColor = 'cyan' | 'purple';

interface SkillConfig {
  id: string;
  mobileOrbitRadius: number;
  desktopOrbitRadius: number;
  mobileSize: number;
  desktopSize: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
  isMobile: boolean;
}

interface GlowingOrbitPathProps {
  radiusClass: string;
  glowColor?: GlowColor;
}

// --- SVG Icon Components ---
const iconComponents: Record<IconType, { component: () => React.JSX.Element; color: string }> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" fill="#E34F26"/>
      </svg>
    ),
    color: '#E34F26'
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.751L12 19.351l5.379-1.443.744-8.157z" fill="#1572B6"/>
      </svg>
    ),
    color: '#1572B6'
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E"/>
        <path d="M22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#323330"/>
      </svg>
    ),
    color: '#F7DF1E'
  },
  typescript: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M0 0h24v24H0V0zm21.613 18.583c-.143-1.01-.607-1.782-2.15-2.457-.687-.315-1.472-.562-1.67-.99-.074-.158-.088-.304-.03-.439.127-.338.67-.449 1.178-.292.322.09.585.315.75.698l1.79-1.08c-.286-.518-.585-.877-.99-1.14-.735-.517-1.785-.697-2.954-.517-.915.135-1.695.54-2.055 1.147-.794.945-.42 2.655.675 3.33 1.275.787 2.925.967 3.12 1.71.18.788-.585 1.193-1.41 1.08-.735-.09-1.155-.45-1.545-1.035l-1.74 1.103c.315.607.75 1.08 1.35 1.44 1.35.832 3.84.72 4.634-.855.03-.06.21-.518.06-1.185zm-9.84-7.223H9.427v9.426H7.132v-9.426H4.838V9.3h6.935v2.06z" fill="#3178C6"/>
      </svg>
    ),
    color: '#3178C6'
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <g stroke="#61DAFB" strokeWidth="1.5" fill="none">
          <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)"/>
          <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)"/>
        </g>
      </svg>
    ),
    color: '#61DAFB'
  },
  nextjs: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.711 18.232l-4.856-6.248v6.248h-1.536V7.728h1.49l4.52 5.831V7.728h1.536v10.504h-1.154zm-6.195-5.328l-1.365-1.802v3.74h-1.536V7.728h1.536v2.176l1.246 1.632 1.3-1.632h1.722l-2.073 2.536 2.311 3.032h-1.641z" fill="#FFFFFF"/>
      </svg>
    ),
    color: '#FFFFFF'
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    ),
    color: '#06B6D4'
  },
  shadcn: {
    component: () => (
      <svg viewBox="0 0 256 256" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M208 128L128 208L48 128L128 48L208 128Z" stroke="currentColor" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M192 128L128 192L64 128L128 64L192 128Z" fill="currentColor" opacity="0.2"/>
      </svg>
    ),
    color: '#FFFFFF'
  }
};

const SkillIcon = memo(({ type }: { type: IconType }) => {
  const IconComponent = iconComponents[type]?.component;
  return IconComponent ? <IconComponent /> : null;
});
SkillIcon.displayName = 'SkillIcon';

// --- Configurations (Clean 8 Skills, 2 Layers) ---
const skillsConfig: SkillConfig[] = [
  // Orbit 1: Fundamentals (Cyan Glow) - 4 Icons
  { id: 'html', mobileOrbitRadius: 55, desktopOrbitRadius: 100, mobileSize: 32, desktopSize: 44, speed: 0.8, iconType: 'html', phaseShift: 0, glowColor: 'cyan', label: 'HTML5' },
  { id: 'css', mobileOrbitRadius: 55, desktopOrbitRadius: 100, mobileSize: 32, desktopSize: 44, speed: 0.8, iconType: 'css', phaseShift: (2 * Math.PI) / 4, glowColor: 'cyan', label: 'CSS3' },
  { id: 'javascript', mobileOrbitRadius: 55, desktopOrbitRadius: 100, mobileSize: 32, desktopSize: 44, speed: 0.8, iconType: 'javascript', phaseShift: (4 * Math.PI) / 4, glowColor: 'cyan', label: 'JavaScript' },
  { id: 'typescript', mobileOrbitRadius: 55, desktopOrbitRadius: 100, mobileSize: 32, desktopSize: 44, speed: 0.8, iconType: 'typescript', phaseShift: (6 * Math.PI) / 4, glowColor: 'cyan', label: 'TypeScript' },

  // Orbit 2: Modern Tech Stack (Purple Glow) - 4 Icons (Rotates Counter-Clockwise)
  { id: 'react', mobileOrbitRadius: 105, desktopOrbitRadius: 180, mobileSize: 36, desktopSize: 52, speed: -0.4, iconType: 'react', phaseShift: 0, glowColor: 'purple', label: 'React' },
  { id: 'nextjs', mobileOrbitRadius: 105, desktopOrbitRadius: 180, mobileSize: 36, desktopSize: 52, speed: -0.4, iconType: 'nextjs', phaseShift: (2 * Math.PI) / 4, glowColor: 'purple', label: 'Next.js' },
  { id: 'tailwind', mobileOrbitRadius: 105, desktopOrbitRadius: 180, mobileSize: 36, desktopSize: 52, speed: -0.4, iconType: 'tailwind', phaseShift: (4 * Math.PI) / 4, glowColor: 'purple', label: 'Tailwind CSS' },
  { id: 'shadcn', mobileOrbitRadius: 105, desktopOrbitRadius: 180, mobileSize: 36, desktopSize: 52, speed: -0.4, iconType: 'shadcn', phaseShift: (6 * Math.PI) / 4, glowColor: 'purple', label: 'shadcn/ui' },
];

const OrbitingSkill = memo(({ config, angle, isMobile }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const orbitRadius = isMobile ? config.mobileOrbitRadius : config.desktopOrbitRadius;
  const size = isMobile ? config.mobileSize : config.desktopSize;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-transform duration-200 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 30 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          relative w-full h-full p-1.5 sm:p-2.5 bg-slate-900/80 border border-white/10 backdrop-blur-md
          rounded-xl sm:rounded-2xl flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 border-purple-500/40' : ''}
        `}
      >
        <SkillIcon type={config.iconType} />
        {isHovered && (
          <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-950 border border-white/10 rounded-lg text-[11px] font-medium text-slate-200 whitespace-nowrap pointer-events-none z-50">
            {config.label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radiusClass, glowColor = 'cyan' }: GlowingOrbitPathProps) => {
  const glowColors = {
    cyan: { border: 'rgba(6, 182, 212, 0.4)' },
    purple: { border: 'rgba(147, 51, 234, 0.4)' }
  };

  const colors = glowColors[glowColor] || glowColors.cyan;

  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none ${radiusClass}`}>
      <div
        className="absolute inset-0 rounded-full"
        style={{ border: `2px dashed ${colors.border}` }}
      />
    </div>
  );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function SkillTech() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      const deltaTime = (currentTime - lastTime) / 1000;
      lastTime = currentTime;

      setTime(prevTime => prevTime + deltaTime);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  return (
    <div className="w-full h-auto relative flex items-center justify-center overflow-hidden text-white py-4">
      
      {/* 🌌 Cosmic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '300px 300px' 
          }}
        />
      </div>

      <div 
        className="relative z-10 w-[240px] h-[240px] sm:w-[450px] sm:h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Core Element */}
        <div className="w-12 h-12 sm:w-20 sm:h-20 bg-slate-900 border border-white/10 rounded-full flex items-center justify-center z-20 relative backdrop-blur-md">
          <div className="relative z-10 flex items-center justify-center scale-75 sm:scale-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="url(#core-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <defs>
                <linearGradient id="core-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06B6D4" />
                  <stop offset="100%" stopColor="#9333EA" />
                </linearGradient>
              </defs>
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
        </div>

        {/* Both Orbit Paths */}
        <GlowingOrbitPath radiusClass="w-[110px] h-[110px] sm:w-[200px] sm:h-[200px]" glowColor="cyan" />
        <GlowingOrbitPath radiusClass="w-[210px] h-[210px] sm:w-[360px] sm:h-[360px]" glowColor="purple" />

        {/* Map Orbiting Icons */}
        {skillsConfig.map((config) => {
          const angle = time * config.speed + (config.phaseShift || 0);
          return (
            <OrbitingSkill 
              key={config.id} 
              config={config} 
              angle={angle} 
              isMobile={isMobile} 
            />
          );
        })}
      </div>
    </div>
  );
}