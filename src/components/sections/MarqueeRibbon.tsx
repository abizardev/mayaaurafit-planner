import React from "react";
import { tickerItems } from "../../data/content";

export const MarqueeRibbon: React.FC = () => {
  return (
    <div className="relative py-3.5 bg-gradient-to-r from-[#FCE7F3] via-[#FED7AA]/50 to-[#FCE7F3] border-y border-[#FBCFE8] overflow-hidden">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {tickerItems.concat(tickerItems).map((text, idx) => (
          <span
            key={idx}
            className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#9D174D]/90 flex items-center gap-3"
          >
            <span>{text}</span>
          </span>
        ))}
      </div>
    </div>
  );
};
