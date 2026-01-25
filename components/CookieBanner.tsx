"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookies-accepted");
    if (!hasAccepted) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-bg-secondary border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Cookie className="w-5 h-5 text-amber-400" />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-sm text-text-primary mb-1">
                We use cookies to improve your experience.
              </p>
              <p className="text-xs text-text-secondary">
                Only functional cookies — no tracking.
              </p>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <Link 
                href="/cookies" 
                className="text-xs text-text-tertiary hover:text-text-secondary transition-colors"
              >
                More info
              </Link>
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-accent-primary text-black text-sm font-medium rounded-lg hover:bg-accent-primary/90 transition-all"
              >
                Accept
              </button>
              <button
                onClick={handleAccept}
                className="p-1.5 text-text-tertiary hover:text-text-primary transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
