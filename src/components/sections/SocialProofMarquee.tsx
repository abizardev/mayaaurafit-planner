import React from "react";
import { memberStories } from "../../data/content";
import { Star, Quote } from "lucide-react";

export const SocialProofMarquee: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-[#fafbfe] overflow-hidden">
      
      {/* Marquee Banner */}
      <div className="relative w-full border-y border-black/5 bg-white py-4 overflow-hidden mb-16 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 text-sm sm:text-base font-medium text-[#222326]">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#31ce01]" />
                Join over 2.5 million members optimizing recovery and longevity
              </span>
              <span className="text-[#747679]">✦</span>
              <span className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#415eee]" />
                #1 Connected Health Intelligence System
              </span>
              <span className="text-[#747679]">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Member Testimonial Cards */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#415eee] bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
            Real Member Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#222326] mt-4 font-display">
            Loved by clinicians, endurance athletes, and high performers
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {memberStories.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-[28px] p-6 sm:p-8 border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(story.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  {story.highlightMetric && (
                    <span className="text-xs font-semibold bg-[#ebf0f8] text-[#222326] px-2.5 py-1 rounded-full">
                      {story.highlightMetric}
                    </span>
                  )}
                </div>

                <p className="text-sm sm:text-base text-[#222326] leading-relaxed italic mb-6">
                  "{story.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-11 h-11 rounded-full object-cover border border-black/10"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#222326]">{story.name}</h4>
                  <p className="text-xs text-[#747679]">{story.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
