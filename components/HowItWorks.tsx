"use client";

import { motion } from "framer-motion";
import { Search, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Explore",
      description: "Discover our powerful AI tools. Browse by category, search by name, or check out what's trending.",
      color: "#74d1e9",
    },
    {
      number: "02",
      icon: Rocket,
      title: "Launch",
      description: "Pick a plan that fits you. Start with our free tier and upgrade anytime as your needs grow.",
      color: "#60ceb4",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Create",
      description: "Unleash your creativity! Generate images, chat with AI, build 3D models, and so much more.",
      color: "#efaad3",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-primary relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-text-secondary mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Simple as 1-2-3
          </motion.span>
          <h2 className="text-3xl sm:text-5xl font-bold text-text-primary mb-4">
            How it{" "}
            <span className="bg-gradient-to-r from-[#74d1e9] via-[#60ceb4] to-[#efaad3] bg-clip-text text-transparent">
              works
            </span>
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Getting started with Mindhello takes less than a minute. Here's how:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated connecting line (desktop only) */}
          <motion.div 
            className="hidden md:block absolute top-[80px] left-[16.67%] right-[16.67%] h-[2px] overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full w-full bg-gradient-to-r from-[#74d1e9] via-[#60ceb4] to-[#efaad3]"
              initial={{ x: "-100%" }}
              whileInView={{ x: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            />
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="relative group"
            >
              <div className="flex flex-col items-center text-center">
                {/* Step circle with icon */}
                <motion.div 
                  className="relative mb-8"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated outer ring */}
                  <motion.div 
                    className="w-[140px] h-[140px] rounded-full flex items-center justify-center relative"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}15 0%, transparent 50%)`,
                      border: `2px solid ${step.color}40`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${step.color}10`,
                        `0 0 40px ${step.color}20`,
                        `0 0 20px ${step.color}10`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    {/* Rotating ring accent */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        border: `2px dashed ${step.color}30`,
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Inner circle */}
                    <motion.div 
                      className="w-[90px] h-[90px] rounded-full flex items-center justify-center bg-bg-primary relative"
                      style={{
                        boxShadow: `0 0 30px ${step.color}30`,
                      }}
                      whileHover={{
                        boxShadow: `0 0 50px ${step.color}50`,
                      }}
                    >
                      <motion.div
                        animate={{
                          y: [0, -5, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      >
                        <step.icon 
                          size={40}
                          style={{ color: step.color }}
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Animated step number badge */}
                  <motion.div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold"
                    style={{
                      backgroundColor: step.color,
                      color: '#000',
                    }}
                    whileHover={{ scale: 1.1 }}
                    animate={{
                      y: [0, -3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  >
                    {step.number}
                  </motion.div>
                </motion.div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-bold text-text-primary mb-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-base text-text-secondary leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button met animatie */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -3 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(255,255,255,0.1)",
                "0 0 40px rgba(255,255,255,0.2)",
                "0 0 20px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="rounded-lg"
          >
            <Link 
              href="/apps" 
              className="inline-flex items-center gap-2 px-8 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-white to-white/90 text-black hover:from-white hover:to-white transition-all duration-300"
            >
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Start for Free
              </motion.span>
              <motion.div
                animate={{ x: [0, 5, 0], scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles size={16} />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
