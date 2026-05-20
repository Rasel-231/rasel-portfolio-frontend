"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from 'framer-motion';
import { Send, Download, ArrowRight, Briefcase } from 'lucide-react';
import Image from 'next/image';
import profileImage from "../../../assets/profile.jpg"

const Hero = () => {
  const roles = ["MERN Stack Web Developer", "Frontend Expert", "Backend Specialist"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // ১. নিচের রোলগুলির অ্যানিমেশন লজিক (আগের মতো - Fade up/down loop)
  useEffect(() => {
    const totalDuration = 3000; // প্রতিটা রোল কতক্ষণ থাকবে
    const maxRange = roles.length * 2 - 2; // Forward + Backward লজিক

    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => {
        const nextIndex = prevIndex >= maxRange ? 0 : prevIndex + 1;
        return nextIndex;
      });
    }, totalDuration);

    return () => clearInterval(interval);
  }, [roles.length]);

  // বর্তমান রোল ইনডেক্স বের করার ক্যালকুলেশন
  const displayRoleIndex = currentRoleIndex < roles.length 
    ? currentRoleIndex 
    : (roles.length * 2 - 2) - currentRoleIndex;


  // ২. নামের ওপর টাইপরাইটার এবং ব্যাকস্পেস লুপ এফেক্ট লজিক
  const nameToType = "Rasel Hasan";
  const nameCount = useMotionValue(0);
  // লুপের ভেতরের টেক্সটের লেটার কাউন্ট ট্র্যাক করা হচ্ছে
  const roundedNameCount = useTransform(nameCount, (latest) => Math.round(latest));
  const displayNameText = useTransform(roundedNameCount, (latest) => 
    nameToType.slice(0, latest)
  );

  useEffect(() => {
    // টাইপরাইটার এবং ব্যাকস্পেস রিভার্স লুপ এফেক্ট ফাংশন
    const startTypeNameAnimation = () => {
      const controls = animate(nameCount, nameToType.length, {
        type: "tween",
        duration: 1.5, // টাইপ হওয়ার স্পিড
        ease: "easeInOut",
        onComplete: () => {
          // পুরো টেক্সট টাইপ হওয়ার পর ১ সেকেন্ড অপেক্ষা করবে (Hold state)
          setTimeout(() => {
            const reverseControls = animate(nameCount, 0, {
              type: "tween",
              duration: 1.0, // মুছে যাওয়ার স্পিড (ব্যাকস্পেস একটু ফাস্ট হয়)
              ease: "easeInOut",
              onComplete: () => {
                // মুছে যাওয়ার পর আবার অ্যানিমেশন শুরু করবে
                startTypeNameAnimation();
              }
            });
            return () => reverseControls.stop();
          }, 1000); // ১০০০ মিলিসেকেন্ড বা ১ সেকেন্ড পজ ধরে রাখবে
        }
      });
      return controls;
    };

    const nameControls = startTypeNameAnimation();

    return () => nameControls.stop();
  }, []); // শুধু একবার রান করবে এবং নিজেই লুপ করবে


  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white pt-20">
      
      {/* 1. CSS-Based Galaxy Starfield Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Layer 1: Small Stars */}
        <div className="absolute inset-0 opacity-40 bg-repeat bg-center animate-stars-slow" 
             style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', backgroundSize: '300px 300px' }}></div>
        {/* Layer 2: Medium Stars */}
        <div className="absolute inset-0 opacity-60 bg-repeat bg-center animate-stars-fast" 
             style={{ backgroundImage: 'radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))', backgroundSize: '400px 400px' }}></div>
        {/* Ambient Nebula Glows */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl"
        >
          {/* Intro Text */}
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-blue-300 text-indigo-300 text-sm font-medium mb-6">
            <Briefcase size={14} /> Available for Hire
          </span>
          
          {/* ফিক্সড: "Hi, I'm Rasel Hasan" এখন টাইপরাইটার মতো হবে, ১ সেকেন্ড দাঁড়াবে এবং তারপর মুছে যাবে। এই জিনিসটা আজীবন চলতে থাকবে */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4 min-h-[50px] sm:min-h-[60px] lg:min-h-[70px]">
            Hi, I&apos;m{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block"
            >
              <motion.span className="inline-block whitespace-nowrap">
                {displayNameText}
              </motion.span>
              
              {/* টাইপরাইটার কার্সার ইফেক্ট */}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                className="inline-block ml-1 text-purple-400 font-normal text-3xl sm:text-4xl lg:text-5xl align-middle"
              >
                |
              </motion.span>
            </motion.span>
          </h1>

          {/* এই অ্যানিমেশন আগের মতো (Fade up/down) টিক রাখা হয়েছে, কোনো লেআউট শিফট ছাড়া */}
          <div className="h-16 sm:h-20 flex flex-nowrap items-center justify-center lg:justify-start text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mb-6 w-full overflow-hidden">
            <span className="mr-2 whitespace-nowrap shrink-0">A Professional</span>
            <div className="relative inline-block text-indigo-400 font-bold w-full min-w-[230px] sm:min-w-[340px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={displayRoleIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 left-0 inline-block whitespace-nowrap"
                >
                  {roles[displayRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-8">
            Specialized in crafting robust architecture using MongoDB, Express.js, React, and Node.js. 
            I build responsive, high-performance web applications optimized for speed, scalability, 
            and pixel-perfect client experiences.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            {/* Primary: Hire Me */}
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <Send size={18} />
              <span>Hire Me</span>
            </motion.button>

            {/* Secondary: Download CV */}
            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 px-6 py-3.5 rounded-xl font-semibold transition-all"
            >
              <Download size={18} />
              <span>Download CV</span>
            </motion.button>

            {/* Ghost: View Projects */}
            <motion.button 
              whileHover={{ x: 3 }}
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 text-slate-400 hover:text-white px-4 py-3 text-sm font-semibold transition-colors"
            >
              <span>View Projects</span>
              <ArrowRight size={16} />
            </motion.button>
          </div>
        </motion.div>

        {/* Right Side: Floating Profile Shape with Glow */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0] // Soft breathing/floating animation
            }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 1 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center group"
          >
            {/* Cosmic Ring Glow Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow"></div>

            {/* The Hexagonal / Morphing Blob Wrapper */}
            <div className="relative w-full h-full overflow-hidden bg-slate-900 border-2 border-indigo-500/30 rounded-[30%_70%_70%_30%_/_30%_40%_60%_70%] shadow-2xl shadow-purple-500/10">
              <Image 
                src={profileImage} // Replace with your actual profile img path
                alt="Rasel Hasan Profile" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110"
                width={500}
                height={500}
              />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;