'use client';
import { User, GraduationCap, Code2, Sparkles, Brain, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection = () => {
  const skills = [
    { label: "Problem Solving", value: 95, icon: <Brain size={16} /> },
    { label: "Creative Design", value: 85, icon: <Sparkles size={16} /> },
    { label: "Teamwork", value: 90, icon: <Users size={16} /> },
    { label: "Fast Learner", value: 98, icon: <Target size={16} /> },
  ];

  // গিটহাব ডার্ক মোড ইউআরএল (থিম এবং কাস্টম কালারসহ)
  // এখানে bg=000000 (Black), color=40c463 (Standard GitHub Green) ব্যবহার করা হয়েছে
  const githubChartUrl = "https://ghchart.rshah.org/000000/40c463/Rasel-231";

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto bg-slate-950"> {/* সেকশনেও ডার্ক ব্যাকগ্রাউন্ড নিশ্চিত করুন */}
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

      <div className="group">
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
                Building scalable web applications that prioritize user experience. Aspiring to solve complex engineering challenges and contribute to global digital products through clean, maintainable code.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Code2 size={18} className="text-indigo-400" /> Core Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "Node.js", "TypeScript", "TailwindCSS", "PostgreSQL"].map((tech) => (
                  <motion.span 
                    whileHover={{ y: -2, backgroundColor: "#312e81" }}
                    key={tech} 
                    className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-xs font-mono text-indigo-300 cursor-pointer transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Chart */}
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
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Contribution Graph (Fixed to Real Black & Green) */}
        <div className="mt-10 p-6 bg-black border border-slate-800 rounded-3xl"> {/* কার্ড ব্যাকগ্রাউন্ডও ব্ল্যাক করুন */}
          <h3 className="text-white font-bold mb-6 flex items-center gap-2">
            {/* GitHub SVG Icon */}
            <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            GitHub Activity
          </h3>
          <div className="w-full bg-black rounded-lg p-2 overflow-hidden"> {/* গ্রাফের চারপাশে ব্ল্যাক প্যাডিং */}
            <Image
              width={800}
              height={150}
              src={githubChartUrl} 
              alt="Rasel-231's GitHub contributions in Dark Mode" 
              className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity object-contain" 
              unoptimized // এটি এক্সটার্নাল ডাইনামিক ইমেজ হওয়ায় অপ্টিমাইজেশন স্কিপ করা ভালো
              priority // পেজ লোডের সময় দ্রুত দেখানোর জন্য
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;