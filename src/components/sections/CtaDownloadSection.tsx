import React from "react";
import { Button } from "../ui/button";
import { Apple, QrCode } from "lucide-react";

export const CtaDownloadSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#fafbfe] border-t border-black/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1f2025] rounded-[36px] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Left Text */}
          <div className="max-w-xl text-center md:text-left z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-800/40">
              Start Free 7-Day Trial
            </span>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mt-4 font-display leading-tight">
              Begin your path to optimal longevity today
            </h2>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              Scan the QR code with your iPhone camera to instantly download Plan on the App Store. Compatible with Apple Health and all leading wearables.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer">
                <Button
                  variant="white"
                  size="lg"
                  className="flex items-center gap-2 font-medium px-8 text-[#1f2025] hover:bg-slate-100"
                >
                  <Apple className="w-5 h-5 fill-current" />
                  <span>Download on iOS</span>
                </Button>
              </a>
              <span className="text-xs text-slate-400">
                Requires iOS 17.0+ & Apple Watch / Health app
              </span>
            </div>
          </div>

          {/* Right QR Card Box */}
          <div className="z-10 flex flex-col items-center bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-3xl shadow-xl">
            <div className="w-36 h-36 bg-white p-3 rounded-2xl shadow-inner flex items-center justify-center">
              <img
                src="/assets/images/ui/qr-code.png"
                alt="Scan QR to download"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-xs text-slate-300 font-medium mt-3 flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-emerald-400" />
              <span>Scan to install app</span>
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
