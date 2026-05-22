"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  CartesianGrid,
} from "recharts";

import {
  Code2,
  PieChart as PieIcon,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

// ================= DATA =================

const barData = [
  { name: "Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "React", level: 95 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
];

const pieData = [
  { name: "E-Commerce", value: 40 },
  { name: "Dashboards", value: 30 },
  { name: "Utility Apps", value: 20 },
  { name: "Landing Pages", value: 10 },
];

const lineData = [
  { year: "2024", tech: 3 },
  { year: "2025", tech: 6 },
  { year: "2026", tech: 9 },
];

const radarData = [
  { subject: "Frontend", A: 95, fullMark: 100 },
  { subject: "Backend", A: 85, fullMark: 100 },
  { subject: "Database", A: 80, fullMark: 100 },
  { subject: "UI/UX Eye", A: 90, fullMark: 100 },
  { subject: "Optimization", A: 88, fullMark: 100 },
];

const COLORS = ["#38bdf8", "#a855f7", "#ec4899", "#10b981"];

// Unique gradient mappings for each tech item in order
const BAR_GRADIENTS = [
  "url(#barBlue)",
  "url(#barPurple)",
  "url(#barPink)",
  "url(#barEmerald)",
  "url(#barAmber)",
];

export const Charts = () => {
  return (
    <section className="w-full min-h-screen  text-white px-6 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
           <span className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20 w-fit block mb-4">
            Analytics
          </span>
          
          <h2 className="mt-3 text-4xl md:text-5xl font-black bg-gradient-to-r from-sky-400 via-cyan-300 to-purple-500 bg-clip-text text-transparent">
            Skills & Project Analytics
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl text-sm md:text-base leading-relaxed">
            Modern frontend engineering insights, development expertise,
            realtime growth tracking and professional analytics visualization.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">

          {/* ================= BAR CHART ================= */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] transition duration-300 hover:border-sky-400/30 hover:shadow-sky-500/10 group">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-400/20">
                  <Code2 className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Tech Proficiency</h3>
                  <p className="text-xs text-slate-400 mt-1">Development expertise level</p>
                </div>
              </div>
              <span className="text-[11px] px-3 py-1 rounded-full border border-sky-400/20 bg-sky-500/10 text-sky-300">
                Updated
              </span>
            </div>

            <div className="w-full h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 20, right: 5, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
                  
                  <Tooltip
                    cursor={{ fill: "rgba(56,189,248,0.08)" }}
                    contentStyle={{ background: "rgba(15,23,42,0.95)", border: "1px solid rgba(56,189,248,0.2)", borderRadius: "18px", backdropFilter: "blur(10px)" }}
                    labelStyle={{ color: "#cbd5e1", fontWeight: 600 }}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    formatter={(value: any) => [`${value}%`, "Skill Level"]}
                  />
                  
                  <Bar dataKey="level" radius={[14, 14, 4, 4]} barSize={34}>
                    {barData.map((_, index) => (
                      <Cell 
                        key={index} 
                        fill={BAR_GRADIENTS[index % BAR_GRADIENTS.length]} 
                      />
                    ))}
                  </Bar>
                  
                  <defs>
                    {/* 1. Next.js - Blue */}
                    <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#0ea5e9" />
                    </linearGradient>
                    {/* 2. TypeScript - Purple */}
                    <linearGradient id="barPurple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                    {/* 3. React - Pink */}
                    <linearGradient id="barPink" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f472b6" />
                      <stop offset="100%" stopColor="#db2777" />
                    </linearGradient>
                    {/* 4. Node.js - Emerald */}
                    <linearGradient id="barEmerald" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34d399" />
                      <stop offset="100%" stopColor="#059669" />
                    </linearGradient>
                    {/* 5. MongoDB - Amber */}
                    <linearGradient id="barAmber" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fbbf24" />
                      <stop offset="100%" stopColor="#d97706" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs">
              <span className="text-slate-400">Overall Performance</span>
              <span className="font-semibold text-sky-400">Avg 85%</span>
            </div>
          </div>

          {/* ================= PIE CHART ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] transition duration-300 hover:border-purple-400/30 hover:shadow-purple-500/10 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-400/20">
                <PieIcon className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Project Types</h3>
                <p className="text-xs text-slate-400 mt-1">Work category analytics</p>
              </div>
            </div>

            <div className="w-full h-[250px] relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                    {pieData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "16px" }} />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center">
                  <h4 className="text-3xl font-bold text-white">100%</h4>
                  <p className="text-xs text-slate-400 mt-1">Projects</p>
                </div>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400 justify-center">
              {pieData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }} />
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* ================= LINE CHART ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] transition duration-300 hover:border-pink-400/30 hover:shadow-pink-500/10 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-400/20">
                <TrendingUp className="w-5 h-5 text-pink-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Tech Growth</h3>
                <p className="text-xs text-slate-400 mt-1">Yearly stack expansion</p>
              </div>
            </div>

            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 20, right: 10, left: -15, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                  <Tooltip contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: "16px" }} />
                  <Line type="monotone" dataKey="tech" stroke="#ec4899" strokeWidth={4} dot={{ fill: "#ec4899", r: 5 }} activeDot={{ r: 7 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex justify-between text-xs">
              <span className="text-slate-400">Consistent learning curve</span>
              <span className="text-pink-400 font-semibold">+200%</span>
            </div>
          </div>

          {/* ================= RADAR CHART ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.35)] transition duration-300 hover:border-emerald-400/30 hover:shadow-emerald-500/10 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-400/20">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Developer Persona</h3>
                <p className="text-xs text-slate-400 mt-1">Engineering capability map</p>
              </div>
            </div>

            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} cx="50%" cy="50%">
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={10} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Skills" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.35} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 flex justify-between text-xs">
              <span className="text-slate-400">Full-stack capability</span>
              <span className="text-emerald-400 font-semibold">Strong</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};