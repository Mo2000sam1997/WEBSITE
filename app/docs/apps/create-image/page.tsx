"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import Link from "next/link";
import { ImageIcon, ArrowRight, Sparkles, Zap, Palette, Download } from "lucide-react";

const imageModels = [
  { name: "Flux.2 Flex", credits: 5, tier: "Budget", speed: "~2s", best: "Fast generations, experiments" },
  { name: "Gemini Flash", credits: 15, tier: "Budget", speed: "~3s", best: "Good quality, budget-friendly" },
  { name: "GPT-5 Mini", credits: 30, tier: "Standard", speed: "~5s", best: "Text in images, consistent" },
  { name: "Gemini Pro", credits: 30, tier: "Standard", speed: "~5s", best: "Photorealism" },
  { name: "Flux.2 Pro", credits: 45, tier: "Standard", speed: "~8s", best: "High quality, fine details" },
  { name: "Seedream 4.5", credits: 45, tier: "Standard", speed: "~8s", best: "Artistic, stylized" },
  { name: "Gemini 2.5", credits: 45, tier: "Standard", speed: "~6s", best: "Latest Google model" },
  { name: "GPT-5 Standard", credits: 60, tier: "Premium", speed: "~10s", best: "Best OpenAI quality" },
  { name: "Flux.2 Max", credits: 75, tier: "Premium", speed: "~12s", best: "Highest quality possible" },
];

