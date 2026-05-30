"use client";

import { useState, memo } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useGetProjectsQuery } from "@/redux/api/queryApi/settingsApi";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// ─── Types - সব ফিল্ড ইনক্লুড করা হয়েছে ──────────────────────────────────────────
interface IProject {
  _id: string;
  title: string;
  description: string;
  technology: string[];
  githubLink?: string;
  github?: string;
  liveLink: string;
  image: { url: string; publicId: string } | string; 
  createdAt: string;
  updatedAt: string;
  isHighlighted?: boolean;
}

// ─── Project Card ─────────────────────────────────────────────────────────────
const ProjectCard = memo(({ project }: { project: IProject }) => {
  const imageUrl = typeof project.image === "string" 
    ? project.image 
    : project.image?.url;

  const githubUrl = project.githubLink || project.github || "#";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="relative backdrop-blur-xl rounded-2xl p-6 border border-white/10 bg-slate-900/60 flex flex-col justify-between group shadow-2xl h-full border-t border-t-white/20"
    >
      {/* ইমেজ সেকশন */}
      <div className="h-48 w-full mb-6 overflow-hidden rounded-xl bg-slate-950 border border-white/5 relative shadow-inner">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={project.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-110" 
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 text-xs italic">No Image Available</div>
        )}
      </div>

      {/* কন্টেন্ট সেকশন - কোনো কিছুই বাদ দেওয়া হয়নি */}
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* টেকনোলজি লিস্ট - সব লিস্ট রেন্ডার করা হয়েছে */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technology && project.technology.length > 0 ? (
            project.technology.map((tech, i) => (
              <span key={`${tech}-${i}`} className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-950/80 border border-orange-500/50 text-orange-100 shadow-sm uppercase tracking-wider">
                {tech}
              </span>
            ))
          ) : (
            <span className="text-[10px] text-slate-600">No technology specified</span>
          )}
        </div>
      </div>

      {/* বাটন সেকশন - GitHub, Live সব লিংকসহ */}
      <div className="flex gap-3 pt-4 border-t border-white/5">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition-all border border-white/5">
          GitHub
        </a>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 text-center py-2.5 bg-purple-600 hover:bg-purple-500 rounded-xl text-xs font-bold flex items-center justify-center transition-all shadow-lg shadow-purple-500/20">
          <ExternalLink className="w-3 h-3 mr-1" /> Live
        </a>
      </div>
    </motion.div>
  );
});
ProjectCard.displayName = "ProjectCard";

// ─── Main Slider Component ───────────────────────────────────────────────────
export default function SkillTabs() {
  const { data: projectsData, isLoading, error } = useGetProjectsQuery([]);
  const projects = Array.isArray(projectsData?.data) ? projectsData.data : [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 3 >= projects.length ? 0 : prev + 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, projects.length - 3) : prev - 3));
  };

  if (error) return <div className="text-red-400 text-center py-20">Error loading projects.</div>;

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="flex justify-between items-center mb-14">
        <h2 className="text-4xl font-extrabold text-white border-l-4 border-purple-500 pl-4">
          Projects ({projects.length})
        </h2>
        
        {projects.length > 3 && (
          <div className="flex gap-3">
            <button onClick={prevSlide} className="p-3 rounded-full bg-slate-800 hover:bg-purple-600 transition-all text-white">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-3 rounded-full bg-slate-800 hover:bg-purple-600 transition-all text-white">
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {isLoading ? (
          Array.from({ length: 3 }).map((_, i) => <div key={i} className="h-[520px] bg-slate-800/20 rounded-2xl animate-pulse" />)
        ) : (
          <AnimatePresence mode="wait">
            {projects.slice(currentIndex, currentIndex + 3).map((project:IProject) => (
              <ProjectCard key={project._id} project={project} />
            ))}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}