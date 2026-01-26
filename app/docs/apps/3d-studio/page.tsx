"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import { Box } from "lucide-react";

const CreditIcon = ({ size = 24 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function Studio3DPage() {
  return (
    <DocsLayout
      title="3D Studio"
      description="Turn text or images into 3D models. Perfect for games, prints, or visualizations."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "3 Input Modes", href: "#modes" },
        { title: "Generate Types", href: "#types" },
        { title: "Output Formats", href: "#output" },
        { title: "Tips", href: "#tips" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Box className="w-7 h-7 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-1">3D Studio</h2>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 790 per model
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Generate production-ready 3D models from text prompts and/or images. 
          Create downloadable 3D assets (GLB, OBJ) for Unity, Unreal, Blender, 3D printing, e-commerce, and games.
          <strong className="text-text-primary"> No 3D modeling experience needed.</strong>
        </p>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 mb-6">
          <p className="text-sm text-purple-200">
            <strong>Powered by Hunyuan3D-v3:</strong> Film-quality 3D generation with PBR materials, 
            multi-view support, and multiple output formats.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-text-primary mb-1">
              <CreditIcon size={28} /> 790
            </div>
            <div className="text-sm text-text-secondary">Per model</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">3</div>
            <div className="text-sm text-text-secondary">Input modes</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">1-4</div>
            <div className="text-sm text-text-secondary">Images supported</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">~2 min</div>
            <div className="text-sm text-text-secondary">Average time</div>
          </div>
        </div>
      </section>

      {/* Input Modes */}
      <section id="modes" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">3 Input Modes</h2>
        
        <div className="space-y-4">
          <div className="p-5 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">Text Mode</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Describe your object</h4>
            <p className="text-sm text-text-secondary mb-3">
              Type a description and 3D Studio creates a model from scratch.
            </p>
            <div className="p-3 rounded-lg bg-white/5">
              <p className="text-sm text-text-tertiary font-mono">
                &quot;A futuristic chair with metallic finish and ergonomic design&quot;
              </p>
            </div>
          </div>
          
          <div className="p-5 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-purple-500/20 text-purple-400">Image Mode</span>
              <span className="text-xs text-text-tertiary">Recommended</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Upload 1-4 images</h4>
            <p className="text-sm text-text-secondary mb-3">
              Upload photos of your object from different angles. 
              <strong className="text-text-primary"> More angles = better 3D model.</strong>
            </p>
            <div className="grid grid-cols-4 gap-2">
              {["Front", "Back", "Left", "Right"].map((angle) => (
                <div key={angle} className="p-2 rounded-lg bg-white/5 text-center">
                  <span className="text-xs text-text-tertiary">{angle}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-5 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-green-500/20 text-green-400">Hybrid Mode</span>
            </div>
            <h4 className="font-medium text-text-primary mb-2">Images + text guidance</h4>
            <p className="text-sm text-text-secondary">
              Upload reference images AND add a text prompt to guide the generation. 
              Perfect for creating variations or adding specific details.
            </p>
          </div>
        </div>
      </section>

      {/* Generate Types */}
      <section id="types" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Generate Types</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Normal</h4>
            <p className="text-sm text-text-secondary mb-3">
              Full textured model with PBR materials. Ready for rendering in Unity, Unreal, or Blender.
            </p>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Default</span>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">LowPoly</h4>
            <p className="text-sm text-text-secondary mb-3">
              Optimized low-polygon model. Perfect for games, AR/VR, or real-time applications.
            </p>
            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">Performance</span>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Geometry</h4>
            <p className="text-sm text-text-secondary mb-3">
              Clean white model without textures. Ideal for 3D printing or as a base for manual texturing.
            </p>
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">3D Print</span>
          </div>
        </div>
      </section>

      {/* Output formats */}
      <section id="output" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Output Formats</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono px-2 py-1 rounded bg-white/10 text-text-primary">GLB</span>
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Recommended</span>
            </div>
            <p className="text-sm text-text-secondary">
              Binary glTF format. Compact, fast to load, includes textures and PBR materials. 
              Compatible with web, AR (Apple Quick Look), game engines (Unity, Unreal, Godot).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono px-2 py-1 rounded bg-white/10 text-text-primary">OBJ</span>
              <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">3D Printing</span>
            </div>
            <p className="text-sm text-text-secondary">
              Wavefront OBJ format. Universally supported by CAD software, 
              3D printers, slicers (Cura, PrusaSlicer), and modeling tools like Blender.
            </p>
          </div>
        </div>
        
        <div className="mt-4 p-4 rounded-lg bg-white/5">
          <h4 className="text-sm font-medium text-text-primary mb-2">PBR Materials Included</h4>
          <p className="text-sm text-text-secondary">
            All models include physically-based rendering materials for realistic lighting in Unity and Unreal Engine.
          </p>
        </div>
      </section>

      {/* Tips */}
      <section id="tips">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Tips for best results</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <h4 className="font-medium text-purple-300 mb-2">Upload multiple angles</h4>
            <p className="text-sm text-text-secondary">
              For Image Mode, upload <strong className="text-text-primary">2-4 photos from different angles</strong> 
              (front, back, left, right). This dramatically improves 3D accuracy.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Clear, isolated subject</h4>
            <p className="text-sm text-text-secondary">
              Use photos with a clean background and your object clearly visible. 
              Remove distracting elements for better results.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Detailed text prompts</h4>
            <p className="text-sm text-text-secondary">
              For Text Mode, be specific about materials, colors, and style. 
              &quot;A red ceramic vase with golden rim&quot; works better than &quot;a vase&quot;.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Choose the right generate type</h4>
            <p className="text-sm text-text-secondary">
              Use <strong>Normal</strong> for rendering, <strong>LowPoly</strong> for games/AR, 
              and <strong>Geometry</strong> for 3D printing or manual texturing.
            </p>
          </div>
          
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Check mesh before printing</h4>
            <p className="text-sm text-text-secondary">
              For 3D printing, always check your model in Blender or your slicer 
              for potential mesh issues (holes, non-manifold edges) before printing.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-200">
            <strong>Pro tip:</strong> Use Hybrid Mode to upload a rough sketch and describe 
            the final look you want. Great for concept visualization.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
