"use client";

import DocsLayout from "@/components/DocsLayout";
import Image from "next/image";
import { MessageSquare } from "lucide-react";

const chatModels = [
  { name: "Llama 3.3 70B", credits: 1, tier: "Budget", best: "Free, good quality" },
  { name: "Llama 3.1 8B", credits: 1, tier: "Budget", best: "Fast responses" },
  { name: "Qwen3 8B", credits: 1, tier: "Budget", best: "Coding, multilingual" },
  { name: "GPT-5 Nano", credits: 1, tier: "Budget", best: "OpenAI quality, budget" },
  { name: "Gemini 2.5 Flash", credits: 1, tier: "Budget", best: "Google's fastest" },
  { name: "Mistral Nemo", credits: 1, tier: "Budget", best: "Open source, fast" },
  { name: "GPT-5 Mini", credits: 1, tier: "Budget", best: "Good balance" },
  { name: "Mistral Small 3.1", credits: 1, tier: "Budget", best: "European, GDPR" },
  { name: "DeepSeek V3.2", credits: 1, tier: "Budget", best: "Coding specialist" },
  { name: "Claude Haiku 4.5", credits: 2, tier: "Standard", best: "Anthropic budget" },
  { name: "Grok 4 Fast", credits: 2, tier: "Standard", best: "xAI, current events" },
  { name: "Perplexity Sonar", credits: 3, tier: "Standard", best: "Web search included" },
  { name: "Gemini 2.5 Pro", credits: 5, tier: "Standard", best: "Google's best" },
  { name: "GPT-5 Chat", credits: 8, tier: "Premium", best: "OpenAI flagship" },
  { name: "Claude Sonnet 4.5", credits: 14, tier: "Premium", best: "Anthropic's best" },
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

export default function ChatModelsPage() {
  return (
    <DocsLayout
      title="Chat Models"
      description="15 AI chat models in one interface. From free Llama to premium Claude. Compare them all."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "All models", href: "#all-models" },
        { title: "Choosing a model", href: "#choosing" },
        { title: "Examples", href: "#examples" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-7 h-7 text-blue-400" />
          </div>
          <div>
            <h2 className="text-xl font-semibold text-text-primary mb-1">Chat Models</h2>
            <p className="text-text-secondary flex items-center gap-1">
              <CreditIcon size={14} /> 1-14 per message
            </p>
          </div>
        </div>

        <p className="text-text-secondary mb-6">
          Chat Models gives you access to 15 of the best AI chat models through one interface. 
          Write your prompt, choose a model, and get an instant response. Perfect for:
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Writing</h4>
            <p className="text-sm text-text-secondary">Emails, articles, social posts</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Coding</h4>
            <p className="text-sm text-text-secondary">Debug, refactor, explanations</p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-1">Analysis</h4>
            <p className="text-sm text-text-secondary">Data, research, summaries</p>
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
              {chatModels.map((model) => (
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
              Budget <span className="flex items-center gap-1.5 text-text-primary">(<CreditIcon size={16} /> 1)</span>
            </h4>
            <p className="text-sm text-text-secondary">
              Start here for experiments and simple tasks. Llama 3.3 70B and GPT-5 Nano are 
              surprisingly good for most use cases.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
            <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
              Standard <span className="flex items-center gap-1.5 text-text-primary">(<CreditIcon size={16} /> 2-5)</span>
            </h4>
            <p className="text-sm text-text-secondary">
              Upgrade to Gemini 2.5 Pro or Perplexity Sonar for complex tasks or when 
              you need current information (Perplexity searches the web).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
            <h4 className="font-medium text-purple-400 mb-2 flex items-center gap-2">
              Premium <span className="flex items-center gap-1.5 text-text-primary">(<CreditIcon size={16} /> 8-14)</span>
            </h4>
            <p className="text-sm text-text-secondary">
              GPT-5 Chat and Claude Sonnet 4.5 are the best models available. Use these 
              for important content, complex analysis, or creative writing.
            </p>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Examples</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary mb-4">
            [Screenshot: Chat interface with model selector]
          </div>
          <p className="text-sm text-text-secondary">
            Select a model from the dropdown, type your message, and click send. 
            The credit cost is shown before sending.
          </p>
        </div>
      </section>
    </DocsLayout>
  );
}
