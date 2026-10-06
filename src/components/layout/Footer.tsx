import React from "react";

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Overview", href: "#" },
        { label: "Strain & Recovery", href: "#features" },
        { label: "Sleep Intelligence", href: "#features" },
        { label: "Biomarker Lab", href: "#features" },
        { label: "Pricing & Plans", href: "#" },
      ],
    },
    {
      title: "Science & Clinical",
      links: [
        { label: "Scientific Advisory", href: "#" },
        { label: "Clinical Validation", href: "#" },
        { label: "Biomarker Glossary", href: "#" },
        { label: "Research Papers", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Bevel", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Journal & Stories", href: "#" },
        { label: "Press Kit", href: "#" },
      ],
    },
    {
      title: "Legal & Trust",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "HIPAA Compliance", href: "#" },
        { label: "Security Overview", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-black/5 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-16 border-b border-black/5">
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#1f2025] flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                B
              </div>
              <span className="font-semibold text-lg text-[#222326] font-display">
                Plan<span className="text-[#415eee]">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#747679] leading-relaxed">
              Connected health intelligence and longevity tracking built with Apple-grade craftsmanship.
            </p>
          </div>

          {/* Links */}
          {footerSections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#222326] mb-4">
                {sec.title}
              </h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs sm:text-sm text-[#747679] hover:text-[#222326] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#747679]">
          <p>© {new Date().getFullYear()} Plan / Bevel Health Inc. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Designed for high longevity, daily recovery, and restorative sleep.
          </p>
        </div>

      </div>
    </footer>
  );
};
