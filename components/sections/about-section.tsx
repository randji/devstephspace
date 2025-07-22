"use client"

import { motion } from "framer-motion"
import { AnimatedSection } from "@/components/ui/animated-section"
import type { SiteConfig } from "@/app/types"

interface AboutSectionProps {
  config: SiteConfig
}

export function AboutSection({ config }: AboutSectionProps) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <div className="w-32 h-32 mx-auto mb-8 relative">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full bg-stone-800 rounded-full flex items-center justify-center shadow-2xl"
            >
              <span className="text-white text-4xl font-bold">S</span>
            </motion.div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6">{config.name}</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">{config.description}</p>
        </AnimatedSection>
      </div>
    </section>
  )
}
