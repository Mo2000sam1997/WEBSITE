"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const TYPING_VARIANTS = [
  { text: "Your Workflow?", color: "#fc85d7" },      // Labobox pink
  { text: "Your AI Tools?", color: "#4edc96" },      // Labobox green
  { text: "Your Business?", color: "#77bdf8" },      // Labobox blue
  { text: "Your Ideas?", color: "#fc85d7" },         // Labobox pink
];

export default function CTABanner() {
  const [typingText, setTypingText] = useState("");
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentColor, setCurrentColor] = useState(TYPING_VARIANTS[0].color);

  useEffect(() => {
    const currentPhrase = TYPING_VARIANTS[currentVariant].text;
    const color = TYPING_VARIANTS[currentVariant].color;
    setCurrentColor(color);
    
    let timeout: NodeJS.Timeout;
    
    if (!isDeleting) {
      if (typingText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypingText(currentPhrase.slice(0, typingText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setCurrentVariant((prev) => (prev + 1) % TYPING_VARIANTS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingText, currentVariant, isDeleting]);

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Animated glow border wrapper with subtle hover effect */}
        <motion.div 
          className="relative group"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Animated border glow */}
          <motion.div
            className="absolute -inset-[2px] rounded-[2.5rem] transition-all duration-300 group-hover:-inset-[3px]"
            style={{
              background: "linear-gradient(90deg, #fc85d7, #4edc96, #77bdf8, #fc85d7)",
              backgroundSize: "300% 100%",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Subtle glow on hover */}
          <div 
            className="absolute -inset-[6px] rounded-[2.5rem] opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-lg"
            style={{
              background: "linear-gradient(90deg, #fc85d7, #4edc96, #77bdf8, #fc85d7)",
              backgroundSize: "300% 100%",
            }}
          />
          
          {/* Main card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-bg-primary transition-all duration-300 group-hover:border-white/20">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/cta-banner-new.jpg"
                alt="AI Blocks"
                fill
                className="object-cover"
                priority
              />
            {/* Overlay gradient voor leesbaarheid - donkerder */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
            </div>

            {/* Subtle floating orbs */}
            <motion.div
              className="absolute top-10 right-20 w-32 h-32 bg-[#74d1e9]/20 rounded-full blur-[60px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-10 right-1/3 w-40 h-40 bg-[#efaad3]/25 rounded-full blur-[80px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />

            {/* Content - korter */}
            <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6">
              <div className="max-w-2xl">
                {/* Badge met pulse */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Zap size={16} className="text-yellow-400 fill-yellow-400" />
                  </motion.div>
                  <span className="text-sm font-medium text-white">Start Building Today</span>
                </motion.div>

                {/* Headline met typing animatie */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight"
                >
                  <span className="block">Ready to Transform</span>
                  <span 
                    className="relative inline-block font-bold whitespace-nowrap"
                    style={{ 
                      color: currentColor,
                      textShadow: `0 0 20px ${currentColor}80, 0 0 40px ${currentColor}40`,
                      transition: 'color 0.3s ease, text-shadow 0.3s ease'
                    }}
                  >
                    {typingText}
                    <motion.span
                      className="inline-block w-[3px] h-[0.9em] ml-1 align-middle"
                      style={{ backgroundColor: currentColor }}
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                    />
                  </span>
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl"
                >
                  Access powerful AI tools with flexible monthly plans. Choose what fits you and unlock endless possibilities for your projects.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link href="/apps">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-2.5 bg-white text-black text-sm font-medium rounded-lg flex items-center justify-center gap-2 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Started
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </motion.button>
                </Link>
                <Link href="/apps">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-medium rounded-lg hover:bg-white/20 hover:border-white/50 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles size={14} />
                      Browse Apps
                    </span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
