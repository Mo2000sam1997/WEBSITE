"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-32 h-9">
              <Image
                src="/images/laboboxLogoMetNaam.png"
                alt="Labobox"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Navigation - Midden */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/apps" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Apps
            </Link>
            <Link href="/pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Login Button - Rechts */}
          <div className="hidden md:flex items-center">
            <Link 
              href="/login" 
              className="text-sm px-5 py-2 rounded-lg bg-white text-black font-medium hover:bg-white/90 transition-all duration-300"
            >
              Login
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
              <Link href="/apps" className="block text-sm text-text-secondary py-2" onClick={() => setMobileMenuOpen(false)}>
                Apps
              </Link>
              <Link href="/pricing" className="block text-sm text-text-secondary py-2" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link href="/about" className="block text-sm text-text-secondary py-2" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/contact" className="block text-sm text-text-secondary py-2" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <Link 
                href="/login" 
                className="block text-sm text-black py-2 px-4 rounded-lg bg-white text-center hover:bg-white/90 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
