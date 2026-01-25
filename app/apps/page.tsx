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

// Category config voor blokjes
const CATEGORY_CONFIG = {
  Agent: { image: "/images/greenblock.png", color: "#60ceb4" },
  Content: { image: "/images/pinkblock.png", color: "#efaad3" },
  Data: { image: "/images/blueblock.png", color: "#74d1e9" },
  Model: { image: "/images/purpleblock.png", color: "#a279fe" },
};

// Featured apps voor de hero carousel
const FEATURED_APPS = [
  {
    id: "cleanshot",
    name: "CleanShot",
    tagline: "Professional product photography in seconds",
    description: "Transform amateur photos into professional e-commerce images. AI-powered background removal and enhancement.",
    industry: "Photography & e-commerce",
    category: "Content",
    image: "/images/cleanshot-hero.jpg",
  },
  {
    id: "adshot",
    name: "AdShot",
    tagline: "Marketing visuals that convert",
    description: "Generate stunning marketing visuals for your campaigns. Create ads, social posts, and banners in 30 seconds.",
    industry: "Marketing",
    category: "Content",
    image: "/images/adshot-hero.jpg",
  },
  {
    id: "imagemodels",
    name: "Image Models",
    tagline: "9 AI image models at your fingertips",
    description: "Access the best AI image generation models. From photorealistic to artistic styles, create anything you imagine.",
    industry: "Creative",
    category: "Model",
    image: "/images/imagemodels-hero.jpg",
  },
  {
    id: "chatmodels",
    name: "Chat Models",
    tagline: "15 AI chat models in one place",
    description: "Chat with the world's most advanced AI models. GPT-4, Claude, Gemini, and more - all in one interface.",
    industry: "Productivity",
    category: "Agent",
    image: "/images/chatmodels-hero.jpg",
  },
  {
    id: "3dmodels",
    name: "3D Models",
    tagline: "Generate stunning 3D assets",
    description: "Create professional 3D models from text or images. Perfect for games, architecture, and product visualization.",
    industry: "Creative",
    category: "Model",
    image: "/images/3dmodels-hero.jpg",
  },
  {
    id: "nanobanana",
    name: "Nano Banana",
    tagline: "Google's fastest image model",
    description: "Lightning-fast image generation powered by Google. Create stunning visuals in milliseconds with state-of-the-art quality.",
    industry: "Creative",
    category: "Model",
    image: "/images/nanobanana-hero.jpg",
  },
  {
    id: "llama",
    name: "Llama",
    tagline: "Meta's open-source powerhouse",
    description: "Access Meta's most capable open-source language model. Perfect for text generation, coding, and creative writing.",
    industry: "Productivity",
    category: "Agent",
    image: "/images/llama-hero.jpg",
  },
  {
    id: "seedream",
    name: "Seedream 4.5",
    tagline: "Photorealistic image generation",
    description: "Create ultra-realistic images with ByteDance's latest model. Perfect for fashion, portraits, and product photography.",
    industry: "Creative",
    category: "Model",
    image: "/images/seedream-hero.jpg",
  },
  {
    id: "flux2",
    name: "Flux.2",
    tagline: "Pro, Max & Flex variants",
    description: "Black Forest Labs' flagship model. Choose Pro for quality, Max for resolution, or Flex for speed.",
    industry: "Creative",
    category: "Model",
    image: "/images/flux2-hero.jpg",
  },
];

export default function AppsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % FEATURED_APPS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const currentApp = FEATURED_APPS[currentSlide];
  const categoryConfig = CATEGORY_CONFIG[currentApp.category as keyof typeof CATEGORY_CONFIG];


  return (
    <main className="min-h-screen bg-bg-primary noise-overlay relative">
      <FloatingBlocks />
      <Navbar />

      {/* Hero Carousel */}
      <section className="relative pt-20 overflow-hidden">
        <div className="relative h-[60vh] min-h-[500px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              key={currentApp.image}
              src={currentApp.image}
              alt={currentApp.name}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
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
                    {currentApp.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                    {currentApp.industry}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {currentApp.name}
                </h1>

                {/* Description */}
                <p className="text-lg text-white/80 mb-8 max-w-lg">
                  {currentApp.description}
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
                {FEATURED_APPS.map((app, index) => {
                  const config = CATEGORY_CONFIG[app.category as keyof typeof CATEGORY_CONFIG];
                  const isActive = index === currentSlide;
                  return (
                    <motion.button
                      key={index}
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
