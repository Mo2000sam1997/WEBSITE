"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Zap, Globe } from "lucide-react";

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

const SIMULATE_PHRASES = [
  { phrase: "your World", color: "#22C55E" },
  { phrase: "your Mind", color: "#3B82F6" },
  { phrase: "your Fantasy", color: "#EC4899" },
  { phrase: "your Imagination", color: "#8B5CF6" },
];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentPhrase = SIMULATE_PHRASES[currentWordIndex].phrase;
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2500);
    } else if (!isDeleting) {
      // Typing
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 70);
      } else {
        setIsPaused(true);
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 35);
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % SIMULATE_PHRASES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, isDeleting, isPaused]);

  const currentColor = SIMULATE_PHRASES[currentWordIndex].color;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-bg-primary pt-0">
      
      {/* Animated gradient orbs in background */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${currentColor}15 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [-50, 50, -50],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [50, -50, 50],
          y: [30, -30, 30],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Multiple floating logo backgrounds with blur */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[700px] h-[700px] opacity-30"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 8, -8, 0],
          }}
          transition={{
            duration: 15,
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
              filter: 'blur(100px) brightness(2)',
            }}
          />
        </motion.div>
      </div>

      {/* Secondary smaller logo glow */}
      <motion.div
        className="absolute top-[20%] right-[15%] w-[300px] h-[300px] opacity-20 pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -15, 15, 0],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Image
          src="/images/mindhello-icon.png"
          alt=""
          fill
          className="object-contain"
          style={{
            filter: 'blur(60px) brightness(1.8)',
          }}
        />
      </motion.div>

      {/* Third logo glow bottom left */}
      <motion.div
        className="absolute bottom-[25%] left-[10%] w-[250px] h-[250px] opacity-15 pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [10, -10, 10],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      >
        <Image
          src="/images/mindhello-icon.png"
          alt=""
          fill
          className="object-contain"
          style={{
            filter: 'blur(50px) brightness(1.5)',
          }}
        />
      </motion.div>
      
      {/* Floating colored blocks - more dynamic */}
      {/* Blue top left */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '8%', top: '20%' }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          x: [0, -25, 0],
          y: [0, -35, 0],
          rotate: [0, 25, -25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative w-14 h-14 md:w-20 md:h-20">
          <Image
            src="/images/blueblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(116, 209, 233, 0.5))',
            }}
          />
        </div>
      </motion.div>

      {/* Green right */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '10%', top: '25%' }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          x: [0, 25, 0],
          y: [0, -30, 0],
          rotate: [0, -20, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      >
        <div className="relative w-12 h-12 md:w-18 md:h-18">
          <Image
            src="/images/greenblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(96, 206, 180, 0.5))',
            }}
          />
        </div>
      </motion.div>

      {/* Purple bottom left */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '12%', bottom: '28%' }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          x: [0, -20, 0],
          y: [0, 25, 0],
          rotate: [0, -18, 18, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <div className="relative w-12 h-12 md:w-16 md:h-16">
          <Image
            src="/images/purpleblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(162, 121, 254, 0.5))',
            }}
          />
        </div>
      </motion.div>

      {/* Pink bottom right */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '14%', bottom: '22%' }}
        animate={{ 
          opacity: [0.5, 0.8, 0.5],
          x: [0, 20, 0],
          y: [0, 30, 0],
          rotate: [0, 22, -22, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      >
        <div className="relative w-14 h-14 md:w-20 md:h-20">
          <Image
            src="/images/pinkblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 25px rgba(239, 170, 211, 0.5))',
            }}
          />
        </div>
      </motion.div>

      {/* Extra floating blocks for more movement */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '5%', top: '55%' }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          x: [0, -15, 0],
          y: [0, 20, 0],
          rotate: [0, -12, 12, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      >
        <div className="relative w-10 h-10 md:w-14 md:h-14">
          <Image
            src="/images/blueblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(116, 209, 233, 0.4))',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '6%', top: '50%' }}
        animate={{ 
          opacity: [0.4, 0.7, 0.4],
          x: [0, 18, 0],
          y: [0, -18, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2
        }}
      >
        <div className="relative w-11 h-11 md:w-15 md:h-15">
          <Image
            src="/images/greenblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 20px rgba(96, 206, 180, 0.4))',
            }}
          />
        </div>
      </motion.div>

      {/* More scattered blocks */}
      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ left: '22%', top: '32%' }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          x: [0, -10, 0],
          y: [0, 15, 0],
          rotate: [0, -10, 10, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3
        }}
      >
        <div className="relative w-8 h-8 md:w-12 md:h-12">
          <Image
            src="/images/pinkblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(239, 170, 211, 0.4))',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute pointer-events-none z-[1]"
        style={{ right: '25%', bottom: '35%' }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          x: [0, 12, 0],
          y: [0, -12, 0],
          rotate: [0, 12, -12, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6
        }}
      >
        <div className="relative w-9 h-9 md:w-13 md:h-13">
          <Image
            src="/images/purpleblock.png"
            alt=""
            fill
            className="object-contain"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(162, 121, 254, 0.4))',
            }}
          />
        </div>
      </motion.div>

      {/* Floating particles - more of them - only 4 brand colors */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${10 + (i * 7) % 80}%`,
            top: `${20 + (i * 11) % 60}%`,
            width: `${4 + (i % 3) * 2}px`,
            height: `${4 + (i % 3) * 2}px`,
            background: ['#22C55E', '#3B82F6', '#EC4899', '#8B5CF6'][i % 4],
          }}
          animate={{
            y: [0, -40 - (i % 3) * 15, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5 + (i % 2) * 0.5, 1],
          }}
          transition={{
            duration: 3 + (i % 4) * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Pulsing ring effect */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/5 pointer-events-none"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 2,
        }}
      />
      
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Globe size={14} className="text-[#22C55E]" />
          </motion.div>
          <span className="text-xs text-text-secondary">The Future of Creative AI</span>
          <motion.span 
            className="w-2 h-2 bg-block-green rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Main Headline with Typewriter - All on one line */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold text-text-primary mb-8 leading-tight tracking-tight whitespace-nowrap"
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
            className="inline-flex items-baseline"
          >
            <span className="text-white">
              Simulate
            </span>
            <span className="inline-block w-[8px] sm:w-[12px] lg:w-[16px]" />
            <motion.span
              className="inline-block min-w-[180px] sm:min-w-[280px] lg:min-w-[420px] xl:min-w-[500px] text-left"
              style={{ color: currentColor }}
              animate={{ 
                textShadow: [
                  `0 0 0px ${currentColor}00`,
                  `0 0 40px ${currentColor}80`,
                  `0 0 0px ${currentColor}00`,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {displayText}
              <motion.span
                className="inline-block w-[3px] sm:w-[4px] lg:w-[5px] h-[0.85em] ml-1 align-middle rounded-sm"
                style={{ backgroundColor: currentColor }}
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity }}
              />
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* Powerful Subheadline */}
        <motion.p
          className="text-xl sm:text-2xl text-text-secondary mb-4 max-w-3xl mx-auto font-light"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.7,
            type: "spring"
          }}
        >
          Transform your ideas into{" "}
          <motion.span 
            className="text-[#3B82F6] font-medium"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0 }}
          >
            stunning videos
          </motion.span>,{" "}
          <motion.span 
            className="text-[#EC4899] font-medium"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          >
            photorealistic images
          </motion.span>, and{" "}
          <motion.span 
            className="text-[#8B5CF6] font-medium"
            animate={{ opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          >
            3D worlds
          </motion.span>
        </motion.p>
        <motion.p
          className="text-lg text-text-tertiary mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.8,
            type: "spring"
          }}
        >
          One prompt. <span className="text-white font-medium">Infinite possibilities.</span> No learning curve.
        </motion.p>

        {/* CTAs */}
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
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/signup" 
              className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-xl bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              <Zap size={18} />
              Start Creating Now
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/apps" 
              className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium rounded-xl bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
            >
              <Sparkles size={18} />
              Explore Examples
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mt-12 mb-6"
        >
          {/* Creators count */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  className="w-8 h-8 rounded-full border-2 border-bg-primary"
                  style={{
                    background: `linear-gradient(135deg, ${['#22C55E', '#3B82F6', '#EC4899', '#8B5CF6'][i]} 0%, ${['#3B82F6', '#EC4899', '#8B5CF6', '#22C55E'][i]} 100%)`,
                  }}
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              <span className="text-white font-bold">10,000+</span> creators worldwide
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.svg 
                  key={i} 
                  className="w-5 h-5 text-[#22C55E]" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                  }}
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </motion.svg>
              ))}
            </div>
            <span className="text-sm text-text-secondary">
              <span className="text-white font-bold">4.9</span> rating
            </span>
          </div>

          <div className="hidden sm:block w-px h-6 bg-white/10" />

          {/* Live counter */}
          <motion.div 
            className="flex items-center gap-2"
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              className="w-2 h-2 bg-[#22C55E] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
            <span className="text-sm text-text-secondary">
              <span className="text-white font-bold">847</span> creating right now
            </span>
          </motion.div>
        </motion.div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="relative mt-16"
        >
          <p className="text-xs text-text-tertiary mb-6 uppercase tracking-widest">Powered by leading AI models</p>
          <div className="overflow-hidden h-28 relative">
            <div 
              className="flex gap-8 items-center animate-scroll-seamless"
              style={{
                width: 'max-content',
              }}
            >
              {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 w-44 h-28 relative opacity-50 hover:opacity-100 transition-opacity duration-300"
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

        {/* Scroll Indicator */}
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
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xs uppercase tracking-wider">Discover More</span>
            <ChevronDown size={22} />
          </motion.button>
        </motion.div>
      </div>
      
      {/* Gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary via-bg-primary/70 to-transparent pointer-events-none z-20" />
    </section>
  );
}
