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
  // Triple logos for seamless infinite scroll
  const tripleLogos = [...LOGOS, ...LOGOS, ...LOGOS];

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
            <div 
              className="flex gap-3 items-center animate-scroll-seamless"
              style={{ width: 'max-content' }}
            >
              {tripleLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-48 h-48 relative opacity-50 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative w-full h-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <div className="relative w-44 h-44">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        unoptimized
                        style={{
                          filter: 'drop-shadow(0 0 30px rgba(255,255,255,0.15))',
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
      
      {/* Gradient fade-out aan de onderkant */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none z-10" />
    </section>
  );
}
