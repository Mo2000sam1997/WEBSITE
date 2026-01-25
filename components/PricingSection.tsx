"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { App } from "@/types/app";

interface PricingSectionProps {
  app: App;
}

export default function PricingSection({ app }: PricingSectionProps) {
  return (
    <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="card text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-text-primary mb-8">{app.name} Pricing</h2>
          
          <div className="text-4xl font-bold text-accent-primary mb-4">{app.pricing}</div>
          
          <div className="space-y-4 mb-8 text-text-secondary">
            <div className="flex items-center justify-center gap-2">
              <span>💳</span>
              <span>Monthly subscription</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🎁</span>
              <span>Free tier available</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📊</span>
              <span>Available on {app.pricingTier} tiers</span>
            </div>
          </div>

          <p className="text-text-tertiary mb-8">
            Transparent pricing. No hidden fees. Cancel anytime.
          </p>

          <Link href={`/apps/${app.slug}/use`} className="btn-primary inline-block">
            Start for Free
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
