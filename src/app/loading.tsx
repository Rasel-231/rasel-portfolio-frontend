'use client';
import React from 'react';
import Image from 'next/image';
import spinnerImage from "@/assets/profile.jpg";

interface GlobalSpinnerProps {
  sizeClass?: string;
}

const GlobalSpinner: React.FC<GlobalSpinnerProps> = ({ sizeClass = 'w-20 h-20' }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950">
      
      {/* 🌌 Hero Section Star Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        <div
          className="absolute inset-0 bg-repeat bg-center animate-stars-slow"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 100px 150px, #fff, rgba(0,0,0,0))",
            backgroundSize: "300px 300px",
          }}
        ></div>
        <div
          className="absolute inset-0 bg-repeat bg-center animate-stars-fast"
          style={{
            backgroundImage:
              "radial-gradient(2px 2px at 50px 100px, #818cf8, rgba(0,0,0,0)), radial-gradient(2px 2px at 200px 80px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 150px 280px, #c084fc, rgba(0,0,0,0))",
            backgroundSize: "400px 400px",
          }}
        ></div>
      </div>

      {/* 🎯 Spinner Content */}
      <div className={`relative ${sizeClass} flex items-center justify-center z-10`}>
        {/* Outer Ripple */}
        <div className="absolute w-full h-full rounded-full border-2 border-orange-600 animate-ping opacity-75"></div>
        
        {/* Inner Ripple (Delayed) */}
        <div 
          className="absolute w-3/4 h-3/4 rounded-full border-2 border-orange-600 animate-ping opacity-50" 
          style={{ animationDelay: '0.4s' }}
        ></div>

        {/* Center Next.js Image Container */}
        <div className="relative w-full h-full rounded-full border-2 border-orange-600 overflow-hidden bg-white">
          <Image 
            src={spinnerImage} 
            alt="Loading..." 
            fill
            sizes="80px"
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalSpinner;