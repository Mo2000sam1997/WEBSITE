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
        { title: "What you get", href: "#output" },
        { title: "Settings", href: "#settings" },
        { title: "How it works", href: "#how-it-works" },
        { title: "Tips for best results", href: "#tips" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
            <Camera className="w-7 h-7 text-green-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-1">CleanShot</h2>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 100 per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          CleanShot transforms amateur product photos into professional e-commerce images. 
          Upload <strong className="text-text-primary">3 or more photos</strong> of your product and get 
          <strong className="text-text-primary"> 5 consistent professional views</strong> in return. 
          No Photoshop skills needed.
        </p>

        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-green-200">
            <strong>How it works:</strong> Upload 3+ photos of your product from different angles. 
            CleanShot analyzes them and generates 5 professional views: front, angle, side, back, and closeup.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-text-primary mb-1">
              <CreditIcon size={28} /> 100
            </div>
            <div className="text-sm text-text-secondary">Per generation</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">3+</div>
            <div className="text-sm text-text-secondary">Photos required</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">5</div>
            <div className="text-sm text-text-secondary">Views output</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">~30s</div>
            <div className="text-sm text-text-secondary">Per view</div>
          </div>
        </div>
      </section>

      {/* Output */}
      <section id="output" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">What you get: 5 professional views</h2>
        
        <div className="grid grid-cols-5 gap-3 mb-6">
          {["Front", "Angle", "Side", "Back", "Closeup"].map((view) => (
            <div key={view} className="text-center">
              <div className="aspect-square rounded-lg bg-bg-secondary border border-white/10 flex items-center justify-center text-text-tertiary text-xs mb-2">
                {view}
              </div>
              <p className="text-xs text-text-secondary">{view}</p>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-text-secondary">
          Each view maintains consistent lighting, color accuracy, and product identity. 
          Perfect for creating a complete product gallery from amateur photos.
        </p>
      </section>

      {/* Settings */}
      <section id="settings" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Settings</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-3">Background</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white/5 text-center">
                <div className="w-8 h-8 rounded-full bg-white mx-auto mb-2" />
                <span className="text-sm text-text-secondary">White</span>
                <p className="text-xs text-text-tertiary mt-1">Clean, minimal</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 text-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 mx-auto mb-2" />
                <span className="text-sm text-text-secondary">Studio</span>
                <p className="text-xs text-text-tertiary mt-1">Professional lighting</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 text-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 mx-auto mb-2" />
                <span className="text-sm text-text-secondary">Lifestyle</span>
                <p className="text-xs text-text-tertiary mt-1">Natural context</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-3">Style</h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-lg bg-white/5 text-center">
                <span className="text-sm text-text-secondary">Minimal</span>
                <p className="text-xs text-text-tertiary mt-1">Clean & simple</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 text-center">
                <span className="text-sm text-text-secondary">Professional</span>
                <p className="text-xs text-text-tertiary mt-1">Business-ready</p>
              </div>
              <div className="p-3 rounded-lg bg-white/5 text-center">
                <span className="text-sm text-text-secondary">Luxury</span>
                <p className="text-xs text-text-tertiary mt-1">Premium feel</p>
              </div>
            </div>
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
              <h4 className="font-medium text-text-primary mb-1">Upload 3+ photos</h4>
              <p className="text-sm text-text-secondary">
                Upload at least 3 photos of your product from different angles. 
                More photos = better results. Accepts JPG, PNG, WEBP (max 10MB each).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Choose background & style</h4>
              <p className="text-sm text-text-secondary">
                Select your preferred background (white, studio, lifestyle) and style (minimal, professional, luxury).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Get 5 professional views</h4>
              <p className="text-sm text-text-secondary">
                CleanShot generates 5 consistent views: front, angle, side, back, and closeup. 
                Each view maintains product identity, lighting, and colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Tips for best results</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <h4 className="font-medium text-green-300 mb-2">Upload more photos</h4>
            <p className="text-sm text-text-secondary">
              The more reference photos you provide, the better CleanShot understands your product. 
              <strong className="text-text-primary"> 5-7 photos from different angles</strong> gives the best results.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Good lighting in source photos</h4>
            <p className="text-sm text-text-secondary">
              Take photos in daylight or with good lighting. CleanShot improves lighting, 
              but better input = better output.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Sharp focus</h4>
            <p className="text-sm text-text-secondary">
              Make sure your product is in focus. Blurry photos result in less accurate 3D reconstruction.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Show all sides</h4>
            <p className="text-sm text-text-secondary">
              Include photos of front, back, sides, top, and any unique details. 
              This helps generate accurate views from angles you didn&apos;t photograph.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Contrasting background</h4>
            <p className="text-sm text-text-secondary">
              Place your product on a contrasting background (e.g., white product on dark surface). 
              This helps with automatic product isolation.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-200">
            <strong>Pro tip:</strong> For complex products (jewelry, electronics with details), 
            upload 7+ photos including macro shots of important details.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
