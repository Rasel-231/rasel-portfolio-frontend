'use client';
import { User, GraduationCap, Code2, Sparkles, Brain, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  // skills অ্যারে যা আগে unused ছিল, এবার সেটি রেন্ডার করা হয়েছে
  const skills = [
    { label: "Problem Solving", value: 95, icon: <Brain size={16} /> },
    { label: "Creative Design", value: 85, icon: <Sparkles size={16} /> },
    { label: "Teamwork", value: 90, icon: <Users size={16} /> },
    { label: "Fast Learner", value: 98, icon: <Target size={16} /> },
  ];

  const githubChartUrl = "https://ghchart.rshah.org/Rasel-231";

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto bg-slate-950">
      {/* 1. Status Badge */}
      <motion.div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-700 text-indigo-300 text-sm font-medium mb-8 cursor-default bg-slate-900"
        whileHover={{ scale: 1.05 }}
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        Available for Freelance Work
      </motion.div>

      <h2 className="text-5xl font-extrabold text-white mb-12 tracking-tight">About Me</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Profile Info */}
        <div className="space-y-6 border-r border-slate-800/50 pr-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <User size={20} className="text-indigo-400" /> Profile
            </h3>
            <div>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Occupation</p>
              <p className="text-indigo-300 font-semibold">Full-Stack Developer</p>
            </div>
            <div>
              <p className="text-slate-500 text-[10px] uppercase tracking-[0.2em]">Experience</p>
              <p className="text-indigo-300 font-semibold">2+ Years</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-800/50">
            {/* GraduationCap এখন ব্যবহৃত */}
            <h3 className="text-white font-semibold flex items-center gap-2 mb-3">
              <GraduationCap size={18} className="text-indigo-400" /> Education
            </h3>
            <p className="text-slate-300 text-sm font-medium">BBA. in Business Administration</p>
            <p className="text-slate-600 text-xs mt-1">Rangpur, Bangladesh</p>
          </div>
        </div>

        {/* Goals & Skills */}
        <div className="md:col-span-2 space-y-8">
          <div>
            <h3 className="text-white font-bold mb-3">Professional Philosophy</h3>
            <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-indigo-500 pl-4 italic">
              Building scalable web applications that prioritize user experience. Aspiring to solve complex engineering challenges.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Code2 size={18} className="text-indigo-400" /> Core Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-xs font-mono text-indigo-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skills Chart (skills ব্যবহার করা হয়েছে) */}
      <div className="mt-10 pt-8 border-t border-slate-800/50">
        <h3 className="text-white font-bold mb-8">Professional Proficiency</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((item) => (
            <div key={item.label} className="space-y-3">
              <div className="flex justify-between text-xs text-slate-400">
                <span className="flex items-center gap-2">{item.icon} {item.label}</span>
                <span className="text-indigo-400 font-mono">{item.value}%</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-full bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* GitHub Activity Section */}
      <div className="mt-10 p-6  border border-slate-800 rounded-sm">
        <h3 className="text-white font-bold mb-6 flex items-center gap-2">GitHub Activity</h3>
        <div className="relative w-full h-[150px]">
          <Image
            src={githubChartUrl}
            alt="GitHub Contributions"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-contain"
            unoptimized
            priority
            
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;