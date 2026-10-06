import React, { useState } from "react";
import { navItems } from "../../data/content";
import { Button } from "../ui/button";
import { Menu, X, ArrowUpRight, Apple } from "lucide-react";

export const CapsuleNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-4xl bg-white/85 backdrop-blur-xl border border-black/5 rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
        
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-7 h-7 rounded-full bg-[#1f2025] flex items-center justify-center text-white font-bold text-sm tracking-tighter">
            B
          </div>
          <span className="font-semibold text-lg tracking-tight text-[#222326] font-display">
            Plan<span className="text-[#415eee]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-[#747679] hover:text-[#222326] transition-colors duration-150"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex"
          >
            <Button
              variant="pill"
              size="sm"
              className="flex items-center gap-1.5 font-medium text-xs sm:text-sm px-4 py-2 bg-[#1f2025] hover:bg-black text-[#ebf0f8]"
            >
              <Apple className="w-3.5 h-3.5 fill-current" />
              <span>Get the App</span>
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#222326] hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-4 top-20 bg-white/95 backdrop-blur-2xl rounded-3xl p-6 border border-black/10 shadow-2xl z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#222326] py-2 px-3 rounded-xl hover:bg-black/5 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#747679]" />
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-black/5">
            <Button
              variant="pill"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#1f2025] text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Apple className="w-4 h-4 fill-current" />
              <span>Download on App Store</span>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
