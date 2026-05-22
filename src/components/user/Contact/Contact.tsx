"use client";
import React, { useState } from 'react';
import { Copy, Send, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const email = 'rasel.byte64@gmail.com';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form logic or trigger a success state here if needed
    }, 1800);
  };

  return (
    <section className="min-h-screen  text-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans flex items-center relative overflow-hidden">
      
      {/* 1. CSS-Based Galaxy Starfield Background (Hero Section-এর সাথে ম্যাচিং) */}
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

      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* Header Section */}
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[#6366f1] uppercase block mb-2">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Contact
          </h2>
        </div>

        {/* Main Content Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards & Socials */}
          <div className="md:col-span-5 flex flex-col gap-4">
            
            {/* Email Card */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-center min-h-[100px] transition-all duration-300 hover:border-[#312e81]/60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                Email
              </span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-base text-[#818cf8] font-medium tracking-wide break-all selection:bg-[#6366f1]/30">
                  {email}
                </span>
                <button 
                  onClick={handleCopy}
                  className="text-gray-500 hover:text-white transition-all p-2 rounded-lg bg-[#151226]/50 hover:bg-[#1b1833] border border-[#1e1b33] active:scale-95 flex-shrink-0"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Whatsapp Card */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-center min-h-[100px] transition-all duration-300 hover:border-[#312e81]/60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                Whatsapp
              </span>
              <span className="text-base text-[#06b6d4] font-medium tracking-wide selection:bg-cyan-500/20">
                +880 1516-095145
              </span>
            </div>

            {/* Location Card */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-center min-h-[100px] transition-all duration-300 hover:border-[#312e81]/60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">
                Location
              </span>
              <span className="text-base text-gray-300 font-medium tracking-wide">
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Social Icons Row */}
            <div className="flex gap-3 mt-2">
              {[
                { name: 'GitHub', path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                { name: 'LinkedIn', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { name: 'WhatsApp', path: 'M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-3.484c1.645.976 3.255 1.489 4.854 1.49 5.462 0 9.907-4.447 9.91-9.913.002-2.647-1.02-5.136-2.877-6.997-1.857-1.861-4.327-2.885-6.974-2.886-5.468 0-9.915 4.448-9.919 9.914-.002 1.799.487 3.553 1.417 5.11L2.14 21.823l4.507-1.307zM17.486 14.39c-.3-.149-1.777-.876-2.053-.976-.276-.1-.476-.149-.676.15-.2.299-.775.976-.95.175-.175-.2-.35-.35-.649-.499-1.197-.534-2.115-1.09-2.923-2.486-.217-.371.217-.345.621-1.15.067-.133.033-.249-.017-.35-.05-.1-0.476-1.146-.653-1.571-.172-.413-.344-.356-.475-.363-.122-.006-.263-.007-.404-.007s-.371.053-.565.264c-.194.211-.74.723-.74 1.761s.755 2.04 1.059 2.443c.305.404 1.486 2.269 3.599 3.178.503.217.896.346 1.203.443.505.16 0.964.137 1.327.083.404-.06 1.777-.726 2.027-1.43.25-.704.25-1.307.175-1.43-.075-.124-.275-.224-.575-.374z' }
              ].map((social) => (
                <a 
                  key={social.name}
                  href="#" 
                  aria-label={social.name}
                  className="w-11 h-11 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#4f46e5] hover:bg-[#120f24] transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={social.path}/>
                  </svg>
                </a>
              ))}
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="md:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#2a2647]">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200"
                  />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="relative group">
                <input
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200"
                />
              </div>

              <div className="relative group">
                <textarea
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200 resize-y min-h-[140px]"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#6366f1] hover:bg-[#4f46e5] disabled:bg-[#4f46e5]/50 text-white text-sm font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2 active:scale-[0.98] shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}