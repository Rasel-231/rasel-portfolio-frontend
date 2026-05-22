"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate, useMotionValue, useTransform } from 'framer-motion';
import { Send, Download, ArrowRight, Briefcase } from 'lucide-react';
import Image from 'next/image';
import profileImage from "../../../assets/profile.jpg";
import SkillSection from '../Skill-Tech/Skill-Section';

const Hero = () => {
  const roles = ["MERN Stack Web Developer", "Frontend Expert", "Backend Specialist"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // ১. রোল পরিবর্তনের অ্যানিমেশন লজিক
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

  const displayRoleIndex = currentRoleIndex < roles.length 
    ? currentRoleIndex 
    : (roles.length * 2 - 2) - currentRoleIndex;


  // ২. নামের ওপর টাইপরাইটার এবং ব্যাকস্পেস লুপ এফেক্ট লজিক
  const nameToType = "Rasel Hasan";
  const nameCount = useMotionValue(0);
  const roundedNameCount = useTransform(nameCount, (latest) => Math.round(latest));
  const displayNameText = useTransform(roundedNameCount, (latest) => 
    nameToType.slice(0, latest)
  );

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
              duration: 0.8, // নাম মুছার স্পিড ফাস্ট করা হয়েছে
              ease: "easeInOut",
              onComplete: () => {
                startTypeNameAnimation();
              }
            });
            return () => reverseControls.stop();
          }, 1500); // নাম টাইপ হওয়ার পর ১.৫ সেকেন্ড স্ক্রিনে থাকবে
        }
      });
      return controls;
    };

    const nameControls = startTypeNameAnimation();
    return () => nameControls.stop();
  }, [nameCount, nameToType.length]); // 💡 ESLint Error fixed here


  // ৩. ডেসক্রিপশন টাইপরাইটার এবং কাস্টম ফাস্ট ইরেজ লুপ লজিক
  const descToType = "Specialized in crafting robust architecture using MongoDB, Express.js, React, and Node.js. I build responsive, high-performance web applications optimized for speed, scalability, and pixel-perfect client experiences.";
  const descCount = useMotionValue(0);
  const roundedDescCount = useTransform(descCount, (latest) => Math.round(latest));
  const displayDescText = useTransform(roundedDescCount, (latest) => 
    descToType.slice(0, latest)
  );

  useEffect(() => {
    const startDescAnimation = () => {
      const controls = animate(descCount, descToType.length, {
        type: "tween",
        duration: 4.5, // টাইপ হতে ৪.৫ সেকেন্ড লাগবে (স্মুথ রিডিং)
        ease: "linear",
        onComplete: () => {
          // 💡 পুরো লেখা শেষ হওয়ার পর ২.৫ সেকেন্ড (২৫০০ms) স্ক্রিনে থাকবে যেন মানুষ সহজে পড়তে পারে
          setTimeout(() => {
            const reverseControls = animate(descCount, 0, {
              type: "tween",
              duration: 4.5, // 💡 ইরেজ বা ব্যাকস্পেস হবে মাত্র ০.৯ সেকেন্ডে (খুব ফাস্ট ঝড়ের গতিতে)
              ease: "easeInOut",
              onComplete: () => {
                startDescAnimation();
              }
            });
            return () => reverseControls.stop();
          }, 2500); 
        }
      });
      return controls;
    };

    const descControls = startDescAnimation();
    return () => descControls.stop();
  }, [descCount, descToType.length]); // 💡 ESLint Error fixed here


  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-white pt-10">
      
      {/* CSS-Based Galaxy Starfield Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-repeat bg-center animate-stars-slow" 
             style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', backgroundSize: '300px 300px' }}></div>
        <div className="absolute inset-0 opacity-60 bg-repeat bg-center animate-stars-fast" 
             style={{ backgroundImage: 'radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))', backgroundSize: '400px 400px' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text and Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 16, ease: "easeOut" }}
          className="text-center lg:text-left backdrop-blur-md p-6 sm:p-8"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-blue-300 text-indigo-300 text-sm font-medium mb-6">
            <Briefcase size={14} /> Available for Hire
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-1 min-h-[30px] sm:min-h-[50px] lg:min-h-[70px]">
            Hi, I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 inline-block">
              <motion.span className="inline-block whitespace-nowrap">
                {displayNameText}
              </motion.span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="inline-block ml-1 text-purple-400 font-normal text-3xl sm:text-4xl lg:text-5xl align-middle"
              >
                |
              </motion.span>
            </span>
          </h1>

          <div className="h-16 sm:h-20 flex flex-nowrap items-center justify-center lg:justify-start text-lg sm:text-xl lg:text-2xl font-semibold text-slate-300 mb-1 w-full overflow-hidden">
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

          {/* Description Block */}
          <motion.p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-6 min-h-[140px] sm:min-h-[100px] lg:min-h-[120px]">
            <motion.span>{displayDescText}</motion.span>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="inline-block ml-0.5 text-indigo-400 font-normal align-baseline"
            >
              |
            </motion.span>
          </motion.p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-5 py-1 rounded-sm font-semibold transition-all shadow-lg shadow-indigo-600/20 active:scale-95"
            >
              <Send size={18} />
              <span>Hire Me</span>
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 px-5 py-1 rounded-sm font-semibold transition-all"
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
          </div>
          <SkillSection/>
        </motion.div>

        {/* Right Side: Floating Profile Shape */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -15, 0]
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
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-spin-slow"></div>

            <div className="relative w-full h-full overflow-hidden bg-slate-900 border-2 border-indigo-500/30 rounded-[30%_70%_70%_30%_/_30%_40%_60%_70%] shadow-2xl shadow-purple-500/10">
              <Image 
                src={profileImage} 
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