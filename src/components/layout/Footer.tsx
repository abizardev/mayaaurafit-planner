import React from "react";
import { Sparkles, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FFF5F8] border-t border-[#FCE7F3] py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-[#FCE7F3]">
          
          {/* Logo & description */}
          <div className="text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#F43F5E] to-[#FB7185] flex items-center justify-center text-white">
                <Sparkles className="w-3.5 h-3.5 fill-white" />
              </div>
              <span className="font-serif text-2xl font-bold text-[#2D2327]">
                MayaAuraFit<span className="text-[#F43F5E]">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#76656E] max-w-sm">
              Small habits, big changes. Aesthetic printable and digital fitness habit planners crafted with care.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#4A3E45]">
            <a href="#hero" className="hover:text-[#F43F5E] transition-colors">Home</a>
            <a href="#features" className="hover:text-[#F43F5E] transition-colors">Features</a>
            <a href="#whats-inside" className="hover:text-[#F43F5E] transition-colors">What's Inside</a>
            <a href="#reviews" className="hover:text-[#F43F5E] transition-colors">Reviews</a>
            <a href="#faq" className="hover:text-[#F43F5E] transition-colors">FAQ</a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#76656E]">
          <p>© {new Date().getFullYear()} MayaAuraFit. All rights reserved.</p>
          
          <div className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3.5 h-3.5 fill-[#F43F5E] text-[#F43F5E]" />
            <span>for your glow-up journey</span>
          </div>

          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
