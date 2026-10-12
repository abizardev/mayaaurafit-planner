import React from "react";
import { Button } from "../ui/button";
import { DeviceMockup } from "../shared/DeviceMockup";
import { heroStats } from "../../data/content";
import { Star, Apple, ArrowRight } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-32 sm:pt-40 pb-20 overflow-hidden bg-hero-sky">
      {/* Ambient Clouds Backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply overflow-hidden">
        <img
          src="/assets/images/backgrounds/clouds-p-800.avif"
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Laurel / Award Pill */}
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-black/5 px-4 py-1.5 rounded-full text-xs font-medium text-[#222326] mb-6 shadow-sm">
          <span className="flex text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </span>
          <span className="text-[#747679]">|</span>
          <span>{heroStats.tagline}</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-[#222326] max-w-4xl mx-auto leading-[1.05] font-display">
          Unlock the code to <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-[#222326] via-[#1f2025] to-[#415eee] bg-clip-text text-transparent">
            your health & longevity
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg sm:text-xl text-[#747679] max-w-2xl mx-auto leading-relaxed font-normal">
          Plan turns your wearables, blood tests, and daily habits into personalized
          recommendations. Maximize recovery, optimize sleep, and extend your healthspan.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="pill"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 bg-[#1f2025] hover:bg-black text-[#ebf0f8] shadow-lg shadow-black/10"
            >
              <Apple className="w-5 h-5 fill-current" />
              <span className="font-medium">Download for iOS</span>
            </Button>
          </a>

          <a href="#features" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-black/10 bg-white/70 hover:bg-white text-[#222326]"
            >
              <span>Explore Features</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
        </div>

        {/* Rating Subtext */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-[#747679]">
          <span className="font-semibold text-[#222326]">4.9 out of 5 stars</span>
          <span>•</span>
          <span>Over 25,000 App Store ratings</span>
        </div>

        {/* Centerpiece Device Mockup */}
        <div className="mt-12">
          <DeviceMockup />
        </div>

      </div>
    </section>
  );
};
