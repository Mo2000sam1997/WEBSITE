"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Video, ImageIcon, Box, MessageSquare, Wand2, Palette, User, Scissors } from "lucide-react";

// Dropdown menu items voor elke categorie
const DROPDOWN_MENUS = {
  Video: {
    color: "#3B82F6",
    items: [
      { name: "Text to Video", href: "/apps/text-to-video", icon: Sparkles, description: "Generate videos from text prompts" },
      { name: "Image to Video", href: "/apps/image-to-video", icon: Video, description: "Animate images into videos" },
    ]
  },
  Image: {
    color: "#EC4899",
    items: [
      { name: "Create Image", href: "/apps/create-image", icon: Sparkles, description: "Generate images with AI" },
      { name: "Image Edit", href: "/apps/image-edit", icon: Wand2, description: "Edit and enhance images" },
      { name: "Photoshoot", href: "/apps/photoshoot", icon: ImageIcon, description: "Professional product photos" },
      { name: "Product Ads", href: "/apps/product-ads", icon: Palette, description: "Marketing visuals for products" },
      { name: "Face Swap", href: "/apps/face-swap", icon: User, description: "Swap faces in images" },
    ]
  },
  "3D": {
    color: "#8B5CF6",
    items: [
      { name: "Text to 3D", href: "/apps/text-to-3d", icon: Box, description: "Generate 3D models from text" },
      { name: "Image to 3D", href: "/apps/image-to-3d", icon: Box, description: "Convert images to 3D models" },
    ]
  },
  Apps: {
    color: "#22C55E",
    items: [
      { name: "Chat Models", href: "/apps/chat-models", icon: MessageSquare, description: "15 AI chat models" },
    ]
  }
};

const NAV_ITEMS = [
  { name: "Video", href: "/video", color: "#3B82F6", hasDropdown: true },
  { name: "Image", href: "/image", color: "#EC4899", hasDropdown: true },
  { name: "3D", href: "/3d", color: "#8B5CF6", hasDropdown: true },
  { name: "Apps", href: "/apps", color: "#22C55E", hasDropdown: true },
  { name: "Pricing", href: "/pricing", hasDropdown: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pt-4 ${
        scrolled
          ? "bg-bg-primary/80 backdrop-blur-xl border-b border-white/5 pt-0"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Links */}
          <Link href="/" className="flex items-center flex-shrink-0 gap-2">
            <Image
              src="/images/mindhello-icon.png"
              alt="Mindhello"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <Image
              src="/images/mindhello-logo-green.png"
              alt="Mindhello"
              width={160}
              height={40}
              className="hidden sm:block h-8 w-auto"
            />
          </Link>

          {/* Navigation - Midden */}
          <div className="hidden md:flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link 
                  href={item.href} 
                  className="flex items-center gap-1 px-4 py-2 text-sm text-text-secondary hover:text-white transition-colors rounded-lg hover:bg-white/5"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown 
                      size={14} 
                      className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && DROPDOWN_MENUS[item.name as keyof typeof DROPDOWN_MENUS] && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 w-72 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      {/* Header met preview image */}
                      <div 
                        className="p-4 border-b border-white/5"
                        style={{ background: `linear-gradient(135deg, ${item.color}15 0%, transparent 100%)` }}
                      >
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-10 h-10 rounded-lg flex items-center justify-center"
                            style={{ backgroundColor: `${item.color}20` }}
                          >
                            {item.name === "Video" && <Video size={20} style={{ color: item.color }} />}
                            {item.name === "Image" && <ImageIcon size={20} style={{ color: item.color }} />}
                            {item.name === "3D" && <Box size={20} style={{ color: item.color }} />}
                            {item.name === "Apps" && <Sparkles size={20} style={{ color: item.color }} />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{item.name}</h3>
                            <p className="text-xs text-text-tertiary">
                              {item.name === "Video" && "AI Video Generation"}
                              {item.name === "Image" && "AI Image Tools"}
                              {item.name === "3D" && "3D Model Generation"}
                              {item.name === "Apps" && "AI Applications"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Menu Items */}
                      <div className="p-2">
                        {DROPDOWN_MENUS[item.name as keyof typeof DROPDOWN_MENUS].items.map((subItem) => {
                          const IconComponent = subItem.icon;
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div 
                                className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                                style={{ backgroundColor: `${item.color}15` }}
                              >
                                <IconComponent size={16} style={{ color: item.color }} />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-white group-hover:text-white">{subItem.name}</h4>
                                <p className="text-xs text-text-tertiary">{subItem.description}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      {/* Footer met "View All" */}
                      <div className="p-2 border-t border-white/5">
                        <Link
                          href={item.href}
                          className="flex items-center justify-center gap-2 p-2 text-sm rounded-lg hover:bg-white/5 transition-colors"
                          style={{ color: item.color }}
                        >
                          <span>View all {item.name}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Auth Buttons - Rechts */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/login" 
              className="text-sm px-5 py-2 rounded-lg text-text-secondary hover:text-text-primary transition-all duration-300"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="text-sm px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all duration-300"
            >
              Sign up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 space-y-3 border-t border-white/5"
            >
              {NAV_ITEMS.map((item) => (
                <div key={item.name}>
                  <Link 
                    href={item.href} 
                    className="block text-sm text-text-secondary py-2 font-medium" 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{ color: item.color }}
                  >
                    {item.name}
                  </Link>
                  {/* Mobile sub-items */}
                  {item.hasDropdown && DROPDOWN_MENUS[item.name as keyof typeof DROPDOWN_MENUS] && (
                    <div className="pl-4 space-y-1">
                      {DROPDOWN_MENUS[item.name as keyof typeof DROPDOWN_MENUS].items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-xs text-text-tertiary py-1.5 hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-white/5 space-y-3">
                <Link 
                  href="/login" 
                  className="block text-sm text-text-secondary py-2 text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="block text-sm text-black py-2 px-4 rounded-lg bg-white text-center hover:bg-white/90 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign up
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
