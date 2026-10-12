import React from "react";
import { Download, Sparkles, Trophy, Calendar, Heart } from "lucide-react";

interface TrackImproveProps {
  onOpenCheckout: () => void;
  onSelectImage: (src: string, title: string) => void;
}

export const TrackImproveSection: React.FC<TrackImproveProps> = ({ onOpenCheckout, onSelectImage }) => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-[#FCE7F3]/70 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Mockup Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div
              onClick={() => onSelectImage("/assets/images/planner/13-monthly-streak-progress-grid.webp", "Monthly Habit Streak Progress Grid")}
              className="cursor-pointer group relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-[#FFF8FA] border border-[#FBCFE8] shadow-[0_15px_40px_rgba(244,114,182,0.1)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-white">
                <img
                  src="/assets/images/planner/13-monthly-streak-progress-grid.webp"
                  alt="Monthly Streak Progress Tracker"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />

                {/* Floating pill badge */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FBCFE8] shadow-xs text-xs font-semibold text-[#9D174D]">
                  Monthly Streak Grid
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF5F8] border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
              <span>Habit Tracker</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D2327] leading-[1.15]">
              Track. Improve.<br />
              <span className="text-[#F43F5E] italic">Feel Amazing.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#76656E] leading-relaxed">
              Your journey to a healthier, stronger and happier you starts here. Print your planner, fill it in, and make it happen!
            </p>

            {/* Feature mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-3.5 rounded-xl bg-[#FFF5F8] border border-[#FCE7F3]">
                <Calendar className="w-5 h-5 text-[#F43F5E] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#2D2327]">Daily Consistency</h4>
                <p className="text-xs text-[#76656E] mt-1">Easy checkboxes that build positive momentum.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF5F8] border border-[#FCE7F3]">
                <Trophy className="w-5 h-5 text-[#F43F5E] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#2D2327]">Milestone Rewards</h4>
                <p className="text-xs text-[#76656E] mt-1">Celebrate 30, 60, &amp; 90-day achievements.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FFF5F8] border border-[#FCE7F3]">
                <Heart className="w-5 h-5 text-[#F43F5E] mb-2" />
                <h4 className="font-serif font-bold text-sm text-[#2D2327]">Mindful Self-Care</h4>
                <p className="text-xs text-[#76656E] mt-1">Nourish body and mind without guilt.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenCheckout}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-[#F43F5E] to-[#FB7185] hover:opacity-95 shadow-md shadow-rose-200 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Print Your Planner &amp; Start Today ($14.99)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
