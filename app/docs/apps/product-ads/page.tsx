"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import Link from "next/link";
import { Megaphone, ArrowRight, Sparkles, Zap, Target, Share2 } from "lucide-react";

const CreditIcon = ({ size = 20 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function ProductAdsDocsPage() {
  return (
    <DocsLayout
      title="Product Ads"
      description="Generate marketing visuals in 30 seconds. Create scroll-stopping ad creatives from your product photos."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "How it works", href: "#how-it-works" },
        { title: "Ad formats", href: "#formats" },
        { title: "Best practices", href: "#best-practices" },
        { title: "Examples", href: "#examples" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-7 h-7 text-pink-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Product Ads</h2>
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Live</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 120 credits per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Product Ads creates scroll-stopping marketing visuals from your product photos. 
          Upload your product, add your brand colors and messaging, and get ready-to-use 
          ad creatives in seconds. Perfect for social media ads, banners, and promotional content.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Sparkles className="w-6 h-6 text-pink-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Ad-Ready</h4>
            <p className="text-xs text-text-secondary">Export for all platforms</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">30 seconds</h4>
            <p className="text-xs text-text-secondary">Per creative</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Target className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Text + CTA</h4>
            <p className="text-xs text-text-secondary">Headlines included</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Share2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">A/B Testing</h4>
            <p className="text-xs text-text-secondary">Multiple variations</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
          <p className="text-sm text-pink-200">
            <strong>Perfect for:</strong> Facebook and Instagram ads, Google Display ads, 
            social media posts, email marketing, and website banners.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">1</div>
            <h4 className="font-medium text-text-primary mb-1">Upload your product</h4>
            <p className="text-sm text-text-secondary">Add your product image</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">2</div>
            <h4 className="font-medium text-text-primary mb-1">Add your branding</h4>
            <p className="text-sm text-text-secondary">Include colors, logo, and messaging</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">3</div>
            <h4 className="font-medium text-text-primary mb-1">Select a style</h4>
            <p className="text-sm text-text-secondary">Choose an ad template or style</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">4</div>
            <h4 className="font-medium text-text-primary mb-1">Generate</h4>
            <p className="text-sm text-text-secondary">Get marketing-ready visuals instantly</p>
          </div>
        </div>
      </section>

      {/* Ad formats */}
      <section id="formats" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Supported ad formats</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Social Media</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Instagram Feed (1080x1080)</li>
              <li>• Instagram Story (1080x1920)</li>
              <li>• Facebook Feed (1200x628)</li>
              <li>• Facebook Story (1080x1920)</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Display Ads</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Leaderboard (728x90)</li>
              <li>• Medium Rectangle (300x250)</li>
              <li>• Large Rectangle (336x280)</li>
              <li>• Skyscraper (160x600)</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">E-commerce</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Product carousel</li>
              <li>• Collection ads</li>
              <li>• Shopping ads</li>
              <li>• Promotional banners</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Email & Web</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Email headers</li>
              <li>• Website banners</li>
              <li>• Hero images</li>
              <li>• Newsletter graphics</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Best practices</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-1">Keep text minimal</h4>
            <p className="text-sm text-text-secondary">
              Less is more. Use punchy headlines and clear CTAs. Avoid cluttering the visual.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Use brand colors consistently</h4>
            <p className="text-sm text-text-secondary">
              Input your exact brand colors (hex codes) for consistent brand identity across all ads.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Test multiple variations</h4>
            <p className="text-sm text-text-secondary">
              Generate 3-5 different styles and A/B test them to find the best performer.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">High contrast</h4>
            <p className="text-sm text-text-secondary">
              Make sure your product stands out. Good contrast = better engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Example use cases</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Flash sale campaign</h4>
            <p className="text-sm text-text-secondary">
              Create urgency with countdown-style visuals and bold discount messaging
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">New product launch</h4>
            <p className="text-sm text-text-secondary">
              Generate teaser visuals and announcement ads for product releases
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Retargeting ads</h4>
            <p className="text-sm text-text-secondary">
              Create product-focused visuals for cart abandonment and retargeting campaigns
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
          <h3 className="text-lg font-semibold text-white mb-2">Ready to create?</h3>
          <p className="text-text-secondary mb-4">Generate scroll-stopping ad creatives in seconds.</p>
          <Link href="/apps/product-ads">
            <button className="px-6 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
              Open Product Ads
            </button>
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
