"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { 
  ArrowLeft, 
  Sparkles, 
  Zap, 
  Shield, 
  Play,
  Check,
  Users,
  Clock,
  Star,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlocks from "@/components/FloatingBlocks";
import { useAppById, type MarketplaceTemplate } from "@/hooks/useMarketplaceTemplates";

// Category config
const CATEGORY_CONFIG: Record<string, { image: string; color: string; gradient: string }> = {
  Agent: { 
    image: "/images/greenblock.png", 
    color: "#60ceb4",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent"
  },
  Content: { 
    image: "/images/pinkblock.png", 
    color: "#efaad3",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent"
  },
  Data: { 
    image: "/images/blueblock.png", 
    color: "#74d1e9",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent"
  },
  Model: { 
    image: "/images/purpleblock.png", 
    color: "#a279fe",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent"
  },
};

// Default features if none provided
const DEFAULT_FEATURES = [
  { feature: "Lightning Fast", subtext: "Get results in seconds, not minutes" },
  { feature: "AI Powered", subtext: "Cutting-edge machine learning technology" },
  { feature: "Easy Integration", subtext: "Works seamlessly with your workflow" },
  { feature: "24/7 Available", subtext: "Access anytime, anywhere" },
];

export default function AppDetailPage() {
  const params = useParams();
  const appId = params.slug as string;
  
  const { data: app, isLoading, error } = useAppById(appId);
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Get all images from the app
  const getAllImages = (app: MarketplaceTemplate): string[] => {
    const images: string[] = [];
    
    if (app.banner) images.push(app.banner);
    if (app.mainImage) images.push(app.mainImage);
    if (app.main_image) images.push(app.main_image);
    if (app.image) images.push(app.image);
    if (app.image1) images.push(app.image1);
    if (app.image2) images.push(app.image2);
    if (app.image3) images.push(app.image3);
    
    if (app.images && Array.isArray(app.images)) {
      const sortedImages = [...app.images]
        .sort((a, b) => (a.order || 0) - (b.order || 0))
        .map(img => img.image);
      images.push(...sortedImages);
    }
    
    // Remove duplicates and empty strings
    return [...new Set(images.filter(img => img && img.trim() !== ''))];
  };

  // Loading state
  if (isLoading) {
    return (
      <main className="min-h-screen bg-bg-primary">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="w-16 h-16 border-4 border-accent-primary/30 border-t-accent-primary rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-text-secondary">Loading app...</span>
          </motion.div>
        </div>
      </main>
    );
  }

  // Not found
  if (!app || error) {
    return (
      <main className="min-h-screen bg-bg-primary">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">App not found</h1>
            <p className="text-text-secondary mb-8">The app you're looking for doesn't exist.</p>
            <Link href="/apps">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-black rounded-lg font-medium"
              >
                Back to Apps
              </motion.button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const category = app.category || "Data";
  const categoryConfig = CATEGORY_CONFIG[category] || CATEGORY_CONFIG.Data;
  const features = app.features && app.features.length > 0 ? app.features : DEFAULT_FEATURES;
  const images = getAllImages(app);
  
  // Hero background is ALTIJD de banner - verandert niet
  const heroImage = app.banner || images[0];

  return (
    <main className="min-h-screen bg-bg-primary noise-overlay">
      <FloatingBlocks />
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[90vh] overflow-hidden pt-20">
        {/* Animated Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
        >
          {/* Background Image with Parallax - FIXED, doesn't change */}
          {heroImage && (
            <Image
              src={heroImage}
              alt={app.name}
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
          )}
          
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent" />
          <div className={`absolute inset-0 bg-gradient-to-br ${categoryConfig.gradient} opacity-60`} />
          
          {/* Animated Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                backgroundColor: categoryConfig.color,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link href="/apps">
                <motion.div
                  className="inline-flex items-center gap-2 text-text-secondary hover:text-white transition-colors mb-8 group"
                  whileHover={{ x: -5 }}
                >
                  <ArrowLeft size={18} className="group-hover:text-white" />
                  <span className="text-sm">Back to Apps</span>
                </motion.div>
              </Link>

              {/* Category & Industry Tags */}
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span 
                  className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border text-sm font-medium"
                  style={{ 
                    backgroundColor: `${categoryConfig.color}20`,
                    borderColor: `${categoryConfig.color}40`,
                    color: categoryConfig.color
                  }}
                >
                  <Image
                    src={categoryConfig.image}
                    alt={category}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                  {category}
                </span>
                {app.industry && (
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    {app.industry}
                  </span>
                )}
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {app.name}
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {app.oneLiner || app.description}
              </motion.p>

              {/* Stats Row */}
              <motion.div
                className="flex items-center gap-8 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {app.amountsBought !== undefined && (
                  <div className="flex items-center gap-2">
                    <Users size={20} className="text-white/60" />
                    <span className="text-white font-semibold">{app.amountsBought.toLocaleString()}</span>
                    <span className="text-white/60 text-sm">users</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-semibold">4.9</span>
                  <span className="text-white/60 text-sm">rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap size={20} style={{ color: categoryConfig.color }} />
                  <span className="text-white/60 text-sm">Instant access</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${categoryConfig.color}50` }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-2 transition-all"
                  style={{ backgroundColor: categoryConfig.color }}
                >
                  <Play size={20} fill="black" />
                  Try it now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  View Documentation
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right: Video Container (placeholder for now) */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Glow Effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl blur-xl opacity-50"
                  style={{ backgroundColor: categoryConfig.color }}
                />
                
                {/* Video Placeholder */}
                <div className="relative aspect-video bg-bg-secondary rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${categoryConfig.color}10 0%, transparent 50%, ${categoryConfig.color}05 100%)`
                    }}
                  />
                  
                  {/* Play button placeholder */}
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <motion.div
                      className="w-20 h-20 rounded-full flex items-center justify-center border-2"
                      style={{ 
                        borderColor: `${categoryConfig.color}50`,
                        backgroundColor: `${categoryConfig.color}20`
                      }}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play 
                        size={32} 
                        style={{ color: categoryConfig.color }} 
                        className="ml-1"
                      />
                    </motion.div>
                    <p className="text-text-secondary text-sm">
                      Video coming soon
                    </p>
                  </div>

                  {/* Corner decorations */}
                  <div 
                    className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 rounded-tl-lg"
                    style={{ borderColor: `${categoryConfig.color}30` }}
                  />
                  <div 
                    className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 rounded-tr-lg"
                    style={{ borderColor: `${categoryConfig.color}30` }}
                  />
                  <div 
                    className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 rounded-bl-lg"
                    style={{ borderColor: `${categoryConfig.color}30` }}
                  />
                  <div 
                    className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 rounded-br-lg"
                    style={{ borderColor: `${categoryConfig.color}30` }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1 h-2 rounded-full bg-white/50"
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Content Apps: Example Results Carousel */}
      {category === "Content" && images.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Example <span style={{ color: categoryConfig.color }}>Results</span>
              </h2>
              <p className="text-text-secondary text-lg">
                See what others have created with {app.name}
              </p>
            </motion.div>

            {/* Auto-scrolling carousel - infinite loop */}
            <div className="relative overflow-hidden">
              {/* Subtle gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-bg-primary to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-bg-primary to-transparent z-10 pointer-events-none" />

              <div className="flex animate-scroll-infinite gap-6">
                {/* Repeat images 4x for seamless infinite scroll */}
                {[...images, ...images, ...images, ...images].map((image, index) => (
                  <div
                    key={index}
                    className="relative flex-shrink-0 w-72 aspect-[4/5] rounded-2xl overflow-hidden group hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300"
                  >
                    <Image
                      src={image}
                      alt={`${app.name} example ${(index % images.length) + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="288px"
                    />
                    
                    {/* Badge */}
                    <div 
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                      style={{ 
                        backgroundColor: `${categoryConfig.color}30`,
                        color: categoryConfig.color
                      }}
                    >
                      Example {(index % images.length) + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why choose{" "}
              <span style={{ color: categoryConfig.color }}>{app.name}</span>?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover the powerful features that make this app stand out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(0, 8).map((feature, index) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-white/5 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: `${categoryConfig.color}40` }}
              >
                {/* Glow on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${categoryConfig.color}10 0%, transparent 70%)`
                  }}
                />
                
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative"
                  style={{ backgroundColor: `${categoryConfig.color}20` }}
                >
                  <Check size={24} style={{ color: categoryConfig.color }} />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 relative">
                  {feature.feature}
                </h3>
                <p className="text-text-secondary text-sm relative">
                  {feature.subtext}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Step by Step Showcase */}
      {images.length > 0 && (
        <section className="py-24 bg-bg-secondary/30 relative overflow-hidden">
          {/* Background decoration */}
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10"
            style={{ backgroundColor: categoryConfig.color }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span 
                className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                style={{ 
                  backgroundColor: `${categoryConfig.color}20`,
                  color: categoryConfig.color
                }}
              >
                How it works
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Simple. Powerful. <span style={{ color: categoryConfig.color }}>Effective.</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Get started in minutes and see results immediately. Here's how {app.name} transforms your workflow.
              </p>
            </motion.div>

            {/* Step-by-step showcase */}
            <div className="space-y-24">
              {/* Step 1 - Large featured */}
              {images[0] && (
                <motion.div
                  className="grid lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="order-2 lg:order-1">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl font-bold mb-6"
                      style={{ 
                        backgroundColor: `${categoryConfig.color}20`,
                        color: categoryConfig.color
                      }}
                    >
                      1
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Configure your settings
                    </h3>
                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                      Start by customizing {app.name} to fit your exact needs. Our intuitive interface makes setup a breeze - no technical expertise required.
                    </p>
                    <ul className="space-y-3">
                      {["Easy drag-and-drop interface", "Pre-built templates available", "Customize every detail"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${categoryConfig.color}30` }}
                          >
                            <Check size={12} style={{ color: categoryConfig.color }} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                        style={{ backgroundColor: categoryConfig.color }}
                      />
                      <div className="relative aspect-video">
                        <Image
                          src={images[0]}
                          alt="Step 1"
                          fill
                          className="object-cover rounded-2xl"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 - Reversed */}
              {images[1] && (
                <motion.div
                  className="grid lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div>
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                        style={{ backgroundColor: categoryConfig.color }}
                      />
                      <div className="relative aspect-video">
                        <Image
                          src={images[1]}
                          alt="Step 2"
                          fill
                          className="object-cover rounded-2xl"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl font-bold mb-6"
                      style={{ 
                        backgroundColor: `${categoryConfig.color}20`,
                        color: categoryConfig.color
                      }}
                    >
                      2
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Let AI do the work
                    </h3>
                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                      Once configured, {app.name} takes over. Our advanced AI processes your request and generates high-quality results in seconds.
                    </p>
                    <ul className="space-y-3">
                      {["Powered by cutting-edge AI", "Results in seconds", "Consistent quality every time"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${categoryConfig.color}30` }}
                          >
                            <Check size={12} style={{ color: categoryConfig.color }} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {images[2] && (
                <motion.div
                  className="grid lg:grid-cols-2 gap-12 items-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="order-2 lg:order-1">
                    <div 
                      className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-xl font-bold mb-6"
                      style={{ 
                        backgroundColor: `${categoryConfig.color}20`,
                        color: categoryConfig.color
                      }}
                    >
                      3
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Export & integrate
                    </h3>
                    <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                      Download your results in multiple formats or integrate directly with your existing tools. Seamless workflow, maximum productivity.
                    </p>
                    <ul className="space-y-3">
                      {["Multiple export formats", "Direct integrations", "API access available"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-white/80">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: `${categoryConfig.color}30` }}
                          >
                            <Check size={12} style={{ color: categoryConfig.color }} />
                          </div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="order-1 lg:order-2">
                    <motion.div
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div 
                        className="absolute -inset-1 rounded-2xl blur-xl opacity-30"
                        style={{ backgroundColor: categoryConfig.color }}
                      />
                      <div className="relative aspect-video">
                        <Image
                          src={images[2]}
                          alt="Step 3"
                          fill
                          className="object-cover rounded-2xl"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(ellipse at center, ${categoryConfig.color}30 0%, transparent 70%)`
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles size={16} style={{ color: categoryConfig.color }} />
              <span className="text-sm text-white/80">Ready to get started?</span>
            </motion.div>

            <h2 className="text-5xl font-bold text-white mb-6">
              Start using{" "}
              <span style={{ color: categoryConfig.color }}>{app.name}</span>{" "}
              today
            </h2>
            
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Join thousands of users who are already transforming their workflow with AI-powered tools.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${categoryConfig.color}60` }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-xl font-semibold text-black text-lg flex items-center gap-3 transition-all"
                style={{ backgroundColor: categoryConfig.color }}
              >
                Get Started Free
                <ArrowRight size={22} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-xl font-semibold text-white text-lg bg-white/10 backdrop-blur-md border border-white/20"
              >
                View Pricing
              </motion.button>
            </div>

            {/* Trust Badges */}
            <motion.div
              className="flex justify-center items-center gap-8 mt-12 text-text-secondary text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center gap-2">
                <Shield size={18} />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={18} />
                <span>No Credit Card Required</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
