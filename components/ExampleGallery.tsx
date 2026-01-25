"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { App } from "@/types/app";

interface ExampleGalleryProps {
  app: App;
}

export default function ExampleGallery({ app }: ExampleGalleryProps) {
  // Placeholder images if screenshots not available
  const images = app.screenshots && app.screenshots.length > 0 
    ? app.screenshots 
    : [app.thumbnail, app.heroImage].filter(Boolean);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-text-primary mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Example Outputs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative w-full aspect-square rounded-xl overflow-hidden bg-bg-tertiary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Image
                src={image}
                alt={`${app.name} example ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
