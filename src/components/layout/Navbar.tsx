import React, { useState } from "react";
import { navItems } from "../../data/content";
import { Sparkles, Menu, X, Download } from "lucide-react";

interface NavbarProps {
  onOpenCheckout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCheckout }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FFF8FA]/90 backdrop-blur-md border-b border-[#FCE7F3]/70 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#F43F5E] to-[#FB7185] flex items-center justify-center text-white shadow-sm shadow-rose-200 group-hover:scale-105 transition-transform">
            <Sparkles className="w-4 h-4 fill-white" />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#2D2327]">
            MayaAuraFit<span className="text-[#F43F5E]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#4A3E45] hover:text-[#F43F5E] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#F43F5E] to-[#FB7185] hover:from-[#E11D48] hover:to-[#F43F5E] shadow-sm shadow-rose-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-4 h-4" />
            <span>Get Planner — $14.99</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-[#2D2327] hover:bg-[#FCE7F3]/50 rounded-full transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden border-b border-[#FCE7F3] bg-[#FFF8FA]/98 px-5 py-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-medium text-[#2D2327] py-2 px-3 rounded-lg hover:bg-[#FCE7F3]/60 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#FCE7F3]">
              <button
                onClick={() => {
                  setMobileOpen(false);
                  onOpenCheckout();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#F43F5E] to-[#FB7185]"
              >
                <Download className="w-4 h-4" />
                <span>Get Planner — $14.99</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
