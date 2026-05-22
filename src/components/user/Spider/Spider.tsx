"use client";
import React, { useState, useEffect } from "react";
import { 
  Database,     
  Server,       
  HardDrive,    
  Cpu,          
  Zap,          
  Layers,       
  ShieldAlert   
} from "lucide-react";

const IconWrapper = ({
  children,
  className = "",
  isHighlighted = false,
  isHovered = false,
  animationDelay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  isHighlighted?: boolean;
  isHovered?: boolean;
  animationDelay?: number;
}) => (
  <div
    className={`
        backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center transition-all duration-300 border
        ${
          isHighlighted
            ? "bg-slate-900/80 border-indigo-500/50 animate-breathing-glow"
            : `bg-slate-900/40 border-white/10 ${!isHovered && "animate-float"}`
        }
        ${
          isHovered
            ? "bg-slate-800/80 border-purple-500/60 scale-110"
            : "hover:bg-slate-800/20 hover:border-white/20"
        }
        ${className}
    `}
    style={{ animationDelay: `${animationDelay}s` }}
  >
    {children}
  </div>
);

const SpiderWeb = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const outerIcons = [
    { id: 1, name: "PostgreSQL", component: <Server className="w-5 h-5 sm:w-7 sm:h-7 text-indigo-400" /> },
    { id: 2, name: "MySQL", component: <HardDrive className="w-5 h-5 sm:w-7 sm:h-7 text-sky-400" /> },
    { id: 3, name: "MongoDB", component: <Cpu className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-400" /> },
    { id: 4, name: "Redis", component: <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-rose-400" /> },
    { id: 5, name: "Oracle", component: <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-red-400" /> },
    { id: 6, name: "MariaDB", component: <ShieldAlert className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-400" /> },
  ];

  const radius = isMobile ? 100 : 150;
  const centralIconRadius = isMobile ? 32 : 48; 
  const outerIconRadius = isMobile ? 24 : 36;   
  const svgSize = isMobile ? 280 : 420;
  const svgCenter = svgSize / 2;

  return (
    <div className="relative w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
      <svg width={svgSize} height={svgSize} className="absolute top-0 left-0 pointer-events-none">
        <g>
          {outerIcons.map((icon, i) => {
            const nextIndex = (i + 1) % outerIcons.length;
            const nextIcon = outerIcons[nextIndex];
            
            const angle1 = (-90 + i * (360 / outerIcons.length)) * (Math.PI / 180);
            const x1 = svgCenter + radius * Math.cos(angle1);
            const y1 = svgCenter + radius * Math.sin(angle1);

            const angle2 = (-90 + nextIndex * (360 / outerIcons.length)) * (Math.PI / 180);
            const x2 = svgCenter + radius * Math.cos(angle2);
            const y2 = svgCenter + radius * Math.sin(angle2);

            const isLineActive = hoveredId === icon.id || hoveredId === nextIcon.id;

            return (
              <line
                key={`web-line-${icon.id}`}
                x1={x1} y1={y1} x2={x2} y2={y2}
                stroke={isLineActive ? "#a855f7" : "#334155"}
                strokeWidth={isLineActive ? "2" : "1"}
                className="transition-all duration-300"
                style={{ opacity: isLineActive ? 0.8 : 0.3 }}
              />
            );
          })}

          {outerIcons.map((icon, i) => {
            const angleInDegrees = -90 + i * (360 / outerIcons.length);
            const angleInRadians = angleInDegrees * (Math.PI / 180);
            
            const startX = svgCenter + centralIconRadius * Math.cos(angleInRadians);
            const startY = svgCenter + centralIconRadius * Math.sin(angleInRadians);
            const endX = svgCenter + (radius - outerIconRadius) * Math.cos(angleInRadians);
            const endY = svgCenter + (radius - outerIconRadius) * Math.sin(angleInRadians);
            
            const isSpokeActive = hoveredId === icon.id;

            return (
              <line
                key={`spoke-line-${icon.id}`}
                x1={startX} y1={startY} x2={endX} y2={endY}
                stroke={isSpokeActive ? "#6366f1" : "#334155"}
                strokeWidth={isSpokeActive ? "2" : "1"}
                className="transition-all duration-300"
                style={{ opacity: isSpokeActive ? 0.9 : 0.3 }}
              />
            );
          })}
        </g>
      </svg>

      <div className="absolute top-1/2 left-1/2">
        <div className="absolute -translate-x-1/2 -translate-y-1/2 z-20">
          <IconWrapper className="w-16 h-16 sm:w-24 sm:h-24 border-indigo-500/30" isHighlighted={true} animationDelay={0}>
            <Database className="w-6 h-6 sm:w-10 sm:h-10 text-indigo-400" />
            <span className="text-[8px] sm:text-[10px] uppercase tracking-widest font-bold mt-0.5 sm:mt-1 text-indigo-300">DB Stack</span>
          </IconWrapper>
        </div>

        {outerIcons.map((icon, i) => {
          const angleInDegrees = -90 + i * (360 / outerIcons.length);
          const angleInRadians = angleInDegrees * (Math.PI / 180);
          const x = radius * Math.cos(angleInRadians);
          const y = radius * Math.sin(angleInRadians);

          const iconStyle = { transform: `translate(${x}px, ${y}px)` };
          const isHovered = hoveredId === icon.id;

          return (
            <div key={icon.id} className="absolute z-10 select-none" style={iconStyle} onMouseEnter={() => setHoveredId(icon.id)} onMouseLeave={() => setHoveredId(null)}>
              <div className="-translate-x-1/2 -translate-y-1/2 relative group">
                <IconWrapper className="w-14 h-14 sm:w-20 sm:h-20 border-white/5" isHovered={isHovered} animationDelay={i * 0.12}>
                  {icon.component}
                  <span className="text-[8px] sm:text-[10px] font-medium text-slate-400 mt-1 transition-colors group-hover:text-white">
                    {icon.name}
                  </span>
                </IconWrapper>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Spider() {
  return (
    /* ফিক্স: min-h-screen বাদ দিয়ে h-auto এবং টাইট রেসপন্সিভ প্যাডিং */
    <div className="w-full h-auto relative flex items-center justify-center font-sans py-2  overflow-hidden text-white">
      <style>
        {`
          @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-8px); }
              100% { transform: translateY(0px); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }
          @keyframes breathing-glow {
              0% { border-color: rgba(99, 102, 241, 0.3); }
              50% { border-color: rgba(168, 85, 247, 0.5); }
              100% { border-color: rgba(99, 102, 241, 0.3); }
          }
          .animate-breathing-glow { animation: breathing-glow 3.5s ease-in-out infinite; }
        `}
      </style>

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '300px 300px' 
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center px-4">
        <SpiderWeb />
      </div>
    </div>
  );
}