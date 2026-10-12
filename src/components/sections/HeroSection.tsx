import React from "react";
import { Star, Download, Eye, Sparkles, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenCheckout: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="hero" className="relative pt-12 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#FFF5F8] via-[#FFF8FA] to-[#FFF5F8]">
      {/* Soft Ambient Pastel Glow Orbs */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#FCE7F3]/70 via-[#FED7AA]/40 to-[#FCE7F3]/70 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Badge Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#FBCFE8] shadow-xs text-xs font-semibold tracking-wider text-[#9D174D] uppercase mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
          <span>Your Healthy Habits, Brighter You</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2D2327] leading-[1.08] max-w-3xl mx-auto">
          Small Habits.<br />
          <span className="italic font-normal text-[#F43F5E]">Big Changes.</span>
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-[#76656E] max-w-2xl mx-auto leading-relaxed font-normal">
          The Fitness Habit Tracker is designed to help you build healthy habits, stay consistent, and feel your best — one day at a time.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <button
            onClick={onOpenCheckout}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#F43F5E] hover:opacity-95 shadow-md shadow-rose-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Get Your Planner — Instant PDF ($14.99)</span>
          </button>

          <a
            href="#whats-inside"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-[#2D2327] bg-white border border-[#FBCFE8] hover:bg-[#FDF2F7] shadow-xs transition-colors"
          >
            <Eye className="w-4 h-4 text-[#F43F5E]" />
            <span>Preview 63+ Pages</span>
          </a>
        </div>

        {/* Trust & Social Proof Stars */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[#76656E]">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="font-semibold text-[#2D2327]">4.9 out of 5</span>
          <span>•</span>
          <span>Join over 28,600 women on their glow up journey</span>
        </div>

        {/* Hero Central Mockup Showcase */}
        <div className="mt-12 sm:mt-16 relative">
          <div className="relative mx-auto max-w-4xl rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-white/70 backdrop-blur-md border border-[#FBCFE8]/60 shadow-[0_20px_50px_rgba(244,114,182,0.12)]">
            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-inner bg-[#FFF5F8]">
              <img
                src="/assets/images/planner/01-hero-cover-glowup-planner.webp"
                alt="MayaAuraFit Fitness Planner Bundle Cover"
                className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
              />

              {/* Floating feature pills on desktop */}
              <div className="hidden md:flex absolute top-4 left-4 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FBCFE8] text-xs font-medium text-[#2D2327] shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F43F5E]" />
                <span>63+ Printable Pages</span>
              </div>

              <div className="hidden md:flex absolute top-4 right-4 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FBCFE8] text-xs font-medium text-[#2D2327] shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F43F5E]" />
                <span>Instant PDF Download</span>
              </div>

              <div className="hidden md:flex absolute bottom-4 left-4 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FBCFE8] text-xs font-medium text-[#2D2327] shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F43F5E]" />
                <span>iPad &amp; GoodNotes Ready</span>
              </div>

              <div className="hidden md:flex absolute bottom-4 right-4 items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#FBCFE8] text-xs font-medium text-[#2D2327] shadow-sm">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F43F5E]" />
                <span>Print as Many as You Need</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
