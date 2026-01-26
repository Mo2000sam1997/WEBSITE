"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import { Megaphone } from "lucide-react";

const CreditIcon = ({ size = 24 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function AdshotPage() {
  return (
    <DocsLayout
      title="Adshot"
      description="Generate scroll-stopping ads in 30 seconds. Perfect for Instagram, Facebook, LinkedIn."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "13 Styles", href: "#styles" },
        { title: "How it works", href: "#how-it-works" },
        { title: "Tips", href: "#tips" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-7 h-7 text-orange-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-1">Adshot</h2>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 120 per generation (5 scenes)
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Upload <strong className="text-text-primary">1 product photo</strong> and get 
          <strong className="text-text-primary"> 5 unique marketing scenes</strong>. 
          Each scene places your product in a different creative context - perfect for ads, social media, and campaigns.
        </p>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-orange-200">
            <strong>Key difference from CleanShot:</strong> Adshot creates <em>diverse marketing visuals</em> 
            with different backgrounds and moods. CleanShot creates <em>consistent product catalog photos</em>.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-text-primary mb-1">
              <CreditIcon size={28} /> 120
            </div>
            <div className="text-sm text-text-secondary">Per generation</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">1+</div>
            <div className="text-sm text-text-secondary">Photo required</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">5</div>
            <div className="text-sm text-text-secondary">Scenes output</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">13</div>
            <div className="text-sm text-text-secondary">Styles available</div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <section id="styles" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">13 Marketing Styles</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3">Studio</h4>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Studio Ice</span>
                <span className="text-xs text-text-tertiary ml-2">Clean with ice/glass elements</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Studio Minimal</span>
                <span className="text-xs text-text-tertiary ml-2">Pure minimal background</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Studio Dramatic</span>
                <span className="text-xs text-text-tertiary ml-2">Bold, high-contrast, striking</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Studio Neon</span>
                <span className="text-xs text-text-tertiary ml-2">Modern, vibrant, energetic</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3">Lifestyle</h4>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Lifestyle Luxury</span>
                <span className="text-xs text-text-tertiary ml-2">Premium lifestyle context</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Lifestyle Action</span>
                <span className="text-xs text-text-tertiary ml-2">Dynamic action shot</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Lifestyle Outdoor</span>
                <span className="text-xs text-text-tertiary ml-2">Natural, fresh, authentic</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Lifestyle Cozy</span>
                <span className="text-xs text-text-tertiary ml-2">Warm, intimate, comfortable</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3">Seasonal</h4>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Seasonal Winter</span>
                <span className="text-xs text-text-tertiary ml-2">Winter themed</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Seasonal Spring</span>
                <span className="text-xs text-text-tertiary ml-2">Fresh, light, blooming</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Seasonal Summer</span>
                <span className="text-xs text-text-tertiary ml-2">Bright, vibrant, sunny</span>
              </div>
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Seasonal Autumn</span>
                <span className="text-xs text-text-tertiary ml-2">Warm, cozy, rustic</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-text-tertiary uppercase tracking-wider mb-3">Creative</h4>
            <div className="space-y-2">
              <div className="p-3 rounded-lg bg-bg-secondary border border-white/10">
                <span className="text-sm text-text-primary">Painting</span>
                <span className="text-xs text-text-tertiary ml-2">Artistic, creative, expressive</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-text-tertiary mt-4">
          Each style has 7 background variations for maximum diversity in your marketing materials.
        </p>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Upload your product photo</h4>
              <p className="text-sm text-text-secondary">
                Upload 1 or more photos of your product. A clear, well-lit photo gives the best results.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Set your brand vibe</h4>
              <p className="text-sm text-text-secondary">
                Choose your brand vibe: <strong>Luxury</strong> (premium, elegant), <strong>Playful</strong> (fun, energetic), 
                <strong> Minimal</strong> (clean, simple), or <strong>Bold</strong> (striking, attention-grabbing).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Get 5 unique scenes</h4>
              <p className="text-sm text-text-secondary">
                Adshot generates 5 marketing scenes with different styles and backgrounds. 
                Each scene is unique and ready for your ads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Tips for best results</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
            <h4 className="font-medium text-orange-300 mb-2">Clear product photo</h4>
            <p className="text-sm text-text-secondary">
              Use a clear, well-lit photo where your product is clearly visible. 
              The AI needs to understand your product to place it in new contexts.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Match vibe to brand</h4>
            <p className="text-sm text-text-secondary">
              Choose a vibe that matches your brand identity. A luxury watch brand should use &quot;Luxury&quot;, 
              while a kids toy brand fits better with &quot;Playful&quot;.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Try different styles</h4>
            <p className="text-sm text-text-secondary">
              Each of the 13 styles creates a completely different mood. 
              Experiment to find what works best for your campaign.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Seasonal campaigns</h4>
            <p className="text-sm text-text-secondary">
              Use seasonal styles for holiday campaigns. Winter style for Christmas, 
              Summer for beach sales, Autumn for back-to-school.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-200">
            <strong>Pro tip:</strong> Run Adshot multiple times with different vibes to build 
            a library of marketing assets for A/B testing your ads.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
