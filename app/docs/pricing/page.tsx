"use client";

import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const CreditIcon = ({ size = 20 }: { size?: number }) => (
  <Image
    src="/images/credit-icon.png"
    alt="credits"
    width={size}
    height={size}
    className="inline-block"
  />
);

const plans = [
  { name: "Free", price: "€0", credits: "150", color: "#22C55E" },
  { name: "Starter", price: "€9", credits: "1,500", color: "#3B82F6" },
  { name: "Pro", price: "€29", credits: "6,000", color: "#EC4899" },
  { name: "Business", price: "€99", credits: "25,000", color: "#8B5CF6" },
];

const creditPacks = [
  { credits: "500", price: "€5" },
  { credits: "2,000", price: "€15" },
  { credits: "5,000", price: "€30" },
  { credits: "15,000", price: "€75" },
];

export default function PricingDocsPage() {
  return (
    <DocsLayout
      title="Pricing"
      description="Simple, transparent pricing. All apps included on every plan."
      tableOfContents={[
        { title: "How it works", href: "#how-it-works" },
        { title: "Plans", href: "#plans" },
        { title: "Credit packs", href: "#credit-packs" },
        { title: "Enterprise", href: "#enterprise" },
      ]}
    >
      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="space-y-4 text-text-secondary">
          <p>
            Mindhello uses a simple credit system. Every action costs credits - from 
            chat messages to video generation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
              <div className="text-2xl font-bold text-text-primary mb-1">1</div>
              <h4 className="font-medium text-text-primary mb-1">Get credits</h4>
              <p className="text-sm">Monthly subscription or buy credit packs</p>
            </div>
            <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
              <div className="text-2xl font-bold text-text-primary mb-1">2</div>
              <h4 className="font-medium text-text-primary mb-1">Use any app</h4>
              <p className="text-sm">All apps are available on every plan</p>
            </div>
            <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
              <div className="text-2xl font-bold text-text-primary mb-1">3</div>
              <h4 className="font-medium text-text-primary mb-1">Pay per use</h4>
              <p className="text-sm">Each action shows its credit cost upfront</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section id="plans" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Plans</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {plans.map((plan) => (
            <div key={plan.name} className="p-4 rounded-xl bg-bg-secondary border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-text-primary">{plan.name}</h3>
                  <div className="flex items-center gap-1 text-sm text-text-secondary">
                    <CreditIcon size={14} /> {plan.credits} credits
                    {plan.name !== "Free" && " / month"}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  {plan.price !== "€0" && <span className="text-sm text-text-secondary">/mo</span>}
                </div>
              </div>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-green-400" />
                  Access to all apps
                </li>
                <li className="flex items-center gap-2 text-sm text-text-secondary">
                  <Check className="w-4 h-4 text-green-400" />
                  All AI models
                </li>
                {plan.name !== "Free" && (
                  <li className="flex items-center gap-2 text-sm text-text-secondary">
                    <Check className="w-4 h-4 text-green-400" />
                    Credits rollover (90 days)
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-sm text-text-tertiary">
          Annual billing: Save 20% when you pay yearly.
        </p>

        <div className="mt-6">
          <Link href="/pricing" className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-black rounded-lg font-medium hover:bg-accent-primary/90 transition-all">
            View pricing page <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Credit packs */}
      <section id="credit-packs" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Credit packs</h2>
        
        <p className="text-text-secondary mb-4">
          Need more credits? Buy credit packs anytime. Valid for 90 days.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {creditPacks.map((pack) => (
            <div key={pack.credits} className="p-4 rounded-xl bg-bg-secondary border border-white/10 text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <CreditIcon size={18} />
                <span className="font-bold text-text-primary">{pack.credits}</span>
              </div>
              <div className="text-lg font-bold text-text-primary">{pack.price}</div>
            </div>
          ))}
        </div>

        <p className="text-sm text-text-tertiary mt-4">
          The more you buy, the lower the cost per credit.
        </p>
      </section>

      {/* Enterprise */}
      <section id="enterprise">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Enterprise</h2>
        
        <div className="bg-gradient-to-br from-bg-secondary to-bg-primary border border-white/10 rounded-xl p-6">
          <p className="text-text-secondary mb-4">
            Need a custom solution? Volume discounts, dedicated support, SLA, and SSO available.
          </p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Volume discounts
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Dedicated support
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Custom SLA
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              SSO & security
            </li>
          </ul>

          <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-text-primary rounded-lg font-medium hover:bg-white/20 transition-all border border-white/20">
            Contact Sales <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
