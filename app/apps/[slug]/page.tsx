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
  ExternalLink,
  Coins,
  Info,
  ChevronRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlocks from "@/components/FloatingBlocks";

// Logo carousel data
const LOGOS = [
  { name: 'ChatGPT', src: '/logos/chatgpt.png' },
  { name: 'Gemini', src: '/logos/gemini.png' },
  { name: 'Claude', src: '/logos/claude.png' },
  { name: 'Perplexity', src: '/logos/perplexity.png' },
  { name: 'Nano Banana', src: '/logos/nanobanana.png' },
  { name: 'Mistral AI', src: '/logos/mistral.png' },
  { name: 'Grok', src: '/logos/grok.png' },
  { name: 'Flux', src: '/logos/flux.png' },
  { name: 'DeepSeek', src: '/logos/deepseek.png' },
];
import { useAppById, type MarketplaceTemplate } from "@/hooks/useMarketplaceTemplates";
import appsData from "@/data/apps.json";

// Category config
const CATEGORY_CONFIG: Record<string, { image: string; color: string; gradient: string }> = {
  Video: { 
    image: "/images/blueblock.png", 
    color: "#3B82F6",
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent"
  },
  Image: { 
    image: "/images/pinkblock.png", 
    color: "#EC4899",
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent"
  },
  "3D": { 
    image: "/images/purpleblock.png", 
    color: "#8B5CF6",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent"
  },
  Apps: { 
    image: "/images/greenblock.png", 
    color: "#22C55E",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent"
  },
};

// Default features if none provided
const DEFAULT_FEATURES = [
  { feature: "Lightning Fast", subtext: "Get results in seconds, not minutes" },
  { feature: "AI Powered", subtext: "Cutting-edge machine learning technology" },
  { feature: "Easy Integration", subtext: "Works seamlessly with your workflow" },
  { feature: "24/7 Available", subtext: "Access anytime, anywhere" },
];

// Get local app data
function getLocalAppData(appId: string) {
  return appsData.apps.find(app => app.id === appId || app.slug === appId);
}

