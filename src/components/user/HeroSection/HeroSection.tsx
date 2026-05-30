"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { Send, Download, ArrowRight, Briefcase } from "lucide-react";
import Image from "next/image";
import profileImage from "../../../assets/profile.jpg";
import SkillSection from "../Skill-Tech/Skill-Section";
import { useGetFilesQuery } from "@/redux/api/queryApi/settingsApi";

const pureFadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: {
    duration: 1.5,
    ease: "linear" as const,
    delay,
  },
});

// বাটনটির সেই বিশেষ ইফেক্টটি এখানে যুক্ত করা হয়েছে
const AnimatedHireButton = () => (
  <div className="relative group p-[2px] rounded-[10px] overflow-hidden">
    <motion.div
      className="absolute inset-0 bg-[conic-gradient(from_0deg,red,pink,yellow,green,blue,red)]"
      animate={{ rotate: 360 }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
    />
    <a
      href="https://wa.me/qr/6WJI3FBOMYBRL1"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center justify-center gap-2 bg-gradient-to-r from-slate-800 to-slate-950 text-white px-5 py-2.5 rounded-[9px] font-bold text-sm hover:scale-[1.02] transition-transform duration-300"
    >
      <Send size={16} /> Hire Me
    </a>
  </div>
);

const Hero = () => {
  const roles = [
    "MERN Stack Web Developer",
    "Frontend Expert",
    "Backend Specialist",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const { data: filesResponse } = useGetFilesQuery({});

  const downloadcv = () => {
    const files = filesResponse?.data;
    if (!files || files.length === 0) {
      alert("CV file is not available!");
      return;
    }
    const latestFile = files[0];
    const downloadUrl = `http://localhost:5000/api/v1/settings/download/${latestFile._id}`;
    window.open(downloadUrl, "_blank");
  };

  useEffect(() => {
    const totalDuration = 3000;
    const maxRange = roles.length * 2 - 2;

    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => {
        const nextIndex = prevIndex >= maxRange ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, totalDuration);

    return () => clearInterval(interval);
  }, [roles.length]);

  const displayRoleIndex =
    currentRoleIndex < roles.length
      ? currentRoleIndex
      : roles.length * 2 - 2 - currentRoleIndex;

  // Name Typing Animation
  const nameToType = "Rasel Hasan";
  const nameCount = useMotionValue(0);
  const roundedNameCount = useTransform(nameCount, (latest) => Math.round(latest));
  const displayNameText = useTransform(roundedNameCount, (latest) => nameToType.slice(0, latest));

  useEffect(() => {
    const startTypeNameAnimation = () => {
      const controls = animate(nameCount, nameToType.length, {
        type: "tween",
        duration: 1.5,
        ease: "easeInOut",
        onComplete: () => {
          setTimeout(() => {
            const reverseControls = animate(nameCount, 0, {
              type: "tween",
              duration: 1.5,
              ease: "easeInOut",
              onComplete: () => {
                startTypeNameAnimation();
              },
            });
            return () => reverseControls.stop();
          }, 2500);
        },
      });
      return controls;
    };

    const nameControls = startTypeNameAnimation();
    return () => nameControls.stop();
  }, [nameCount, nameToType.length]);

  // Description Typing Animation
  const descToType =
    "Specialized in crafting robust architecture using MongoDB, Express.js, React, and Node.js. I build responsive, high-performance web applications optimized for speed, scalability, and pixel-perfect client experiences.";
  const descCount = useMotionValue(0);
  const roundedDescCount = useTransform(descCount, (latest) => Math.round(latest));
  const displayDescText = useTransform(roundedDescCount, (latest) => descToType.slice(0, latest));

  useEffect(() => {
    const startDescAnimation = () => {
      const controls = animate(descCount, descToType.length, {
        type: "tween",
        duration: 4.8,
        ease: "linear",
        onComplete: () => {
          setTimeout(() => {
            const reverseControls = animate(descCount, 0, {
              type: "tween",
              duration: 2.5,
              ease: "easeInOut",
              onComplete: () => {
                startDescAnimation();
              },
            });
            return () => reverseControls.stop();
          }, 4000);
        },
      });
      return controls;
    };

    const descControls = startDescAnimation();
    return () => descControls.stop();
  }, [descCount, descToType.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white pt-10">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 bg-repeat bg-center animate-stars-slow"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))",
            backgroundSize: "300px 300px",
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-60 bg-repeat bg-center animate-stars-fast"
          style={{
            backgroundImage:
              "radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))",
            backgroundSize: "400px 400px",
          }}
        ></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left backdrop-blur-md p-6 sm:p-8">

          <motion.span
            {...pureFadeIn(0.2)}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-400 text-green-300 text-sm font-medium mb-6 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
          >
            <Briefcase size={14} /> Available for Hire
          </motion.span>

    <motion.h1
  {...pureFadeIn(0.4)}
  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 min-h-[80px] flex items-center justify-center lg:justify-start flex-wrap"
>
  <span className="mr-2">Hi, I&apos;m</span>
  
  {/* এখানে motion.span ব্যবহার করুন */}
  <motion.span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block min-w-[200px]">
    {displayNameText}
  </motion.span>
  
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
    className="text-purple-400 font-normal ml-1"
  >
    |
  </motion.span>
</motion.h1>
<motion.div
  {...pureFadeIn(0.6)}
  className="flex flex-col items-center lg:items-start text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mb-6 w-full"
>
  <span className="mb-1">A Professional</span>
  <div className="relative text-indigo-400 font-bold min-h-[40px] w-full text-center lg:text-left">
    <AnimatePresence mode="wait">
      <motion.span
        key={displayRoleIndex}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.3 }}
        className="block"
      >
        {roles[displayRoleIndex]}
      </motion.span>
    </AnimatePresence>
  </div>
</motion.div>

          <motion.p
  {...pureFadeIn(0.8)}
  className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 min-h-[140px] sm:min-h-[100px] lg:min-h-[120px]"
>
  {/* এখানেও motion.span ব্যবহার করুন */}
  <motion.span>{displayDescText}</motion.span>
  
  <motion.span
    animate={{ opacity: [1, 0] }}
    transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
    className="inline-block ml-0.5 text-indigo-400 font-normal align-baseline"
  >
    |
  </motion.span>
</motion.p>

          <motion.div
            {...pureFadeIn(1.0)}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            {/* এখানে AnimatedHireButton কম্পোনেন্টটি ব্যবহার করা হয়েছে */}
            <AnimatedHireButton />

            <motion.button
              onClick={downloadcv}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(255,255,255,0.05)",
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 px-5 py-2 rounded-sm font-semibold transition-all"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.button>

            <motion.button
              whileHover={{ x: 3 }}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-slate-400 hover:text-white px-4 py-3 text-sm font-semibold transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          <motion.div {...pureFadeIn(1.2)}>
            <SkillSection />
          </motion.div>

        </div>

        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 1.5, ease: "easeOut", delay: 0.5 },
              scale: { duration: 1.5, ease: "easeOut", delay: 0.5 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.0,
              },
            }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow"></div>

            <div className="relative w-full h-full overflow-hidden bg-slate-900 border-2 border-indigo-500/30 rounded-[30%_70%_70%_30%_/_30%_40%_60%_70%] shadow-2xl shadow-purple-500/10">
              <Image
                src={profileImage}
                alt="Rasel Hasan Profile"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                width={500}
                height={500}
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;