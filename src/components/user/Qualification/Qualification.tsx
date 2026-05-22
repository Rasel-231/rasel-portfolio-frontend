"use client"
import type React from "react"
import { Briefcase, Calendar } from 'lucide-react'

interface TimelineItem {
  id: string
  title: string
  company: string
  date: string
  description: string
}

interface TimelineProps {
  data?: TimelineItem[]
  className?: string
}

// 🌌 Glassmorphism Card Style
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-3xl bg-slate-900/40 backdrop-blur-md p-8 sm:p-12 text-sm leading-7 text-slate-300 border border-white/5 shadow-2xl shadow-black/50 ${className}`}
  >
    {children}
  </div>
)

// 🌌 Updated Cosmic Badge Style
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-medium text-indigo-300 ${className}`}
  >
    <Calendar size={12} /> {children}
  </span>
)

const defaultTimelineData: TimelineItem[] = [
  {
    id: "1",
    title: "Senior Full Stack Developer",
    company: "TechCorp Solutions",
    date: "2023 - Present",
    description: "Led development team, implemented CI/CD pipelines, reduced deployment time by 60%.",
  },
  {
    id: "2",
    title: "Full Stack Developer",
    company: "StartupXYZ",
    date: "2021 - 2023",
    description: "Developed client projects using modern web technologies and collaborated with cross-functional teams.",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    company: "Personal Project",
    date: "2022",
    description: "Built complete e-commerce solution with 99.9% uptime handling 10k+ daily transactions.",
  },
  {
    id: "4",
    title: "Computer Science Degree",
    company: "University of Technology",
    date: "2017 - 2021",
    description: "Bachelor of Science, Magna Cum Laude with 3.8 GPA, focus on software engineering.",
  },
]

export default function Qualification({ data = defaultTimelineData, className = "" }: TimelineProps) {
  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden  text-white py-20 ${className}`}
    >
      {/* 🌌 1. CSS-Based Galaxy Starfield Background (Matched with Hero) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Small Stars */}
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center animate-stars-slow" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '300px 300px' 
          }}
        />
        {/* Layer 2: Medium Stars */}
        <div 
          className="absolute inset-0 opacity-60 bg-repeat bg-center animate-stars-fast" 
          style={{ 
            backgroundImage: 'radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))', 
            backgroundSize: '400px 400px' 
          }}
        />
        {/* Ambient Nebula Glows */}
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[130px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-purple-600/10 blur-[130px] rounded-full" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          {/* Header Title Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-sm font-medium mb-4">
              <Briefcase size={14} /> My Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Professional Timeline
            </h2>
          </div>

          {/* Timeline Node Tree */}
          <div className="space-y-10">
            {data.map((item, index) => (
              <div key={item.id} className="relative group transition-all duration-300 hover:translate-x-1">
                
                {/* Vertical Gradient Timeline Line */}
                {index !== data.length - 1 && (
                  <div className="absolute left-3 top-8 h-[calc(100%+2.5rem)] w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                )}
                
                <div className="flex gap-6">
                  {/* Glowing Node Point */}
                  <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 mt-1 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <div className="h-2.5 w-2.5 rounded-full bg-slate-950 shadow-sm" />
                  </div>
                  
                  {/* Timeline Text Content */}
                  <div className="flex-1 space-y-3 transition-colors duration-300">
                    <div className="space-y-1">
                      <h3 className="font-bold text-lg text-slate-100 group-hover:text-indigo-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3">
                        <p className="text-purple-400 font-medium text-sm sm:text-base">{item.company}</p>
                        <Badge>{item.date}</Badge>
                      </div>
                    </div>
                    
                    {/* Inner Description Container */}
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:bg-slate-800/20 group-hover:text-slate-200 border border-transparent group-hover:border-white/5 rounded-2xl p-4 -m-4 transition-all duration-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}