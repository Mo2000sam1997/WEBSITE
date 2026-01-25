"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlocks from "@/components/FloatingBlocks";

// Blog post data - to be replaced by CMS/database later
const blogPosts = [
  {
    id: "introducing-labobox",
    title: "Introducing Labobox: Your AI Toolkit for Modern Creators",
    excerpt: "We're launching Labobox — a unified platform bringing together the best AI models for image generation, chat, 3D modeling, and more. No more switching between dozens of tools.",
    category: "Announcement",
    author: "Labobox Team",
    date: "January 25, 2026",
    readTime: "4 min read",
    image: "/images/grayblock.png",
    featured: true,
  },
  {
    id: "cleanshot-launch",
    title: "CleanShot: Professional Product Photos in Seconds",
    excerpt: "E-commerce sellers spend hours editing product photos. CleanShot uses AI to transform amateur shots into professional product images — automatically removing backgrounds, fixing lighting, and enhancing details.",
    category: "Product",
    author: "Labobox Team",
    date: "January 24, 2026",
    readTime: "3 min read",
    image: "/images/greenblock.png",
    featured: false,
  },
  {
    id: "ai-image-models-compared",
    title: "FLUX vs DALL-E vs Midjourney: Which AI Image Model Should You Use?",
    excerpt: "We tested 9 AI image models side by side. Here's our honest comparison of speed, quality, and pricing — plus when to use each one for best results.",
    category: "Guide",
    author: "Labobox Team",
    date: "January 23, 2026",
    readTime: "7 min read",
    image: "/images/blueblock.png",
    featured: false,
  },
  {
    id: "3d-generation-future",
    title: "Text-to-3D: The Next Frontier in AI Content Creation",
    excerpt: "3D content used to require expensive software and years of training. Now, you can generate 3D models from text descriptions in minutes. Here's how it works and why it matters.",
    category: "Industry",
    author: "Labobox Team",
    date: "January 22, 2026",
    readTime: "5 min read",
    image: "/images/purpleblock.png",
    featured: false,
  },
  {
    id: "choosing-chat-model",
    title: "GPT-4 vs Claude vs Gemini: Choosing the Right Chat Model",
    excerpt: "With 15 chat models available on Labobox, how do you pick the right one? We break down the strengths of each model for coding, writing, analysis, and creative tasks.",
    category: "Guide",
    author: "Labobox Team",
    date: "January 21, 2026",
    readTime: "6 min read",
    image: "/images/pinkblock.png",
    featured: false,
  },
  {
    id: "adshot-marketing-visuals",
    title: "Creating Marketing Visuals with AI: A Complete Guide",
    excerpt: "Adshot generates scroll-stopping marketing visuals in 30 seconds. Learn how to use AI-powered image generation for ads, social media, and landing pages.",
    category: "Tutorial",
    author: "Labobox Team",
    date: "January 20, 2026",
    readTime: "5 min read",
    image: "/images/greenblock.png",
    featured: false,
  },
];

const categories = ["All", "Announcement", "Product", "Guide", "Tutorial", "Industry"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured || selectedCategory !== "All");

  return (
    <main className="min-h-screen bg-bg-primary noise-overlay">
      <FloatingBlocks intensity="subtle" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Labobox <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Insights, tutorials, and updates from the world of AI. Learn how to get the most out of your AI toolkit.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12"
          >
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-bg-secondary border border-white/10 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary/50 transition-all"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent-primary text-black"
                      : "bg-white/5 text-text-secondary hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="pb-12 px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="group relative rounded-2xl overflow-hidden bg-bg-secondary border border-white/10 hover:border-accent-primary/50 transition-all duration-300">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                      <Image
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-secondary/80 md:block hidden" />
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 rounded-full bg-accent-primary/20 text-accent-primary text-xs font-medium">
                          Featured
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-text-secondary text-xs">
                          {featuredPost.category}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 group-hover:text-accent-primary transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-text-secondary mb-6 line-clamp-3">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-text-tertiary">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <article className="group h-full rounded-xl overflow-hidden bg-bg-secondary border border-white/10 hover:border-accent-primary/30 transition-all duration-300">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-text-primary text-xs">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-text-tertiary">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-text-secondary">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 text-accent-primary hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl bg-gradient-to-br from-accent-primary/20 to-purple-500/20 border border-white/10 p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
              Stay in the loop
            </h2>
            <p className="text-text-secondary mb-8 max-w-lg mx-auto">
              Get the latest AI insights, product updates, and tutorials delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary/50"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-accent-primary text-black font-semibold hover:bg-accent-primary/90 transition-all flex items-center justify-center gap-2"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
