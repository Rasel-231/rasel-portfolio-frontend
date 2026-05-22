"use client";

import React from 'react';

export default function SkillSection() {
  const socials = [
    { viewBox: "0 0 24 24", path: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4 M9 18c-4.51 2-5-2-7-2" },
    { viewBox: "0 0 24 24", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
    { viewBox: "0 0 24 24", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { viewBox: "0 0 24 24", path: "M22 4H2v16h20V4z M2 7l10 7 10-7" },
    { viewBox: "0 0 24 24", path: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" }
  ];

  const skills = [
    { name: "Next.js", border: "border-[#2d1b3d]", bg: "bg-[#160d21]/30", text: "text-[#a482cc]", glow: "[text-shadow:-1px_-1px_0_rgba(239,68,68,0.5),1px_1px_0_rgba(59,130,246,0.5)]" },
    { name: "MongoDBv", border: "border-[#143a3d]", bg: "bg-[#0a1e21]/30", text: "text-[#4cd2cc]", glow: "[text-shadow:-1px_-1px_0_rgba(239,68,68,0.4),1px_1px_0_rgba(16,185,129,0.4)]" },
    { name: "Node.js", border: "border-[#122543]", bg: "bg-[#091221]/30", text: "text-[#5289db]", glow: "" },
    { name: "PostgreSQL", border: "border-[#2a1a3a]", bg: "bg-[#150d1d]/30", text: "text-[#8871b6]", glow: "[text-shadow:-1px_-1px_0_rgba(239,68,68,0.5),1px_1px_0_rgba(59,130,246,0.5)]" },
    { name: "TypeScript", border: "border-[#0f353a]", bg: "bg-[#071a1d]/30", text: "text-[#3fc2cc]", glow: "[text-shadow:-1px_-1px_0_rgba(239,68,68,0.4),1px_1px_0_rgba(16,185,129,0.4)]" }
  ];

  return (
    <div className="flex flex-col justify-center items-start py-2 font-sans select-none gap-3">
      {/* Row 1: Social Media Icons */}
      <div className="flex flex-wrap gap-1.5">
        {socials.map((icon, i) => (
          <a key={i} href="#" className="w-9 h-9 flex items-center justify-center rounded-lg border border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-600 transition-all duration-200">
            <svg className="w-4 h-4" viewBox={icon.viewBox} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={icon.path} />
            </svg>
          </a>
        ))}
      </div>

      {/* Row 2 & 3: Tech Stack Badges */}
      <div className="flex flex-wrap gap-1.5 items-center max-w-lg">
        {skills.map((skill, i) => (
          <div key={i} className={`px-2.5 py-1 rounded-md border ${skill.border} ${skill.bg}`}>
            <span className={`font-medium tracking-wide text-xs ${skill.text} ${skill.glow}`}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}