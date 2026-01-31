"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import Link from "next/link";
import { Camera, ArrowRight, Sparkles, Zap, Image as ImageIcon, ShoppingBag } from "lucide-react";

const CreditIcon = ({ size = 20 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function PhotoshootDocsPage() {
  return (
    <DocsLayout
      title="Photoshoot"
      description="Professional product photography with AI. Transform simple product photos into studio-quality images."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "How it works", href: "#how-it-works" },
        { title: "Best practices", href: "#best-practices" },
        { title: "Background styles", href: "#backgrounds" },
        { title: "Examples", href: "#examples" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
            <Camera className="w-7 h-7 text-pink-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Photoshoot</h2>
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Live</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 100 credits per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Photoshoot transforms your simple product photos into professional studio-quality images. 
          Upload any product image and let AI place it in beautiful, realistic settings. 
          No photographer or studio needed.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Camera className="w-6 h-6 text-pink-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Studio Quality</h4>
            <p className="text-xs text-text-secondary">Professional lighting</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">30 seconds</h4>
            <p className="text-xs text-text-secondary">Per image</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <ImageIcon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Any product</h4>
            <p className="text-xs text-text-secondary">Works with everything</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <ShoppingBag className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">E-commerce</h4>
            <p className="text-xs text-text-secondary">Perfect for stores</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
          <p className="text-sm text-pink-200">
            <strong>Perfect for:</strong> E-commerce product listings, Amazon/Shopify stores, 
            social media product posts, marketing materials, and product catalogs.
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
            <p className="text-sm text-text-secondary">Upload a clear photo of your product (PNG or JPG)</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">2</div>
            <h4 className="font-medium text-text-primary mb-1">Choose a style</h4>
            <p className="text-sm text-text-secondary">Select a background style or describe your own</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">3</div>
            <h4 className="font-medium text-text-primary mb-1">Generate</h4>
            <p className="text-sm text-text-secondary">AI creates a professional product photo</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">4</div>
            <h4 className="font-medium text-text-primary mb-1">Download</h4>
            <p className="text-sm text-text-secondary">Get your studio-quality image ready for use</p>
          </div>
        </div>
      </section>

      {/* Best practices */}
      <section id="best-practices" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Best practices for uploads</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-1">Use a clean background</h4>
            <p className="text-sm text-text-secondary">
              White or solid color backgrounds work best. The AI can remove the background, 
              but cleaner input = better output.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Good lighting</h4>
            <p className="text-sm text-text-secondary">
              Even lighting without harsh shadows. Natural daylight or soft studio lights are ideal.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">High resolution</h4>
            <p className="text-sm text-text-secondary">
              Upload the highest quality image you have. At least 1000x1000 pixels recommended.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Clear product visibility</h4>
            <p className="text-sm text-text-secondary">
              Make sure the entire product is visible and in focus. No cropped edges.
            </p>
          </div>
        </div>
      </section>

      {/* Backgrounds */}
      <section id="backgrounds" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Background styles</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Studio backgrounds</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Pure white (Amazon style)</li>
              <li>• Gradient backgrounds</li>
              <li>• Colored backdrops</li>
              <li>• Light gray professional</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Lifestyle scenes</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Kitchen counter</li>
              <li>• Bathroom shelf</li>
              <li>• Office desk</li>
              <li>• Nature / outdoor</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Premium surfaces</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Marble countertop</li>
              <li>• Wood texture</li>
              <li>• Fabric / linen</li>
              <li>• Glass reflection</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Custom</h4>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Describe any scene you want</li>
              <li>• Match your brand aesthetic</li>
              <li>• Seasonal themes</li>
              <li>• Industry-specific settings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Use case examples</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">E-commerce listing</h4>
            <p className="text-sm text-text-secondary">
              Upload a basic phone photo of your product → Get Amazon-ready white background photos
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Social media</h4>
            <p className="text-sm text-text-secondary">
              Create lifestyle shots of your products in beautiful settings for Instagram
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Marketing materials</h4>
            <p className="text-sm text-text-secondary">
              Generate multiple variations of product photos for ads and campaigns
            </p>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
          <h3 className="text-lg font-semibold text-white mb-2">Ready to create?</h3>
          <p className="text-text-secondary mb-4">Transform your product photos into professional images.</p>
          <Link href="/apps/photoshoot">
            <button className="px-6 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
              Open Photoshoot
            </button>
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
