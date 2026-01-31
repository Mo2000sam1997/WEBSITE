"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import Link from "next/link";
import { Box, ArrowRight, Sparkles, Zap, Download, Layers } from "lucide-react";

const CreditIcon = ({ size = 20 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function TextTo3DDocsPage() {
  return (
    <DocsLayout
      title="Text to 3D"
      description="Turn text prompts into 3D models. Powered by Hunyuan3D-v3, create detailed 3D assets in seconds."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "How it works", href: "#how-it-works" },
        { title: "Model modes", href: "#modes" },
        { title: "Export formats", href: "#export" },
        { title: "Prompt tips", href: "#tips" },
        { title: "Examples", href: "#examples" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Box className="w-7 h-7 text-purple-400" />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Text to 3D</h2>
              <span className="px-2 py-0.5 text-xs rounded-full bg-green-500/20 text-green-400">Live</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 790 credits per model (€0.79)
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Text to 3D converts your text descriptions into fully-formed 3D models. 
          Powered by Hunyuan3D-v3, create detailed 3D assets for games, AR/VR, 
          product visualization, and more. Export in standard formats compatible with all 3D software.
        </p>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Sparkles className="w-6 h-6 text-purple-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">AI Powered</h4>
            <p className="text-xs text-text-secondary">Hunyuan3D-v3</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">~30 seconds</h4>
            <p className="text-xs text-text-secondary">Generation time</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Layers className="w-6 h-6 text-blue-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">3 Modes</h4>
            <p className="text-xs text-text-secondary">Normal, lowpoly, geo</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <Download className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <h4 className="font-medium text-text-primary mb-1">GLB/OBJ/FBX</h4>
            <p className="text-xs text-text-secondary">Standard formats</p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <p className="text-sm text-purple-200">
            <strong>Perfect for:</strong> Game asset creation, AR/VR experiences, 
            product prototyping, 3D printing models, and animation/film.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold mb-3">1</div>
            <h4 className="font-medium text-text-primary mb-1">Describe your object</h4>
            <p className="text-sm text-text-secondary">Type a detailed description of the 3D model you want</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold mb-3">2</div>
            <h4 className="font-medium text-text-primary mb-1">Choose quality</h4>
            <p className="text-sm text-text-secondary">Select normal, lowpoly, or geometry mode</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold mb-3">3</div>
            <h4 className="font-medium text-text-primary mb-1">Generate</h4>
            <p className="text-sm text-text-secondary">AI creates your 3D model in ~30 seconds</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold mb-3">4</div>
            <h4 className="font-medium text-text-primary mb-1">Export</h4>
            <p className="text-sm text-text-secondary">Download in GLB, OBJ, or FBX format</p>
          </div>
        </div>
      </section>

      {/* Model modes */}
      <section id="modes" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Model modes</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Normal Mode</h4>
            <p className="text-sm text-text-secondary mb-2">
              High-detail models with full texturing. Best for final production assets, 
              product visualization, and detailed renders.
            </p>
            <span className="text-xs text-purple-400">Recommended for most use cases</span>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Lowpoly Mode</h4>
            <p className="text-sm text-text-secondary mb-2">
              Optimized polygon count for games and real-time applications. 
              Great for mobile games, VR/AR, and stylized aesthetics.
            </p>
            <span className="text-xs text-blue-400">Best for games and real-time</span>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Geometry Mode</h4>
            <p className="text-sm text-text-secondary mb-2">
              Pure geometry without textures. Perfect for 3D printing, CAD workflows, 
              and when you want to apply your own materials.
            </p>
            <span className="text-xs text-green-400">Best for 3D printing and CAD</span>
          </div>
        </div>
      </section>

      {/* Export formats */}
      <section id="export" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Export formats</h2>
        
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Format</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Best for</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3 hidden md:table-cell">Compatible with</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary font-medium">GLB</td>
                <td className="px-4 py-3 text-sm text-text-secondary">Web, AR, general use</td>
                <td className="px-4 py-3 text-sm text-text-secondary hidden md:table-cell">Three.js, Babylon.js, Unity, Unreal</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary font-medium">OBJ</td>
                <td className="px-4 py-3 text-sm text-text-secondary">3D software, editing</td>
                <td className="px-4 py-3 text-sm text-text-secondary hidden md:table-cell">Blender, Maya, 3ds Max, Cinema 4D</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary font-medium">FBX</td>
                <td className="px-4 py-3 text-sm text-text-secondary">Animation, game engines</td>
                <td className="px-4 py-3 text-sm text-text-secondary hidden md:table-cell">Unity, Unreal Engine, MotionBuilder</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tips */}
      <section id="tips" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Prompt tips for better results</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 space-y-4">
          <div>
            <h4 className="font-medium text-text-primary mb-1">Be specific about shape</h4>
            <p className="text-sm text-text-secondary">
              &quot;A sports car with aerodynamic curves, low profile, visible wheels&quot; 
              works better than &quot;a car&quot;
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Describe materials</h4>
            <p className="text-sm text-text-secondary">
              Include material descriptions: &quot;metallic finish&quot;, &quot;wooden texture&quot;, 
              &quot;glass transparency&quot;, &quot;matte plastic&quot;
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Specify style</h4>
            <p className="text-sm text-text-secondary">
              &quot;Realistic&quot;, &quot;cartoon style&quot;, &quot;low poly&quot;, &quot;stylized&quot;, 
              &quot;sci-fi&quot;, &quot;medieval&quot;
            </p>
          </div>
          <div>
            <h4 className="font-medium text-text-primary mb-1">Keep it single-object</h4>
            <p className="text-sm text-text-secondary">
              Best results come from single objects. Complex scenes may not render as expected.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Example prompts</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Game asset</h4>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-purple-300 font-mono">
              &quot;A futuristic sci-fi rifle with glowing blue energy core, metallic silver body, detailed grip&quot;
            </div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Product visualization</h4>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-purple-300 font-mono">
              &quot;Modern minimalist chair with curved wooden seat and thin metal legs&quot;
            </div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Character asset</h4>
            <div className="p-3 rounded-lg bg-white/5 text-sm text-purple-300 font-mono">
              &quot;Cute robot companion, round body, friendly expression, antenna on head, cartoon style&quot;
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
          <h3 className="text-lg font-semibold text-white mb-2">Ready to create?</h3>
          <p className="text-text-secondary mb-4">Generate 3D models from text descriptions.</p>
          <Link href="/apps/text-to-3d">
            <button className="px-6 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition-colors">
              Open Text to 3D
            </button>
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
