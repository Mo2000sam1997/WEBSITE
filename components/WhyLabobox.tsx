"use client";

import { motion } from "framer-motion";
import { CreditCard, Layers, Zap, Cpu, Grid3X3, Rocket, Shield } from "lucide-react";

export default function WhyLabobox() {
  const benefits = [
    {
      icon: CreditCard,
      title: "Flexible Plans",
      description: "Choose a monthly plan that fits your needs. Scale up or down anytime. No long-term commitments required.",
      color: "#74d1e9",
      gradient: "from-[#74d1e9]/20 to-[#74d1e9]/5",
    },
    {
      icon: Layers,
      title: "All in one place",
      description: "Access 10+ powerful AI tools from a single platform. No more switching between apps or managing multiple accounts.",
      color: "#60ceb4",
      gradient: "from-[#60ceb4]/20 to-[#60ceb4]/5",
    },
    {
      icon: Zap,
      title: "Start instantly",
      description: "No complex setup or configuration needed. Sign up and start using any AI tool within seconds. It's that simple.",
      color: "#efaad3",
      gradient: "from-[#efaad3]/20 to-[#efaad3]/5",
    },
  ];

  const stats = [
    { value: "15+", label: "AI Models", icon: Cpu, color: "#74d1e9" },
    { value: "4", label: "Categories", icon: Grid3X3, color: "#efaad3" },
    { value: "Plug", label: "& Play", icon: Rocket, color: "#a279fe" },
    { value: "Free", label: "To Start", icon: Shield, color: "#60ceb4" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Why choose Labobox?
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            We built Labobox to make AI accessible to everyone. No technical expertise required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div 
                className="relative h-full rounded-2xl overflow-hidden"
                style={{
                  background: `linear-gradient(180deg, ${benefit.color}08 0%, transparent 100%)`,
                }}
              >
                {/* Card inner */}
                <div className="relative p-8 h-full border border-white/5 rounded-2xl bg-bg-secondary/30 backdrop-blur-sm transition-all duration-500 group-hover:border-white/10 group-hover:bg-bg-secondary/50">
                  
                  {/* Top accent line */}
                  <div 
                    className="absolute top-0 left-8 right-8 h-[2px] rounded-full"
                    style={{ backgroundColor: benefit.color }}
                  />

                  {/* Icon container */}
                  <div className="mb-6 relative">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${benefit.color}20 0%, ${benefit.color}05 100%)`,
                        border: `1px solid ${benefit.color}30`,
                      }}
                    >
                      <benefit.icon 
                        size={28}
                        style={{ color: benefit.color }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Bottom decoration */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at bottom, ${benefit.color}10 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats/trust indicators with animations */}
        <motion.div 
          className="mt-16 pt-12 border-t border-white/5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}20 0%, ${stat.color}05 100%)`,
                      border: `1px solid ${stat.color}30`,
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 0px ${stat.color}00`,
                        `0 0 20px ${stat.color}30`,
                        `0 0 0px ${stat.color}00`,
                      ],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5,
                    }}
                  >
                    <stat.icon size={24} style={{ color: stat.color }} />
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold mb-1"
                  style={{ color: stat.color }}
                  animate={{
                    textShadow: [
                      `0 0 0px ${stat.color}00`,
                      `0 0 15px ${stat.color}50`,
                      `0 0 0px ${stat.color}00`,
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
