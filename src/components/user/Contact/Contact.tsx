"use client";
import React, { useState, useRef } from 'react';
import { Copy, Send, Check } from 'lucide-react';
import { useSendMessageMutation } from '@/redux/api/queryApi/message';
import { toast } from 'react-toastify';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const email = 'rasel.byte64@gmail.com';
  
  const [sendMessage, { isLoading }] = useSendMessageMutation();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    try {
      await sendMessage(data).unwrap();
      formRef.current?.reset();
      toast.success("Message sent successfully!");
    } catch {
      toast.error("Failed to send message: ");
    }
  };

  return (
    <section className="min-h-screen text-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans flex items-center relative overflow-hidden">
      
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-40 bg-repeat bg-center animate-stars-slow" 
              style={{ backgroundImage: 'radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))', backgroundSize: '300px 300px' }}></div>
        <div className="absolute inset-0 opacity-60 bg-repeat bg-center animate-stars-fast" 
              style={{ backgroundImage: 'radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))', backgroundSize: '400px 400px' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="mb-12">
          <span className="text-xs font-bold tracking-[0.25em] text-[#6366f1] uppercase block mb-2">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">Contact</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-center min-h-[100px] transition-all duration-300 hover:border-[#312e81]/60">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Email</span>
              <div className="flex items-center justify-between gap-2">
                <span className="text-base text-[#818cf8] font-medium tracking-wide break-all selection:bg-[#6366f1]/30">
                  {email}
                </span>
                <button onClick={handleCopy} className="text-gray-500 hover:text-white transition-all p-2 rounded-lg bg-[#151226]/50 hover:bg-[#1b1833] border border-[#1e1b33] active:scale-95 flex-shrink-0">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-center min-h-[100px] transition-all duration-300 hover:border-[#312e81]/60">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Whatsapp</span>
                <span className="text-base text-[#06b6d4] font-medium tracking-wide">+880 1516-095145</span>
            </div>
            <div className="bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-5 flex flex-col justify-center min-h-[100px] transition-all duration-300 hover:border-[#312e81]/60">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1.5">Location</span>
                <span className="text-base text-gray-300 font-medium tracking-wide">Dhaka, Bangladesh</span>
            </div>
          </div>

          <div className="md:col-span-7 bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#2a2647]">
            <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" type="text" required placeholder="Your name" className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200" />
                <input name="email" type="email" required placeholder="your@email.com" className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200" />
              </div>
              <input name="subject" type="text" required placeholder="Subject" className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200" />
              <textarea name="message" rows={5} required placeholder="Your message..." className="w-full bg-slate-950/50 border border-white/5 rounded-xl px-4 py-3.5 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-[#4f46e5] focus:bg-slate-950 transition-all duration-200 resize-y min-h-[140px]" />
              
              <button type="submit" disabled={isLoading} className="w-full bg-[#6366f1] hover:bg-[#4f46e5] disabled:bg-[#4f46e5]/50 text-white text-sm font-bold py-4 px-4 rounded-xl flex items-center justify-center gap-2 transition-all mt-2 active:scale-[0.98] shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 disabled:cursor-not-allowed">
                {isLoading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <><Send className="w-4 h-4" /> <span>Send Message</span></>}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}