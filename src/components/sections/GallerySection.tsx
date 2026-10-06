import React from "react";

export const GallerySection: React.FC = () => {
  const images = [
    "/assets/images/backgrounds/crafted-bg-01.avif",
    "/assets/images/backgrounds/crafted-bg-02.avif",
    "/assets/images/backgrounds/crafted-bg-03.avif",
    "/assets/images/backgrounds/crafted-bg-04.avif",
    "/assets/images/backgrounds/crafted-bg-05.avif",
    "/assets/images/backgrounds/crafted-bg-06.avif",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#747679]">
              Crafted With Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#222326] mt-2 font-display">
              Designed for clarity in every glance
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#747679] max-w-md">
            Engineered with microscopic attention to typography, data density, and haptic feedback.
          </p>
        </div>

        {/* Horizontal Staggered Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-black/5"
            >
              <img
                src={src}
                alt={`Crafted preview ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                <span className="text-[11px] font-medium text-white tracking-wide">
                  Detail #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
