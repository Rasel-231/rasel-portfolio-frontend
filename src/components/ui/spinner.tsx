"use client"
import Image from 'next/image';
import spinnerImage from "../../assets/profile.jpg"; // আপনার ছবি

const MySpinner = ({ sizeClass = 'w-10 h-10' }) => {
  return (
    <div className={`relative ${sizeClass} flex items-center justify-center`}>
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
          src={spinnerImage} // সরাসরি static import করা ছবি ব্যবহার করা হয়েছে
          alt="Loading..." 
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MySpinner;