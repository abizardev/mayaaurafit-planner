import React from "react";
import { partnerBrands } from "../../data/content";

export const PartnerLogos: React.FC = () => {
  return (
    <section className="py-16 bg-white border-y border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#747679] uppercase mb-8">
          Works seamlessly with your favorite wearables & health ecosystems
        </p>

        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 md:gap-20 opacity-80 hover:opacity-100 transition-opacity">
          {partnerBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex items-center gap-2.5 grayscale hover:grayscale-0 transition-all duration-200 group"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-7 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <span className="text-sm font-medium text-[#747679] group-hover:text-[#222326]">
                {brand.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
