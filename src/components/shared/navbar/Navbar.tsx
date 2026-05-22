"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link'; // 💡 EDUCATIONAL INSIGHT: Next.js Native routing component imported here
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  Mail,  
  Menu, 
  X, 
  Send,
  Cpu,
  UserStar
} from 'lucide-react'; // 💡 Removed conflicting 'Link' icon from Lucide

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle glassmorphism effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', icon: <Home size={18} />, href: '#' },
    { name: 'About', icon: <User size={18} />, href: '#' },
    { name: 'Services', icon: <Briefcase size={18} />, href: '#' },
    { name: 'Projects', icon: <Code size={18} />, href: '#' },
    { name: 'Contact', icon: <Mail size={18} />, href: '#' },
    { name: 'Panel', icon: <UserStar size={18} />, href: '/login' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'py-3 bg-slate-950/80 text-white backdrop-blur-md border-b border-white/5 shadow-lg shadow-purple-950/10' 
        : 'py-5 bg-transparent text-white'
    }`}>
      
      {/* 1. Integrated Cosmic Background only when scrolled */}
      {scrolled && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
          <div 
            className="absolute inset-0 bg-repeat bg-center animate-stars-slow" 
            style={{ 
              backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0))', 
              backgroundSize: '200px 200px' 
            }}
          ></div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Left Side: Brand */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white group-hover:rotate-12 transition-transform shadow-md shadow-indigo-600/20">
              <Cpu size={22} />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Rasel</span>
              <span className="text-pink-400">Hub</span>
            </span>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 bg-slate-900/20 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-indigo-400 transition-colors group"
              >
                <span className="text-indigo-400/80 group-hover:text-indigo-400">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right Side: Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-indigo-600/20 active:scale-95">
              <Send size={16} />
              <span>Hire Me</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Styled for Dark Space Theme) */}
      <div className={`md:hidden absolute w-full bg-slate-950/95 border-b border-white/5 backdrop-blur-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center gap-4 px-4 py-3.5 text-base font-medium text-slate-300 border-b border-white/5 hover:bg-white/5 rounded-xl transition-all"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-indigo-400">{item.icon}</span>
              <span>{item.name}</span>
            </Link>
          ))}
          <div className="pt-4 px-1">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-600/20">
              <Send size={16} />
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;