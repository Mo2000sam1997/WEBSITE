"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import appsData from "@/data/apps.json";
import { App } from "@/types/app";

// Helper functions voor kleuren (zoals in AutomationsPage)
const darkenColor = (hex: string, percent: number): string => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, Math.floor((num >> 16) * (1 - percent / 100)));
  const g = Math.max(0, Math.floor(((num >> 8) & 0x00FF) * (1 - percent / 100)));
  const b = Math.max(0, Math.floor((num & 0x0000FF) * (1 - percent / 100)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

const lightenColor = (hex: string, percent: number): string => {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, Math.floor((num >> 16) + (255 - (num >> 16)) * (percent / 100)));
  const g = Math.min(255, Math.floor(((num >> 8) & 0x00FF) + (255 - ((num >> 8) & 0x00FF)) * (percent / 100)));
  const b = Math.min(255, Math.floor((num & 0x0000FF) + (255 - (num & 0x0000FF)) * (percent / 100)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

const getCategoryConfig = (tag: string) => {
  if (tag === "Agent" || tag === "AI Agent" || tag === "AI") {
    const color = '#60ceb4';
    return { 
      image: "/images/greenblock.png", 
      color,
      darkerColor: darkenColor(color, 50),
      borderColor: lightenColor(color, 5),
      textColor: lightenColor(color, 40)
    };
  }
  if (tag === "Data" || tag === "Business" || tag === "General") {
    const color = '#74d1e9';
    return { 
      image: "/images/blueblock.png", 
      color,
      darkerColor: darkenColor(color, 50),
      borderColor: lightenColor(color, 5),
      textColor: lightenColor(color, 40)
    };
  }
  if (tag === "Content" || tag === "Design") {
    const color = '#efaad3';
    return { 
      image: "/images/pinkblock.png", 
      color,
      darkerColor: darkenColor(color, 50),
      borderColor: lightenColor(color, 5),
      textColor: lightenColor(color, 40)
    };
  }
  if (tag === "Model" || tag === "Models") {
    const color = '#a279fe';
    return { 
      image: "/images/purpleblock.png", 
      color,
      darkerColor: darkenColor(color, 50),
      borderColor: lightenColor(color, 5),
      textColor: lightenColor(color, 40)
    };
  }
  const color = '#74d1e9';
  return { 
    image: "/images/blueblock.png", 
    color,
    darkerColor: darkenColor(color, 50),
    borderColor: lightenColor(color, 5),
    textColor: lightenColor(color, 40)
  };
};

export default function FeaturedApps() {
  const featuredApps = appsData.apps.filter((app) => app.featured).slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-2">
            Featured Apps
          </h2>
          <div className="h-px w-12 bg-gradient-to-r from-accent-primary to-accent-secondary" />
        </motion.div>

        {/* Grid exact zoals AutomationsPage */}
        <div className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[1400px]:grid-cols-3 min-[1800px]:grid-cols-4 gap-2">
          {featuredApps.map((app: App, index: number) => {
            const mainTag = app.tags[0] || app.category[0] || "AI";
            const categoryConfig = getCategoryConfig(mainTag);
            const mainImage = app.heroImage || app.thumbnail;

            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  href={`/apps/${app.slug}`}
                  className="group bg-bg-secondary rounded-lg overflow-hidden transition-all duration-300 flex flex-col w-full shadow-sm hover:shadow-lg hover:scale-[1.02] block"
                >
                  {/* Main Image Container */}
                  <div className="relative w-full aspect-[1000/788] overflow-hidden bg-bg-primary">
                    {/* Background Image */}
                    <div 
                      className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                      style={{
                        backgroundImage: mainImage ? `url(${mainImage})` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      {!mainImage && (
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
                          <div className="text-white/10 text-4xl font-bold">{app.name?.charAt(0) || 'A'}</div>
                        </div>
                      )}
                    </div>

                    {/* Category Badge - Top Right */}
                    <div className="absolute top-3 right-3 z-20">
                      <div 
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-md border backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${categoryConfig.darkerColor}E6`,
                          borderColor: categoryConfig.borderColor,
                          color: categoryConfig.textColor,
                          boxShadow: `0 0 10px ${categoryConfig.color}40, 0 0 20px ${categoryConfig.color}30, 0 2px 4px rgba(0, 0, 0, 0.2)`,
                        }}
                      >
                        <Image
                          src={categoryConfig.image}
                          alt={mainTag}
                          width={14}
                          height={14}
                          className="object-contain"
                          style={{ filter: 'brightness(1.3)' }}
                        />
                        <span 
                          className="text-[10px] font-bold uppercase tracking-tight"
                          style={{ color: categoryConfig.textColor }}
                        >
                          {mainTag === "AI Agent" ? "Agent" : mainTag}
                        </span>
                      </div>
                    </div>

                    {/* Black Gradient Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/90 via-black/70 to-transparent z-10" />

                    {/* Content on Overlay - Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                      {/* Logo and Name */}
                      <div className="flex items-center gap-3 mb-2">
                        {app.thumbnail && (
                          <Image
                            src={app.thumbnail}
                            alt={app.name}
                            width={40}
                            height={40}
                            className="w-10 h-10 aspect-square object-cover rounded-lg flex-shrink-0 border border-white/20"
                          />
                        )}
                        <div className="flex flex-col min-w-0">
                          <h3 className="text-base font-bold text-white truncate">
                            {app.name}
                          </h3>
                          {app.category && app.category.length > 0 && (
                            <p className="text-[10px] text-white/80 mt-0.5 uppercase tracking-wider font-medium">
                              {app.category.slice(0, 2).join(" / ")}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      {app.description && (
                        <p className="text-xs text-white/90 line-clamp-2 leading-relaxed">
                          {app.description}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
