'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // 💡 Next.js Link component imported for redirection

const EmailIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const LockIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
);

const EyeIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const EyeOffIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
    <line x1="1" y1="1" x2="23" y2="23"></line>
  </svg>
);

const FacebookIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const AppleIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z"/>
  </svg>
);

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="relative w-full max-w-md   p-8 mx-auto ">
      <div className="flex justify-center mb-6">
        <div className="w-12 h-12   text-indigo-500 rounded-xl flex items-center justify-center ">
          <LockIcon />
        </div>
      </div>

      <h1 className="text-3xl font-black tracking-tight text-center mb-2 text-white">
        Panel Login
      </h1>
      <p className="text-center text-sm text-gray-500 dark:text-slate-400 mb-8 max-w-xs mx-auto">
        Access your personalized dashboard and manage your account settings with ease.
      </p>

      <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
        {/* Email Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400 dark:text-slate-500">
            <EmailIcon />
          </span>
          <input
            type="email"
            placeholder="Email address"
            aria-label="Email"
            className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-slate-950/40 border border-gray-200 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 text-sm font-medium"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400 dark:text-slate-500">
            <LockIcon />
          </span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            aria-label="Password"
            className="w-full pl-11 pr-11 py-3 bg-gray-50 dark:bg-slate-950/40 border border-gray-200 dark:border-white/5 rounded-xl focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 focus:border-transparent outline-none transition duration-200 text-gray-900 dark:text-slate-100 placeholder-gray-400 dark:placeholder-slate-500 text-sm font-medium"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-gray-400 dark:text-slate-500 hover:text-gray-600 dark:hover:text-slate-300 transition-colors"
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a href="#" className="text-xs font-semibold text-gray-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-purple-400 transition-colors">
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-indigo-600/20 active:scale-[0.98] transition-all transform duration-150 text-sm"
        >
         Let&apos;s Start
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-200 dark:border-white/5" />
        <span className="mx-4 text-xs font-semibold tracking-wider text-gray-400 dark:text-slate-500 uppercase">
          Or sign in with
        </span>
        <hr className="flex-grow border-t border-gray-200 dark:border-white/5" />
      </div>

      {/* Social Login Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {/* Google */}
        <button aria-label="Sign in with Google" className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-slate-950/40 border border-gray-200 dark:border-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-all active:scale-90 shadow-sm">
          <Image 
            src="https://www.google.com/favicon.ico" 
            alt="Google" 
            width={20} 
            height={20} 
            className="h-5 w-5 object-contain"
          />
        </button>

        {/* Facebook */}
        <button aria-label="Sign in with Facebook" className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-slate-950/40 border border-gray-200 dark:border-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-all active:scale-90 shadow-sm text-blue-600">
          <FacebookIcon />
        </button>

        {/* Apple */}
        <button aria-label="Sign in with Apple" className="w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-slate-950/40 border border-gray-200 dark:border-white/5 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800/60 transition-all active:scale-90 shadow-sm text-gray-900 dark:text-white">
          <AppleIcon />
        </button>
      </div>

      {/* 2. Bottom Minimal Back Button */}
      <div className="text-center border-t border-gray-100 dark:border-white/5 pt-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-400 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-purple-400 transition-colors group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="group-hover:-translate-x-0.5 transition-transform"
          >
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12,19 5,12 12,5"></polyline>
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Login;