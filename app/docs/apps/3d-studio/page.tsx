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
        { title: "How it works", href: "#how-it-works" },
        { title: "Use cases", href: "#use-cases" },
        { title: "Output formats", href: "#output" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Box className="w-7 h-7 text-purple-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-semibold text-text-primary">Premium App</h2>
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400">Basic+</span>
            </div>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 790 per model
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          3D Studio generates 3D models from text descriptions or images. 
          No 3D modeling experience needed. Describe or upload, and download your 3D model.
        </p>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-2">
                [Placeholder: 3D model preview 1]
              </div>
              <p className="text-sm text-center text-text-tertiary">Text-to-3D</p>
            </div>
            <div>
              <div className="aspect-square rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-2">
                [Placeholder: 3D model preview 2]
              </div>
              <p className="text-sm text-center text-text-tertiary">Image-to-3D</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-text-primary mb-1">
              <CreditIcon size={28} /> 790
            </div>
            <div className="text-sm text-text-secondary">Per model</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">~2 min</div>
            <div className="text-sm text-text-secondary">Average time</div>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
            <div className="text-2xl font-bold text-accent-primary mb-1">GLB, OBJ</div>
            <div className="text-sm text-text-secondary">Output formats</div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="mb-6">
          <h3 className="text-lg font-medium text-text-primary mb-4">Option 1: Text-to-3D</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Describe your object</h4>
                <p className="text-sm text-text-secondary">
                  Describe what you want: &quot;A low-poly medieval sword with golden handle&quot;
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Generate</h4>
                <p className="text-sm text-text-secondary">
                  3D Studio creates a 3D model based on your description.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-text-primary mb-4">Option 2: Image-to-3D</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Upload an image</h4>
                <p className="text-sm text-text-secondary">
                  Upload a photo or render of the object you want to convert to 3D.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
              <div>
                <h4 className="font-medium text-text-primary mb-1">Generate</h4>
                <p className="text-sm text-text-secondary">
                  3D Studio analyzes the image and creates a 3D representation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
            [Screenshot: 3D Studio interface with preview and download options]
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section id="use-cases" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Use cases</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Game Development</h4>
            <p className="text-sm text-text-secondary">
              Quickly generate assets for prototypes. Characters, props, 
              environments - anything is possible.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">3D Printing</h4>
            <p className="text-sm text-text-secondary">
              Create printable 3D models without CAD knowledge. Download as 
              OBJ for your slicer software.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Product Visualization</h4>
            <p className="text-sm text-text-secondary">
              Visualize products in 3D for presentations, pitches, 
              or e-commerce.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">AR/VR Content</h4>
            <p className="text-sm text-text-secondary">
              GLB format is compatible with AR Quick Look (Apple), 
              Model Viewer, and VR platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Output formats */}
      <section id="output">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Output formats</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono px-2 py-1 rounded bg-white/10 text-text-primary">GLB</span>
              <span className="text-sm text-text-secondary">Recommended</span>
            </div>
            <p className="text-sm text-text-secondary">
              Binary glTF format. Compact, fast to load, includes textures. 
              Compatible with web, AR, game engines (Unity, Unreal, Godot).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-sm font-mono px-2 py-1 rounded bg-white/10 text-text-primary">OBJ</span>
              <span className="text-sm text-text-secondary">3D Printing</span>
            </div>
            <p className="text-sm text-text-secondary">
              Wavefront OBJ format. Universally supported by CAD software, 
              3D printers, and modeling tools like Blender.
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20">
          <p className="text-sm text-yellow-200">
            <strong>Tip:</strong> For 3D printing, check your model in Blender or 
            your slicer for potential mesh issues before printing.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
