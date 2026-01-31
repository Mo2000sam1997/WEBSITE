"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";

export default function DocsNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-xl border-b border-white/5">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo - far left */}
          <Link href="/docs" className="flex items-center gap-3">
            <Image
              src="/images/mindhello-icon.png"
              alt="Mindhello"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <Image
              src="/images/mindhello-logo-blue.png"
              alt="Mindhello"
              width={160}
              height={40}
              className="hidden sm:block h-8 w-auto"
            />
            <span className="text-xs px-2 py-0.5 rounded bg-accent-primary/20 text-accent-primary font-medium">
              Docs
            </span>
          </Link>

          {/* Right side - buttons only */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 text-sm text-text-primary font-medium transition-colors border border-white/20 rounded-lg hover:bg-white/10"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to website
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2 bg-[#4edc96] text-black text-sm font-semibold rounded-lg hover:bg-[#3fcf85] transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-white/5 bg-bg-primary">
          <div className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to website
            </Link>
            <Link
              href="/signup"
              className="block w-full text-center px-4 py-2 bg-[#4edc96] text-black text-sm font-semibold rounded-lg hover:bg-[#3fcf85] transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
