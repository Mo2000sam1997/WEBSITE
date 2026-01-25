"use client";

import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function QuickstartPage() {
  return (
    <DocsLayout
      title="Quickstart"
      description="Get started with Labobox in under 5 minutes. Follow these steps to create your first AI generation."
      tableOfContents={[
        { title: "Step 1: Create account", href: "#step-1" },
        { title: "Step 2: Choose an app", href: "#step-2" },
        { title: "Step 3: Generate content", href: "#step-3" },
        { title: "Next steps", href: "#next-steps" },
      ]}
    >
      {/* Step 1 */}
      <section id="step-1" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-sm font-bold">1</span>
          Create your account
        </h2>
        <p className="text-text-secondary mb-4">
          Sign up for a free account to get started. You&apos;ll receive 750 credits immediately to try Labobox.
        </p>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-text-tertiary">
              [Screenshot]
            </div>
            <div>
              <h4 className="font-medium text-text-primary">Sign up page</h4>
              <p className="text-sm text-text-secondary">Enter your email and choose a password</p>
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <CheckCircle className="w-4 h-4 text-green-400" />
              No credit card required
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <CheckCircle className="w-4 h-4 text-green-400" />
              750 free credits
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Instant access to Standard Apps
            </li>
          </ul>
        </div>

        <Link href="/signup" className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-black rounded-lg font-medium hover:bg-accent-primary/90 transition-all">
          Create account <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Step 2 */}
      <section id="step-2" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-sm font-bold">2</span>
          Choose an app
        </h2>
        <p className="text-text-secondary mb-4">
          After logging in, you&apos;ll see the dashboard with all available apps. Choose the app that fits your needs.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-4">
            <h4 className="font-medium text-text-primary mb-2">Chat Models</h4>
            <p className="text-sm text-text-secondary mb-2">15 AI chat models for writing, coding, analysis.</p>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Free</span>
          </div>
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-4">
            <h4 className="font-medium text-text-primary mb-2">Image Models</h4>
            <p className="text-sm text-text-secondary mb-2">9 AI image generators for all styles.</p>
            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">Free</span>
          </div>
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-4">
            <h4 className="font-medium text-text-primary mb-2">CleanShot</h4>
            <p className="text-sm text-text-secondary mb-2">Professional product photos for e-commerce.</p>
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Basic+</span>
          </div>
          <div className="bg-bg-secondary border border-white/10 rounded-xl p-4">
            <h4 className="font-medium text-text-primary mb-2">3D Studio</h4>
            <p className="text-sm text-text-secondary mb-2">Text to 3D model generation.</p>
            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400">Basic+</span>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section id="step-3" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4 flex items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-sm font-bold">3</span>
          Generate content
        </h2>
        <p className="text-text-secondary mb-4">
          Select a model, enter your prompt, and click generate. You&apos;ll see the credit cost before generating.
        </p>

        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-4">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-4">
            [Screenshot: Interface with model selector and prompt field]
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-text-primary">1.</div>
              <div className="text-sm text-text-secondary">Choose model</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-text-primary">2.</div>
              <div className="text-sm text-text-secondary">Write prompt</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-text-primary">3.</div>
              <div className="text-sm text-text-secondary">Generate</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
          <p className="text-sm text-yellow-200">
            <strong>Tip:</strong> Start with a budget model (1 credit) to experiment. 
            Upgrade to premium models when you&apos;re happy with your prompt.
          </p>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Next steps</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href="/docs/apps/chat-models" className="group p-4 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-all">
            <h4 className="font-medium text-text-primary group-hover:text-accent-primary mb-1">Explore Chat Models</h4>
            <p className="text-sm text-text-secondary">Learn about all 15 available chat models.</p>
          </Link>
          <Link href="/docs/credits" className="group p-4 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-all">
            <h4 className="font-medium text-text-primary group-hover:text-accent-primary mb-1">Understand Credits</h4>
            <p className="text-sm text-text-secondary">How the credit system works.</p>
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
