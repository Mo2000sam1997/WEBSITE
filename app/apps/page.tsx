"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppGrid from "@/components/AppGrid";
import FloatingBlocks from "@/components/FloatingBlocks";
import CTABanner from "@/components/CTABanner";
import { useSliderApps, type MarketplaceTemplate } from "@/hooks/useMarketplaceTemplates";

// Category config voor blokjes
const CATEGORY_CONFIG = {
  Video: { image: "/images/blueblock.png", color: "#3B82F6" },
  Image: { image: "/images/pinkblock.png", color: "#EC4899" },
  "3D": { image: "/images/purpleblock.png", color: "#8B5CF6" },
  Apps: { image: "/images/greenblock.png", color: "#22C55E" },
};

export default function AppsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Haal top 10 nieuwste apps op uit database
  const { data: featuredApps = [], isLoading } = useSliderApps();

  // Preload alle banner images zodra data beschikbaar is
  useEffect(() => {
    if (featuredApps.length === 0) return;
    
    // Preload alle images voor snelle transitions
    const preloadLinks: HTMLLinkElement[] = [];
    featuredApps.forEach((app) => {
      if (app.banner) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = app.banner;
        link.fetchPriority = 'high';
        document.head.appendChild(link);
        preloadLinks.push(link);
      }
    });

    // Cleanup
    return () => {
      preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [featuredApps]);

  // Auto-play carousel
  useEffect(() => {
    if (featuredApps.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredApps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredApps.length]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Loading state
  if (isLoading || featuredApps.length === 0) {
    return (
      <main className="min-h-screen bg-bg-primary noise-overlay relative">
        <FloatingBlocks />
        <Navbar />
        <section className="relative pt-20 overflow-hidden">
          <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
            <div className="text-white">Loading...</div>
          </div>
        </section>
        <AppGrid />
        <CTABanner />
        <Footer />
      </main>
    );
  }

  const currentApp = featuredApps[currentSlide];
  const category = currentApp.category || "Apps";
  const categoryConfig = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG] || CATEGORY_CONFIG.Apps;


  return (
    <main className="min-h-screen bg-bg-primary noise-overlay relative">
      <FloatingBlocks />
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-[60vh] min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              {currentApp.banner && (
                <motion.div
                  key={currentApp.banner}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentApp.banner}
                    alt={currentApp.name}
                    fill
                    className="object-cover"
                    priority
                    quality={90}
                    sizes="100vw"
                  />
                </motion.div>
              )}
            </AnimatePresence>
            {/* Gradients for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0a0a0a]/70 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl">
                {/* Category blokje + Industry tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                    <Image
                      src={categoryConfig.image}
                      alt={currentApp.category}
                      width={16}
                      height={16}
                      className="object-contain"
                    />
                    {category}
                  </span>
                  {currentApp.industry && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                      {currentApp.industry}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {currentApp.name}
                </h1>

                {/* Description */}
                <p className="text-lg text-white/80 mb-8 max-w-lg">
                  {currentApp.oneLiner || currentApp.description}
                </p>

                {/* Buttons - wider and shorter */}
                <div className="flex gap-4">
                  <Link href={`/apps/${currentApp.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-2 text-sm font-medium rounded-md bg-white text-black hover:bg-white/90 transition-all"
                    >
                      Try it now!
                    </motion.button>
                  </Link>
                  <Link href={`/docs/${currentApp.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-2 text-sm font-medium rounded-md bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all"
                    >
                      See docs
                    </motion.button>
                  </Link>
                </div>
            </div>
          </div>

          {/* Progress Indicators - bottom bar, full width */}
          <div className="absolute bottom-0 left-0 right-0 z-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
              <div className="flex gap-2">
                {featuredApps.map((app, index) => {
                  const appCategory = app.category || "Apps";
                  const config = CATEGORY_CONFIG[appCategory as keyof typeof CATEGORY_CONFIG] || CATEGORY_CONFIG.Apps;
                  const isActive = index === currentSlide;
                  return (
                    <motion.button
                      key={app.id}
                      onClick={() => handleSlideChange(index)}
                      className="relative flex-1 rounded-sm overflow-hidden cursor-pointer group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.15 }}
                      style={{ height: 4 }}
                    >
                      {/* Background bar */}
                      <div 
                        className="absolute inset-0 rounded-sm transition-colors duration-300"
                        style={{ 
                          backgroundColor: isActive ? `${config.color}30` : 'rgba(255,255,255,0.2)',
                        }}
                      />
                      {/* Progress fill */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-y-0 left-0 rounded-sm"
                          style={{ 
                            background: config.color,
                            boxShadow: `0 0 8px ${config.color}`,
                          }}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 6, ease: "linear" }}
                          key={`progress-${currentSlide}`}
                        />
                      )}
                      {/* Hover effect */}
                      <div 
                        className="absolute inset-0 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ backgroundColor: `${config.color}50` }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Grid met zoek en filters */}
      <AppGrid />

      {/* CTA Banner */}
      <CTABanner />

      <Footer />
    </main>
  );
}
