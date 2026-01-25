"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CATEGORIES = [
  { 
    name: 'Data', 
    image: '/images/blueblock.png', 
    color: '#74d1e9',
    description: 'Process and analyze data with AI-powered tools',
    href: '/apps?category=Data'
  },
  { 
    name: 'Agent', 
    image: '/images/greenblock.png', 
    color: '#60ceb4',
    description: 'Intelligent agents that automate your workflows',
    href: '/apps?category=Agent'
  },
  { 
    name: 'Content', 
    image: '/images/pinkblock.png', 
    color: '#efaad3',
    description: 'Create stunning content with AI assistance',
    href: '/apps?category=Content'
  },
  { 
    name: 'Custom', 
    image: '/images/grayblock-new.png',
    color: '#9ca3af',
    glow: 'rgba(156, 163, 175, 0.4)',
    description: 'Custom AI solutions tailored to your needs',
    href: '/apps?category=Custom'
  },
];

export default function CategoryCards() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-12 relative overflow-hidden bg-bg-primary">

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Explore Categories
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Discover AI tools organized by category. Find exactly what you need.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CATEGORIES.map((cat, index) => (
            <Link key={cat.name} href={cat.href}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group h-full"
              >
                <div 
                  className="relative h-full rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(180deg, ${cat.color}08 0%, transparent 100%)`,
                  }}
                >
                  {/* Card inner */}
                  <div className="relative p-10 h-full border border-white/5 rounded-2xl bg-bg-secondary/30 backdrop-blur-sm transition-all duration-500 group-hover:border-white/10 group-hover:bg-bg-secondary/50">
                    
                    {/* Top accent line */}
                    <div 
                      className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                      style={{ backgroundColor: cat.color }}
                    />

                    {/* Icon container */}
                    <div className="mb-4 relative flex justify-center">
                      <div 
                        className="w-44 h-44 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: `linear-gradient(135deg, ${cat.color}20 0%, ${cat.color}05 100%)`,
                          border: `1px solid ${cat.color}30`,
                        }}
                      >
                        <div className="relative w-32 h-32">
                          <Image
                            src={cat.image}
                            alt={cat.name}
                            fill
                            className="object-contain"
                            onError={(e) => {
                              // Fallback als image niet bestaat
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                const fallback = document.createElement('div');
                                fallback.className = 'w-full h-full rounded-lg flex items-center justify-center text-3xl font-bold';
                                fallback.style.color = cat.color;
                                fallback.textContent = 'C';
                                parent.appendChild(fallback);
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-text-primary mb-2 text-center">
                      {cat.name}
                    </h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4 text-center">
                      {cat.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-center gap-1.5 text-xs font-normal text-text-tertiary group-hover:text-text-secondary transition-colors duration-300">
                      <span>Explore</span>
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                    {/* Bottom decoration */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at bottom, ${cat.color}10 0%, transparent 70%)`,
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Start for Free Button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/apps" 
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-[#4ADE80] to-[#22D3EE] text-black hover:shadow-lg hover:shadow-[#4ADE80]/25 transition-all duration-300"
            >
              Start for Free
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
