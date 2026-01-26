"use client";

import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const creditsReference = [
  { type: "Budget Chat", credits: "1", examples: "Llama 3.3 70B, GPT-5 Nano, Gemini 2.5 Flash, Mistral Nemo, DeepSeek V3.2" },
  { type: "Standard Chat", credits: "2-5", examples: "Claude Haiku 4.5 (2), Grok 4 Fast (2), Perplexity Sonar (3), Gemini 2.5 Pro (5)" },
  { type: "Premium Chat", credits: "8-14", examples: "GPT-5 Chat (8), Claude Sonnet 4.5 (14)" },
  { type: "Budget Image", credits: "5-15", examples: "Flux.2 Flex (5), Gemini Flash (15)" },
  { type: "Standard Image", credits: "30-45", examples: "GPT-5 Mini (30), Gemini Pro (30), Flux.2 Pro (45), Seedream 4.5 (45)" },
  { type: "Premium Image", credits: "60-75", examples: "GPT-5 Standard (60), Flux.2 Max (75)" },
  { type: "CleanShot", credits: "100", examples: "Per product photo" },
  { type: "Adshot", credits: "120", examples: "Per marketing visual" },
  { type: "3D Studio", credits: "790", examples: "Per 3D model" },
];

const CreditIcon = ({ size = 24 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

export default function CreditsPage() {
  return (
    <DocsLayout
      title="Understanding Credits"
      description="Credits are Labobox's universal currency. Pay only for what you use."
      tableOfContents={[
        { title: "How it works", href: "#how-it-works" },
        { title: "Credit costs", href: "#costs" },
        { title: "Conversion", href: "#conversion" },
        { title: "Examples", href: "#examples" },
        { title: "FAQ", href: "#faq" },
      ]}
    >
      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="/images/credit-icon.png"
              alt="Labobox Credits"
              width={72}
              height={72}
              className="w-18 h-18"
            />
            <div>
              <h3 className="text-2xl font-bold text-text-primary">Labobox Credits</h3>
              <p className="text-text-secondary">One currency for all AI tools</p>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-text-secondary">
              Credits are the universal currency within Labobox. Instead of different 
              prices per app or model, you use credits for everything. Simple and transparent.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-white/5 text-center">
                <div className="flex items-center justify-center gap-2 text-xl font-bold text-text-primary mb-1">
                  <CreditIcon size={28} /> 1
                </div>
                <div className="text-sm text-text-secondary">Budget chat message</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 text-center">
                <div className="flex items-center justify-center gap-2 text-xl font-bold text-text-primary mb-1">
                  <CreditIcon size={28} /> 5
                </div>
                <div className="text-sm text-text-secondary">Budget image</div>
              </div>
              <div className="p-4 rounded-lg bg-white/5 text-center">
                <div className="flex items-center justify-center gap-2 text-xl font-bold text-text-primary mb-1">
                  <CreditIcon size={28} /> 100+
                </div>
                <div className="text-sm text-text-secondary">Premium apps</div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-sm text-green-200">
            <strong>Transparent:</strong> You always see the credit cost before any action. 
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Credit costs */}
      <section id="costs" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Credit costs</h2>
        
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Type</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">
                  <span className="flex items-center gap-1">
                    <CreditIcon size={16} /> Credits
                  </span>
                </th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3 hidden md:table-cell">Models / Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {creditsReference.map((item) => (
                <tr key={item.type} className="hover:bg-white/5">
                  <td className="px-4 py-3 text-sm text-text-primary font-medium">{item.type}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                      <CreditIcon size={20} /> {item.credits}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary hidden md:table-cell">{item.examples}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Conversion */}
      <section id="conversion" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Credit value</h2>
        <p className="text-text-secondary mb-4">
          For reference, here&apos;s how credits convert to euros:
        </p>
        
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Credits</th>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                    <CreditIcon size={20} /> 1
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">€0.001</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                    <CreditIcon size={20} /> 100
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">€0.10</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                    <CreditIcon size={20} /> 1,000
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">€1.00</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3">
                  <span className="flex items-center gap-1.5 text-sm font-medium text-text-primary">
                    <CreditIcon size={20} /> 5,000
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-text-secondary">€5.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">What can you do with credits?</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary flex items-center gap-2 mb-2">
              <CreditIcon size={20} /> 750 credits
            </h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li className="flex items-center gap-2">• ~750 budget chat messages (Llama, GPT-5 Nano)</li>
              <li className="flex items-center gap-2">• OR ~93 GPT-5 Chat messages</li>
              <li className="flex items-center gap-2">• OR ~150 Flux.2 Flex images</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary flex items-center gap-2 mb-2">
              <CreditIcon size={20} /> 5,000 credits
            </h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li>• ~5,000 budget chat messages</li>
              <li>• OR ~625 GPT-5 Chat messages</li>
              <li>• OR ~50 CleanShot product photos</li>
            </ul>
          </div>

          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary flex items-center gap-2 mb-2">
              <CreditIcon size={20} /> 25,000 credits
            </h4>
            <p className="text-sm text-text-secondary">Perfect for power users and professionals</p>
          </div>

          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary flex items-center gap-2 mb-2">
              <CreditIcon size={20} /> 100,000 credits
            </h4>
            <p className="text-sm text-text-secondary">For agencies and teams with high volume</p>
          </div>
        </div>

        <div className="mt-6">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-accent-primary hover:underline">
            View all plans <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Frequently asked questions</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Do credits expire?</h4>
            <p className="text-sm text-text-secondary">
              No, credits never expire. Use them whenever you want.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">What if I run out of credits?</h4>
            <p className="text-sm text-text-secondary">
              You can upgrade your plan or buy extra credits via Top-Up (paid plans only).
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Do I get a warning?</h4>
            <p className="text-sm text-text-secondary">
              Yes, you&apos;ll receive an email when your credits drop below 10% of your monthly limit.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Can I get a refund?</h4>
            <p className="text-sm text-text-secondary">
              Credits are automatically refunded for failed generations. 
              Contact us for other refund requests.
            </p>
          </div>
        </div>
      </section>
    </DocsLayout>
  );
}
