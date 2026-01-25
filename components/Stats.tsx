"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "10M+", label: "AI outputs generated" },
    { value: "500K+", label: "Active users" },
    { value: "€200K+", label: "Saved vs subscriptions" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-primary">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-text-primary mb-1">{stat.value}</div>
              <div className="text-xs text-text-tertiary">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
