import React from "react";
import { featureCards } from "../../data/content";
import { Sparkles } from "lucide-react";

interface FeatureCardsSectionProps {
  onSelectImage: (src: string, title: string) => void;
}

export const FeatureCardsSection: React.FC<FeatureCardsSectionProps> = ({ onSelectImage }) => {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF5F8] border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span>63+ Printable Pages • Instant Download • Print as Many as You Need</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D2327]">
            Build Better Habits<br className="hidden sm:inline" /> with Our Fitness Planner
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#76656E] max-w-xl mx-auto">
            Everything you need to turn vague aspirations into calm, rewarding daily rituals.
          </p>
        </div>

        {/* 5 Cards Row Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {featureCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectImage(card.image, card.title)}
              className="group cursor-pointer flex flex-col bg-[#FFF8FA] hover:bg-white rounded-2xl p-4 border border-[#FCE7F3] hover:border-[#F472B6]/60 shadow-xs hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Image Thumbnail */}
              <div className="w-full aspect-4/5 rounded-xl overflow-hidden bg-white border border-[#FCE7F3] mb-4 relative">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2">
                  <span className="text-[11px] font-medium bg-white/95 text-[#2D2327] px-2.5 py-0.5 rounded-full shadow-xs">
                    View Page
                  </span>
                </div>
              </div>

              {/* Card Text Content */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-serif font-bold text-base text-[#2D2327] group-hover:text-[#F43F5E] transition-colors leading-snug mb-1.5">
                  {card.title}
                </h3>
                
                <p className="text-xs sm:text-[13px] text-[#76656E] leading-relaxed">
                  {card.tagline}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
