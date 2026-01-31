"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Image as ImageIcon, 
  MessageSquare, 
  Box, 
  Sparkles,
  ChevronRight,
  Search,
  Code,
  CreditCard,
  Rocket,
  ArrowRight,
  Home,
  HelpCircle,
  Camera,
  Megaphone
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DocsNavbar from "@/components/DocsNavbar";
import DocsFooter from "@/components/DocsFooter";

const CreditIcon = ({ size = 24 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

// Sidebar navigation structure
const sidebarNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs", active: true },
      { title: "Quickstart", href: "/docs/quickstart" },
      { title: "Create Account", href: "/docs/account" },
    ],
  },
  {
    title: "Standard Apps",
    items: [
      { title: "Chat Models", href: "/docs/apps/chat-models" },
      { title: "Image Models", href: "/docs/apps/image-models" },
    ],
  },
  {
    title: "Premium Apps",
    items: [
      { title: "CleanShot", href: "/docs/apps/cleanshot" },
      { title: "Adshot", href: "/docs/apps/adshot" },
      { title: "3D Studio", href: "/docs/apps/3d-studio" },
    ],
  },
  {
    title: "Billing",
    items: [
      { title: "Understanding Credits", href: "/docs/credits" },
      { title: "Pricing Plans", href: "/docs/pricing" },
      { title: "Top-Up Credits", href: "/docs/top-up" },
    ],
  },
];

// Product cards for hero section
const productCards = [
  {
    title: "Standard Apps",
    subtitle: "Chat & Image Models",
    description: "15 chat models (GPT-5, Claude, Gemini, Llama) and 9 image generators (Flux.2, Seedream). Available on all plans.",
    icon: MessageSquare,
    color: "#00d9ff",
    href: "/docs/apps/chat-models",
    cta: "Explore models",
  },
  {
    title: "Premium Apps",
    subtitle: "Professional tools",
    description: "CleanShot for product photos, Adshot for marketing visuals, 3D Studio for 3D models.",
    icon: Sparkles,
    color: "#a78bfa",
    href: "/docs/apps/cleanshot",
    cta: "View premium apps",
  },
  {
    title: "Credits System",
    subtitle: "Simple & transparent",
    description: "Use credits for all AI tools. See the cost before every action. No hidden fees.",
    icon: CreditCard,
    color: "#4edc96",
    href: "/docs/credits",
    cta: "Learn about credits",
  },
];

// Apps overview
const apps = [
  {
    name: "Chat Models",
    description: "15 AI chat models in one interface. From free Llama to premium Claude.",
    icon: MessageSquare,
    color: "#77bdf8",
    credits: "1-14 credits per message",
    href: "/docs/apps/chat-models",
    models: ["Llama 3.3 70B", "GPT-5 Nano", "GPT-5 Chat", "Claude Sonnet 4.5", "Gemini 2.5 Pro", "DeepSeek V3.2"],
  },
  {
    name: "Image Models",
    description: "9 AI image models. From budget to premium quality.",
    icon: ImageIcon,
    color: "#fc85d7",
    credits: "5-75 credits per image",
    href: "/docs/apps/image-models",
    models: ["Flux.2 Flex", "Flux.2 Pro", "Flux.2 Max", "GPT-5 Standard", "Gemini Pro", "Seedream 4.5"],
  },
  {
    name: "CleanShot",
    description: "Transform smartphone photos into webshop-ready product images.",
    icon: Camera,
    color: "#4edc96",
    credits: "100 credits per image",
    href: "/docs/apps/cleanshot",
    models: null,
  },
  {
    name: "Adshot",
    description: "Generate scroll-stopping ads in 30 seconds.",
    icon: Megaphone,
    color: "#f97316",
    credits: "120 credits per image",
    href: "/docs/apps/adshot",
    models: null,
  },
  {
    name: "3D Studio",
    description: "Turn text or images into 3D models. GLB/OBJ export.",
    icon: Box,
    color: "#a78bfa",
    credits: "790 credits per model",
    href: "/docs/apps/3d-studio",
    models: null,
  },
];

