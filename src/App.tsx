import React, { useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { HeroSection } from "./components/sections/HeroSection";
import { MarqueeRibbon } from "./components/sections/MarqueeRibbon";
import { FeatureCardsSection } from "./components/sections/FeatureCardsSection";
import { HealthMattersSection } from "./components/sections/HealthMattersSection";
import { TrackImproveSection } from "./components/sections/TrackImproveSection";
import { WhatsInsideSection } from "./components/sections/WhatsInsideSection";
import { ReviewsSection } from "./components/sections/ReviewsSection";
import { PricingCtaSection } from "./components/sections/PricingCtaSection";
import { FaqSection } from "./components/sections/FaqSection";
import { Footer } from "./components/layout/Footer";
import { ImageLightboxModal } from "./components/ui/ImageLightboxModal";
import { DownloadModal } from "./components/ui/DownloadModal";

export function App() {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

  const handleOpenCheckout = () => {
    setCheckoutOpen(true);
  };

  const handleSelectImage = (src: string, title: string) => {
    setSelectedImage({ src, title });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8FA] text-[#2D2327]">
      {/* Sticky Clean Navbar */}
      <Navbar onOpenCheckout={handleOpenCheckout} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenCheckout={handleOpenCheckout} />

        {/* 2. Marquee Ticker Ribbon */}
        <MarqueeRibbon />

        {/* 3. 5-Card Feature Grid */}
        <FeatureCardsSection onSelectImage={handleSelectImage} />

        {/* 4. Split Feature: Plan + Track + Achieve (Your Health Matters) */}
        <HealthMattersSection
          onOpenCheckout={handleOpenCheckout}
          onSelectImage={handleSelectImage}
        />

        {/* 5. Split Feature: Track. Improve. Feel Amazing. */}
        <TrackImproveSection
          onOpenCheckout={handleOpenCheckout}
          onSelectImage={handleSelectImage}
        />

        {/* 6. What's Inside 63+ Page Bundle Gallery */}
        <WhatsInsideSection onSelectImage={handleSelectImage} />

        {/* 7. Community Reviews & Glow-Up Stories */}
        <ReviewsSection />

        {/* 8. Pricing & Final CTA Bundle Card */}
        <PricingCtaSection onOpenCheckout={handleOpenCheckout} />

        {/* 9. FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Lightbox Modal */}
      <ImageLightboxModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage?.src || null}
        title={selectedImage?.title || ""}
        onOpenCheckout={handleOpenCheckout}
      />

      {/* Instant Checkout / Download Modal */}
      <DownloadModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
}

export default App;
