import React from "react";
import { reviews } from "../../data/content";
import { Star, CheckCircle, Sparkles } from "lucide-react";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-white border-t border-[#FCE7F3]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF5F8] border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span>Community Love</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D2327]">
            Loved by 28,600+ Women
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#76656E]">
            Real stories from members who found peace, consistency, and joy in their daily health habits.
          </p>
        </div>

        {/* Reviews 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="flex flex-col justify-between bg-[#FFF8FA] rounded-2xl p-6 border border-[#FCE7F3] shadow-xs hover:border-[#F472B6]/40 hover:shadow-md transition-all"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-sm sm:text-base text-[#4A3E45] leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#FCE7F3]">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#FBCFE8]"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-serif font-bold text-sm text-[#2D2327] truncate">
                      {rev.name}
                    </span>
                    {rev.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#F43F5E] shrink-0" />
                    )}
                  </div>
                  <span className="text-xs text-[#76656E] truncate block">
                    {rev.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
