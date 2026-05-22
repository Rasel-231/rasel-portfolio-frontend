"use client";

import { useState } from "react";
import Image from "next/image";
import profileImage from "@/assets/profile.jpg";

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-8 right-8 z-[100]">
            {/* চ্যাটবট আইকন বাটন */}
            <div 
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-16 h-16 md:w-20 md:h-20 cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] rounded-full overflow-hidden border-2 border-emerald-400/50"
            >
                <Image src={profileImage} alt="ChatBot" fill className="object-cover" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-[#03030c] animate-pulse"></span>
            </div>

            {/* চ্যাট উইন্ডো (ফর্ম) */}
            {isOpen && (
                <div className="absolute bottom-24 right-0 w-80 md:w-96 bg-[#0a0a1a] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
                    {/* চ্যাট হেডার */}
                    <div className="bg-emerald-950/50 p-4 border-b border-emerald-500/20 flex justify-between items-center">
                        <h3 className="text-emerald-100 font-semibold">কিভাবে সাহায্য করতে পারি?</h3>
                        <button onClick={() => setIsOpen(false)} className="text-emerald-400 hover:text-white">✕</button>
                    </div>

                    {/* চ্যাট বডি / ফর্ম */}
                    <form className="p-4 flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                        <textarea 
                            placeholder="আপনার মেসেজ লিখুন..." 
                            className="w-full h-32 p-3 bg-[#03030c] border border-emerald-500/20 rounded-lg text-slate-200 focus:outline-none focus:border-emerald-500 transition-colors"
                        />
                        <button 
                            type="submit" 
                            className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all"
                        >
                            পাঠিয়ে দিন
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default ChatBot;