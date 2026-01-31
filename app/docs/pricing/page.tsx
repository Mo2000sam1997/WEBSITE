"use client";

import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "€0",
    credits: "750",
    color: "#4edc96",
    features: [
      { text: "750 credits / month", included: true },
      { text: "Chat Models (15 AI)", included: true },
      { text: "Image Models (9 AI)", included: true },
      { text: "CleanShot", included: false },
      { text: "Adshot", included: false },
      { text: "3D Studio", included: false },
      { text: "Top-Up credits", included: false },
    ],
  },
  {
    name: "Basic",
    price: "€19",
    credits: "5,000",
    color: "#77bdf8",
    features: [
      { text: "5,000 credits / month", included: true },
      { text: "Chat Models (15 AI)", included: true },
      { text: "Image Models (9 AI)", included: true },
      { text: "CleanShot", included: true },
      { text: "Adshot", included: true },
      { text: "3D Studio", included: true },
      { text: "Top-Up credits", included: true },
    ],
  },
  {
    name: "Pro",
    price: "€79",
    credits: "25,000",
    color: "#a78bfa",
    features: [
      { text: "25,000 credits / month", included: true },
      { text: "All apps", included: true },
      { text: "Email support", included: true },
      { text: "Credits rollover", included: true },
      { text: "API access (coming soon)", included: true },
    ],
  },
  {
    name: "Team",
    price: "€279",
    credits: "100,000",
    color: "#00d9ff",
    features: [
      { text: "100,000 credits / month", included: true },
      { text: "All apps", included: true },
      { text: "Up to 10 team members", included: true },
      { text: "Analytics dashboard", included: true },
      { text: "Dedicated support", included: true },
    ],
  },
];

export default function PricingDocsPage() {
  return (
    <DocsLayout
      title="Pricing Plans"
      description="Choose the plan that fits you. Start free and upgrade whenever you want."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "Plan comparison", href: "#comparison" },
        { title: "Annual vs monthly", href: "#billing" },
        { title: "Enterprise", href: "#enterprise" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Overview</h2>
        
        <p className="text-text-secondary mb-6">
          Mindhello.ai has four plans: Free, Basic, Pro, and Team. Each plan gives you a 
          certain number of credits per month. More credits means more generations.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {plans.map((plan) => (
            <div key={plan.name} className="p-4 rounded-xl bg-bg-secondary border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-text-primary">{plan.name}</h3>
                  <p className="text-sm text-text-secondary">{plan.credits} credits/month</p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-bold" style={{ color: plan.color }}>{plan.price}</span>
                  {plan.price !== "€0" && <span className="text-sm text-text-secondary">/month</span>}
                </div>
              </div>
              <ul className="space-y-1">
                {plan.features.slice(0, 3).map((feature) => (
                  <li key={feature.text} className="flex items-center gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <X className="w-4 h-4 text-red-400" />
                    )}
                    <span className={feature.included ? "text-text-secondary" : "text-text-tertiary"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <Link href="/pricing" className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-black rounded-lg font-medium hover:bg-accent-primary/90 transition-all">
            View pricing page <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Comparison */}
      <section id="comparison" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Plan comparison</h2>
        
        <div className="rounded-xl border border-white/10 overflow-hidden overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Feature</th>
                <th className="text-center text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Free</th>
                <th className="text-center text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Basic</th>
                <th className="text-center text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Pro</th>
                <th className="text-center text-xs font-semibold text-text-tertiary uppercase px-4 py-3">Team</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary">Credits / month</td>
                <td className="px-4 py-3 text-sm text-center text-text-secondary">750</td>
                <td className="px-4 py-3 text-sm text-center text-text-secondary">5,000</td>
                <td className="px-4 py-3 text-sm text-center text-text-secondary">25,000</td>
                <td className="px-4 py-3 text-sm text-center text-text-secondary">100,000</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary">Chat Models</td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary">Image Models</td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary">Premium Apps</td>
                <td className="px-4 py-3 text-center"><X className="w-4 h-4 text-red-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary">Top-Up credits</td>
                <td className="px-4 py-3 text-center"><X className="w-4 h-4 text-red-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
                <td className="px-4 py-3 text-center"><Check className="w-4 h-4 text-green-400 mx-auto" /></td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="px-4 py-3 text-sm text-text-primary">Team members</td>
                <td className="px-4 py-3 text-sm text-center text-text-tertiary">1</td>
                <td className="px-4 py-3 text-sm text-center text-text-tertiary">1</td>
                <td className="px-4 py-3 text-sm text-center text-text-tertiary">1</td>
                <td className="px-4 py-3 text-sm text-center text-text-secondary">Up to 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Billing */}
      <section id="billing" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Annual vs monthly</h2>
        
        <div className="bg-bg-secondary border border-white/10 rounded-xl p-6">
          <p className="text-text-secondary mb-4">
            Pay annually and save 20% on your subscription. Your credits are still 
            added monthly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-sm text-text-tertiary mb-1">Basic (annual)</div>
              <div className="text-lg font-bold text-text-primary">€15<span className="text-sm font-normal text-text-secondary">/month</span></div>
              <div className="text-xs text-green-400">Save €48/year</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-sm text-text-tertiary mb-1">Pro (annual)</div>
              <div className="text-lg font-bold text-text-primary">€63<span className="text-sm font-normal text-text-secondary">/month</span></div>
              <div className="text-xs text-green-400">Save €192/year</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 text-center">
              <div className="text-sm text-text-tertiary mb-1">Team (annual)</div>
              <div className="text-lg font-bold text-text-primary">€229<span className="text-sm font-normal text-text-secondary">/month</span></div>
              <div className="text-xs text-green-400">Save €600/year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section id="enterprise">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Enterprise</h2>
        
        <div className="bg-gradient-to-br from-bg-secondary to-bg-primary border border-white/10 rounded-xl p-6">
          <p className="text-text-secondary mb-4">
            Need more than 100,000 credits per month? Or want a custom solution with 
            dedicated support, SLA, and SSO? Contact us for Enterprise pricing.
          </p>
          
          <ul className="space-y-2 mb-6">
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Unlimited credits
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Dedicated account manager
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Custom SLA
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              SSO & RBAC
            </li>
            <li className="flex items-center gap-2 text-sm text-text-secondary">
              <Check className="w-4 h-4 text-green-400" />
              Priority API access
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
