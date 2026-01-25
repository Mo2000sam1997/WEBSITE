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
        { title: "How it works", href: "#how-it-works" },
        { title: "Use cases", href: "#use-cases" },
        { title: "Templates", href: "#templates" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <Megaphone className="w-7 h-7 text-orange-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Premium App</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">Basic+</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 120 per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Adshot generates professional marketing visuals based on your description. 
          No designer needed. Describe what you want and get ad-ready content in seconds.
        </p>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
              [Placeholder: Instagram ad]
            </div>
            <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
              [Placeholder: Facebook ad]
            </div>
            <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
              [Placeholder: LinkedIn ad]
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-text-primary mb-1">
              <CreditIcon size={28} /> 120
            </div>
            <div className="text-sm text-text-secondary">Per image</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">~30s</div>
            <div className="text-sm text-text-secondary">Average time</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">1:1, 4:5, 16:9</div>
            <div className="text-sm text-text-secondary">Aspect ratios</div>
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
              <h4 className="font-medium text-text-primary mb-1">Describe your ad</h4>
              <p className="text-sm text-text-secondary">
                Describe what you want to see: product, message, style, colors. 
                Example: &quot;Minimalist tech product ad, clean white background, 
                subtle shadows, premium feel&quot;
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Choose format</h4>
              <p className="text-sm text-text-secondary">
                Select the right format: square (1:1) for Instagram, 
                portrait (4:5) for Stories, landscape (16:9) for LinkedIn.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Generate & download</h4>
              <p className="text-sm text-text-secondary">
                Adshot generates your visual. Download directly or generate variations.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
            [Screenshot: Adshot interface with prompt and format selection]
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Use cases</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Social Media Managers</h4>
            <p className="text-sm text-text-secondary">
              Generate daily content for multiple platforms. No waiting for designers, 
              no searching for stock photos.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Small Businesses</h4>
            <p className="text-sm text-text-secondary">
              Professional ads without marketing budget. Create your own visuals for 
              promotions and campaigns.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Agencies</h4>
            <p className="text-sm text-text-secondary">
              Fast concepting and mockups for clients. Generate variations in 
              minutes instead of hours.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">E-commerce</h4>
            <p className="text-sm text-text-secondary">
              Create promotional banners, sale visuals, and product announcements 
              for your webshop.
            </p>
          </div>
        </div>
      </section>

      {/* Templates */}
      <section id="templates">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Prompt templates</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Product launch</h4>
            <p className="text-sm text-text-tertiary font-mono">
              &quot;Modern product launch ad, [product] floating in center, 
              gradient background [color1] to [color2], dynamic lighting, 
              premium feel, no text&quot;
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Sale / Promotion</h4>
            <p className="text-sm text-text-tertiary font-mono">
              &quot;Exciting sale banner, bold colors, energetic mood, 
              [product category] theme, festive confetti, space for text overlay&quot;
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Lifestyle</h4>
            <p className="text-sm text-text-tertiary font-mono">
              &quot;Lifestyle scene with [product], natural setting, warm golden 
              hour lighting, aspirational mood, instagram aesthetic&quot;
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-200">
            <strong>Tip:</strong> Always add &quot;no text&quot; or &quot;space for text overlay&quot; to 
            your prompt so you can add text yourself later.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
