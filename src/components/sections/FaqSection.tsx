import React, { useState } from "react";
import { faqs } from "../../data/content";
import { ChevronDown, Sparkles } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-[#FCE7F3]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF5F8] border border-[#FBCFE8] text-xs font-semibold tracking-wider text-[#9D174D] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#F43F5E]" />
            <span>Got Questions?</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#2D2327]">
            Frequently Asked Questions
          </h2>
          
          <p className="mt-4 text-sm sm:text-base text-[#76656E]">
            Here is everything you need to know about the MayaAuraFit printable &amp; digital planner.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-[#FCE7F3] bg-[#FFF8FA] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif font-bold text-base sm:text-lg text-[#2D2327]">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full bg-white border border-[#FCE7F3] text-[#F43F5E] transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#76656E] leading-relaxed border-t border-[#FCE7F3]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
