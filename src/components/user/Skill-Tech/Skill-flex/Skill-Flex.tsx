
import Spider from "../../Spider/Spider";
import SkillTech from "../Skill-Tech";

const SkillFlex = () => {
  return (
    // মেইন কন্টেইনার এবং ব্যাকগ্রাউন্ড গ্লো ইফেক্টস
    <div className="relative w-full max-w-7xl mx-auto px-6 py-16 text-white overflow-hidden">
      
      {/* Background Subtle Glow Effect (UI-কে আরও সুন্দর করার জন্য) */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start gap-3 mb-12">
        {/* PROJECTS সেকশনের মতো মডার্ন ব্যাজ */}
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-400 shadow-sm shadow-blue-500/5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 animate-pulse" />
          My Skills
        </span>

        {/* TECHNOLOGY গ্রেডিয়েন্ট হেডিং */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight font-sans bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
          Technology
        </h2>
      </div>

      {/* Main layout wrapper (SkillTech এবং Spider এর জন্য) */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-12 justify-center items-center w-full min-h-[70vh]">
        
        {/* SkillTech Wrapper */}
        <div className="w-full lg:w-1/2 flex justify-center items-center overflow-visible">
          <SkillTech />
        </div>
        
        {/* Spider Wrapper */}
        <div className="w-full lg:w-1/2 flex justify-center items-center overflow-visible">
          <Spider />
        </div>

      </div>
    </div>
  );
};

export default SkillFlex;