export default function AppDetailPage() {
  const params = useParams();
  const appId = params.slug as string;
  
  const { data: app, isLoading, error } = useAppById(appId);
  const localApp = getLocalAppData(appId);
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

  // Not found - try local data
  if ((!app || error) && !localApp) {
    return (
      <main className="min-h-screen bg-bg-primary">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">App not found</h1>
            <p className="text-text-secondary mb-8">The app you&apos;re looking for doesn&apos;t exist.</p>
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

  // Merge database app with local data
  const category = app?.category || localApp?.category || "Apps";
  const categoryConfig = CATEGORY_CONFIG[category] || CATEGORY_CONFIG.Apps;
  const features = app?.features && app.features.length > 0 
    ? app.features 
    : localApp?.features || DEFAULT_FEATURES;
  const images = app ? getAllImages(app) : [];
  
  // Hero background
  const heroImage = app?.banner || images[0];
  
  // Combined data
  const appName = app?.name || localApp?.name || "App";
  const appDescription = localApp?.longDescription || app?.oneLiner || app?.description || localApp?.description || "";
  const howItWorks = localApp?.howItWorks || [];
  const useCases = localApp?.useCases || [];
  const credits = localApp?.credits;
  const status = localApp?.status || "live";

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
          {/* Background Image with Parallax */}
          {heroImage && (
            <Image
              src={heroImage}
              alt={appName}
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

              {/* Category & Status Tags */}
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
                {status === "coming-soon" && (
                  <span className="px-4 py-2 text-sm font-medium rounded-full bg-yellow-500/20 backdrop-blur-md border border-yellow-500/40 text-yellow-400">
                    Coming Soon
                  </span>
                )}
                {app?.industry && (
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
                {appName}
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-xl text-white/80 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {appDescription}
              </motion.p>

              {/* Stats Row */}
              <motion.div
                className="flex items-center gap-8 mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {app?.amountsBought !== undefined && (
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
                {status === "live" ? (
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${categoryConfig.color}50` }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-semibold text-black flex items-center gap-2 transition-all"
                    style={{ backgroundColor: categoryConfig.color }}
                  >
                    <Play size={20} fill="black" />
                    Try it now
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-2 cursor-not-allowed"
                  >
                    <Clock size={20} />
                    Coming Soon
                  </motion.button>
                )}
                <Link href={`/docs/apps/${appId}`}>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-xl font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 flex items-center gap-2"
                  >
                    <ExternalLink size={20} />
                    View Documentation
                  </motion.button>
                </Link>
              </motion.div>

            </motion.div>

            {/* Right: GIF/Video Container */}
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
                
                {/* GIF/Video Placeholder - This is where GIFs will go */}
                <div className="relative aspect-video bg-bg-secondary rounded-2xl overflow-hidden flex items-center justify-center">
                  {/* Background gradient */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${categoryConfig.color}10 0%, transparent 50%, ${categoryConfig.color}05 100%)`
                    }}
                  />
                  
                  {/* Placeholder content */}
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
                      Demo GIF coming soon
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

          {/* Logo Carousel - for Apps category */}
          {(appName?.toLowerCase().includes('chat') || category === 'Apps') && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="-mt-8"
            >
              <div className="overflow-hidden h-32 relative">
                <div 
                  className="flex gap-10 items-center animate-scroll-seamless"
                  style={{ width: 'max-content' }}
                >
                  {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                    <div
                      key={`${logo.name}-${index}`}
                      className="flex-shrink-0 w-48 h-32 relative opacity-60 hover:opacity-100 transition-opacity duration-300"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
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

      {/* Credit Pricing Section */}
      {credits && (
        <section className="py-16 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="rounded-2xl border border-white/10 bg-bg-secondary/50 backdrop-blur-sm overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${categoryConfig.color}20` }}
                  >
                    <Image
                      src="/images/credit-icon.png"
                      alt="Credits"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">Credit Pricing</h3>
                    <p className="text-sm text-text-secondary">Pay only for what you use</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {credits.fixed ? (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Image src="/images/credit-icon.png" alt="Credits" width={28} height={28} />
                        <span className="text-3xl font-bold text-white">{credits.fixed}</span>
                      </div>
                      <span className="text-text-secondary">credits per {credits.perUnit}</span>
                    </div>
                    {credits.euroValue && (
                      <div className="text-right">
                        <span className="text-2xl font-bold text-white">€{credits.euroValue}</span>
                        <span className="text-text-secondary text-sm block">per {credits.perUnit}</span>
                      </div>
                    )}
                  </div>
                ) : credits.examples ? (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-text-secondary">Range:</span>
                      <div className="flex items-center gap-1">
                        <Image src="/images/credit-icon.png" alt="Credits" width={20} height={20} />
                        <span className="font-semibold text-white">{credits.min} - {credits.max}</span>
                      </div>
                      <span className="text-text-secondary">credits depending on model</span>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {credits.examples.map((example: { model: string; credits: number; tier: string }, idx: number) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/5"
                        >
                          <span className="text-sm text-text-secondary">{example.model}</span>
                          <div className="flex items-center gap-1">
                            <Image src="/images/credit-icon.png" alt="" width={16} height={16} />
                            <span className="font-medium text-white">{example.credits}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : credits.estimated ? (
                  <div className="flex items-center gap-2">
                    <Info size={18} className="text-yellow-400" />
                    <span className="text-text-secondary">{credits.estimated}</span>
                  </div>
                ) : null}
                
                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link 
                    href="/docs/credits" 
                    className="inline-flex items-center gap-2 text-sm hover:underline"
                    style={{ color: categoryConfig.color }}
                  >
                    Learn more about credits
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {howItWorks.length > 0 && (
        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                How it <span style={{ color: categoryConfig.color }}>works</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Get started in just a few simple steps
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step: { step: number; title: string; description: string }, index: number) => (
                <motion.div
                  key={index}
                  className="relative p-6 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-white/5"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Step number */}
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold mb-4"
                    style={{ 
                      backgroundColor: `${categoryConfig.color}20`,
                      color: categoryConfig.color
                    }}
                  >
                    {step.step}
                  </div>
                  
                  {/* Arrow connector */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 z-10">
                      <ChevronRight size={24} className="text-white/20" />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Image Apps: Example Results Grid */}
      {category === "Image" && app?.exampleResults && app.exampleResults.length > 0 && (
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Example <span style={{ color: categoryConfig.color }}>Results</span>
              </h2>
              <p className="text-text-secondary text-lg">
                See what others have created with {appName}
              </p>
            </motion.div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {app.exampleResults.map((image, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div 
                    className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
                    style={{ backgroundColor: categoryConfig.color }}
                  />
                  
                  <div 
                    className="relative overflow-hidden rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500"
                    style={{ aspectRatio: '600/500' }}
                  >
                    <Image
                      src={image}
                      alt={`${appName} example ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases Section */}
      {useCases.length > 0 && (
        <section className="py-24 relative bg-bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Use <span style={{ color: categoryConfig.color }}>Cases</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                Popular ways people use {appName}
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-4">
              {useCases.map((useCase: string, index: number) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-text-secondary hover:border-white/20 hover:text-white transition-all"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {useCase}
                </motion.div>
              ))}
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
              <span style={{ color: categoryConfig.color }}>{appName}</span>?
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Discover the powerful features that make this app stand out
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.slice(0, 8).map((feature: { feature: string; subtext: string }, index: number) => (
              <motion.div
                key={index}
                className="group relative p-6 rounded-2xl bg-bg-secondary/50 backdrop-blur-sm border border-white/5 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, borderColor: `${categoryConfig.color}40` }}
              >
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


      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
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
              <span style={{ color: categoryConfig.color }}>{appName}</span>{" "}
              today
            </h2>
            
            <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
              Join thousands of users who are already transforming their workflow with AI-powered tools.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {status === "live" ? (
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 0 40px ${categoryConfig.color}60` }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl font-semibold text-black text-lg flex items-center gap-3 transition-all"
                  style={{ backgroundColor: categoryConfig.color }}
                >
                  Get Started Free
                  <ArrowRight size={22} />
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl font-semibold text-white text-lg bg-white/20 backdrop-blur-md border border-white/30 flex items-center gap-3"
                >
                  <Clock size={22} />
                  Coming Soon
                </motion.button>
              )}
              <Link href="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 rounded-xl font-semibold text-white text-lg bg-white/10 backdrop-blur-md border border-white/20"
                >
                  View Pricing
                </motion.button>
              </Link>
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
