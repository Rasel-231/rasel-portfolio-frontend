"use client"
import type React from "react"
import { Briefcase, Calendar, GraduationCap } from 'lucide-react'

// 💡 EDUCATIONAL INSIGHT: TypeScript Object Modeling
// The type flag handles conditional UI styling. We've mapped 'education' 
// for school/college/university, and 'work' for career positions.
interface TimelineItem {
  id: string
  title: string
  company: string
  date: string
  description: string
  type: 'work' | 'education'
}

interface TimelineProps {
  data?: TimelineItem[]
  className?: string
}

// 🌌 Glassmorphism Dashboard Card Component
const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div
    className={`rounded-3xl bg-slate-900/40 backdrop-blur-md p-6 sm:p-12 text-sm leading-7 text-slate-300 border border-white/5 shadow-2xl shadow-black/50 ${className}`}
  >
    {children}
  </div>
)

// 🌌 Ambient Secondary Timeline Tag Component
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-medium text-indigo-300 ${className}`}
  >
    <Calendar size={12} /> {children}
  </span>
)

// 💡 EDUCATIONAL INSIGHT: Populating Your Exact Academic Roadmap
// The items are mapped cleanly chronologically (Newest down to Older milestones).
const defaultTimelineData: TimelineItem[] = [
  
  {
    id: "2",
    title: "BBA / Professional Degree in Accounting & Information Systems (AIS)",
    company: "Begum Rokeya University, Rangpur",
    date: "2018 - 2024",
    description: "Deep dive into enterprise information tracking systems, database management systems, data analysis, and core structural accounting principles.",
    type: 'education'
  },
  {
    id: "3",
    title: "Higher Secondary Certificate (HSC) — Science",
    company: "Abdul Awal Degree College",
    date: "2016 - 2018",
    description: "Advanced coursework in Mathematics, Physics, Chemistry, and Information Technology.",
    type: 'education'
  },
  {
    id: "4",
    title: "Secondary School Certificate (SSC) — Science",
    company: "Telihaty High School",
    date: "2011 - 2016",
    description: "Foundational science track with early emphasis on analytical logic, basic mathematics, and introductory computing concepts.",
    type: 'education'
  }
]

export default function Qualification({ data = defaultTimelineData, className = "" }: TimelineProps) {
  return (
    <div
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white py-12 sm:py-20 ${className}`}
    >
      {/* 🌌 Background Particle Universe Layers */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-repeat bg-center animate-stars-slow" 
          style={{ 
            backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', 
            backgroundSize: '300px 300px' 
          }}
        />
        <div 
          className="absolute inset-0 opacity-60 bg-repeat bg-center animate-stars-fast" 
          style={{ 
            backgroundImage: 'radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))', 
            backgroundSize: '400px 400px' 
          }}
        />
        {/* Responsive Blur Radius Configs */}
        <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-600/10 blur-[80px] sm:blur-[130px] rounded-full" />
        <div className="absolute bottom-1/3 left-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-purple-600/10 blur-[80px] sm:blur-[130px] rounded-full" />
      </div>

      {/* Main Dynamic Track Canvas Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          {/* Section Header Text Blocks */}
          <div className="flex flex-col items-center text-center sm:items-start sm:text-left mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-400/30 text-indigo-300 text-xs sm:text-sm font-medium mb-4">
              <GraduationCap size={14} /> My Education & Experience
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300">
              Educational Timeline
            </h2>
          </div>

          {/* Connected Step Array Map */}
          <div className="space-y-12">
            {data.map((item, index) => (
              <div key={item.id} className="relative group transition-all duration-300 hover:translate-x-1">
                
                {/* Vertical Gradient Connecting Vector Line */}
                {index !== data.length - 1 && (
                  <div className="absolute left-3.5 top-8 h-[calc(100%+3rem)] w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent opacity-30 group-hover:opacity-70 transition-opacity duration-300" />
                )}
                
                <div className="flex gap-4 sm:gap-6 items-start">
                  
                  {/* Context-Aware Glowing Node Indicator */}
                  <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 mt-1 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
                    <div className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-slate-950 text-[10px]">
                      {item.type === 'work' ? (
                        <Briefcase size={10} className="text-indigo-400" />
                      ) : (
                        <GraduationCap size={11} className="text-purple-400" />
                      )}
                    </div>
                  </div>
                  
                  {/* Description Meta Content Fields */}
                  <div className="flex-1 space-y-2">
                    <div className="space-y-1">
                      <h3 className="font-bold text-base sm:text-lg text-slate-100 group-hover:text-indigo-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* Responsive Wrapping Utility */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <p className="text-purple-400 font-medium text-xs sm:text-sm">{item.company}</p>
                        <Badge>{item.date}</Badge>
                      </div>
                    </div>
                    
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
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