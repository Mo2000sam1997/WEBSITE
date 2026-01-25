"use client";

import DocsLayout from "@/components/DocsLayout";
import Link from "next/link";
import { Zap, AlertCircle } from "lucide-react";

const topUpOptions = [
  { credits: "1,000", price: "€5", perThousand: "€5.00" },
  { credits: "5,000", price: "€20", perThousand: "€4.00", popular: true },
  { credits: "15,000", price: "€50", perThousand: "€3.33", best: true },
];

export default function TopUpPage() {
  return (
    <DocsLayout
      title="Top-Up Credits"
      description="Buy extra credits when you need them. Only available for paid plans."
      tableOfContents={[
        { title: "Overview", href: "#overview" },
        { title: "Options", href: "#options" },
        { title: "How it works", href: "#how-it-works" },
        { title: "FAQ", href: "#faq" },
      ]}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Overview</h2>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
            <Zap className="w-7 h-7 text-yellow-400" />
          </div>
          <div>
            <p className="text-text-secondary">
              Running low on monthly credits? With Top-Up, you can buy extra credits whenever you need them. 
              Perfect for busy periods or large projects.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-purple-200">
              <strong>Note:</strong> Top-Up is only available for paid plans (Basic, Pro, Team). 
              Free users need to upgrade first.
            </p>
          </div>
        </div>
      </section>

      {/* Options */}
      <section id="options" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Top-Up options</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          {topUpOptions.map((option) => (
            <div 
              key={option.credits} 
              className={`p-6 rounded-xl border transition-all ${
                option.best 
                  ? "bg-gradient-to-br from-accent-primary/20 to-purple-500/20 border-accent-primary/50" 
                  : "bg-bg-secondary border-white/10"
              }`}
            >
              {option.best && (
                <div className="text-xs font-medium text-accent-primary mb-2">BEST VALUE</div>
              )}
              {option.popular && (
                <div className="text-xs font-medium text-blue-400 mb-2">POPULAR</div>
              )}
              <div className="text-3xl font-bold text-text-primary mb-1">{option.credits}</div>
              <div className="text-sm text-text-secondary mb-4">credits</div>
              <div className="text-2xl font-bold text-accent-primary mb-1">{option.price}</div>
              <div className="text-xs text-text-tertiary">{option.perThousand} per 1,000 credits</div>
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
          <p className="text-sm text-green-200">
            <strong>Tip:</strong> Buy 15,000 credits for the best price per credit. 
            You save 33% compared to the smallest option.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="mb-12">
        <h2 className="text-xl font-semibold text-text-primary mb-4">How it works</h2>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">1</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Go to your dashboard</h4>
              <p className="text-sm text-text-secondary">
                Click on your credit balance or go to Account &gt; Billing.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">2</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Choose your Top-Up</h4>
              <p className="text-sm text-text-secondary">
                Select 1,000, 5,000, or 15,000 credits.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">3</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Pay</h4>
              <p className="text-sm text-text-secondary">
                Pay using the same method as your subscription (Stripe).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center font-bold flex-shrink-0">4</div>
            <div>
              <h4 className="font-medium text-text-primary mb-1">Instantly available</h4>
              <p className="text-sm text-text-secondary">
                Your credits are added to your balance immediately.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-bg-secondary border border-white/10 rounded-xl p-6">
          <div className="aspect-video rounded-lg bg-white/5 flex items-center justify-center text-text-tertiary">
            [Screenshot: Top-Up interface in dashboard]
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <h2 className="text-xl font-semibold text-text-primary mb-4">Frequently asked questions</h2>
        
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Do Top-Up credits expire?</h4>
            <p className="text-sm text-text-secondary">
              No, Top-Up credits never expire. They&apos;re added to your balance and 
              stay available until you use them.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Are Top-Up credits used first?</h4>
            <p className="text-sm text-text-secondary">
              No, your monthly credits are used first. Top-Up credits are only 
              used when your monthly credits run out.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Can I get a refund on Top-Up credits?</h4>
            <p className="text-sm text-text-secondary">
              Top-Up purchases are non-refundable. Make sure you buy the right 
              amount for your needs.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-bg-secondary border border-white/10">
            <h4 className="font-medium text-text-primary mb-2">Is there a limit?</h4>
            <p className="text-sm text-text-secondary">
              You can purchase up to 100,000 Top-Up credits per month. Contact us 
              for Enterprise if you need more.
            </p>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <Link href="/pricing" className="group p-4 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-all">
            <h4 className="font-medium text-text-primary group-hover:text-accent-primary mb-1">Upgrade your plan</h4>
            <p className="text-sm text-text-secondary">Need more monthly credits? Consider an upgrade.</p>
          </Link>
          <Link href="/contact" className="group p-4 rounded-xl border border-white/10 hover:border-accent-primary/30 transition-all">
            <h4 className="font-medium text-text-primary group-hover:text-accent-primary mb-1">Need help?</h4>
            <p className="text-sm text-text-secondary">Contact our support team.</p>
          </Link>
        </div>
      </section>
    </DocsLayout>
  );
}
