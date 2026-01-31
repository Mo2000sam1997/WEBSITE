"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

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

const TYPING_VARIANTS = [
  "to Simulate the World",
  "to Create Videos",
  "to Generate Images",
  "to Build 3D Models",
  "to Shape Reality",
];

export default function Hero() {
  const [typingText, setTypingText] = useState("");
  const [currentVariant, setCurrentVariant] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const variant = TYPING_VARIANTS[currentVariant];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Typing
      if (typingText.length < variant.length) {
        timeout = setTimeout(() => {
          setTypingText(variant.slice(0, typingText.length + 1));
        }, 100);
      } else {
        // Wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else {
      // Deleting
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(variant.slice(0, typingText.length - 1));
        }, 50);
      } else {
        // Move to next variant
        setIsDeleting(false);
        setCurrentVariant((prev) => (prev + 1) % TYPING_VARIANTS.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingText, currentVariant, isDeleting]);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg-primary pt-0">
      
      {/* Kleine gekleurde blokjes */}
      {/* Blauw links */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '8%', top: '25%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, -15, 0],
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/blueblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(116, 209, 233, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Groen rechts */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '10%', top: '30%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 15, 0],
          y: [0, -18, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="relative w-11 h-11 md:w-14 md:h-14">
          <Image
            src="/images/greenblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(96, 206, 180, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Paars links onder */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '12%', bottom: '30%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, -10, 0],
          y: [0, 15, 0],
          rotate: [0, -12, 12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image
            src="/images/purpleblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(162, 121, 254, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Roze rechts onder */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '15%', bottom: '25%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 12, 0],
          y: [0, 20, 0],
          rotate: [0, 18, -18, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/pinkblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(239, 170, 211, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Blauw links midden */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '5%', top: '50%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, -8, 0],
          y: [0, 12, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <div className="relative w-9 h-9 md:w-12 md:h-12">
          <Image
            src="/images/blueblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(116, 209, 233, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Groen rechts midden */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '8%', bottom: '35%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 10, 0],
          y: [0, -12, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 8.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      >
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image
            src="/images/greenblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(96, 206, 180, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Extra blokjes verspreid in achtergrond */}
      {/* Blauw links midden-boven */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '18%', top: '35%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, -8, 0],
          y: [0, 10, 0],
          rotate: [0, -8, 8, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <div className="relative w-8 h-8 md:w-11 md:h-11">
          <Image
            src="/images/blueblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(116, 209, 233, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Groen rechts midden-boven */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '20%', top: '40%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 8, 0],
          y: [0, -10, 0],
          rotate: [0, 10, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.7
        }}
      >
        <div className="relative w-7 h-7 md:w-10 md:h-10">
          <Image
            src="/images/greenblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(96, 206, 180, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Roze links midden */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '25%', top: '45%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, -6, 0],
          y: [0, 8, 0],
          rotate: [0, -6, 6, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      >
        <div className="relative w-8 h-8 md:w-11 md:h-11">
          <Image
            src="/images/pinkblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(239, 170, 211, 0.3))',
            }}
          />
        </div>
      </motion.div>

      {/* Blauw rechts midden */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '22%', top: '50%' }}
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.6, 0.4],
          x: [0, 7, 0],
          y: [0, -8, 0],
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <div className="relative w-7 h-7 md:w-10 md:h-10">
          <Image
            src="/images/blueblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(116, 209, 233, 0.3))',
            }}
          />
        </div>
      </motion.div>
      
      {/* Complete Logo als Glow Background - iets feller */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[500px] h-[500px] opacity-25"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/images/mindhello-icon.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'blur(80px) brightness(1.6)',
            }}
          />
        </motion.div>
      </div>

      {/* Floating particles effect */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-accent-primary rounded-full opacity-40"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}
      
      <div className="max-w-5xl mx-auto text-center relative z-10 py-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            type: "spring",
            stiffness: 200
          }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
        >
          <motion.span 
            className="w-1.5 h-1.5 bg-block-green rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          <span className="text-xs text-text-secondary">AI Creative Workspace</span>
        </motion.div>

        {/* Headline - Simulate the World */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="block"
          >
            <motion.span 
              className="bg-gradient-to-r from-[#3B82F6] via-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Simulate
            </motion.span>{" "}
            <span className="text-white">the</span>{" "}
            <motion.span 
              className="text-[#22C55E]"
              animate={{
                textShadow: [
                  "0 0 0px rgba(34, 197, 94, 0)",
                  "0 0 30px rgba(34, 197, 94, 0.6)",
                  "0 0 0px rgba(34, 197, 94, 0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              World
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Subheadline met type animatie */}
        <motion.p
          className="text-lg sm:text-xl text-text-secondary mb-4 max-w-2xl mx-auto min-h-[32px]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.7,
            type: "spring"
          }}
        >
          Type a prompt or upload an image — get{" "}
          <span className="text-[#3B82F6]">video</span>,{" "}
          <span className="text-[#EC4899]">images</span>, and{" "}
          <span className="text-[#8B5CF6]">3D models</span> instantly.
        </motion.p>
        <motion.p
          className="text-base text-text-tertiary mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            type: "spring"
          }}
        >
          It&apos;s <em className="text-white not-italic">that</em> fast. No experience required.
        </motion.p>

        {/* CTAs met hover effecten - zoals 3D AI Studio */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.9,
            type: "spring"
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-xl bg-white text-black hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/20"
            >
              <Sparkles size={16} />
              Get started - It&apos;s magic
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/apps" 
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-xl bg-transparent border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              View examples
              <ChevronDown size={16} className="-rotate-90" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Proof / Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-10 mb-6"
        >
          {/* Creators count */}
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className="w-7 h-7 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#EC4899] border-2 border-bg-primary"
                />
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              <span className="text-white font-semibold">10,000+</span> creators
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-4 h-4 text-[#22C55E]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              Rated <span className="text-white font-semibold">Excellent</span>
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Assets generated */}
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#EC4899]" />
            <span className="text-sm text-text-secondary">
              <span className="text-white font-semibold">1,284</span> assets generated today
            </span>
          </div>
        </motion.div>

        {/* Logo Carousel onder de buttons - seamless infinite loop */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="relative mt-16"
        >
          <div className="overflow-hidden h-32 relative">
            {/* CSS animation for truly seamless loop */}
            <div 
              className="flex gap-8 items-center animate-scroll-seamless"
              style={{
                width: 'max-content',
              }}
            >
              {/* Triple the logos for seamless effect */}
              {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-48 h-32 relative opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="relative w-full h-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator - klikbaar en gecentreerd */}
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.button
            onClick={() => {
              window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-text-tertiary hover:text-text-secondary transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs">Scroll to explore</span>
            <ChevronDown size={20} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Gradient fade aan de onderkant voor vloeiende overgang */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-bg-primary via-bg-primary/50 to-transparent pointer-events-none z-20" />
    </section>
  );
}