// Credits reference
const creditsReference = [
  { type: "Budget Chat", credits: "1", examples: "Llama 3.3, GPT-5 Nano, Gemini Flash, Mistral Nemo" },
  { type: "Standard Chat", credits: "2-5", examples: "Claude Haiku 4.5, Perplexity Sonar, Gemini 2.5 Pro" },
  { type: "Premium Chat", credits: "8-14", examples: "GPT-5 Chat (8), Claude Sonnet 4.5 (14)" },
  { type: "Budget Image", credits: "5-15", examples: "Flux.2 Flex (5), Gemini Flash (15)" },
  { type: "Standard Image", credits: "30-45", examples: "GPT-5 Mini (30), Flux.2 Pro (45), Seedream (45)" },
  { type: "Premium Image", credits: "60-75", examples: "GPT-5 Standard (60), Flux.2 Max (75)" },
  { type: "Premium Apps", credits: "100-790", examples: "CleanShot (100), Adshot (120), 3D Studio (790)" },
];

export default function DocsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="min-h-screen bg-bg-primary">
      <DocsNavbar />

      <div className="pt-20 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0 border-r border-white/5 h-[calc(100vh-80px)] sticky top-20 overflow-y-auto bg-[#0a0a0a]">
          <div className="p-6">
            {/* Quick Links */}
            <div className="mb-6 space-y-1">
              <Link href="/docs" className="flex items-center gap-2 text-sm text-accent-primary py-1.5">
                <Home className="w-4 h-4" />
                Home
              </Link>
              <Link href="/contact" className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary py-1.5 transition-colors">
                <HelpCircle className="w-4 h-4" />
                Support
              </Link>
            </div>

            <div className="h-px bg-white/5 mb-6" />

            {/* Navigation Sections */}
            {sidebarNav.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Link
                        href={item.href}
                        className={`block text-sm py-1.5 px-3 rounded-lg transition-all ${
                          item.active
                            ? "bg-accent-primary/10 text-accent-primary border-l-2 border-accent-primary -ml-0.5 pl-[14px]"
                            : "text-text-secondary hover:text-text-primary hover:bg-white/5"
                        }`}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Hero Section */}
          <section className="border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 py-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text */}
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-text-primary mb-6"
                  >
                    Mindhello Documentation
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-text-secondary mb-8"
                  >
                    One platform, all AI tools. Learn how to use 15 chat models, 
                    9 image generators, and premium apps like CleanShot and 3D Studio.
                  </motion.p>

                  {/* Search */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative mb-6"
                  >
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                    <input
                      type="text"
                      placeholder="Search documentation..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-16 py-4 rounded-xl bg-bg-secondary border border-white/10 text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary/50 transition-all"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-text-tertiary bg-white/10 px-2 py-1 rounded">
                      ⌘K
                    </span>
                  </motion.div>

                  {/* Quick Start Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Link
                      href="/docs/quickstart"
                      className="inline-flex items-center gap-3 p-4 rounded-xl bg-bg-secondary border border-white/10 hover:border-accent-primary/30 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent-primary/20 flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-accent-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-text-primary">Quickstart Guide</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-accent-primary/20 text-accent-primary font-medium">
                            5 MIN
                          </span>
                        </div>
                        <span className="text-sm text-text-secondary">Get started with 750 credits</span>
                      </div>
                      <ChevronRight className="w-5 h-5 text-text-tertiary group-hover:text-accent-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  </motion.div>
                </div>

                {/* Right: Credit Overview */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="hidden lg:block"
                >
                  <div className="rounded-2xl overflow-hidden bg-bg-secondary border border-white/10 p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Credits Quick Reference</h3>
                    <div className="space-y-3">
                      {creditsReference.slice(0, 5).map((item) => (
                        <div key={item.type} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                          <div>
                            <span className="text-sm text-text-primary">{item.type}</span>
                            <p className="text-xs text-text-tertiary">{item.examples}</p>
                          </div>
                          <span className="text-sm font-mono text-accent-primary">{item.credits}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/signup" className="mt-4 text-sm text-accent-primary hover:underline flex items-center gap-1">
                      Start for free <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Product Cards */}
          <section className="border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 py-16">
              <div className="grid md:grid-cols-3 gap-6">
                {productCards.map((card, index) => (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link href={card.href}>
                      <div className="group h-full p-6 rounded-2xl bg-bg-secondary border border-white/10 hover:border-white/20 transition-all">
                        <div className="flex items-center gap-2 mb-4">
                          <card.icon className="w-5 h-5" style={{ color: card.color }} />
                          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: card.color }}>
                            {card.subtitle}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                          {card.title}
                        </h3>
                        <p className="text-sm text-text-secondary mb-6">
                          {card.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all" style={{ color: card.color }}>
                          {card.cta}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Apps Overview */}
          <section className="border-b border-white/5">
            <div className="max-w-5xl mx-auto px-6 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-8">All Apps</h2>
                <div className="space-y-4">
                  {apps.map((app) => (
                    <Link 
                      key={app.name} 
                      href={app.href}
                      className="block p-5 rounded-xl bg-bg-secondary border border-white/10 hover:border-white/20 transition-all group cursor-pointer"
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `${app.color}20` }}
                        >
                          <app.icon className="w-6 h-6" style={{ color: app.color }} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors mb-1">{app.name}</h3>
                          <p className="text-sm text-text-secondary mb-2">{app.description}</p>
                          <div className="flex items-center gap-4">
                            <span className="text-xs text-text-tertiary font-mono">{app.credits}</span>
                            {app.models && (
                              <span className="text-xs text-text-tertiary">
                                {app.models.slice(0, 3).join(", ")}...
                              </span>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="w-5 h-5 text-text-tertiary flex-shrink-0 group-hover:text-accent-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Credits Table */}
          <section>
            <div className="max-w-5xl mx-auto px-6 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold text-text-primary mb-4">Understanding Credits</h2>
                <p className="text-text-secondary mb-8">
                  Credits are the universal currency in Mindhello.ai. Budget models cost 1 credit, premium models cost more.
                  You always see the credit cost before any action.
                </p>

                <div className="rounded-xl border border-white/10 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-white/5">
                      <tr>
                        <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider px-6 py-4">Type</th>
                        <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider px-6 py-4">
                          <span className="flex items-center gap-1"><CreditIcon size={16} /> Credits</span>
                        </th>
                        <th className="text-left text-xs font-semibold text-text-tertiary uppercase tracking-wider px-6 py-4">Models</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {creditsReference.map((item) => (
                        <tr key={item.type} className="hover:bg-white/5 transition-colors">
                          <td className="px-6 py-4 text-sm text-text-primary">{item.type}</td>
                          <td className="px-6 py-4">
                            <span className="flex items-center gap-2 text-sm font-medium text-text-primary">
                              <CreditIcon size={22} /> {item.credits}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-text-secondary">{item.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 grid md:grid-cols-2 gap-4">
                  <Link href="/pricing">
                    <div className="group p-5 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <CreditCard className="w-5 h-5 text-accent-primary" />
                        <span className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                          View Pricing Plans
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        Free: 750 credits. Basic: 5,000. Pro: 25,000. Team: 100,000.
                      </p>
                    </div>
                  </Link>
                  <Link href="/docs/top-up">
                    <div className="group p-5 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <Zap className="w-5 h-5 text-yellow-400" />
                        <span className="font-medium text-text-primary group-hover:text-accent-primary transition-colors">
                          Top-Up Credits
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary">
                        Buy extra credits: 1,000, 5,000, or 15,000 packs available.
                      </p>
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          <DocsFooter />
        </div>
      </div>
    </main>
  );
}
