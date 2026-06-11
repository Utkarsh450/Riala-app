import Image from 'next/image';
import React from 'react';
import mobile from "../public/mobile.png"

const DownloadSection = () => {
  return (

    <div id="download" className="w-full px-10 rounded-xl">
      <div className="w-full border-zinc-500 rounded-2xl bg-white shadow-zinc-500 font-['satoshi'] px-4 sm:px-6 md:px-22 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-6 md:py-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-4 md:gap-5 w-full md:max-w-sm z-10 items-center md:items-start text-center md:text-left">

          {/* Achievement badge */}
          <div className="flex items-center gap-2 w-fit border border-zinc-200 rounded-full px-3 py-1.5">
            <span className="text-zinc-500 text-[10px] md:text-xs font-medium">Achievement</span>
            <div className="w-px h-3 bg-zinc-300" />
            <span className="text-zinc-700 text-[10px] md:text-xs font-medium">Rated No.1 App of 2025</span>
            <span className="text-zinc-500 text-[10px] md:text-xs">→</span>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#1a1f36] leading-tight tracking-tight whitespace-nowrap">
              Download Riala Pay
            </h1>
            <h1 className="text-3xl text-zinc-800 sm:text-4xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Just <span className="text-[#4f6ef7]">Now..!</span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-xs">
            Simplify you payments with Riala Pay, Paying bills nad making
            transactions has never been easier.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-center md:items-start gap-2 md:gap-3">
            <button className="flex items-center gap-2 bg-[#1a1f36] text-white text-xs md:text-sm font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-zinc-800 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Download IOS
            </button>
            <button className="flex items-center gap-2 border border-zinc-300 text-zinc-800 text-xs md:text-sm font-medium px-4 md:px-5 py-2 md:py-2.5 rounded-xl hover:bg-zinc-50 transition-colors">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 20.5v-17c0-.83.94-1.3 1.6-.8l14 8.5c.6.37.6 1.23 0 1.6l-14 8.5c-.66.5-1.6.03-1.6-.8z"/>
              </svg>
              Download Android
            </button>
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex -space-x-2">
              {[
                'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
                'https://images.unsplash.com/photo-1494790108755-2616b612b647?w=40&h=40&fit=crop&crop=face',
              ].map((src, i) => (
                <div key={i} className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white overflow-hidden">
                  <img src={src} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-zinc-500 text-xs md:text-sm font-medium">200K+ Downloads</span>
          </div>
        </div>

        {/* RIGHT: Mobile image */}
        <div className="relative flex items-center justify-center flex-1 w-full h-56 sm:h-72 md:h-80 lg:h-[500px]">
          <Image
            className="h-full w-auto object-contain"
            src={mobile}
            alt="mobile"
            width={150}
            height={150}
          />
        </div>

      </div>

      
    </div>
    </div>
  );
};

export default DownloadSection;