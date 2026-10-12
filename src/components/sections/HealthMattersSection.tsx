import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";

interface HealthMattersProps {
  onOpenCheckout: () => void;
  onSelectImage: (src: string, title: string) => void;
}

export const HealthMattersSection: React.FC<HealthMattersProps> = ({ onOpenCheckout, onSelectImage }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF8FA] border-t border-[#FCE7F3]/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Bullets */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
              <span>PLAN + TRACK + ACHIEVE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D2327] leading-[1.15]">
              Your Health<br />
              <span className="text-[#F43F5E] italic">Matters.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#76656E] leading-relaxed">
              Take the guesswork out of your fitness journey. Plan your workouts, track your habits, and build a healthier, happier you — one page at a time.
            </p>

            {/* Checklist items */}
            <div className="space-y-3.5 pt-2">
              {[
                "Targeted weekly workout schedules & daily movement logs",
                "Hydration milestones and sleep recovery checklists",
                "Balanced meal prep templates & grocery shopping guides",
                "Non-scale victories and body measurement reflection",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#FCE7F3] flex items-center justify-center shrink-0 mt-0.5 text-[#F43F5E]">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm sm:text-base text-[#4A3E45] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#F43F5E] to-[#FB7185] hover:opacity-95 shadow-sm shadow-rose-200 transition-all hover:scale-[1.02]"
              >
                <span>Get Instant Access — $14.99</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Planner Mockup Card */}
          <div className="lg:col-span-6">
            <div
              onClick={() => onSelectImage("/assets/images/planner/02-daily-movement-workout-log.webp", "Daily Movement & Workout Log")}
              className="cursor-pointer group relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-white border border-[#FBCFE8] shadow-[0_15px_40px_rgba(244,114,182,0.1)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#FFF5F8]">
                <img
                  src="/assets/images/planner/02-daily-movement-workout-log.webp"
                  alt="Daily Movement Workout Planner"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Floating pill badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FBCFE8] shadow-xs text-xs font-semibold text-[#9D174D]">
                  Daily Workout Log
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
