import React, { useState } from "react";
import { coachModes } from "../../data/content";
import { Shield, Sparkles, Zap, HeartHandshake } from "lucide-react";

export const IntelligenceSection: React.FC = () => {
  const [activeCoach, setActiveCoach] = useState(coachModes[0].id);

  const getIcon = (id: string) => {
    switch (id) {
      case "commander":
        return Zap;
      case "friend":
        return HeartHandshake;
      case "guardian":
        return Shield;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="intelligence" className="py-24 bg-[#1f2025] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full text-xs font-semibold text-white/90 mb-4 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>AI Health Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white font-display leading-tight">
            An intelligent coach that adapts to your personality and goals
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Choose how you want your health data interpreted. From relentless athletic accountability to gentle lifestyle pacing.
          </p>
        </div>

        {/* Coach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coachModes.map((coach) => {
            const Icon = getIcon(coach.id);
            const isSelected = activeCoach === coach.id;

            return (
              <div
                key={coach.id}
                onClick={() => setActiveCoach(coach.id)}
                className={`cursor-pointer rounded-[32px] p-8 transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#282a31] border-white/25 shadow-2xl scale-[1.02]"
                    : "bg-[#22242a]/70 border-white/5 hover:bg-[#282a31]/60"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isSelected ? "bg-white text-[#1f2025]" : "bg-white/10 text-white"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">
                      {coach.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white tracking-tight font-display">
                    {coach.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 uppercase tracking-wider">
                    {coach.role}
                  </p>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed">
                    {coach.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-medium">
                    {isSelected ? "Active Persona" : "Click to select"}
                  </span>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      isSelected ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-white/20"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
