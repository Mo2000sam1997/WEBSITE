"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import { Camera } from "lucide-react";

const CreditIcon = ({ size = 24 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function CleanShotPage() {
  return (
    <DocsLayout
      title="CleanShot"
      description="Transform smartphone photos into webshop-ready product images. Upload, choose style, done."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "How it works", href: "#how-it-works" },
        { title: "Use cases", href: "#use-cases" },
        { title: "Tips", href: "#tips" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Camera className="w-7 h-7 text-green-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Premium App</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">Basic+</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 100 per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          CleanShot transforms amateur product photos into professional e-commerce images. 
          No Photoshop skills needed. Upload your photo and get a webshop-ready result in seconds.
        </p>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-2">
                [Placeholder: Before photo]
              </div>
              <p className="text-sm text-center text-text-tertiary">Original</p>
            </div>
            <div>
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-2">
                [Placeholder: After photo]
              </div>
              <p className="text-sm text-center text-text-tertiary">After CleanShot</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-text-primary mb-1">
              <CreditIcon size={28} /> 100
            </div>
            <div className="text-sm text-text-secondary">Per image</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">~30s</div>
            <div className="text-sm text-text-secondary">Average time</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">PNG</div>
            <div className="text-sm text-text-secondary">Output format</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Upload your photo</h4>
              <p className="text-sm text-text-secondary">
                Upload a product photo from your phone or computer. Accepts JPG, PNG, WEBP.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Choose your style</h4>
              <p className="text-sm text-text-secondary">
                Select a background style: white, gradient, studio, or custom.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Download result</h4>
              <p className="text-sm text-text-secondary">
                CleanShot removes the background, corrects lighting, and enhances details. 
                Download your professional product photo.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
            [Screenshot: CleanShot interface]
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Use cases</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">E-commerce store owners</h4>
            <p className="text-sm text-text-secondary">
              Create professional product photos without a photographer. Perfect for Shopify, 
              WooCommerce, Etsy, and other platforms.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Dropshippers</h4>
            <p className="text-sm text-text-secondary">
              Improve supplier photos to professional quality. Stand out from 
              the competition.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Marketplace sellers</h4>
            <p className="text-sm text-text-secondary">
              Sell faster with better photos. Works for eBay, Amazon, Facebook Marketplace, 
              and similar platforms.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Agencies</h4>
            <p className="text-sm text-text-secondary">
              Deliver product visuals to clients quickly. Save hours of Photoshop work per project.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Tips for best results</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-1">Good lighting</h4>
            <p className="text-sm text-text-secondary">
              Take your photo in daylight or with good lighting. CleanShot improves lighting, 
              but a good starting point helps.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Sharp focus</h4>
            <p className="text-sm text-text-secondary">
              Make sure your product is in focus. Blurry photos give less good results.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Contrast with background</h4>
            <p className="text-sm text-text-secondary">
              A contrasting background helps with automatic background removal.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-200">
            <strong>Tip:</strong> Try uploading multiple angles of your product for a 
            complete product gallery.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
