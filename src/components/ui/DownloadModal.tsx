import React, { useState } from "react";
import { X, Check, Download, ShieldCheck, Sparkles, FileText } from "lucide-react";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setDownloadSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-lg w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#FBCFE8] p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-[#FCE7F3] text-[#76656E] hover:text-[#2D2327] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {downloadSuccess ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2D2327]">
              Download Link Sent!
            </h3>

            <p className="text-sm text-[#76656E] leading-relaxed">
              We have dispatched your instant access bundle to <strong className="text-[#2D2327]">{email}</strong>. You can also download your immediate starter PDF below.
            </p>

            <div className="pt-2">
              <a
                href="/assets/images/planner/01-hero-cover-glowup-planner.webp"
                download="MayaAuraFit-Planner-Sample.webp"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#F43F5E] to-[#FB7185] shadow-md hover:opacity-95"
              >
                <Download className="w-4 h-4" />
                <span>Save High-Res Starter Sheet</span>
              </a>
            </div>

            <div className="pt-4 border-t border-[#FCE7F3]">
              <button
                onClick={() => {
                  setDownloadSuccess(false);
                  onClose();
                }}
                className="text-xs font-semibold text-[#76656E] hover:text-[#2D2327]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="space-y-2 mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF5F8] border border-[#FBCFE8] text-[11px] font-semibold tracking-wider text-[#9D174D] uppercase">
                <Sparkles className="w-3 h-3 text-[#F43F5E]" />
                <span>Instant PDF Access</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#2D2327]">
                Get the MayaAuraFit Bundle
              </h3>
              <p className="text-xs sm:text-sm text-[#76656E]">
                Enter your email to complete checkout &amp; receive your instant 63+ page printable &amp; digital files.
              </p>
            </div>

            {/* Order Summary box */}
            <div className="rounded-2xl p-4 bg-[#FFF8FA] border border-[#FCE7F3] mb-6 space-y-2.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#2D2327]">63+ Page Fitness &amp; Habit Bundle</span>
                <span className="font-bold text-[#F43F5E]">$14.99</span>
              </div>
              <div className="flex items-center justify-between text-xs text-[#76656E]">
                <span>Format: Printable PDF (A4 &amp; US Letter) + GoodNotes</span>
                <span className="line-through">$39.00</span>
              </div>
              <div className="flex items-center gap-2 pt-2 border-t border-[#FCE7F3]/70 text-[11px] text-[#059669]">
                <FileText className="w-3.5 h-3.5" />
                <span>Includes Free 30-Day Glow Up Challenge Cards</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#2D2327] mb-1.5">
                  Your Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#FCE7F3] bg-white text-sm text-[#2D2327] placeholder:text-[#A89A9F] focus:outline-none focus:border-[#F43F5E] focus:ring-2 focus:ring-[#FCE7F3]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-[#F43F5E] via-[#FB7185] to-[#F43F5E] hover:opacity-95 shadow-md shadow-rose-200 transition-all hover:scale-[1.01]"
              >
                <Download className="w-4 h-4" />
                <span>Complete Order &amp; Download — $14.99</span>
              </button>
            </form>

            <div className="mt-4 flex items-center justify-center gap-2 text-[11px] text-[#76656E]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#059669]" />
              <span>Secure 256-bit SSL checkout • 30-day money-back guarantee</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
