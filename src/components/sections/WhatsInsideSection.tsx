import React, { useState } from "react";
import { plannerGallery } from "../../data/content";
import { Sparkles, Eye } from "lucide-react";

interface WhatsInsideProps {
  onSelectImage: (src: string, title: string) => void;
}

export const WhatsInsideSection: React.FC<WhatsInsideProps> = ({ onSelectImage }) => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const tabs = [
    { id: "all", label: "All Pages" },
    { id: "habits", label: "Habits & Daily" },
    { id: "meals", label: "Meal Prep & Food" },
    { id: "workouts", label: "Workouts & Fitness" },
    { id: "reflection", label: "Mindset & Reflection" },
  ];

  const filtered = activeTab === "all" 
    ? plannerGallery 
    : plannerGallery.filter((item) => item.category === activeTab);

  return (
    <section id="whats-inside" className="py-16 sm:py-24 bg-[#FFF8FA] border-t border-[#FCE7F3]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span>Interactive Preview</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D2327]">
            What's Inside the 63+ Page Bundle
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#76656E]">
            Designed with thoughtful layouts to accompany every step of your wellness and consistency routine.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-[#F43F5E] text-white shadow-sm shadow-rose-200"
                  : "bg-white text-[#76656E] border border-[#FCE7F3] hover:border-[#F472B6]/40 hover:text-[#2D2327]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item.image, item.title)}
              className="cursor-pointer group flex flex-col bg-white rounded-2xl p-3.5 border border-[#FCE7F3] hover:border-[#F472B6]/60 shadow-xs hover:shadow-lg hover:shadow-rose-100/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-full aspect-4/5 rounded-xl overflow-hidden bg-[#FFF5F8] border border-[#FCE7F3] mb-3 relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white text-[#2D2327] px-3 py-1.5 rounded-full shadow-md">
                    <Eye className="w-3.5 h-3.5 text-[#F43F5E]" />
                    <span>Click to Zoom</span>
                  </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#F43F5E] mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif font-bold text-sm text-[#2D2327] group-hover:text-[#F43F5E] transition-colors line-clamp-1 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#76656E] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
