import React from "react";
import { X, Download } from "lucide-react";

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  title: string;
  onOpenCheckout: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  onOpenCheckout,
}) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#FBCFE8] max-h-[90vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#FCE7F3] bg-[#FFF8FA]">
          <h3 className="font-serif font-bold text-lg text-[#2D2327] truncate pr-4">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[#FCE7F3] text-[#76656E] hover:text-[#2D2327] transition-colors"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Image View */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex items-center justify-center bg-[#FFF5F8]/50">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[68vh] w-auto object-contain rounded-xl shadow-md border border-[#FCE7F3]"
          />
        </div>

        {/* Modal Footer / Actions */}
        <div className="px-6 py-4 border-t border-[#FCE7F3] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#76656E]">
            Included in the MayaAuraFit 63+ Printable &amp; Digital Bundle.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-full text-xs font-semibold text-[#76656E] hover:bg-[#FFF5F8] border border-[#FCE7F3] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenCheckout();
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#F43F5E] to-[#FB7185] hover:opacity-95 shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Get Full Bundle ($14.99)</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
