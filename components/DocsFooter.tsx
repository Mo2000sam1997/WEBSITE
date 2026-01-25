import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function DocsFooter() {
  return (
    <footer className="border-t border-white/5 mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Docs Home
            </Link>
            <a 
              href="/" 
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Labobox
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="/contact" 
              className="flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Support
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <p className="text-xs text-text-tertiary">© 2026 Labobox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
