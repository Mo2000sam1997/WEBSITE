"use client";

import { motion } from "framer-motion";
import { App } from "@/types/app";

interface HowItWorksSectionProps {
  app: App;
}

const steps = [
  { number: "1", title: "Upload", description: "Upload your photos" },
  { number: "2", title: "Select", description: "Select views" },
  { number: "3", title: "Wait", description: "Wait 30s" },
  { number: "4", title: "Result", description: "Get 5 images" },
];

export default function HowItWorksSection({ app }: HowItWorksSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #00d9ff 0%, #7c3aed 100%)' }}>
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">{step.title}</h3>
              <p className="text-text-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
