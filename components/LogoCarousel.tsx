"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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

export default function LogoCarousel() {
  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...LOGOS, ...LOGOS];

  return (
    <section className="py-2 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gradient-to-b from-transparent via-bg-primary/50 to-bg-primary -mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Scrolling container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-3 items-center"
              animate={{
                x: [0, -810], // Move left (9 logos * 90px per logo with gap)
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-40 h-40 relative opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative w-full h-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <div className="relative w-36 h-36">
                      {/* Fade mask voor zachte randen - zoals bij hero */}
                      <div 
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background: 'radial-gradient(ellipse 80% 80% at center, transparent 50%, rgba(0,0,0,0.4) 100%)',
                          maskImage: 'radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)',
                          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 50%, transparent 100%)',
                        }}
                      />
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        unoptimized
                        style={{
                          filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))',
                        }}
                        onError={(e) => {
                          // Fallback placeholder als logo niet bestaat
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement?.parentElement;
                          if (parent && !parent.querySelector('.logo-placeholder')) {
                            const placeholder = document.createElement('div');
                            placeholder.className = 'logo-placeholder absolute inset-0 w-full h-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center';
                            placeholder.innerHTML = `<span class="text-xs text-text-secondary font-medium">${logo.name}</span>`;
                            parent.appendChild(placeholder);
                          }
                        }}
                      />
                      {/* Fallback placeholder (hidden by default) */}
                      <div className="absolute inset-0 w-full h-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 pointer-events-none logo-placeholder">
                        <span className="text-xs text-text-secondary font-medium">{logo.name}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient fades */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>
      
      {/* Gradient fade-out aan de onderkant */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-10" />
    </section>
  );
}
