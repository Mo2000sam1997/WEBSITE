import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-8">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  About
                </Link>
              </li>
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
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Brand */}
          <div>
            <span className="text-sm font-semibold text-text-primary">Labobox</span>
            <p className="text-xs text-text-tertiary mt-2">All the AI tools you need.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-xs text-text-tertiary">© 2026 Labobox. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
