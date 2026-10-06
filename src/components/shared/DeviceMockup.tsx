import React from "react";

export const DeviceMockup: React.FC = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center pt-8 pb-12">
      
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-radial from-blue-200/40 via-purple-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      {/* Composition Wrapper */}
      <div className="relative flex items-center justify-center scale-90 sm:scale-100 transition-transform">
        
        {/* iPhone Center Frame */}
        <div className="relative w-[280px] sm:w-[320px] md:w-[340px] aspect-[9/19.5] rounded-[52px] bg-black p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-4 border-slate-700/30 z-20 overflow-hidden">
          
          {/* Dynamic Island / Notch */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30 flex items-center justify-end px-3">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
          </div>

          {/* Screen Content - Looping Video or Poster */}
          <div className="relative w-full h-full rounded-[42px] overflow-hidden bg-[#0d0e12]">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/images/devices/phone-poster.avif"
            >
              <source src="/assets/videos/part1-new.mp4" type="video/mp4" />
              <img
                src="/assets/images/devices/phone-poster.avif"
                alt="Bevel Mobile Dashboard"
                className="w-full h-full object-cover"
              />
            </video>
          </div>
        </div>

        {/* Apple Watch Overlap (Right side) */}
        <div className="absolute -right-6 sm:-right-12 bottom-6 sm:bottom-12 w-[180px] sm:w-[220px] aspect-[1/1.2] rounded-[42px] bg-black p-2.5 shadow-[0_20px_45px_rgba(0,0,0,0.35)] border-2 border-slate-700/40 z-30">
          <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-black flex items-center justify-center">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/images/devices/watch-poster.avif"
            >
              <source src="/assets/videos/bevel-mobile-part-1.mp4" type="video/mp4" />
              <img
                src="/assets/images/devices/watch-poster.avif"
                alt="Bevel Watch Metric"
                className="w-full h-full object-cover"
              />
            </video>
          </div>
        </div>

        {/* Floating Health Card (Left side) */}
        <div className="hidden md:block absolute -left-16 top-16 z-30 animate-pulse [animation-duration:4s]">
          <div className="bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] rounded-2xl p-4 w-60 transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#31ce01]" />
              <span className="text-xs font-semibold text-[#222326]">High Recovery</span>
              <span className="text-xs text-[#747679] ml-auto">91%</span>
            </div>
            <p className="text-xs text-[#747679] leading-snug">
              Your HRV is 18ms above your baseline. Primed for high intensity training.
            </p>
          </div>
        </div>

        {/* Floating Sleep Card (Right side top) */}
        <div className="hidden lg:block absolute -right-24 top-24 z-30">
          <div className="bg-white/95 backdrop-blur-xl border border-black/5 shadow-[0_12px_32px_rgba(0,0,0,0.12)] rounded-2xl p-4 w-64 transform rotate-3 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#b9a6ff]" />
              <span className="text-xs font-semibold text-[#222326]">Sleep Restoration</span>
              <span className="text-xs text-[#747679] ml-auto">8h 14m</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden flex">
              <div className="bg-[#b9a6ff] w-[25%]" />
              <div className="bg-[#415eee] w-[50%]" />
              <div className="bg-emerald-400 w-[25%]" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
