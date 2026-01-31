"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Crown, Rocket, Gift } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingBlocks from "@/components/FloatingBlocks";

const plans = [
  {
    name: "Free",
    description: "Try the platform",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Gift,
    color: "#22C55E",
    popular: false,
    credits: "150",
    features: [
      "150 credits to start",
      "Access to all apps",
      "All AI models",
      "No credit card required",
    ],
    cta: "Get Started",
    href: "/signup",
  },
  {
    name: "Starter",
    description: "For personal projects",
    monthlyPrice: 9,
    yearlyPrice: 7,
    icon: Zap,
    color: "#3B82F6",
    popular: false,
    credits: "1,500",
    features: [
      "1,500 credits / month",
      "Access to all apps",
      "All AI models",
      "Credits rollover (90 days)",
    ],
    cta: "Subscribe",
    href: "/signup?plan=starter",
  },
  {
    name: "Pro",
    description: "For creators & professionals",
    monthlyPrice: 29,
    yearlyPrice: 24,
    icon: Crown,
    color: "#EC4899",
    popular: true,
    credits: "6,000",
    features: [
      "6,000 credits / month",
      "Access to all apps",
      "All AI models",
      "Credits rollover (90 days)",
      "Priority generation",
    ],
    cta: "Subscribe",
    href: "/signup?plan=pro",
  },
  {
    name: "Business",
    description: "For teams & agencies",
    monthlyPrice: 99,
    yearlyPrice: 79,
    icon: Rocket,
    color: "#8B5CF6",
    popular: false,
    credits: "25,000",
    features: [
      "25,000 credits / month",
      "Access to all apps",
      "All AI models",
      "Credits rollover (90 days)",
      "Priority generation",
      "Team members (up to 5)",
    ],
    cta: "Subscribe",
    href: "/signup?plan=business",
  },
  {
    name: "Enterprise",
    description: "Custom solutions",
    monthlyPrice: null,
    yearlyPrice: null,
    icon: Building2,
    color: "#a0a0a0",
    popular: false,
    isEnterprise: true,
    credits: "Custom",
    features: [
      "Volume discounts",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "SSO & security",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const faqs = [
  {
    question: "What is a credit?",
    answer: "Credits are the currency you use on Mindhello. Every action costs credits - from chat messages to image generation. Simple models cost less, powerful models cost more.",
  },
  {
    question: "Can I access all apps on the free plan?",
    answer: "Yes! All apps and AI models are available on every plan. You just pay with credits for what you use.",
  },
  {
    question: "Do credits expire?",
    answer: "Monthly credits roll over for 90 days on paid plans. Credit pack purchases are valid for 90 days from purchase.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, cancel anytime. Your credits remain valid for 90 days after cancellation.",
  },
];

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-bg-primary noise-overlay">
      <FloatingBlocks intensity="subtle" />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Simple pricing
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto">
              Pay for what you use. All apps included on every plan.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <span className={`text-sm font-medium ${!isYearly ? "text-text-primary" : "text-text-secondary"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-white/10 border border-white/20 transition-colors"
            >
              <motion.div
                animate={{ x: isYearly ? 26 : 2 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-5 h-5 rounded-full bg-accent-primary"
              />
            </button>
            <span className={`text-sm font-medium ${isYearly ? "text-text-primary" : "text-text-secondary"}`}>
              Annual
            </span>
            <span className={`px-2 py-1 rounded-md text-xs font-medium transition-all ${isYearly ? "bg-green-500/20 text-green-400" : "bg-white/10 text-text-secondary"}`}>
              Save 20%
            </span>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-5 flex flex-col ${
                  plan.isEnterprise
                    ? "bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10"
                    : plan.popular
                    ? "bg-gradient-to-br from-bg-secondary to-bg-primary border-2 border-accent-primary"
                    : "bg-bg-secondary border border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-accent-primary text-black text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${plan.color}20` }}
                  >
                    <plan.icon className="w-5 h-5" style={{ color: plan.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-text-primary">{plan.name}</h3>
                  <p className="text-xs text-text-tertiary">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-4">
                  {plan.monthlyPrice !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold text-text-primary">
                        €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-text-secondary text-sm">/mo</span>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold text-text-primary">Custom</div>
                  )}
                </div>

                {/* Credits badge */}
                <div className="mb-4 py-2 px-3 rounded-lg bg-white/5 border border-white/10">
                  <span className="text-sm font-semibold text-text-primary">{plan.credits} credits</span>
                  {plan.monthlyPrice !== null && plan.monthlyPrice > 0 && (
                    <span className="text-xs text-text-tertiary"> / month</span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.href}
                  className={`block w-full py-2.5 rounded-lg text-center text-sm font-medium transition-all duration-300 mb-4 ${
                    plan.popular
                      ? "bg-accent-primary text-black hover:bg-accent-primary/90"
                      : plan.isEnterprise
                      ? "bg-white/10 text-text-primary hover:bg-white/20 border border-white/20"
                      : "bg-white text-black hover:bg-white/90"
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features */}
                <ul className="space-y-2 mt-auto">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl font-bold text-text-primary mb-2">FAQ</h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left bg-bg-secondary hover:bg-bg-tertiary transition-colors"
                >
                  <span className="font-medium text-sm text-text-primary">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-text-secondary"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? "auto" : 0,
                    opacity: openFaq === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 py-4 text-sm text-text-secondary bg-bg-secondary border-t border-white/5">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text-primary mb-3">
              Start creating today
            </h2>
            <p className="text-text-secondary mb-6">
              Get 150 free credits. No credit card required.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-3 rounded-lg bg-accent-primary text-black font-medium hover:bg-accent-primary/90 transition-all"
            >
              Get Started Free
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
