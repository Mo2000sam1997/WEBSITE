"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlocks from "@/components/FloatingBlocks";
import { ImageIcon, Clock, Sparkles, ArrowRight } from "lucide-react";
import appsData from "@/data/apps.json";

const IMAGE_APPS = appsData.apps.filter(app => app.category === "Image");

const CATEGORY_COLOR = "#EC4899";

export default function ImagePage() {
  return (
    <main className="min-h-screen bg-bg-primary noise-overlay relative">
      <FloatingBlocks />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background glow */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 blur-[100px] pointer-events-none"
          style={{ background: `radial-gradient(ellipse, ${CATEGORY_COLOR} 0%, transparent 70%)` }}
        />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Category badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <Image
                src="/images/pinkblock.png"
                alt="Image"
                width={20}
                height={20}
                className="object-contain"
              />
              <span className="text-sm font-medium" style={{ color: CATEGORY_COLOR }}>Image Generation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Create stunning{" "}
              <span style={{ color: CATEGORY_COLOR }}>images</span>
              <br />with AI
            </h1>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
              Generate, edit and enhance images with powerful AI. From product photography to creative designs, create anything you imagine.
            </p>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{IMAGE_APPS.length}</div>
                <div className="text-sm text-text-tertiary">Tools</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">9+</div>
                <div className="text-sm text-text-tertiary">AI Models</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4K</div>
                <div className="text-sm text-text-tertiary">Resolution</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {IMAGE_APPS.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={app.status === "live" ? `/apps/${app.slug}` : "#"}>
                  <div 
                    className={`group relative rounded-2xl overflow-hidden border border-white/5 bg-bg-secondary/50 backdrop-blur-sm transition-all duration-300 hover:border-white/10 hover:bg-bg-secondary/80 ${app.status !== "live" ? "opacity-70" : ""}`}
                  >
                    {/* Top accent */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-[2px]"
                      style={{ background: CATEGORY_COLOR }}
                    />
                    
                    {/* Content */}
                    <div className="p-6">
                      {/* Icon placeholder */}
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${CATEGORY_COLOR}20`, border: `1px solid ${CATEGORY_COLOR}30` }}
                      >
                        <ImageIcon size={24} style={{ color: CATEGORY_COLOR }} />
                      </div>

                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {app.name}
                      </h3>
                      
                      <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                        {app.description}
                      </p>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-text-tertiary">{app.pricing}</span>
                        {app.status === "coming-soon" ? (
                          <span className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-white/5 text-text-tertiary">
                            <Clock size={12} />
                            Coming Soon
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-xs font-medium" style={{ color: CATEGORY_COLOR }}>
                            Try now
                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
