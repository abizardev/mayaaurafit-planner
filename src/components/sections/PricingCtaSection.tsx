import React from "react";
import { Download, Check, ShieldCheck, Sparkles, RefreshCw, Smartphone } from "lucide-react";

interface PricingCtaProps {
  onOpenCheckout: () => void;
}

export const PricingCtaSection: React.FC<PricingCtaProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-[#FFF5F8] to-[#FFF8FA] border-t border-[#FCE7F3]/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Big Promotional Bundle Card */}
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-[#FBCFE8] shadow-[0_20px_50px_rgba(244,114,182,0.14)] overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#FCE7F3] via-[#FED7AA]/30 to-transparent rounded-full blur-2xl pointer-events-none -z-0" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Visual Mockup Bundle */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden bg-[#FFF5F8] border border-[#FBCFE8] p-3 shadow-inner">
                <img
                  src="/assets/images/planner/17-final-cta-planner-bundle.webp"
                  alt="MayaAuraFit Complete Planner Bundle"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>

              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#76656E]">
                <span className="flex items-center gap-1">
                  <Smartphone className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>iPad Compatible</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <RefreshCw className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>Lifetime Access</span>
                </span>
              </div>
            </div>

            {/* Right Column: Pricing & Bundle Inclusions */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5F8] border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
                  <span>Launch Special Offer • 60% OFF</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D2327]">
                  The Complete Fitness &amp; Habit Reset Bundle
                </h3>

                <p className="mt-2 text-sm sm:text-base text-[#76656E]">
                  Get instant access to all 63+ printable worksheets, workout logs, meal planners, and digital iPad templates.
                </p>
              </div>

              {/* Price display */}
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#F43F5E]">
                  $14.99
                </span>
                <span className="text-xl text-[#76656E] line-through">
                  $39.00
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#059669]">
                  Save $24.01
                </span>
              </div>

              {/* Inclusions checklist */}
              <div className="space-y-2.5 pt-1">
                {[
                  "63+ High-Resolution Printable Pages (A4 & US Letter sizes)",
                  "Interactive Digital PDF version (GoodNotes & Notability)",
                  "Daily & Weekly Workout Logs + Exercise Calendars",
                  "Nutrition Guides, Meal Prepping & Grocery Checklists",
                  "30 & 90-Day Habit Streak Tracking Milestone Grids",
                  "Unlimited personal prints — print anytime, forever",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-[#FCE7F3] flex items-center justify-center shrink-0 text-[#F43F5E]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-[#4A3E45]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Primary Download Button */}
              <div className="pt-2">
                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-semibold text-white bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#F43F5E] hover:opacity-95 shadow-lg shadow-rose-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Complete Bundle Now — $14.99</span>
                </button>
              </div>

              {/* Guarantee */}
              <div className="flex items-center gap-2 text-xs text-[#76656E]">
                <ShieldCheck className="w-4 h-4 text-[#059669]" />
                <span>30-Day Happiness Guarantee • Instant Secure Download • No Subscription</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
