'use client';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Link from 'next/link'; 
import { Home, User, Briefcase, Code, Mail, Menu, X, Send, Cpu, UserStar, LogOut, LogIn } from 'lucide-react'; 
import { useLogoutMutation, useProfileQuery } from '@/redux/api/queryApi/authApi';
import { toast } from 'react-toastify';

interface NavItem {
  name: string;
  icon: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { data: profileresponse } = useProfileQuery({});
  const [logout] = useLogoutMutation();
  
  const profile = profileresponse?.data;

  // useCallback ব্যবহার করে লগআউট হ্যান্ডেলার অপ্টিমাইজ করা হয়েছে
  const handleLogout = useCallback(async (e: React.MouseEvent) => {
    e.preventDefault(); 
    try {
      await logout({}).unwrap();
      toast.success("Logged out successfully");
      window.location.href = '/login'; // লগআউটের পর রিডাইরেক্ট
    } catch {
      toast.error("Logout failed");
    }
  }, [logout]);

  // useMemo-এর ভেতরে handleLogout ডিপেনডেন্সি যোগ করা হয়েছে
  const navItems = useMemo((): NavItem[] => {
    const baseItems: NavItem[] = [
      { name: 'Home', icon: <Home size={18} />, href: '/' },
      { name: 'About', icon: <User size={18} />, href: '/about' },
      { name: 'Services', icon: <Briefcase size={18} />, href: '/services' },
      { name: 'Projects', icon: <Code size={18} />, href: '/projects' },
      { name: 'Contact', icon: <Mail size={18} />, href: 'mailto:rasel.byte64@gmail.com' },
    ];

    if (profile) {
      return [
        ...baseItems,
        { name: 'Panel', icon: <UserStar size={18} />, href: '/dashboard' },
        { name: 'Logout', icon: <LogOut size={18} />, href: '#', onClick: handleLogout }
      ];
    }
    return [...baseItems, { name: 'Login', icon: <LogIn size={18} />, href: '/login' }];
  }, [profile, handleLogout]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-slate-950/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg text-white">
              <Cpu size={22} />
            </div>
            <span className="text-xl font-black text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Rasel</span>Hub
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6 bg-slate-900/20 px-6 py-2 rounded-full border border-white/5 backdrop-blur-sm">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                onClick={item.onClick}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-300 hover:text-indigo-400 transition-colors"
              >
                {item.icon} {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex">
             <button className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all">
               <Send size={16} /> Hire Me
             </button>
          </div>

          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute w-full bg-slate-950/95 border-b border-white/5 backdrop-blur-lg p-4 space-y-2">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href} 
              onClick={(e) => { if(item.onClick) item.onClick(e); setIsOpen(false); }}
              className="flex items-center gap-4 px-4 py-3 text-slate-300 hover:bg-white/5 rounded-xl transition-all"
            >
              {item.icon} {item.name}
            </Link>
          ))}
          <div className="px-4 py-2">
            <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-sm">
              <Send size={16} /> Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;