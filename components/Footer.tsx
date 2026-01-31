import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/images/mindhello-icon.png"
                alt="Mindhello"
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <Image
                src="/images/mindhello-logo-pink.png"
                alt="Mindhello"
                width={140}
                height={36}
                className="h-7 w-auto"
              />
            </div>
            <p className="text-xs text-text-tertiary">AI Creative Workspace for Video, Image & 3D.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/apps" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Apps
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com/mindhelloai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-white/10 transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com/company/mindhelloai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-white/10 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/mindhelloai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-white/10 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="mailto:support@mindhello.ai"
                className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary hover:text-text-primary hover:bg-white/10 transition-all"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-tertiary">© 2026 Mindhello. All rights reserved.</p>
          <p className="text-xs text-text-tertiary">Made in Belgium 🇧🇪</p>
        </div>
      </div>
    </footer>
  );
}