const CreditIcon = ({ size = 20 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function CreateImageDocsPage() {
  return (
    <DocsLayout
      title="Create Image"
      description="Generate stunning images from text with 9 AI models. From quick drafts to photorealistic masterpieces."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "How it works", href: "#how-it-works" },
        { title: "All models", href: "#all-models" },
        { title: "Choosing a model", href: "#choosing" },
        { title: "Prompt tips", href: "#tips" },
        { title: "Examples", href: "#examples" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
            <ImageIcon className="w-7 h-7 text-pink-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Create Image</h2>
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Live</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 5-75 credits per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Create Image gives you access to 9 powerful AI image generation models in one place. 
          Simply describe what you want to see, choose your preferred model, and watch AI bring 
          your vision to life in seconds.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Sparkles className="w-6 h-6 text-pink-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">9 Models</h4>
            <p className="text-xs text-text-secondary">Budget to premium</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">2-12 sec</h4>
            <p className="text-xs text-text-secondary">Generation time</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Palette className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">Any style</h4>
            <p className="text-xs text-text-secondary">Photo, art, 3D, etc.</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Download className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">1024x1024</h4>
            <p className="text-xs text-text-secondary">High resolution</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">1</div>
            <h4 className="font-medium text-text-primary mb-1">Describe your image</h4>
            <p className="text-sm text-text-secondary">Type a detailed description of what you want to create</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">2</div>
            <h4 className="font-medium text-text-primary mb-1">Choose a model</h4>
            <p className="text-sm text-text-secondary">Select from 9 AI models based on speed vs quality</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">3</div>
            <h4 className="font-medium text-text-primary mb-1">Generate</h4>
            <p className="text-sm text-text-secondary">Click generate and get your image in seconds</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-bold mb-3">4</div>
            <h4 className="font-medium text-text-primary mb-1">Download or edit</h4>
            <p className="text-sm text-text-secondary">Save your image or continue editing with prompts</p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-pink-500/10 border border-pink-500/20">
          <p className="text-sm text-pink-200">
            <strong>Tip:</strong> Start with a budget model like Flux.2 Flex to test your prompt, 
            then upgrade to premium for the final result.
          </p>
        </div>
      </section>

      {/* All models */}
      <section id="all-models" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">All models</h2>
        
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Model</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">
                  <span className="flex items-center gap-1"><CreditIcon size={12} /> Credits</span>
                </th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Speed</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Tier</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3 hidden md:table-cell">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {imageModels.map((model) => (
                <tr key={model.name} className="hover:bg-white/5">
                  <td className="px-4 py-3 text-sm text-text-primary font-medium">{model.name}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                      <CreditIcon size={18} /> {model.credits}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">{model.speed}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      model.tier === "Budget" ? "bg-green-500/20 text-green-400" :
                      model.tier === "Standard" ? "bg-blue-500/20 text-blue-400" :
                      "bg-purple-500/20 text-purple-400"
                    }`}>
                      {model.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary hidden md:table-cell">{model.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <Link href="/docs/credits" className="inline-flex items-center gap-2 text-pink-400 hover:underline text-sm">
            Learn more about credits <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Choosing a model */}
      <section id="choosing" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Which model should I choose?</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <h4 className="font-medium text-green-400 mb-2 flex items-center gap-2">
              Budget <span className="flex items-center gap-1.5 text-text-primary text-sm">(<CreditIcon size={16} /> 5-15)</span>
            </h4>
            <p className="text-sm text-text-secondary mb-2">
              <strong>Flux.2 Flex</strong> is perfect for quick experiments and testing prompts. 
              Generate 30 images with your free 150 credits.
            </p>
            <p className="text-sm text-text-secondary">
              <strong>Gemini Flash</strong> offers slightly better quality while staying budget-friendly.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
              Standard <span className="flex items-center gap-1.5 text-text-primary text-sm">(<CreditIcon size={16} /> 30-45)</span>
            </h4>
            <p className="text-sm text-text-secondary mb-2">
              <strong>Flux.2 Pro</strong> delivers excellent quality with lots of detail - great all-rounder.
            </p>
            <p className="text-sm text-text-secondary mb-2">
              <strong>Seedream 4.5</strong> for artistic, stylized, and creative results.
            </p>
            <p className="text-sm text-text-secondary">
              <strong>GPT-5 Mini</strong> excels at rendering text in images accurately.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <h4 className="font-medium text-purple-400 mb-2 flex items-center gap-2">
              Premium <span className="flex items-center gap-1.5 text-text-primary text-sm">(<CreditIcon size={16} /> 60-75)</span>
            </h4>
            <p className="text-sm text-text-secondary mb-2">
              <strong>Flux.2 Max</strong> is the absolute best for maximum quality and photorealism.
            </p>
            <p className="text-sm text-text-secondary">
              <strong>GPT-5 Standard</strong> for consistent, high quality with excellent text rendering.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Prompt tips for better results</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-1">1. Be specific and detailed</h4>
            <p className="text-sm text-text-secondary mb-2">
              Instead of &quot;a dog&quot;, try:
            </p>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-pink-300 font-mono">
              &quot;A golden retriever puppy playing in autumn leaves, soft natural lighting, shallow depth of field, warm colors&quot;
            </div>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">2. Include style keywords</h4>
            <p className="text-sm text-text-secondary mb-2">
              Add style modifiers to guide the output:
            </p>
            <div className="flex flex-wrap gap-2">
              {["photorealistic", "oil painting", "3D render", "minimalist", "vintage", "cinematic", "anime", "watercolor"].map(style => (
                <span key={style} className="px-2 py-1 text-xs rounded-full bg-white/10 text-text-secondary">
                  {style}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">3. Specify lighting and mood</h4>
            <p className="text-sm text-text-secondary">
              &quot;golden hour lighting&quot;, &quot;dramatic shadows&quot;, &quot;soft diffused light&quot;, &quot;neon glow&quot;
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">4. Use negative prompts (when available)</h4>
            <p className="text-sm text-text-secondary">
              Exclude unwanted elements: &quot;no text&quot;, &quot;no watermark&quot;, &quot;no blur&quot;
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Example prompts</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Product photography</h4>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-pink-300 font-mono">
              &quot;Luxury perfume bottle on marble surface, soft studio lighting, minimalist composition, high-end product photography&quot;
            </div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Concept art</h4>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-pink-300 font-mono">
              &quot;Futuristic cyberpunk city at night, neon signs in Japanese, flying cars, rain-soaked streets, cinematic atmosphere&quot;
            </div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Social media content</h4>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-pink-300 font-mono">
              &quot;Cozy coffee shop interior, warm lighting, plants and books, instagram aesthetic, hygge vibes&quot;
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30">
          <h3 className="text-lg font-semibold text-white mb-2">Ready to create?</h3>
          <p className="text-text-secondary mb-4">Start generating stunning images with AI.</p>
          <Link href="/apps/create-image">
            <button className="px-6 py-2 rounded-lg bg-pink-500 text-white font-medium hover:bg-pink-600 transition-colors">
              Open Create Image
            </button>
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
