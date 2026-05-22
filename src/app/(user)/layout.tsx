import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

export default function UserLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col bg-[#03030c] text-slate-200 selection:bg-slate-800 relative overflow-x-hidden">
            
            {/* 🌌 গ্লোবাল গ্যালাক্সি স্টারফিল্ড ব্যাকগ্রাউন্ড */}
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

            {/* মেইন কন্টেন্ট স্ট্রাকচার */}
            <div className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">{children}</main> 
                <Footer />
            </div>
        </div>
    );
}