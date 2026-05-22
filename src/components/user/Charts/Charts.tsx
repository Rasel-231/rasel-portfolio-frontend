"use client";

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
} from "recharts";
import { Code2, PieChart as PieIcon, TrendingUp, ShieldAlert } from "lucide-react";

// --- DATA SETS ---
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

export const Charts = () => {
  return (
    <div className="w-full min-h-screen  text-slate-100 p-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-500">
          Skills & Project Analytics
        </h2>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* CARD 1: BAR CHART */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between shadow-xl min-h-[340px]">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="w-5 h-5 text-sky-400" />
              <h3 className="text-sm font-semibold tracking-wide text-slate-300">Tech Proficiency</h3>
            </div>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                    labelStyle={{ color: "#94a3b8" }}
                  />
                  <Bar dataKey="level" fill="#38bdf8" radius={[4, 4, 0, 0]} barSize={20} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CARD 2: PIE CHART */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between shadow-xl min-h-[340px]">
            <div className="flex items-center gap-2 mb-4">
              <PieIcon className="w-5 h-5 text-purple-400" />
              <h3 className="text-sm font-semibold tracking-wide text-slate-300">Project Types</h3>
            </div>
            <div className="w-full h-56 relative flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute bottom-[-15px] flex flex-wrap gap-x-2 gap-y-1 justify-center text-[10px] text-slate-400">
                {pieData.map((entry, index) => (
                  <span key={index} className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index] }}></span>
                    {entry.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3: LINE CHART */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between shadow-xl min-h-[340px]">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-pink-400" />
              <h3 className="text-sm font-semibold tracking-wide text-slate-300">Tech Stack Growth</h3>
            </div>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 15, right: 15, left: -25, bottom: 0 }}>
                  <XAxis dataKey="year" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155", borderRadius: "8px" }}
                  />
                  <Line type="monotone" dataKey="tech" stroke="#ec4899" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* CARD 4: RADAR CHART */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-2xl flex flex-col justify-between shadow-xl min-h-[340px]">
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-5 h-5 text-emerald-400" />
              <h3 className="text-sm font-semibold tracking-wide text-slate-300">Developer Persona</h3>
            </div>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" stroke="#94a3b8" fontSize={10} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Skills" dataKey="A" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};