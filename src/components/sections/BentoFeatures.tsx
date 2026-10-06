import React from "react";
import { bentoFeatures } from "../../data/content";
import { ArrowUpRight, Activity, Moon, Utensils, HeartPulse } from "lucide-react";

export const BentoFeatures: React.FC = () => {
  const icons = [Activity, Moon, Utensils, HeartPulse];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 bg-[#ebf0f8] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#222326] mb-4">
            <span>Modular Health Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#222326] leading-tight font-display">
            Every layer of your biology, decoded in daylight
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#747679] leading-relaxed">
            Engineered with a calm, editorial canvas that replaces overwhelming charts with clear, actionable priorities for your day.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {bentoFeatures.map((feature, index) => {
            const IconComp = icons[index % icons.length];
            return (
              <div
                key={feature.id}
                className="group relative bg-[#ebf0f8] hover:bg-[#e4ebf5] rounded-[32px] p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between overflow-hidden border border-black/[0.03] shadow-sm hover:shadow-md"
              >
                
                {/* Header & Tag */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-white/90 text-[#222326] shadow-sm"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: feature.categoryColor }}
                      />
                      {feature.badge}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center text-[#222326] group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 text-[#222326]" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#222326] tracking-tight font-display leading-snug">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm sm:text-base text-[#747679] leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Inset Metric Visual & Image Box */}
                <div className="mt-8 pt-6 border-t border-black/5">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {feature.metrics?.map((m, idx) => (
                      <div
                        key={idx}
                        className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-sm"
                      >
                        <p className="text-xs text-[#747679] font-medium">{m.label}</p>
                        <p className="text-xl sm:text-2xl font-bold text-[#222326] mt-1 font-display">
                          {m.value}
                        </p>
                        {m.trend && (
                          <p className="text-xs font-medium text-emerald-600 mt-1 flex items-center gap-1">
                            <ArrowUpRight className="w-3 h-3" />
                            {m.trend}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>

                  {feature.imageSrc && (
                    <div className="relative rounded-2xl overflow-hidden shadow-sm border border-black/5 max-h-48 group-hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src={feature.imageSrc}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
