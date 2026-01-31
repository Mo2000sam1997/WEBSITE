"use client";

import Link from "next/link";
import Image from "next/image";
import { Users } from "lucide-react";
import { MarketplaceTemplate } from "@/hooks/useMarketplaceTemplates";

const CATEGORIES = [
  { name: 'All Apps', image: '/images/mindhello-icon.png', color: '#22C55E', glow: 'rgba(34, 197, 94, 0.25)' },
  { name: 'Video', image: '/images/blueblock.png', color: '#3B82F6', glow: 'rgba(59, 130, 246, 0.25)' },
  { name: 'Image', image: '/images/pinkblock.png', color: '#EC4899', glow: 'rgba(236, 72, 153, 0.25)' },
  { name: '3D', image: '/images/purpleblock.png', color: '#8B5CF6', glow: 'rgba(139, 92, 246, 0.25)' },
  { name: 'Apps', image: '/images/greenblock.png', color: '#22C55E', glow: 'rgba(34, 197, 94, 0.25)' },
];

interface MarketplaceCardProps {
  template: MarketplaceTemplate;
}

export default function MarketplaceCard({ template }: MarketplaceCardProps) {
  const getCategoryConfig = (category?: string) => {
    // Map category names to images
    if (category === 'Video') {
      return {
        image: '/images/blueblock.png',
        glow: 'rgba(59, 130, 246, 0.25)'
      };
    }
    if (category === 'Image') {
      return {
        image: '/images/pinkblock.png',
        glow: 'rgba(236, 72, 153, 0.25)'
      };
    }
    if (category === '3D') {
      return {
        image: '/images/purpleblock.png',
        glow: 'rgba(139, 92, 246, 0.25)'
      };
    }
    if (category === 'Apps') {
      return {
        image: '/images/greenblock.png',
        glow: 'rgba(34, 197, 94, 0.25)'
      };
    }
    
    // Default: green block voor All Apps
    return {
      image: '/images/greenblock.png',
      glow: 'rgba(34, 197, 94, 0.25)'
    };
  };

  const categoryConfig = getCategoryConfig(template.category);
  const mainImage = template.mainImage || template.main_image || template.image;

  return (
    <Link href={`/apps/${template.id}`} className="block">
      <div className="group relative bg-bg-secondary rounded-lg overflow-hidden transition-all duration-300 flex flex-col w-full group-hover:shadow-md">
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(circle at bottom left, ${categoryConfig.glow} 0%, transparent 50%)`
          }}
        />

        <div className="relative overflow-hidden aspect-[1000/788] flex items-center justify-center w-full bg-bg-primary">
          <div 
            className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
            style={{
              backgroundImage: mainImage ? `url(${mainImage})` : undefined,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {!mainImage && (
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 flex items-center justify-center">
                <div className="text-white/10 text-4xl font-bold">{template.name.charAt(0)}</div>
              </div>
            )}
          </div>
        </div>

        <div className="relative p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <h3 className="text-base font-bold text-text-primary mb-1 truncate">
              {template.name}
            </h3>
          </div>

          <div className="mb-2">
            <p className="text-xs text-text-secondary line-clamp-3 leading-[1.2rem]">
              {template.description}
            </p>
          </div>

          {template.industry && (
            <p className="text-[11px] text-text-secondary uppercase tracking-wider font-medium mb-4">
              {template.industry}
            </p>
          )}

          <div className="flex items-center justify-between text-[10px] pt-3 mt-auto">
            <Image
              src={categoryConfig.image}
              alt={template.category || 'All Apps'}
              width={24}
              height={24}
              className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-125"
            />
            
            {template.amountsBought !== undefined && (
              <div className="flex items-center gap-1 font-semibold text-text-primary/60">
                <Users size={12} />
                <span>{template.amountsBought}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
