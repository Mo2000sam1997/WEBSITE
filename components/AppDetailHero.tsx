"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { App } from "@/types/app";

interface AppDetailHeroProps {
  app: App;
}

export default function AppDetailHero({ app }: AppDetailHeroProps) {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">{app.name}</h1>
            <p className="text-xl text-text-secondary mb-6">{app.description}</p>
            <p className="text-text-secondary mb-8">
              Transform amateur photos into professional product images. 5 views in 30 seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href={`/apps/${app.slug}/use`} className="btn-primary">
                Use for Free
              </Link>
              <Link href="#pricing" className="btn-secondary">
                See Pricing →
              </Link>
            </div>

            <div className="flex items-center gap-4 text-text-secondary">
              <span>⭐⭐⭐⭐⭐ 4.8/5</span>
              <span>·</span>
              <span>1,200 users</span>
            </div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-96 rounded-xl overflow-hidden bg-bg-tertiary"
          >
            {app.heroImage ? (
              <Image src={app.heroImage} alt={app.name} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-text-tertiary">
                {app.name}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
