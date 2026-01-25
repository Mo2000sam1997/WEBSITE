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
    description: "For anyone exploring the power of AI",
    monthlyPrice: 0,
    yearlyPrice: 0,
    icon: Gift,
    color: "#4edc96", // green
    popular: false,
    credits: "750",
    features: [
      "750 credits / month",
      "Standard Apps (Chat + Image Models)",
      "15 chat models, 9 image models",
      "~93 GPT-5 chats or ~150 images",
      "Community support",
    ],
    cta: "Start for Free",
    href: "/signup",
  },
  {
    name: "Basic",
    description: "For hobbyists and side projects",
    monthlyPrice: 19,
    yearlyPrice: 15,
    icon: Zap,
    color: "#77bdf8", // blue
    popular: false,
    credits: "5,000",
    features: [
      "5,000 credits / month",
      "Standard Apps + Premium Apps",
      "CleanShot, Adshot, 3D Studio",
      "~625 GPT-5 chats or ~111 Flux Pro",
      "Email support",
      "Credits rollover",
    ],
    cta: "Get Started",
    href: "/signup?plan=basic",
  },
  {
    name: "Pro",
    description: "For professionals and freelancers",
    monthlyPrice: 79,
    yearlyPrice: 65,
    icon: Crown,
    color: "#fc85d7", // pink
    popular: true,
    credits: "25,000",
    features: [
      "25,000 credits / month",
      "All Standard + Premium Apps",
      "~3,125 GPT-5 chats or ~555 Flux Pro",
      "Priority support",
      "Credits rollover",
      "API access",
    ],
    cta: "Get Started",
    href: "/signup?plan=pro",
  },
  {
    name: "Team",
    description: "For teams and agencies",
    monthlyPrice: 279,
    yearlyPrice: 229,
    icon: Rocket,
    color: "#00d9ff", // cyan
    popular: false,
    credits: "100,000",
    features: [
      "100,000 credits / month",
      "Everything in Pro",
      "Up to 10 team members",
      "Analytics dashboard",
      "Dedicated support",
    ],
    cta: "Get Started",
    href: "/signup?plan=team",
  },
  {
    name: "Enterprise",
    description: "For companies deploying at scale",
    monthlyPrice: null,
    yearlyPrice: null,
    icon: Building2,
    color: "#a0a0a0", // gray
    popular: false,
    isEnterprise: true,
    credits: "Custom",
    features: [
      "Unlimited credits",
      "Everything in Team",
      "Unlimited team members",
      "Dedicated account manager",
      "Custom SLA",
      "SSO & RBAC",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const faqs = [
  {
    question: "What is a credit?",
    answer: "1 credit = 1 message with budget models (Llama, GPT-5 Nano, Gemini Flash). Premium models like GPT-5 Chat cost 8 credits, Claude Sonnet 14 credits. Images range from 5-75 credits depending on the model.",
  },
  {
    question: "What are Standard vs Premium Apps?",
    answer: "Standard Apps include Chat Models (15 AI models) and Image Models (9 AI models) - available on all plans. Premium Apps (CleanShot, Adshot, 3D Studio) require Basic or higher.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can upgrade or downgrade at any time. When you upgrade, you get immediate access to Premium Apps. When you downgrade, your current plan stays active until the end of the billing period.",
  },
  {
    question: "Do my unused credits expire?",
    answer: "No! On paid plans, unused credits roll over to the next month as long as your subscription is active.",
  },
  {
    question: "Is there a free trial?",
    answer: "You can start with our free plan (200 credits/month) to try all Standard Apps. No credit card required.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. No questions asked.",
  },
  {
    question: "Can I buy extra credits?",
    answer: "Yes! On paid plans you can top up anytime. 1,000 credits for €5, 5,000 for €20, or 15,000 for €50.",
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
      <section className="pt-32 pb-16 px-4 relative">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              Plans that{" "}
              <span className="gradient-text">scale with you</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Start building today. Grow as your AI Workforce expands.
            </p>
          </motion.div>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 flex items-center justify-center gap-4"
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
            {isYearly && (
              <span className="px-2 py-1 rounded-md bg-success/20 text-success text-xs font-medium">
                Save 20%
              </span>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 flex flex-col ${
                  plan.isEnterprise
                    ? "bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] border border-white/10"
                    : plan.popular
                    ? "bg-gradient-to-br from-bg-secondary to-bg-primary border-2 border-accent-primary"
                    : "bg-bg-secondary border border-white/10"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 rounded-full bg-accent-primary text-black text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${plan.color}20` }}
                >
                  <plan.icon className="w-6 h-6" style={{ color: plan.color }} />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-bold text-text-primary mb-1">{plan.name}</h3>
                <p className="text-sm text-text-secondary mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-4">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold text-text-primary">
                          €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-text-secondary text-sm">/month</span>
                      </div>
                      {isYearly && plan.monthlyPrice > 0 && (
                        <p className="text-xs text-text-tertiary mt-1">
                          Billed €{(plan.yearlyPrice || 0) * 12}/year
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-2xl font-bold text-text-primary">
                      Custom
                    </div>
                  )}
                </div>

                {/* Credits */}
                <div className="mb-4 py-2 px-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-xs text-text-secondary">Credits</div>
                  <div className="text-lg font-semibold text-text-primary">{plan.credits}<span className="text-sm font-normal text-text-secondary"> / month</span></div>
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.href}
                  className={`block w-full py-3 rounded-lg text-center font-medium transition-all duration-300 mb-4 ${
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
                <ul className="space-y-3 mt-auto">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: plan.color }} />
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
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-text-secondary">
              Can&apos;t find the answer here? Contact our support team.
            </p>
          </motion.div>

          <div className="space-y-4">
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
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-bg-secondary hover:bg-bg-tertiary transition-colors"
                >
                  <span className="font-medium text-text-primary">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-text-secondary"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <p className="px-6 py-4 text-text-secondary bg-bg-secondary border-t border-white/5">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
              Start building today and discover the power of AI for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 rounded-lg bg-accent-primary text-black font-medium hover:bg-accent-primary/90 transition-all duration-300"
              >
                Start for Free
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 rounded-lg bg-white/10 text-text-primary font-medium hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
