"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { App } from "@/types/app";

interface FAQProps {
  app: App;
}

const defaultFAQs = [
  {
    question: "What file formats are supported?",
    answer: "JPG, PNG, HEIC (max 10MB)",
  },
  {
    question: "How long does it take?",
    answer: "30 seconds for 5 views",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription anytime. No questions asked.",
  },
];

export default function FAQ({ app }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {defaultFAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="card cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary">{faq.question}</h3>
                <span className="text-text-secondary text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="mt-4 text-text-secondary">{faq.answer}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
