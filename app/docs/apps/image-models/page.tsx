"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import { ImageIcon } from "lucide-react";

const imageModels = [
  { name: "Flux.2 Flex", credits: 5, tier: "Budget", best: "Fast generations, experiments" },
  { name: "Gemini Flash", credits: 15, tier: "Budget", best: "Good quality, budget" },
  { name: "GPT-5 Mini", credits: 30, tier: "Standard", best: "Text in images, consistent" },
  { name: "Gemini Pro", credits: 30, tier: "Standard", best: "Photorealism" },
  { name: "Flux.2 Pro", credits: 45, tier: "Standard", best: "High quality, details" },
  { name: "Seedream 4.5", credits: 45, tier: "Standard", best: "Artistic, stylized" },
  { name: "Gemini 2.5", credits: 45, tier: "Standard", best: "Latest Google model" },
  { name: "GPT-5 Standard", credits: 60, tier: "Premium", best: "Best OpenAI quality" },
  { name: "Flux.2 Max", credits: 75, tier: "Premium", best: "Highest quality" },
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

export default function ImageModelsPage() {
  return (
    <DocsLayout
      title="Image Models"
      description="9 AI image models. From budget to premium quality. Choose the model that fits your project."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "All models", href: "#all-models" },
        { title: "Choosing a model", href: "#choosing" },
        { title: "Tips", href: "#tips" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-pink-500/20 flex items-center justify-center flex-shrink-0">
            <ImageIcon className="w-7 h-7 text-pink-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Standard App</h2>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 5-75 per image
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Image Models gives you access to 9 of the best AI image generators. 
          From quick experiments to high-end production quality. Perfect for:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Social Media</h4>
            <p className="text-sm text-text-secondary">Posts, thumbnails, banners</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Concept Art</h4>
            <p className="text-sm text-text-secondary">Illustrations, designs, mockups</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Marketing</h4>
            <p className="text-sm text-text-secondary">Ads, presentations, websites</p>
          </div>
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
      </section>

      {/* Choosing a model */}
      <section id="choosing" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Which model to choose?</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <h4 className="font-medium text-green-400 mb-2 flex items-center gap-2">
              Budget <span className="flex items-center gap-1.5 text-text-primary">(<CreditIcon size={16} /> 5-15)</span>
            </h4>
            <p className="text-sm text-text-secondary">
              <strong>Flux.2 Flex</strong> is perfect for quick experiments. Generate 150 images 
              with your free 750 credits. <strong>Gemini Flash</strong> for slightly better quality.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
              Standard <span className="flex items-center gap-1.5 text-text-primary">(<CreditIcon size={16} /> 30-45)</span>
            </h4>
            <p className="text-sm text-text-secondary">
              <strong>Flux.2 Pro</strong> delivers excellent quality with lots of detail. 
              <strong>Seedream 4.5</strong> for artistic, stylized results.
              <strong>Gemini Pro</strong> for photorealism.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <h4 className="font-medium text-purple-400 mb-2 flex items-center gap-2">
              Premium <span className="flex items-center gap-1.5 text-text-primary">(<CreditIcon size={16} /> 60-75)</span>
            </h4>
            <p className="text-sm text-text-secondary">
              <strong>Flux.2 Max</strong> is the best model for maximum quality and detail. 
              <strong>GPT-5 Standard</strong> for consistent, high quality with good text rendering.
            </p>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Tips for better results</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-1">1. Be specific</h4>
            <p className="text-sm text-text-secondary">
              &quot;A golden retriever puppy playing in autumn leaves, soft natural lighting, 
              shallow depth of field&quot; works better than &quot;a dog&quot;.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">2. Describe style</h4>
            <p className="text-sm text-text-secondary">
              Add style keywords: &quot;photorealistic&quot;, &quot;oil painting&quot;, &quot;3D render&quot;, 
              &quot;minimalist&quot;, &quot;vintage&quot;.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">3. Test with budget first</h4>
            <p className="text-sm text-text-secondary">
              Refine your prompt with Flux.2 Flex (<span className="inline-flex items-center gap-1"><CreditIcon size={16} /> 5</span>) before using premium models.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
            [Screenshot: Image generator interface with prompt and model selector]
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
